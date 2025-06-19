export interface Lesson {
  id: string;
  title: string;
  category: LessonCategory;
  difficulty: Difficulty;
  content: string;
  description: string;
  language: 'english' | 'punjabi';
}

export enum LessonCategory {
  HOME_ROW = 'Home Row',
  WORDS = 'Words',
  SENTENCES = 'Sentences',
  PARAGRAPHS = 'Paragraphs'
}

export enum Difficulty {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced'
}

export interface TypingStats {
  wpm: number;
  accuracy: number;
  errors: number;
  timeElapsed: number;
}

export interface UserProgress {
  completedLessons: string[];
  lessonStats: Record<string, TypingStats>;
  lastLesson?: string;
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}