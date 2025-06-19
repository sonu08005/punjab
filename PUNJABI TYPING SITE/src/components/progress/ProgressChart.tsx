import React, { useMemo } from 'react';
import { UserProgress, LessonCategory, Difficulty } from '../../types';
import { lessons } from '../../data/lessons';
import Card, { CardHeader, CardContent } from '../ui/Card';

interface ProgressChartProps {
  userProgress: UserProgress;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ userProgress }) => {
  const stats = useMemo(() => {
    // Calculate completion stats
    const totalLessons = lessons.length;
    const completedLessons = userProgress.completedLessons.length;
    const completionPercentage = Math.round((completedLessons / totalLessons) * 100);
    
    // Calculate category completion
    const categories = Object.values(LessonCategory);
    const categoryStats = categories.map(category => {
      const categoryLessons = lessons.filter(lesson => lesson.category === category);
      const completedCategoryLessons = categoryLessons.filter(
        lesson => userProgress.completedLessons.includes(lesson.id)
      );
      
      return {
        category,
        total: categoryLessons.length,
        completed: completedCategoryLessons.length,
        percentage: Math.round((completedCategoryLessons.length / categoryLessons.length) * 100)
      };
    });
    
    // Calculate difficulty completion
    const difficulties = Object.values(Difficulty);
    const difficultyStats = difficulties.map(difficulty => {
      const difficultyLessons = lessons.filter(lesson => lesson.difficulty === difficulty);
      const completedDifficultyLessons = difficultyLessons.filter(
        lesson => userProgress.completedLessons.includes(lesson.id)
      );
      
      return {
        difficulty,
        total: difficultyLessons.length,
        completed: completedDifficultyLessons.length,
        percentage: Math.round((completedDifficultyLessons.length / difficultyLessons.length) * 100)
      };
    });
    
    // Calculate average WPM and accuracy
    const lessonStats = Object.values(userProgress.lessonStats);
    const averageWpm = lessonStats.length
      ? Math.round(lessonStats.reduce((sum, stat) => sum + stat.wpm, 0) / lessonStats.length)
      : 0;
    
    const averageAccuracy = lessonStats.length
      ? Math.round(lessonStats.reduce((sum, stat) => sum + stat.accuracy, 0) / lessonStats.length)
      : 0;
    
    return {
      totalLessons,
      completedLessons,
      completionPercentage,
      categoryStats,
      difficultyStats,
      averageWpm,
      averageAccuracy
    };
  }, [userProgress]);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Overall Progress
          </h2>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {stats.completedLessons} / {stats.totalLessons}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Average WPM</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {stats.averageWpm}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Average Accuracy</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                {stats.averageAccuracy}%
              </p>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: `${stats.completionPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-right">
            {stats.completionPercentage}% Complete
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Progress by Category
          </h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stats.categoryStats.map(categoryStat => (
              <div key={categoryStat.category}>
                <div className="flex justify-between mb-1">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {categoryStat.category}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {categoryStat.completed} / {categoryStat.total}
                  </p>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-purple-600 h-3 rounded-full"
                    style={{ width: `${categoryStat.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Progress by Difficulty
          </h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stats.difficultyStats.map(difficultyStat => (
              <div key={difficultyStat.difficulty}>
                <div className="flex justify-between mb-1">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {difficultyStat.difficulty}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {difficultyStat.completed} / {difficultyStat.total}
                  </p>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${
                      difficultyStat.difficulty === 'Beginner'
                        ? 'bg-green-500'
                        : difficultyStat.difficulty === 'Intermediate'
                        ? 'bg-blue-500'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${difficultyStat.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressChart;