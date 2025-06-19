import React from 'react';
import { Difficulty, LessonCategory } from '../../types';
import Button from '../ui/Button';

interface LessonFiltersProps {
  selectedCategory: LessonCategory | null;
  selectedDifficulty: Difficulty | null;
  selectedLanguage: 'english' | 'punjabi' | null;
  onCategoryChange: (category: LessonCategory | null) => void;
  onDifficultyChange: (difficulty: Difficulty | null) => void;
  onLanguageChange: (language: 'english' | 'punjabi' | null) => void;
}

const LessonFilters: React.FC<LessonFiltersProps> = ({
  selectedCategory,
  selectedDifficulty,
  selectedLanguage,
  onCategoryChange,
  onDifficultyChange,
  onLanguageChange
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Select Language
        </h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedLanguage === null ? 'primary' : 'outline'}
            size="sm"
            onClick={() => onLanguageChange(null)}
          >
            All
          </Button>
          <Button
            variant={selectedLanguage === 'english' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => onLanguageChange('english')}
          >
            English
          </Button>
          <Button
            variant={selectedLanguage === 'punjabi' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => onLanguageChange('punjabi')}
          >
            Punjabi
          </Button>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Filter by Category
        </h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? 'primary' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange(null)}
          >
            All
          </Button>
          
          {Object.values(LessonCategory).map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'outline'}
              size="sm"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Filter by Difficulty
        </h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedDifficulty === null ? 'primary' : 'outline'}
            size="sm"
            onClick={() => onDifficultyChange(null)}
          >
            All
          </Button>
          
          {Object.values(Difficulty).map(difficulty => (
            <Button
              key={difficulty}
              variant={selectedDifficulty === difficulty ? 'primary' : 'outline'}
              size="sm"
              onClick={() => onDifficultyChange(difficulty)}
            >
              {difficulty}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonFilters;