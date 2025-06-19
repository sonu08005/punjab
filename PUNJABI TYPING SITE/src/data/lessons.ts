import { Lesson, LessonCategory, Difficulty } from '../types';

export const lessons: Lesson[] = [
  // English Lessons - Beginner
  {
    id: 'en-home-row-1',
    title: 'English Home Row Keys',
    category: LessonCategory.HOME_ROW,
    difficulty: Difficulty.BEGINNER,
    content: 'asdf jkl;',
    description: 'Learn the basic home row keys in English keyboard layout.',
    language: 'english'
  },
  {
    id: 'en-home-row-2',
    title: 'English Home Row Practice',
    category: LessonCategory.HOME_ROW,
    difficulty: Difficulty.BEGINNER,
    content: 'asdfjkl; ;lkfdsa asdf jkl; fjdk slak',
    description: 'Practice typing English home row keys continuously.',
    language: 'english'
  },
  {
    id: 'en-words-1',
    title: 'Common English Words',
    category: LessonCategory.WORDS,
    difficulty: Difficulty.BEGINNER,
    content: 'the and you that was for are with his they',
    description: 'Practice typing common English words.',
    language: 'english'
  },
  {
    id: 'en-words-2',
    title: 'More English Words',
    category: LessonCategory.WORDS,
    difficulty: Difficulty.BEGINNER,
    content: 'have this from one had word but what some would',
    description: 'Continue practicing more English words.',
    language: 'english'
  },
  {
    id: 'en-sentences-1',
    title: 'Basic English Sentences',
    category: LessonCategory.SENTENCES,
    difficulty: Difficulty.INTERMEDIATE,
    content: 'The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.',
    description: 'Practice typing simple English sentences with pangrams.',
    language: 'english'
  },
  {
    id: 'en-sentences-2',
    title: 'English Sentences Practice',
    category: LessonCategory.SENTENCES,
    difficulty: Difficulty.INTERMEDIATE,
    content: 'How vexingly quick daft zebras jump! The five boxing wizards jump quickly. Sphinx of black quartz, judge my vow.',
    description: 'Practice typing more complex English sentences and pangrams.',
    language: 'english'
  },
  {
    id: 'en-paragraph-1',
    title: 'English Paragraph',
    category: LessonCategory.PARAGRAPHS,
    difficulty: Difficulty.ADVANCED,
    content: 'The ability to type quickly and accurately is an essential skill in today\'s digital world. Whether you\'re writing emails, creating documents, or communicating online, efficient typing can save you time and increase your productivity. Regular practice and proper technique are key to improving your typing speed and accuracy.',
    description: 'Practice typing a full paragraph about typing skills.',
    language: 'english'
  },
  {
    id: 'en-paragraph-2',
    title: 'Advanced English Paragraph',
    category: LessonCategory.PARAGRAPHS,
    difficulty: Difficulty.ADVANCED,
    content: 'Learning to touch type is like learning to play a musical instrument. It requires patience, practice, and proper technique. Your fingers need to develop muscle memory for the location of each key. Start slowly and focus on accuracy rather than speed. As you become more comfortable with the keyboard layout, your speed will naturally increase. Remember to maintain good posture and take regular breaks to prevent strain.',
    description: 'Practice typing an advanced paragraph about touch typing.',
    language: 'english'
  },
  
  // Punjabi Lessons (existing lessons)
  {
    id: 'home-row-1',
    title: 'Home Row Basics',
    category: LessonCategory.HOME_ROW,
    difficulty: Difficulty.BEGINNER,
    content: 'ਅ ਸ ਦ ਫ ਗ ਹ ਜ ਕ ਲ',
    description: 'Learn the basic home row keys in Punjabi Raavi keyboard layout.',
    language: 'punjabi'
  },
  {
    id: 'home-row-2',
    title: 'Home Row Practice',
    category: LessonCategory.HOME_ROW,
    difficulty: Difficulty.BEGINNER,
    content: 'ਅਸਦਫ ਗਹਜਕ ਲਅਸਦ ਫਗਹਜ ਕਲਅਸ',
    description: 'Practice typing home row keys continuously.',
    language: 'punjabi'
  },
  {
    id: 'words-1',
    title: 'Common Words',
    category: LessonCategory.WORDS,
    difficulty: Difficulty.BEGINNER,
    content: 'ਮੈਂ ਤੂੰ ਉਹ ਇਹ ਕੀ ਹੈ ਦਾ ਦੇ ਨੂੰ',
    description: 'Practice typing common Punjabi words.',
    language: 'punjabi'
  },
  {
    id: 'words-2',
    title: 'More Common Words',
    category: LessonCategory.WORDS,
    difficulty: Difficulty.BEGINNER,
    content: 'ਆਪ ਨਾਲ ਵਿਚ ਲਈ ਤੇ ਨਹੀਂ ਹਾਂ ਸੀ',
    description: 'Continue practicing more common Punjabi words.',
    language: 'punjabi'
  },
  {
    id: 'sentences-1',
    title: 'Basic Sentences',
    category: LessonCategory.SENTENCES,
    difficulty: Difficulty.INTERMEDIATE,
    content: 'ਮੈਂ ਪੰਜਾਬੀ ਸਿੱਖ ਰਿਹਾ ਹਾਂ। ਤੁਸੀਂ ਕਿਵੇਂ ਹੋ? ਮੈਨੂੰ ਪੰਜਾਬੀ ਪਸੰਦ ਹੈ।',
    description: 'Practice typing simple Punjabi sentences.',
    language: 'punjabi'
  },
  {
    id: 'sentences-2',
    title: 'Intermediate Sentences',
    category: LessonCategory.SENTENCES,
    difficulty: Difficulty.INTERMEDIATE,
    content: 'ਅੱਜ ਮੌਸਮ ਬਹੁਤ ਵਧੀਆ ਹੈ। ਮੈਂ ਬਾਹਰ ਜਾਣਾ ਚਾਹੁੰਦਾ ਹਾਂ। ਕੀ ਤੁਸੀਂ ਮੇਰੇ ਨਾਲ ਆਉਗੇ?',
    description: 'Practice typing more complex Punjabi sentences.',
    language: 'punjabi'
  },
  {
    id: 'paragraph-1',
    title: 'Simple Paragraph',
    category: LessonCategory.PARAGRAPHS,
    difficulty: Difficulty.ADVANCED,
    content: 'ਪੰਜਾਬੀ ਭਾਰਤ ਅਤੇ ਪਾਕਿਸਤਾਨ ਦੇ ਪੰਜਾਬ ਰਾਜ ਦੀ ਭਾਸ਼ਾ ਹੈ। ਇਹ ਇੰਡੋ-ਆਰੀਅਨ ਭਾਸ਼ਾ ਪਰਿਵਾਰ ਨਾਲ ਸਬੰਧਤ ਹੈ। ਇਸ ਨੂੰ ਗੁਰਮੁਖੀ ਲਿਪੀ ਵਿੱਚ ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ। ਪੰਜਾਬੀ ਦੁਨੀਆ ਦੀ 10ਵੀਂ ਸਭ ਤੋਂ ਵੱਧ ਬੋਲੀ ਜਾਣ ਵਾਲੀ ਭਾਸ਼ਾ ਹੈ।',
    description: 'Practice typing a simple paragraph about Punjabi language.',
    language: 'punjabi'
  },
  {
    id: 'paragraph-2',
    title: 'Advanced Paragraph',
    category: LessonCategory.PARAGRAPHS,
    difficulty: Difficulty.ADVANCED,
    content: 'ਮੈਂ ਹਰ ਰੋਜ਼ ਸਵੇਰੇ ਛੇ ਵਜੇ ਉਠਦਾ ਹਾਂ। ਉਠ ਕੇ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਮੂੰਹ ਧੋ ਲੈਂਦਾ ਹਾਂ ਅਤੇ ਦੰਦ ਸਾਫ਼ ਕਰਦਾ ਹਾਂ। ਉਸ ਤੋਂ ਬਾਅਦ ਮੈਂ ਇੱਕ ਗਲਾਸ ਦੁੱਧ ਪੀਂਦਾ ਹਾਂ। ਫਿਰ ਮੈਂ ਆਪਣਾ ਸਕੂਲ ਬੈਗ ਤਿਆਰ ਕਰਦਾ ਹਾਂ ਅਤੇ ਸਕੂਲ ਜਾਂਦਾ ਹਾਂ। ਮੇਰਾ ਸਕੂਲ ਮੇਰੇ ਘਰ ਤੋਂ ਦਸ ਮਿੰਟ ਦੀ ਦੂਰੀ ਤੇ ਹੈ। ਸਕੂਲ ਵਿੱਚ ਮੈਂ ਆਪਣੇ ਦੋਸਤਾਂ ਨਾਲ ਖੇਡਦਾ ਹਾਂ, ਪੜ੍ਹਾਈ ਕਰਦਾ ਹਾਂ ਅਤੇ ਅਧਿਆਪਕਾਂ ਦੀ ਗੱਲ ਧਿਆਨ ਨਾਲ ਸੁਣਦਾ ਹਾਂ। ਮੈਨੂੰ ਗਣਿਤ ਅਤੇ ਪੰਜਾਬੀ ਵਿਸ਼ਾ ਬਹੁਤ ਪਸੰਦ ਹਨ। ਦੁਪਹਿਰ ਨੂੰ ਘਰ ਆ ਕੇ ਮੈਂ ਖਾਣਾ ਖਾਂਦਾ ਹਾਂ ਅਤੇ ਕੁਝ ਦੇਰ ਲਈ ਆਰਾਮ ਕਰਦਾ ਹਾਂ। ਸ਼ਾਮ ਨੂੰ ਮੈਂ ਮਾਤਾ-ਪਿਤਾ ਦੀ ਸਹਾਇਤਾ ਕਰਦਾ ਹਾਂ ਅਤੇ ਫਿਰ ਘਰ ਦਾ ਕੰਮ ਕਰਦਾ ਹਾਂ। ਰਾਤ ਨੂੰ ਪਰਿਵਾਰ ਦੇ ਨਾਲ ਰੋਟੀ ਖਾਂਦਾ ਹਾਂ ਅਤੇ ਟੀਵੀ ਵੀ ਦੇਖਦਾ ਹਾਂ। ਫਿਰ ਮੈਂ ਆਪਣੀ ਕਿਤਾਬਾਂ ਦੇਖ ਕੇ ਸੁਣਦਾ ਹਾਂ। ਮੈਂ ਹਰ ਰੋਜ਼ ਆਪਣੀ ਪੜ੍ਹਾਈ ਵਿੱਚ ਮਿਹਨਤ ਕਰਦਾ ਹਾਂ ਤਾਂ ਜੋ ਭਵਿੱਖ ਵਿੱਚ ਇੱਕ ਵਧੀਆ ਇਨਸਾਨ ਬਣ ਸਕਾਂ।',
    description: 'Practice typing an advanced paragraph about language.',
    language: 'punjabi'
  }
];

export const getLessonById = (id: string): Lesson | undefined => {
  return lessons.find(lesson => lesson.id === id);
};

export const getLessonsByCategory = (category: LessonCategory): Lesson[] => {
  return lessons.filter(lesson => lesson.category === category);
};

export const getLessonsByDifficulty = (difficulty: Difficulty): Lesson[] => {
  return lessons.filter(lesson => lesson.difficulty === difficulty);
};

export const getLessonsByLanguage = (language: 'english' | 'punjabi'): Lesson[] => {
  return lessons.filter(lesson => lesson.language === language);
};