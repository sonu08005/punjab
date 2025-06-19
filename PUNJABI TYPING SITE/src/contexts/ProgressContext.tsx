import React, { createContext, useState, useEffect, useContext } from 'react';
import { UserProgress, TypingStats } from '../types';
import { getProgress, saveLessonCompletion } from '../utils/localStorage';

interface ProgressContextType {
  userProgress: UserProgress;
  addCompletedLesson: (lessonId: string, stats: TypingStats) => void;
  getStatsForLesson: (lessonId: string) => TypingStats | undefined;
  isLessonCompleted: (lessonId: string) => boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedLessons: [],
    lessonStats: {}
  });

  useEffect(() => {
    // Load user progress from localStorage on component mount
    setUserProgress(getProgress());
  }, []);

  const addCompletedLesson = (lessonId: string, stats: TypingStats) => {
    saveLessonCompletion(lessonId, stats);
    setUserProgress(getProgress());
  };

  const getStatsForLesson = (lessonId: string): TypingStats | undefined => {
    return userProgress.lessonStats[lessonId];
  };

  const isLessonCompleted = (lessonId: string): boolean => {
    return userProgress.completedLessons.includes(lessonId);
  };

  return (
    <ProgressContext.Provider
      value={{
        userProgress,
        addCompletedLesson,
        getStatsForLesson,
        isLessonCompleted
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};