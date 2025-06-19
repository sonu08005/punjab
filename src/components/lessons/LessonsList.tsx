import React, { useState } from 'react';
import { Lesson, LessonCategory, Difficulty } from '../../types';
import LessonCard from './LessonCard';
import LessonFilters from './LessonFilters';
import { useAuth } from '../../contexts/AuthContext';

interface LessonsListProps {
  lessons: Lesson[];
}

const LessonsList: React.FC<LessonsListProps> = ({ lessons }) => {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<LessonCategory | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'punjabi' | null>(null);
  
  // Define which lessons are free (first 3 lessons)
  const freeLessonIds = lessons.slice(0, 3).map(lesson => lesson.id);
  
  const filteredLessons = lessons.filter(lesson => {
    const matchesCategory = selectedCategory ? lesson.category === selectedCategory : true;
    const matchesDifficulty = selectedDifficulty ? lesson.difficulty === selectedDifficulty : true;
    const matchesLanguage = selectedLanguage ? lesson.language === selectedLanguage : true;
    return matchesCategory && matchesDifficulty && matchesLanguage;
  });

  const isLessonLocked = (lesson: Lesson): boolean => {
    // If user is authenticated, no lessons are locked
    if (user) return false;
    
    // If user is not authenticated, only first 3 lessons are free
    return !freeLessonIds.includes(lesson.id);
  };

  return (
    <div>
      <LessonFilters
        selectedCategory={selectedCategory}
        selectedDifficulty={selectedDifficulty}
        selectedLanguage={selectedLanguage}
        onCategoryChange={setSelectedCategory}
        onDifficultyChange={setSelectedDifficulty}
        onLanguageChange={setSelectedLanguage}
      />
      
      {!user && (
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            <strong>Free Trial:</strong> You can access the first 3 lessons for free. 
            Sign up to unlock all lessons and track your progress!
          </p>
        </div>
      )}
      
      {filteredLessons.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400">
            No lessons found with the selected filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map(lesson => (
            <LessonCard 
              key={lesson.id} 
              lesson={lesson} 
              isLocked={isLessonLocked(lesson)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LessonsList;