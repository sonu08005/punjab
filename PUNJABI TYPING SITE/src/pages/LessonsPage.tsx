import React from 'react';
import LessonsList from '../components/lessons/LessonsList';
import { lessons } from '../data/lessons';

const LessonsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Raavi Typing Lessons
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Browse our structured lessons designed to help you master Punjabi typing with the Raavi font.
        </p>
      </div>
      
      <LessonsList lessons={lessons} />
    </div>
  );
};

export default LessonsPage;