import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Assuming these are defined in your project structure
import { TypingStats } from '../../types';
import { getTypingStats } from '../../utils/typingUtils';
import RaaviKeyboard from './RaaviKeyboard';
import Button from '../ui/Button';
import Testimonials from '../home/Testimonials';

interface TypingAreaProps {
  text: string;
  onComplete: (stats: TypingStats) => void;
}

const RaaviKeyboardGuide: React.FC = () => {
  const keySections = [
    {
      title: "Upper Row",
      keys: [
        ['q', 'ੌ'], ['w', 'ੈ'], ['e', 'ਆ'], ['r', 'ਰ'], ['t', 'ਸ'],
        ['y', 'ਨ'], ['u', 'ੰ'], ['i', 'ੁ'], ['o', 'ੂ'], ['p', 'ਬ'],
        ['[', 'ਹ'], [']', 'ਗ'], ['\\', 'ਦ'],
      ]
    },
    {
      title: "Home Row",
      keys: [
        ['a', 'ੋ'], ['s', 'ੇ'], ['d', 'ਿ'], ['f', 'ਾ'], ['g', '੍'],
        ['h', 'ਤ'], ['j', 'ਚ'], ['k', 'ਟ'], ['l', 'ਕ'], [';', 'ਮ'], [`'`, 'ਨ']
      ]
    },
    {
      title: "Bottom Row",
      keys: [
        ['z', 'ਜ਼'], ['x', 'ਧ'], ['c', 'ਫ਼'], ['v', 'ਰ'], ['b', 'ਲ'],
        ['n', 'ਸ'], ['m', 'ਸ਼'], [',', '।'], ['.', 'ੲ'], ['/', '—']
      ]
    },
    {
      title: "Shift + Upper Row",
      keys: [
        ['Shift+q', 'ਔ'], ['Shift+w', 'ਁ'], ['Shift+e', 'ਆ'], ['Shift+r', 'ਈ'], ['Shift+t', 'ਉ'],
        ['Shift+y', 'ਫ'], ['Shift+u', 'ਭ'], ['Shift+i', 'ਧ'], ['Shift+o', 'ਢ'], ['Shift+p', 'ਣ'], ['Shift+{', 'ਦ']
      ]
    },
    {
      title: "Shift + Home Row",
      keys: [
        ['Shift+a', 'ਈ'], ['Shift+s', 'ਓ'], ['Shift+d', 'ਈ'], ['Shift+f', 'ਢ'], ['Shift+g', 'ਖ'],
        ['Shift+h', 'ਘ'], ['Shift+j', 'ਖ਼'], ['Shift+k', 'ਗ਼'], ['Shift+l', 'ਝ'], ['Shift+;', 'ਥ'], ['Shift+‘', 'ਠ']
      ]
    },
    {
      title: "Right Alt + Keys",
      keys: [
        ['Alt+b', 'ਖ਼'], ['Alt+h', 'ਗ਼'], ['Alt+i', 'ਜ਼'], ['Alt+p', 'ਜ਼'], ['Alt+[', 'ਖ਼਼'], ['Alt+.', '॥']
      ]
    },
    {
      title: "Numerals (Alt+Ctrl)",
      keys: [
        ['0', '੦'], ['1', '੧'], ['2', '੨'], ['3', '੩'], ['4', '੪'],
        ['5', '੫'], ['6', '੬'], ['7', '੭'], ['8', '੮'], ['9', '੯']
      ]
    }
  ];

  const headers = keySections.map(section => section.title);
  const maxKeys = Math.max(...keySections.map(section => section.keys.length));
  const rows = [];

  for (let i = 0; i < maxKeys; i++) {
    const row = [];
    keySections.forEach(section => {
      row.push(section.keys[i] || ['', '']);
    });
    rows.push(row);
  }

  return (
    <div className="overflow-x-auto text-sm">
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            {headers.map((header, index) => (
              <th key={index} colSpan={2} className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-center font-semibold text-blue-700 dark:text-blue-300">
                {header}
              </th>
            ))}
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-700">
            {headers.map((_, index) => (
              <React.Fragment key={index}>
                <th className="px-2 py-1 border border-gray-300 dark:border-gray-600 text-left font-semibold">Key</th>
                <th className="px-2 py-1 border border-gray-300 dark:border-gray-600 text-left font-semibold">Gurmukhi</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800">
              {row.map(([key, value], cellIndex) => (
                <React.Fragment key={cellIndex}>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-600 font-mono text-gray-800 dark:text-gray-200">{key || '—'}</td>
                  <td className="px-2 py-1 border border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-400 font-bold">{value || '—'}</td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
// start punjabi
const PunjabiLanguageInstallGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 flex flex-col">
      {/* Full Width Header */}
      <div className="w-full bg-yellow-50 dark:bg-yellow-900/10 py-6 px-4 shadow-sm flex-shrink-0">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="flex items-center justify-center w-14 h-14 bg-yellow-300 rounded-full mr-4">
            <span className="text-3xl">ਪ</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            <span className="text-green-600">Punjabi</span> Language Installation Guide
            <span className="block text-lg font-normal text-gray-600 dark:text-gray-300 mt-1">
              ਕੰਪਿਊਟਰ 'ਤੇ ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਕਿਵੇਂ ਇੰਸਟਾਲ ਕਰੀਏ
            </span>
          </h1>
        </div>
      </div>

      {/* Full Width Content Area */}
      <div className="w-full max-w-7xl mx-auto px-4 py-6 flex-grow overflow-y-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Windows Guide */}
          <div className="flex-1 bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold mb-5 text-gray-800 dark:text-white flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5v14h18V5H3zm16 2v10H5V7h14z"/>
              </svg>
              Windows 10/11
              <span className="text-base font-normal ml-2 text-gray-600 dark:text-gray-300">(ਵਿੰਡੋਜ਼)</span>
            </h2>
            
            <ol className="space-y-4 text-gray-700 dark:text-gray-300">
              {[
                ["Open Settings (Windows Key + I)", "ਸੈਟਿੰਗਜ਼ ਖੋਲ੍ਹੋ (ਵਿੰਡੋਜ਼ ਕੀ + I)"],
                ["Go to Time & Language → Language", "ਟਾਈਮ ਐਂਡ ਲੈਂਗੂਏਜ → ਲੈਂਗੂਏਜ 'ਤੇ ਜਾਓ"],
                ["Click 'Add a language'", "'ਭਾਸ਼ਾ ਐਡ ਕਰੋ' 'ਤੇ ਕਲਿੱਕ ਕਰੋ"],
                ["Search for 'Punjabi' and select", "'ਪੰਜਾਬੀ' ਖੋਜੋ ਅਤੇ ਚੁਣੋ"],
                ["Click 'Next' then 'Install'", "'ਅੱਗੇ' ਫਿਰ 'ਇੰਸਟਾਲ' 'ਤੇ ਕਲਿੱਕ ਕਰੋ"],
                ["Switch with Windows Key + Space", "ਵਿੰਡੋਜ਼ ਕੀ + ਸਪੇਸ ਨਾਲ ਬਦਲੋ"]
              ].map(([eng, punjabi], i) => (
                <li key={i} className="flex items-start">
                  <span className="flex items-center justify-center bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full w-6 h-6 text-sm font-bold mr-3 mt-1 flex-shrink-0">
                    {i+1}
                  </span>
                  <div>
                    <p className="font-medium">{eng}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{punjabi}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Middle Column - YouTube Video */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden">
              <div className="bg-red-600 p-3 flex items-center">
                <svg className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
                <span className="text-white font-medium">Video Tutorial / ਵੀਡੀਓ ਗਾਈਡ</span>
              </div>
              <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
  <iframe
    src="https://www.youtube.com/embed/kSBYkudmrSk?si=y8p8cZYgZRWumewe"
    title="YouTube video player"
    className="absolute top-0 left-0 w-full h-full"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

              <div className="p-4 bg-gray-50 dark:bg-gray-800">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-yellow-500 mt-1">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 6h2v2h-2V8zm0 4h2v6h-2v-6z"/>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Use Raavi layout:</strong> For best Punjabi typing experience<br />
                      <strong className="text-gray-500 dark:text-gray-400">ਰਾਵੀ ਲੇਆਉਟ ਵਰਤੋ:</strong> ਬਿਹਤਰ ਪੰਜਾਬੀ ਟਾਈਪਿੰਗ ਲਈ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - macOS Guide */}
          <div className="flex-1 bg-purple-50 dark:bg-purple-900/10 p-6 rounded-xl border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold mb-5 text-gray-800 dark:text-white flex items-center">
              <svg className="w-6 h-6 mr-2 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              macOS
              <span className="text-base font-normal ml-2 text-gray-600 dark:text-gray-300">(ਮੈਕ ਓਐਸ)</span>
            </h2>
            
            <ol className="space-y-4 text-gray-700 dark:text-gray-300">
              {[
                ["Open System Preferences", "ਸਿਸਟਮ ਪ੍ਰਿਫਰੰਸਿਜ਼ ਖੋਲ੍ਹੋ"],
                ["Go to Keyboard → Input Sources", "ਕੀਬੋਰਡ → ਇਨਪੁਟ ਸੋਰਸਿਜ਼ 'ਤੇ ਜਾਓ"],
                ["Click the + button", "+ ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰੋ"],
                ["Search for 'Punjabi' select 'Gurmukhi'", "'ਪੰਜਾਬੀ' ਖੋਜੋ 'ਗੁਰਮੁਖੀ' ਚੁਣੋ"],
                ["Click 'Add'", "'ਐਡ' 'ਤੇ ਕਲਿੱਕ ਕਰੋ"],
                ["Switch with Command + Space", "ਕਮਾਂਡ + ਸਪੇਸ ਨਾਲ ਬਦਲੋ"]
              ].map(([eng, punjabi], i) => (
                <li key={i} className="flex items-start">
                  <span className="flex items-center justify-center bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 rounded-full w-6 h-6 text-sm font-bold mr-3 mt-1 flex-shrink-0">
                    {i+1}
                  </span>
                  <div>
                    <p className="font-medium">{eng}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{punjabi}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Full Width Footer */}
      <div className="w-full bg-green-50 dark:bg-green-900/10 py-6 px-4 mt-8 flex-shrink-0">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-800 dark:text-white">
            <span className="text-green-600 font-bold">ਸ਼ੁਕਰੀਆ!</span>  Switch with Windows Key + Space

ਵਿੰਡੋਜ਼ ਕੀ + ਸਪੇਸ ਨਾਲ ਬਦਲੋ
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Made with ❤️ for Punjabis worldwide | © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
// end punjabi 
const TypingArea: React.FC<TypingAreaProps> = ({ text, onComplete }) => {
  const [currentInput, setCurrentInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [errors, setErrors] = useState(0);
  const [showGuide, setShowGuide] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);
  const [showAddLanguage, setShowAddLanguage] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let interval: number | undefined;
    if (startTime && !isCompleted) {
      interval = window.setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [startTime, isCompleted]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (!startTime) {
      setStartTime(Date.now());
    }

    setCurrentInput(inputValue);

    const expectedChar = text[inputValue.length - 1];
    const actualChar = inputValue[inputValue.length - 1];

    if (expectedChar !== actualChar) {
      setErrors(prev => prev + 1);
    }

    if (inputValue.length === text.length) {
      const endTime = Date.now();
      const timeElapsed = Math.floor((endTime - (startTime || endTime)) / 1000);
      const correctChars = text.split('').filter((char, i) => char === inputValue[i]).length;
      const stats = getTypingStats(correctChars, text.length, errors, timeElapsed);
      setIsCompleted(true);
      onComplete(stats);
    }
  };

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    setActiveKey(e.key);
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleReset = () => {
    setCurrentInput('');
    setStartTime(null);
    setElapsedTime(0);
    setIsCompleted(false);
    setErrors(0);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const charactersTyped = currentInput.length;
  const progress = (charactersTyped / text.length) * 100;

  const renderText = () => {
    return text.split('').map((char, index) => {
      let className = 'text-gray-800 dark:text-gray-300';
      if (index < currentInput.length) {
        className = currentInput[index] === char
          ? 'text-green-600 dark:text-green-400 font-bold'
          : 'text-red-600 dark:text-red-400 font-bold';
      }
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="mb-4 flex justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">Time: {elapsedTime}s</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Progress: {Math.round(progress)}%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Errors: {errors}</div>
        </div>

        <div className="mb-6 text-2xl font-medium leading-relaxed tracking-wide font-raavi p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
          {renderText()}
        </div>

        <div className="mb-4">
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={isCompleted}
            placeholder="ਇੱਥੇ ਟਾਈਪ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰੋ..."
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-raavi text-xl"
            autoComplete="off"
            dir="auto"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Button onClick={handleReset} variant="outline">Reset</Button>

          <Button
            onClick={() => setShowGuide(true)}
            className="bg-blue-100 text-blue-800 font-medium py-2 px-5 rounded shadow-sm 
             hover:bg-blue-200 hover:text-blue-900 transition-colors duration-200"
          >
            ਪੰਜਾਬੀ ਦੇ ਅੱਖਰ ਟਾਈਪ ਕਰਨ ਲਈ
          </Button>

          <Button
            onClick={() => setShowTestimonials(true)}
            className="bg-blue-500 text-white font-medium py-2 px-5 rounded shadow-sm 
             hover:bg-blue-600 transition-colors duration-200"
          >
            Show Testimonials
          </Button>

          <Button
            onClick={() => setShowAddLanguage(true)}
            className="bg-green-500 text-white font-medium py-2 px-5 rounded shadow-sm 
             hover:bg-green-600 transition-colors duration-200"
          >
           ਪੰਜਾਬੀ ਕੀਬੋਰਡ ਐਨੇਬਲ ਕਰੋ
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {showGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center p-4"
          >
            <motion.div
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-6 w-full max-w-7xl mx-auto max-h-[90vh] overflow-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300">Raavi Keyboard Reference Guide</h2>
                <Button
                  onClick={() => setShowGuide(false)}
                  className="bg-red-600 text-white hover:bg-red-700 font-medium py-2 px-4 rounded transition-colors duration-200"
                >
                  Close
                </Button>
              </div>

              <RaaviKeyboardGuide />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showTestimonials && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center p-4"
          >
            <motion.div
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-6 w-full max-w-5xl mx-auto max-h-[90vh] overflow-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-green-700 dark:text-green-300">Testimonials</h2>
                <Button
                  onClick={() => setShowTestimonials(false)}
                  className="bg-red-600 text-white hover:bg-red-700 font-medium py-2 px-4 rounded transition-colors duration-200"
                >
                  Close
                </Button>
              </div>

              <Testimonials />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
{/* add language animation page  */}
     <AnimatePresence>
  {showAddLanguage && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Making the overlay fade in/out a bit quicker
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center p-4"
    >
      <motion.div
        initial={{ y: 50, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 50, scale: 0.95 }}
        // Significantly reduced duration for a faster, snappier feel
        // Added 'ease' for a smoother acceleration/deceleration
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl p-6 w-full mx-4 max-h-[90vh] overflow-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-green-700 dark:text-green-300">Punjabi Language Installation Guide</h2>
          <Button
            onClick={() => setShowAddLanguage(false)}
            className="bg-red-600 text-white hover:bg-red-700 font-medium py-2 px-4 rounded transition-colors duration-200"
          >
            Close
          </Button>
        </div>

        <PunjabiLanguageInstallGuide />
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      <RaaviKeyboard activeKey={activeKey} />
    </div>
  );
};

export default TypingArea;