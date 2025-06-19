import React, { useState } from 'react';
import { Lesson, LessonCategory, Difficulty } from '../../types';
import LessonCard from './LessonCard';
import LessonFilters from './LessonFilters';

interface LessonsListProps {
  lessons: Lesson[];
}

const LessonsList: React.FC<LessonsListProps> = ({ lessons }) => {
  const [selectedCategory, setSelectedCategory] = useState<LessonCategory | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'punjabi' | null>(null);
  
  const filteredLessons = lessons.filter(lesson => {
    const matchesCategory = selectedCategory ? lesson.category === selectedCategory : true;
    const matchesDifficulty = selectedDifficulty ? lesson.difficulty === selectedDifficulty : true;
    const matchesLanguage = selectedLanguage ? lesson.language === selectedLanguage : true;
    return matchesCategory && matchesDifficulty && matchesLanguage;
  });

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
      
      {filteredLessons.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-600 dark:text-gray-400">
            No lessons found with the selected filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map(lesson => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LessonsList;