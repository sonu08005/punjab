import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Raavi Typing Tutor. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
              Made with
            </span>
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
              for Punjabi learners
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;