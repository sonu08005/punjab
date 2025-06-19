import React from 'react';
import { BookOpen, Globe, Users, ThumbsUp } from 'lucide-react';

const AboutContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          About Raavi Typing Tutor
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Raavi Typing Tutor was created with a mission to help people master Punjabi typing using the Raavi font. Our platform combines interactive lessons, real-time feedback, and progress tracking to make learning efficient and enjoyable.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Whether you're a beginner just starting to learn Punjabi typing or an advanced user looking to improve your speed and accuracy, our structured curriculum is designed to help you achieve your goals.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Our Approach
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            We believe in learning by doing. Our interactive lessons allow you to practice typing in real-time with immediate feedback, helping you identify and correct mistakes as you go.
          </p>
        </div>

        
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Globe className="h-6 w-6 text-purple-600 mr-3" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Punjabi Language
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Punjabi is one of the major languages of the Indian subcontinent, with over 125 million speakers worldwide. Mastering typing in Punjabi opens up opportunities for communication, work, and cultural connection.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Users className="h-6 w-6 text-green-600 mr-3" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Our Users
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Our platform serves students, professionals, and anyone interested in learning Punjabi typing. We've helped thousands of users improve their typing skills and achieve fluency in digital Punjabi communication.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <ThumbsUp className="h-6 w-6 text-red-600 mr-3" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Our Commitment
            </h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            We're committed to providing a high-quality, accessible learning experience. Our platform is continuously updated with new lessons and features based on user feedback and educational best practices.
          </p>
        </div>
      </div>
      
      <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-8 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Why Learn Raavi Typing?
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Communicate effectively in Punjabi across digital platforms</li>
          <li>Enhance job prospects in regions where Punjabi is widely used</li>
          <li>Connect with Punjabi culture and literature</li>
          <li>Contribute to Punjabi content creation online</li>
          <li>Preserve and promote the Punjabi language in the digital age</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutContent;