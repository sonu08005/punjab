import { UserProgress, TypingStats } from '../types';

const PROGRESS_KEY = 'raavi_typing_progress';
const THEME_KEY = 'raavi_theme_preference';

export const saveProgress = (progress: UserProgress): void => {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
};

export const getProgress = (): UserProgress => {
  const savedProgress = localStorage.getItem(PROGRESS_KEY);
  if (savedProgress) {
    return JSON.parse(savedProgress);
  }
  return {
    completedLessons: [],
    lessonStats: {}
  };
};

export const saveLessonCompletion = (lessonId: string, stats: TypingStats): void => {
  const progress = getProgress();
  
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
  }
  
  progress.lessonStats[lessonId] = stats;
  progress.lastLesson = lessonId;
  
  saveProgress(progress);
};

export const isDarkModeEnabled = (): boolean => {
  const theme = localStorage.getItem(THEME_KEY);
  if (theme) {
    return theme === 'dark';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const saveThemePreference = (isDark: boolean): void => {
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
};