import React, { useState, useRef } from 'react';
import TypingArea from '../components/typing/TypingArea';
import TypingResults from '../components/typing/TypingResults';
import { TypingStats } from '../types';
import Button from '../components/ui/Button';
import Card, { CardHeader, CardContent } from '../components/ui/Card';

const PracticePage: React.FC = () => {
  const [customText, setCustomText] = useState<string>('');
  const [practiceText, setPracticeText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [completedStats, setCompletedStats] = useState<TypingStats | undefined>(undefined);
  const [selectedRandomText, setSelectedRandomText] = useState<string>('');

  // Increased and more diverse Punjabi sample texts
  const sampleTexts = [
    'ਮੈਂ ਪੰਜਾਬੀ ਵਿੱਚ ਟਾਈਪ ਕਰਨਾ ਸਿੱਖ ਰਿਹਾ ਹਾਂ। ਇਹ ਇੱਕ ਬਹੁਤ ਹੀ ਉਪਯੋਗੀ ਹੁਨਰ ਹੈ।',
    'ਪੰਜਾਬੀ ਭਾਰਤ ਅਤੇ ਪਾਕਿਸਤਾਨ ਦੀ ਇੱਕ ਪ੍ਰਮੁੱਖ ਭਾਸ਼ਾ ਹੈ, ਜਿਸਨੂੰ ਦੁਨੀਆ ਭਰ ਵਿੱਚ ਲੱਖਾਂ ਲੋਕ ਬੋਲਦੇ ਹਨ।',
    'ਮੇਰਾ ਨਾਮ ਗੁਰਪ੍ਰੀਤ ਹੈ। ਮੈਂ ਪੰਜਾਬ ਤੋਂ ਹਾਂ ਅਤੇ ਮੈਨੂੰ ਆਪਣੀ ਮਾਂ-ਬੋਲੀ ਬਹੁਤ ਪਸੰਦ ਹੈ।',

    'ਰੋਜ਼ਾਨਾ ਅਖ਼ਬਾਰ ਪੜ੍ਹਨਾ ਅਤੇ ਕਿਤਾਬਾਂ ਪੜ੍ਹਨਾ ਤੁਹਾਡੀ ਪੰਜਾਬੀ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹੈ।',
  'ਪਿੰਡ ਦੀ ਜ਼ਿੰਦਗੀ ਬਹੁਤ ਹੀ ਸੁਖਮਈ ਤੇ ਸਧਾਰਣ ਹੁੰਦੀ ਹੈ। ਇੱਥੇ ਲੋਕ ਸਵੇਰੇ ਤੁਰੰਤ ਉਠ ਜਾਂਦੇ ਹਨ। ਮਰਦ ਖੇਤਾਂ ਵੱਲ ਜਾਂਦੇ ਹਨ ਤੇ ਔਰਤਾਂ ਘਰ ਦੇ ਕੰਮਕਾਜ ਵਿੱਚ ਲੱਗ ਜਾਂਦੀਆਂ ਹਨ। ਪਿੰਡਾਂ ਦੀ ਹਵਾ ਤਾਜ਼ਾ ਹੁੰਦੀ ਹੈ। ਇੱਥੇ ਸ਼ਹਿਰਾਂ ਵਾਂਗ ਦੂਧ ਪੀਣ ਨੂੰ ਨਹੀਂ ਮਿਲਦਾ, ਸਿੱਧਾ ਗਾਵਾਂ ਤੋਂ ਮਿਲਦਾ ਹੈ। ਬੱਚੇ ਮੈਦਾਨ ਵਿੱਚ ਖੇਡਦੇ ਹਨ, ਚਰਖੀਆਂ ਚੜ੍ਹਦੇ ਹਨ, ਕੁਝ ਪਾਣੀ ਵਾਲੇ ਟੂਬਵੈੱਲ ਤੇ ਨ੍ਹਾਉਂਦੇ ਹਨ। ਪਿੰਡ ਵਿੱਚ ਲੋਕ ਇਕ-ਦੂਜੇ ਦੇ ਦੁੱਖ-ਸੁੱਖ ਵਿਚ ਹਿੱਸਾ ਲੈਂਦੇ ਹਨ। ਜਦੋਂ ਵੀ ਕਿਸੇ ਦੇ ਘਰ ਵਿਚ ਕੋਈ ਸਮਾਰੋਹ ਹੁੰਦਾ ਹੈ, ਤਾਂ ਸਾਰਾ ਪਿੰਡ ਇਕਠਾ ਹੋ ਜਾਂਦਾ ਹੈ। ਪਿੰਡਾਂ ਦੀ ਸਭ ਤੋਂ ਵੱਡੀ ਖਾਸੀਅਤ ਇਨ੍ਹਾਂ ਦੀ ਸਾਫ਼ਗਰਮੀ ਤੇ ਪਿਆਰ ਹੁੰਦੀ ਹੈ। ਲੋਕ ਕਿਸਾਨੀ ਕਰਕੇ ਆਪਣਾ ਪੈਟ ਪਾਲਦੇ ਹਨ। ਪਿੰਡਾਂ ਵਿੱਚ ਤਿਉਹਾਰ ਬੜੇ ਚਾਨਣ ਨਾਲ ਮਨਾਏ ਜਾਂਦੇ ਹਨ। ਲੋਹੜੀ, ਵਿਸਾਖੀ, ਗੁਰਪੁਰਬ ਆਦਿ ਸਮੇਂ ਪਿੰਡ ਬਿਲਕੁਲ ਰੌਣਕ ਨਾਲ ਭਰ ਜਾਂਦਾ ਹੈ। ਪਿੰਡ ਦੀ ਜ਼ਿੰਦਗੀ ਸਾਦਗੀ, ਮੇਹਨਤ ਤੇ ਪ੍ਰੇਮ ਦੀ ਪੂਰੀ ਮਿਸਾਲ ਹੁੰਦੀ ਹੈ। ਅਸਲ ਪੰਜਾਬੀ ਸਭਿਆਚਾਰ ਪਿੰਡਾਂ ਵਿਚ ਹੀ ਵੱਸਦਾ ਹੈ।',
  'ਮਾਂ ਜੀਵਨ ਦੀ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ ਹਸਤੀ ਹੁੰਦੀ ਹੈ। ਮਾਂ ਦੇ ਪੈਰਾਂ ਹੇਠਾਂ ਜੰਨਤ ਹੁੰਦੀ ਹੈ। ਉਹ ਆਪਣੇ ਬੱਚਿਆਂ ਦੀ ਰੱਖਿਆ ਕਰਦੀ ਹੈ, ਉਨ੍ਹਾਂ ਨੂੰ ਪਿਆਰ ਦਿੰਦੀ ਹੈ ਅਤੇ ਹਰ ਸਮੇਂ ਉਨ੍ਹਾਂ ਦੀ ਭਲਾਈ ਦੀ ਦੂਆ ਕਰਦੀ ਹੈ। ਮਾਂ ਆਪਣੇ ਬੱਚਿਆਂ ਲਈ ਹਰ ਤਰ੍ਹਾਂ ਦੀ ਤਕਲੀਫ ਸਹਿਨ ਕਰ ਲੈਂਦੀ ਹੈ। ਜਦੋਂ ਬੱਚਾ ਬਿਮਾਰ ਹੋ ਜਾਂਦਾ ਹੈ, ਮਾਂ ਦੀ ਨੀਂਦ ਉੱਡ ਜਾਂਦੀ ਹੈ। ਉਹ ਰਾਤਾਂ ਦੀ ਰਾਤ ਜਾਗ ਕੇ ਆਪਣੀ ਗੋਦ ਵਿੱਚ ਬੱਚੇ ਨੂੰ ਸੌਂਦੀ ਹੈ। ਮਾਂ ਦੀ ਮਮਤਾ ਦਾ ਕੋਈ ਮੋਲ ਨਹੀਂ ਹੁੰਦਾ। ਉਸ ਦੀ ਮਿਹਨਤ ਅਤੇ ਸੇਵਾ ਨੂੰ ਅਸੀਂ ਕਦੇ ਭੁਲਾ ਨਹੀਂ ਸਕਦੇ। ਅਸੀਂ ਜੇ ਥੋੜ੍ਹਾ ਜਿਹਾ ਵੀ ਦੁਖੀ ਹੋਈਏ, ਤਾਂ ਮਾਂ ਪਹਿਲੀ ਹੁੰਦੀ ਹੈ ਜੋ ਸਾਡੇ ਚਿਹਰੇ ਦੇ ਹਾਲਾਤ ਪਛਾਣ ਲੈਂਦੀ ਹੈ। ਮਾਂ ਸਾਨੂੰ ਚੰਗਾ ਇਨਸਾਨ ਬਣਾਉਂਦੀ ਹੈ। ਉਧਾਰ ਦੀ ਰੋਟੀ ਖਾ ਲਵੇਗੀ ਪਰ ਬੱਚਿਆਂ ਨੂੰ ਕਦੇ ਭੁੱਖਾ ਨਹੀਂ ਰੱਖੇਗੀ। ਮਾਂ ਸਦਾ ਚਾਹੁੰਦੀ ਹੈ ਕਿ ਉਸਦੇ ਬੱਚੇ ਕਿਸੇ ਚੰਗੀ ਥਾਂ ਤੇ ਪਹੁੰਚਣ। ਉਹ ਸਦੀਵੀ ਪ੍ਰੇਰਨਾ ਦਾ ਸਰੋਤ ਹੁੰਦੀ ਹੈ। ਮਾਂ ਦੇ ਬਿਨਾ ਜ਼ਿੰਦਗੀ ਸੁੰਨੀ ਹੋ ਜਾਂਦੀ ਹੈ।',
  'ਵਿਦਿਆ ਜੀਵਨ ਦਾ ਸਭ ਤੋਂ ਮੁੱਖ ਹਿੱਸਾ ਹੈ। ਵਿਦਿਆ ਦੀ ਰਾਹੀਂ ਇਨਸਾਨ ਅਗਿਆਨਤਾ ਤੋਂ ਗਿਆਨ ਵੱਲ ਜਾਂਦਾ ਹੈ। ਵਿਦਿਆ ਸਾਨੂੰ ਚੰਗਾ ਇਨਸਾਨ ਬਣਾਉਂਦੀ ਹੈ। ਇਹ ਸਿਰਫ਼ ਕਿਤਾਬਾਂ ਦੀ ਜਾਣਕਾਰੀ ਨਹੀਂ, ਸਗੋਂ ਜੀਵਨ ਨੂੰ ਜੀਉਣ ਦੀ ਸਮਝ ਦਿੰਦੀ ਹੈ। ਇੱਕ ਵਿਦਵਾਨ ਇਨਸਾਨ ਸਦਾ ਨਮ੍ਰਤਾ ਨਾਲ ਰਹਿੰਦਾ ਹੈ। ਵਿਦਿਆ ਦੇ ਰਾਹੀਂ ਹੀ ਦੇਸ਼ ਵਿਕਸਤ ਹੁੰਦੇ ਹਨ। ਅਜੋਕਲੇ ਸਮੇਂ ਵਿੱਚ ਵਿਦਿਆ ਦੀ ਲੋੜ ਹਰ ਕਿਸੇ ਨੂੰ ਹੈ। ਸਕੂਲ, ਕਾਲਜ ਤੇ ਵਿਦਿਆਲਿਆਂ ਵਿੱਚ ਸਿੱਖਿਆ ਮਿਲਦੀ ਹੈ। ਅਧਿਆਪਕ ਸਾਡੀ ਰਹਿਨੁਮਾਈ ਕਰਦੇ ਹਨ। ਉਹ ਸਾਨੂੰ ਅਗੇ ਵਧਣ ਲਈ ਪ੍ਰੇਰਨਾ ਦਿੰਦੇ ਹਨ। ਵਿਦਿਆ ਨਾਲ ਨੌਕਰੀ ਮਿਲਦੀ ਹੈ, ਆਦਰ ਮਿਲਦਾ ਹੈ, ਤੇ ਸਵੈ-ਵਿਕਾਸ ਹੁੰਦਾ ਹੈ। ਇੱਕ ਅਣਪੜ੍ਹ੍ਹਿਆ ਵਿਅਕਤੀ ਆਪਣੀ ਜ਼ਿੰਦਗੀ ਨੂੰ ਸਮਝ ਨਹੀਂ ਸਕਦਾ, ਪਰ ਇੱਕ ਪੜ੍ਹਿਆ-ਲਿਖਿਆ ਇਨਸਾਨ ਸਮਾਜ ਵਿੱਚ ਚੰਗਾ ਰੋਲ ਨਿਭਾ ਸਕਦਾ ਹੈ। ਵਿਦਿਆ ਸਾਡੀ ਅਸਲੀ ਦੌਲਤ ਹੁੰਦੀ ਹੈ। ਇਸ ਲਈ ਸਾਨੂੰ ਹਰ ਹਾਲਤ ਵਿੱਚ ਸਿੱਖਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ।',
  'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦੀ ਆਪਣੀ ਇੱਕ ਖਾਸ ਮਹੱਤਤਾ ਹੈ। ਇਹ ਭਾਸ਼ਾ ਸਿਰਫ਼ ਪੰਜਾਬ ਵਿੱਚ ਹੀ ਨਹੀਂ, ਸਗੋਂ ਦੁਨੀਆ ਭਰ ਵਿੱਚ ਬੋਲੀਆਂ ਜਾਂਦੀਆਂ ਹਨ। ਪੰਜਾਬੀ ਲੋਕਾਂ ਦੀ ਸਭਿਆਚਾਰ, ਰਿਵਾਜ ਅਤੇ ਤਿਉਹਾਰਾਂ ਨੂੰ ਸਮਝਣ ਲਈ ਇਹ ਭਾਸ਼ਾ ਬਹੁਤ ਜਰੂਰੀ ਹੈ। ਪੰਜਾਬੀ ਗੀਤ, ਕਵਿਤਾਵਾਂ ਅਤੇ ਕਹਾਣੀਆਂ ਵਿੱਚ ਇਸ ਦੀ ਖੂਬਸੂਰਤੀ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ। ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਸਿੱਖਣਾ ਅਤੇ ਇਸ ਵਿੱਚ ਟਾਈਪ ਕਰਨਾ ਸਾਡੇ ਲਈ ਇੱਕ ਮਾਨ ਹੈ।',
  'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦੀ ਲਿਪੀ ਗੁਰਮੁਖੀ ਹੈ, ਜੋ ਸਿੱਖ ਧਰਮ ਨਾਲ ਜੁੜੀ ਹੋਈ ਹੈ। ਇਸ ਦੀ ਲਿਪੀ ਸਿੱਖ ਗੁਰੂਆਂ ਨੇ ਬਣਾਈ ਸੀ। ਗੁਰਮੁਖੀ ਲਿਪੀ ਵਿੱਚ ਲਿਖੇ ਗੁਰਬਾਣੀ ਦੇ ਸ਼ਬਦਾਂ ਨੂੰ ਪੜ੍ਹਨਾ ਅਤੇ ਸਮਝਣਾ ਸਿੱਖਣਾ ਬਹੁਤ ਜਰੂਰੀ ਹੈ।',
  'ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਵਿੱਚ ਕਈ ਪ੍ਰਕਾਰ ਦੇ ਗੀਤ, ਕਵਿਤਾਵਾਂ ਅਤੇ ਕਹਾਣੀਆਂ ਹਨ। ਇਹ ਸਾਡੇ ਰਿਵਾਜਾਂ ਅਤੇ ਤਿਉਹਾਰਾਂ ਨੂੰ ਦਰਸਾਉਂਦੀਆਂ ਹਨ। ਪੰਜਾਬੀ ਲੋਕ ਗੀਤਾਂ ਵਿੱਚ ਆਪਣੀ ਖੁਸ਼ੀਆਂ ਅਤੇ ਦੁੱਖ-ਸੁੱਖ ਨੂੰ ਬਿਆਨ ਕਰਦੇ ਹਨ।',
  ];

  const handleStartPractice = () => {
    const textToPractice = customText.trim() || selectedRandomText.trim();
    if (textToPractice) {
      setPracticeText(textToPractice);
      setIsTyping(true);
      setCompletedStats(undefined);
    }
  };

  const handleSelectSample = (text: string) => {
    setCustomText(text);
    setSelectedRandomText(''); // Clear random text if a sample is manually selected
  };

  const handleComplete = (stats: TypingStats) => {
    setCompletedStats(stats);
  };

  const handleReset = () => {
    setCustomText('');
    setPracticeText('');
    setIsTyping(false);
    setCompletedStats(undefined);
    setSelectedRandomText(''); // Reset random text as well
  };

  const handleTryAgain = () => {
    setIsTyping(true);
    setCompletedStats(undefined);
  };

  const handleSelectRandomText = () => {
    const randomIndex = Math.floor(Math.random() * sampleTexts.length);
    const randomText = sampleTexts[randomIndex];
    setCustomText(randomText); // Set to customText area for display
    setSelectedRandomText(randomText); // Store as selected random text for practice
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Free Practice
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Practice typing with your own text or choose from our samples.
        </p>
      </div>

      <div className="mb-6">
        <Button
          onClick={handleSelectRandomText}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 text-base rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Choose Random Text
        </Button>
      </div>

      {!isTyping && !completedStats ? (
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              ਆਪਣੀ ਮਰਜੀ ਦਾ ਅਭਿਆਸ ਚੁਣੋ
            </h2>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <label
                htmlFor="customText"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Custom Text
              </label>
              <textarea
                id="customText"
                value={customText}
                onChange={(e) => {
                  setCustomText(e.target.value);
                  setSelectedRandomText(''); // Clear random selection if user types
                }}
                rows={4}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 font-raavi"
                placeholder="Enter Punjabi text to practice..."
                dir="auto"
              ></textarea>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Or select a sample text:
              </h3>
              <div className="space-y-2">
                {sampleTexts.map((text, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelectSample(text)}
                    className="p-3 border border-gray-200 dark:border-gray-700 rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750 font-raavi"
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                onClick={handleStartPractice}
                disabled={!customText.trim() && !selectedRandomText.trim()} // Disable if both are empty
              >
                Start Practice
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : completedStats ? (
        <div>
          <TypingResults
            stats={completedStats}
            onRetry={handleTryAgain}
          />
          <div className="mt-6 text-center">
            <Button variant="outline" onClick={handleReset}>
              Practice with Different Text
            </Button>
          </div>
        </div>
      ) : (
        <TypingArea text={practiceText} onComplete={handleComplete} />
      )}
    </div>
  );
};

export default PracticePage;