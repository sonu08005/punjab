import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Master Punjabi Typing with Raavi Font 
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Learn to type efficiently in Punjabi with interactive lessons, real-time feedback, and progress tracking.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/lessons">
                <Button size="lg" className="font-medium flex items-center">
                  Start Learning <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="font-medium border-white text-white hover:bg-white hover:bg-opacity-10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 transform rotate-2">
              <div className="bg-gray-100 dark:bg-gray-700 rounded p-4 mb-4">
                <p className="font-raavi text-gray-800 dark:text-gray-200 text-lg">
                  ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਵਿੱਚ ਟਾਈਪਿੰਗ ਸਿੱਖੋ
                </p>
              </div>
              <div className="grid grid-cols-10 gap-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-full aspect-square bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center font-bold text-gray-700 dark:text-gray-300"
                  >
                    {String.fromCharCode(0x0A00 + i)}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 transform -rotate-3">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 dark:bg-green-900 rounded-full p-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">42</span>
                </div>
                <p className="text-gray-800 dark:text-gray-200 font-medium">WPM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;