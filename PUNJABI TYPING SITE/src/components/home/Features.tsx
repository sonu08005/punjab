import React from 'react';
import { Keyboard, BarChart, BookOpen, Monitor } from 'lucide-react';

const features = [
  {
    title: 'Interactive Raavi Keyboard',
    description: 'Practice with a virtual Raavi keyboard that highlights keys as you type, helping you learn proper finger positioning.',
    icon: <Keyboard className="h-6 w-6 text-blue-600" />
  },
  {
    title: 'Structured Lessons',
    description: 'Progress through carefully designed lessons from basic home row keys to advanced paragraph typing in Punjabi.',
    icon: <BookOpen className="h-6 w-6 text-purple-600" />
  },
  {
    title: 'Real-time Feedback',
    description: 'Get instant feedback on your typing with highlighting for correct and incorrect characters as you type.',
    icon: <Monitor className="h-6 w-6 text-green-600" />
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your improvement with detailed statistics on typing speed, accuracy, and lesson completion.',
    icon: <BarChart className="h-6 w-6 text-red-600" />
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Features
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Everything you need to master typing in the Raavi Punjabi font
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;