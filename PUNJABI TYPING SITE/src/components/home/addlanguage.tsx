import React from 'react';

const EnablePunjabiGuide: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ਪੰਜਾਬੀ ਗੁਰਮੁਖੀ ਡੈਸਕਟਾਪ 'ਤੇ ਕਿਵੇਂ ਐਕਟੀਵੇਟ ਕਰੀਏ
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Windows, macOS ਅਤੇ Linux 'ਤੇ ਪੰਜਾਬੀ ਟਾਈਪ ਕਰਨ ਦੇ ਤਰੀਕੇ
          </p>
        </div>

        <div className="space-y-8">
          {/* Windows Section */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
              <svg className="h-8 w-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Windows 'ਤੇ ਪੰਜਾਬੀ ਐਕਟੀਵੇਟ ਕਰਨਾ
            </h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
              <li>Settings &gt; Time & Language &gt; Language 'ਤੇ ਜਾਓ</li>
              <li>"Add a language" ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰੋ</li>
              <li>ਸਰਚ ਬਾਰ ਵਿੱਚ "Punjabi" ਲਿਖੋ ਅਤੇ ਚੁਣੋ</li>
              <li>ਭਾਸ਼ਾ ਇੰਸਟਾਲ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਇਸਨੂੰ ਡਿਫੌਲਟ ਵਜੋਂ ਸੈੱਟ ਕਰੋ</li>
              <li>Win + Space ਦਬਾ ਕੇ ਕੀਬੋਰਡ ਲੇਆਉਟ ਬਦਲੋ</li>
            </ol>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-md">
              <p className="text-blue-700 dark:text-blue-200">
                <strong>ਨੋਟ:</strong> ਜੇਕਰ ਤੁਸੀਂ Inscript ਕੀਬੋਰਡ ਵਰਤ ਰਹੇ ਹੋ, ਤਾਂ "Punjabi (India)" ਚੁਣੋ ਅਤੇ "Inscript" ਲੇਆਉਟ ਸੈਲੈਕਟ ਕਰੋ।
              </p>
            </div>
          </div>

          {/* macOS Section */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
              <svg className="h-8 w-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              macOS 'ਤੇ ਪੰਜਾਬੀ ਐਕਟੀਵੇਟ ਕਰਨਾ
            </h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
              <li>Apple menu &gt; System Preferences &gt; Keyboard &gt; Input Sources</li>
              <li>ਨੀਚੇ + ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰੋ</li>
              <li>"Punjabi" ਲੱਭੋ ਅਤੇ "Gurmukhi" ਚੁਣੋ</li>
              <li>"Add" ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰੋ</li>
              <li>Menu bar ਵਿੱਚ Input menu ਵਿੱਚੋਂ Gurmukhi ਸੈਲੈਕਟ ਕਰੋ</li>
            </ol>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-md">
              <p className="text-blue-700 dark:text-blue-200">
                <strong>ਸੁਝਾਅ:</strong> ਤੁਸੀਂ Command + Space ਦਬਾ ਕੇ ਝੱਟ ਪੱਟ ਇਨਪੁਟ ਸੋਰਸ ਬਦਲ ਸਕਦੇ ਹੋ।
              </p>
            </div>
          </div>

          {/* Linux Section */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
              <svg className="h-8 w-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Linux 'ਤੇ ਪੰਜਾਬੀ ਐਕਟੀਵੇਟ ਕਰਨਾ
            </h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
              <li>System Settings &gt; Region & Language 'ਤੇ ਜਾਓ</li>
              <li>Input Sources ਵਿੱਚ + ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰੋ</li>
              <li>"Punjabi (Gurmukhi)" ਚੁਣੋ</li>
              <li>Super (Windows) key + Space ਦਬਾ ਕੇ ਲੇਆਉਟ ਬਦਲੋ</li>
            </ol>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-md">
              <p className="text-blue-700 dark:text-blue-200">
                <strong>ਵਿਕਲਪ:</strong> Terminal ਵਿੱਚ <code className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">setxkbmap -layout us,punjabi -option grp:alt_shift_toggle</code> ਕਮਾਂਡ ਵੀ ਵਰਤ ਸਕਦੇ ਹੋ।
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg border-l-4 border-yellow-400 dark:border-yellow-600">
            <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-2">ਸਹਾਇਤਾ ਚਾਹੀਦੀ ਹੈ?</h3>
            <p className="text-yellow-700 dark:text-yellow-300">
              ਜੇਕਰ ਤੁਹਾਨੂੰ ਪੰਜਾਬੀ ਕੀਬੋਰਡ ਸੈੱਟਅਪ ਕਰਨ ਵਿੱਚ ਕੋਈ ਦਿੱਕਤ ਆ ਰਹੀ ਹੈ, ਤਾਂ ਸਾਡੇ <a href="/contact" className="underline font-medium">ਸੰਪਰਕ ਪੰਨਾ</a> 'ਤੇ ਸੰਪਰਕ ਕਰੋ।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnablePunjabiGuide;