import { TypingStats } from '../types';

export const calculateWPM = (
  typedCharacters: number,
  timeElapsedInSeconds: number
): number => {
  // Average word length in Punjabi is approximately 5 characters
  const averageWordLength = 5;
  const minutes = timeElapsedInSeconds / 60;
  
  // Avoid division by zero
  if (minutes === 0) return 0;
  
  const words = typedCharacters / averageWordLength;
  return Math.round(words / minutes);
};

export const calculateAccuracy = (
  correctCharacters: number,
  totalCharacters: number
): number => {
  if (totalCharacters === 0) return 100;
  return Math.round((correctCharacters / totalCharacters) * 100);
};

export const compareCharacters = (
  expected: string,
  actual: string
): { correct: boolean; char: string } => {
  return {
    correct: expected === actual,
    char: actual
  };
};

export const getTypingStats = (
  correctChars: number,
  totalChars: number,
  errors: number,
  timeElapsed: number
): TypingStats => {
  return {
    wpm: calculateWPM(correctChars, timeElapsed),
    accuracy: calculateAccuracy(correctChars, totalChars),
    errors,
    timeElapsed
  };
};