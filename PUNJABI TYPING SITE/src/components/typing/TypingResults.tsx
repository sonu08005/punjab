import React from 'react';
import { TypingStats } from '../../types';
import Card, { CardHeader, CardContent } from '../ui/Card';
import { Trophy, Zap, Clock, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

interface TypingResultsProps {
  stats: TypingStats;
  onNextLesson?: () => void;
  onRetry?: () => void;
}

const TypingResults: React.FC<TypingResultsProps> = ({
  stats,
  onNextLesson,
  onRetry
}) => {
  const { wpm, accuracy, errors, timeElapsed } = stats;
  
  // Performance feedback based on WPM and accuracy
  const getPerformanceFeedback = () => {
    if (wpm >= 40 && accuracy >= 95) {
      return {
        message: "Excellent work! You're becoming a Raavi typing expert!",
        class: 'text-green-600 dark:text-green-400'
      };
    } else if (wpm >= 25 && accuracy >= 90) {
      return {
        message: "Great job! Your Raavi typing skills are improving nicely.",
        class: 'text-blue-600 dark:text-blue-400'
      };
    } else if (wpm >= 15 && accuracy >= 80) {
      return {
        message: "Good progress! Keep practicing to improve your speed and accuracy.",
        class: 'text-yellow-600 dark:text-yellow-400'
      };
    } else {
      return {
        message: "Good start! Regular practice will help you improve quickly.",
        class: 'text-orange-600 dark:text-orange-400'
      };
    }
  };
  
  const feedback = getPerformanceFeedback();
  
  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
          <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
          Typing Results
        </h2>
      </CardHeader>
      
      <CardContent>
        <p className={`text-lg font-medium mb-6 ${feedback.class}`}>
          {feedback.message}
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Zap className="w-5 h-5 mr-2 text-blue-500" />
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Typing Speed
              </h3>
            </div>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {wpm} <span className="text-sm font-normal">WPM</span>
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <AlertCircle className="w-5 h-5 mr-2 text-green-500" />
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Accuracy
              </h3>
            </div>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {accuracy}%
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <AlertCircle className="w-5 h-5 mr-2 text-red-500" />
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Errors
              </h3>
            </div>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {errors}
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Clock className="w-5 h-5 mr-2 text-purple-500" />
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Time
              </h3>
            </div>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              {timeElapsed} <span className="text-sm font-normal">seconds</span>
            </p>
          </div>
        </div>
        
        <div className="flex justify-between">
          {onRetry && (
            <Button onClick={onRetry} variant="outline">
              Try Again
            </Button>
          )}
          
          {onNextLesson && (
            <Button onClick={onNextLesson}>
              Next Lesson
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TypingResults;