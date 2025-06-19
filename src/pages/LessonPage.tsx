import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLessonById, lessons } from '../data/lessons';
import { Lesson, TypingStats } from '../types';
import TypingArea from '../components/typing/TypingArea';
import TypingResults from '../components/typing/TypingResults';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import Card, { CardHeader, CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { useProgress } from '../contexts/ProgressContext';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/ui/Button';
import { ArrowLeft, Lock } from 'lucide-react';

const LessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [lesson, setLesson] = useState<Lesson | undefined>(undefined);
  const [completedStats, setCompletedStats] = useState<TypingStats | undefined>(undefined);
  const { addCompletedLesson } = useProgress();
  
  // Define which lessons are free (first 3 lessons)
  const freeLessonIds = lessons.slice(0, 3).map(lesson => lesson.id);
  
  useEffect(() => {
    if (lessonId) {
      const foundLesson = getLessonById(lessonId);
      setLesson(foundLesson);
    }
  }, [lessonId]);
  
  const handleLessonComplete = (stats: TypingStats) => {
    if (lesson) {
      setCompletedStats(stats);
      addCompletedLesson(lesson.id, stats);
    }
  };
  
  const handleNextLesson = () => {
    if (lesson) {
      const currentIndex = lessons.findIndex(l => l.id === lesson.id);
      if (currentIndex < lessons.length - 1) {
        navigate(`/lesson/${lessons[currentIndex + 1].id}`);
        setCompletedStats(undefined);
      } else {
        // If this was the last lesson, go back to lessons list
        navigate('/lessons');
      }
    }
  };
  
  const handleRetry = () => {
    setCompletedStats(undefined);
  };
  
  if (!lesson) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-gray-600 dark:text-gray-400">Lesson not found.</p>
        <Button variant="outline" className="mt-4" onClick={() => navigate('/lessons')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Lessons
        </Button>
      </div>
    );
  }

  // Check if lesson is locked for non-authenticated users
  const isLessonLocked = !user && !freeLessonIds.includes(lesson.id);
  
  const lessonContent = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Button variant="outline" onClick={() => navigate('/lessons')} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Lessons
        </Button>
        
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {lesson.title}
                {isLessonLocked && <Lock className="inline ml-2 h-6 w-6 text-gray-400" />}
              </h1>
              <div className="flex gap-2">
                <Badge variant="primary">{lesson.category}</Badge>
                <Badge variant={
                  lesson.difficulty === 'Beginner' ? 'success' :
                  lesson.difficulty === 'Intermediate' ? 'primary' : 'error'
                }>
                  {lesson.difficulty}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {lesson.description}
            </p>
          </CardContent>
        </Card>
      </div>
      
      {completedStats ? (
        <TypingResults 
          stats={completedStats} 
          onNextLesson={handleNextLesson}
          onRetry={handleRetry}
        />
      ) : (
        <TypingArea text={lesson.content} onComplete={handleLessonComplete} />
      )}
    </div>
  );

  // If lesson is locked, wrap in ProtectedRoute
  if (isLessonLocked) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button variant="outline" onClick={() => navigate('/lessons')} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Lessons
        </Button>
        
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {lesson.title}
                <Lock className="inline ml-2 h-6 w-6 text-gray-400" />
              </h1>
              <div className="flex gap-2">
                <Badge variant="primary">{lesson.category}</Badge>
                <Badge variant={
                  lesson.difficulty === 'Beginner' ? 'success' :
                  lesson.difficulty === 'Intermediate' ? 'primary' : 'error'
                }>
                  {lesson.difficulty}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {lesson.description}
            </p>
          </CardContent>
        </Card>
        
        <ProtectedRoute>
          {lessonContent}
        </ProtectedRoute>
      </div>
    );
  }
  
  return lessonContent;
};

export default LessonPage;