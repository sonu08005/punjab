import React from 'react';
import { Link } from 'react-router-dom';
import { Lesson } from '../../types';
import Card, { CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useProgress } from '../../contexts/ProgressContext';

interface LessonCardProps {
  lesson: Lesson;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  const { isLessonCompleted, getStatsForLesson } = useProgress();
  const completed = isLessonCompleted(lesson.id);
  const stats = getStatsForLesson(lesson.id);
  
  const getDifficultyVariant = () => {
    switch (lesson.difficulty) {
      case 'Beginner':
        return 'success';
      case 'Intermediate':
        return 'primary';
      case 'Advanced':
        return 'error';
      default:
        return 'primary';
    }
  };
  
  const getCategoryVariant = () => {
    switch (lesson.category) {
      case 'Home Row':
        return 'success';
      case 'Words':
        return 'primary';
      case 'Sentences':
        return 'secondary';
      case 'Paragraphs':
        return 'error';
      default:
        return 'primary';
    }
  };

  return (
    <Card className="h-full transition-transform duration-200 hover:scale-105">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div className="space-y-1">
            <Badge variant={getDifficultyVariant()}>{lesson.difficulty}</Badge>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              {lesson.title}
            </h3>
          </div>
          
          {completed && (
            <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
          )}
        </div>
        
        <div className="flex gap-2 mb-3">
          <Badge variant={getCategoryVariant()}>
            {lesson.category}
          </Badge>
          <Badge variant={lesson.language === 'english' ? 'primary' : 'secondary'}>
            {lesson.language === 'english' ? 'English' : 'ਪੰਜਾਬੀ'}
          </Badge>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {lesson.description}
        </p>
        
        {completed && stats && (
          <div className="mb-4 text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 p-2 rounded">
            <div className="flex justify-between">
              <span>WPM: {stats.wpm}</span>
              <span>Accuracy: {stats.accuracy}%</span>
            </div>
          </div>
        )}
        
        <Link
          to={`/lesson/${lesson.id}`}
          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          {completed ? 'Practice Again' : 'Start Lesson'}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default LessonCard;