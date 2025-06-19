import React from 'react';
import ProgressChart from '../components/progress/ProgressChart';
import { useProgress } from '../contexts/ProgressContext';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const ProgressPage: React.FC = () => {
  const { userProgress } = useProgress();
  const navigate = useNavigate();
  
  // Check if user has completed any lessons
  const hasProgress = userProgress.completedLessons.length > 0;
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Your Progress
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Track your Raavi typing journey and see how you're improving.
        </p>
      </div>
      
      {hasProgress ? (
        <ProgressChart userProgress={userProgress} />
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            No Progress Yet
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            You haven't completed any lessons yet. Start learning to see your progress.
          </p>
          <Button onClick={() => navigate('/lessons')}>
            Start Learning
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProgressPage;