import React, { useState } from 'react';
import {
  Keyboard,
  BarChart,
  Home,
  Book,
  Info,
  User,
  LogOut
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';
import AuthModal from '../auth/AuthModal';
import Button from '../ui/Button';
import { useAuth } from '../../contexts/AuthContext';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  const navLinks = [
    { path: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { path: '/lessons', label: 'Lessons', icon: <Book className="w-5 h-5" /> },
    { path: '/practice', label: 'Practice', icon: <Keyboard className="w-5 h-5" /> },
    { path: '/progress', label: 'Progress', icon: <BarChart className="w-5 h-5" /> },
    { path: '/about', label: 'About', icon: <Info className="w-5 h-5" /> }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <Keyboard className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                  Raavi Typing
                </span>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                    isActive(link.path)
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="mr-1.5">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
              
              {/* Auth Section */}
              <div className="flex items-center space-x-2 ml-4">
                {user ? (
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800">
                      <User className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {user.email}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleSignOut}
                      className="flex items-center"
                    >
                      <LogOut className="h-4 w-4 mr-1" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAuthClick('signin')}
                    >
                      Sign In
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleAuthClick('signup')}
                    >
                      Sign Up
                    </Button>
                  </div>
                )}
              </div>
              
              {/* Theme Toggle */}
              <div className="ml-4">
                <ThemeToggle />
              </div>
              
              {/* YouTube Tutorial Link */}
              <a
                href="https://www.youtube.com/watch?v=GUB50Gk_qf4&ab_channel=BHAIHARINDERSINGH-Topic"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:underline dark:text-red-400"
              >
                🎥 Watch Tutorial
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-5 items-center">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-3 flex flex-col items-center justify-center text-xs font-medium ${
                  isActive(link.path)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {link.icon}
                <span className="mt-1">{link.label}</span>
              </Link>
            ))}
          </div>
          
          {/* Mobile Auth Section */}
          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
            {user ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {user.email}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => handleAuthClick('signin')}
                >
                  Sign In
                </Button>
                <Button
                  size="sm"
                  className="flex-1"
                  onClick={() => handleAuthClick('signup')}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
          
          {/* YouTube Tutorial Mobile Link */}
          <a
            href="https://www.youtube.com/watch?v=GUB50Gk_qf4&ab_channel=BHAIHARINDERSINGH-Topic"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 text-center text-xs font-medium text-red-600 dark:text-red-400 hover:underline border-t border-gray-200 dark:border-gray-700"
          >
            🎥 Watch Tutorial
          </a>
        </div>
      </nav>
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Navbar;