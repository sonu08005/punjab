import React, { useEffect, useState } from 'react';

interface RaaviKeyboardProps {
  activeKey: string | null;
}

interface KeyData {
  normal: string;
  shift?: string;
  alt?: string;
  english: string;
  altGr?: string; // For Right Alt specific combinations
  width?: string; // For keys with different widths like Tab, Enter
}

const keyboardLayout: KeyData[][] = [
  // Number row
  [
    { normal: '`', english: '`', altGr: '੍ਹ' },
    { normal: '1', shift: '!', english: '1', altGr: '੧' },
    { normal: '2', shift: '@', english: '2', altGr: '੨' },
    { normal: '3', shift: '#', english: '3', altGr: '੩' },
    { normal: '4', shift: '$', english: '4', altGr: '੪' },
    { normal: '5', shift: '%', english: '5', altGr: '੫' },
    { normal: '6', shift: '^', english: '6', altGr: '੬' },
    { normal: '7', shift: '&', english: '7', altGr: '੭' },
    { normal: '8', shift: '*', english: '8', altGr: '੮' },
    { normal: '9', shift: '(', english: '9', altGr: '੯' },
    { normal: '0', shift: ')', english: '0', altGr: '੦' },
    { normal: '-', shift: '_', english: '-' },
    { normal: '=', shift: '+', english: '=' },
    { normal: 'Backspace', english: 'Backspace', width: 'w-20' },
  ],
  // Upper row (QWERTY...)
  [
  { normal: 'Tab', english: 'Tab', width: 'w-16' },
  { normal: '◌ੌ', shift: 'ਔ', english: 'Q' },
  { normal: '◌ੈ', shift: 'ਐ', english: 'W' },
  { normal: '◌ਾ', shift: 'ਆ', english: 'E' },
  { normal: '◌ੀ', shift: 'ਈ', english: 'R' },
  { normal: '◌ੂ', shift: 'ਊ', english: 'T' },
  { normal: 'ਬ', shift: 'ਭ', english: 'Y' },
  { normal: 'ਹ', shift: 'ਙ', altGr: 'ਫ਼', english: 'U' },
  { normal: 'ਗ', shift: 'ਘ', altGr: 'ਗ਼', english: 'I' },
  { normal: 'ਦ', shift: 'ਧ', english: 'O' },
  { normal: 'ਜ', shift: 'ਝ', altGr: 'ਜ਼', english: 'P' },
  { normal: '[', shift: '{', english: '[' },
  { normal: ']', shift: '}', english: ']' },
  { normal: '\\', shift: '|', english: '\\' },
],
[
  { normal: 'Caps Lock', english: 'CapsLock', width: 'w-20' },
  { normal: '◌ੋ', shift: 'ਓ', english: 'A' },
  { normal: '◌ੇ', shift: 'ਏ', english: 'S' },
  { normal: '੍', shift: 'ਅ', english: 'D' },
  { normal: 'ਿ', shift: 'ਇ', english: 'F' },
  { normal: '◌ੁ', shift: 'ਉ', english: 'G' },
  { normal: 'ਪ', shift: 'ਫ', altGr: 'ਫ਼', english: 'H' },
  { normal: 'ਰ', shift: 'ੜ', english: 'J' },
  { normal: 'ਕ', shift: 'ਖ', altGr: 'ਖ਼', english: 'K' },
  { normal: 'ਤ', shift: 'ਥ', english: 'L' },
  { normal: ';', shift: ':', english: ';' },
  { normal: '\'', shift: '"', english: '\'' },
  { normal: 'Enter', english: 'Enter', width: 'w-24' },
],
[
  { normal: 'Shift', english: 'ShiftLeft', width: 'w-28' },
  { normal: '◌ੰ', shift: '◌ਂ', english: 'X' },
  { normal: 'ਮ', shift: 'ਣ', english: 'C' },
  { normal: 'ਨ', english: 'V' },
  { normal: 'ਵ', shift: 'ੲ', altGr: 'ੳ', english: 'B' },
  { normal: 'ਲ', shift: 'ਲ਼', english: 'N' },
  { normal: 'ਸ', shift: 'ਸ਼', english: 'M' },
  { normal: ',', shift: '<', english: ',' },
  { normal: '.', shift: '।', altGr: '॥', english: '.' },
  { normal: '/', shift: '?', english: '/' },
  { normal: 'Shift', english: 'ShiftRight', width: 'w-28' },
],

  // Control, Alt, Space row
  [
    { normal: 'Ctrl', english: 'ControlLeft', width: 'w-16' },
    { normal: 'Alt', english: 'AltLeft', width: 'w-16' },
    { normal: '', english: ' ', width: 'w-96' }, // Space bar
    { normal: 'Alt', english: 'AltRight', width: 'w-16' },
    { normal: 'Ctrl', english: 'ControlRight', width: 'w-16' },
  ],
];

const RaaviKeyboard: React.FC<RaaviKeyboardProps> = ({ activeKey }) => {
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [shiftPressed, setShiftPressed] = useState(false);
  const [altPressed, setAltPressed] = useState(false); // For Left Alt
  const [ctrlPressed, setCtrlPressed] = useState(false);
  const [rightAltPressed, setRightAltPressed] = useState(false); // For Right Alt specific combinations

  useEffect(() => {
    // Set the currently pressed key
    setPressedKey(activeKey);

    // Handle modifier key presses
    if (activeKey?.toLowerCase() === 'shift') {
      setShiftPressed(true);
      return;
    }
    if (activeKey?.toLowerCase() === 'alt') {
      // This will handle both Left and Right Alt presses from `activeKey` if not specified
      setAltPressed(true);
      return;
    }
    if (activeKey?.toLowerCase() === 'control') {
      setCtrlPressed(true);
      return;
    }
    // Specific check for Right Alt if it sends a different `activeKey`
    if (activeKey?.toLowerCase() === 'altgraph' || activeKey?.toLowerCase() === 'altright') {
      setRightAltPressed(true);
      return;
    }

    // Clear the pressed key state after a short delay for visual feedback
    if (activeKey) {
      const timeout = setTimeout(() => {
        setPressedKey(null);
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [activeKey]);

  // ---
  // Handle modifier key releases from the *physical keyboard*
  // This is crucial for the "hold down" behavior
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'shift') {
        setShiftPressed(true);
      } else if (e.key.toLowerCase() === 'alt') {
        setAltPressed(true);
      } else if (e.key.toLowerCase() === 'control') {
        setCtrlPressed(true);
      } else if (e.key === 'AltGraph' || e.code === 'AltRight') { // Use e.code for more specific key identification
        setRightAltPressed(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'shift') {
        setShiftPressed(false);
      } else if (e.key.toLowerCase() === 'alt') {
        setAltPressed(false);
      } else if (e.key.toLowerCase() === 'control') {
        setCtrlPressed(false);
      } else if (e.key === 'AltGraph' || e.code === 'AltRight') {
        setRightAltPressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []); // Empty dependency array means this runs once on mount

  // ---

  const getKeyDisplay = (key: KeyData) => {
    // Handle Gurmukhi numerals (Left Alt + Ctrl + number)
    // Note: This combination is usually AltGr (Right Alt) in many layouts.
    // Given the request, it's implemented as Left Alt + Ctrl.
    if (altPressed && ctrlPressed && key.english.match(/[0-9]/)) {
      switch (key.english) {
        case '0': return '੦';
        case '1': return '੧';
        case '2': return '੨';
        case '3': return '੩';
        case '4': return '੪';
        case '5': return '੫';
        case '6': return '੬';
        case '7': return '੭';
        case '8': return '੮';
        case '9': return '੯';
        default: return key.normal;
      }
    }

    // Handle Right Alt (AltGr) combinations
    if (rightAltPressed && key.altGr) {
      return key.altGr;
    }

    // Regular Shift combinations
    if (shiftPressed && key.shift) return key.shift;

    // Default to normal character
    return key.normal;
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner">
      <div className="flex gap-1 mb-1 justify-center">
        {/* Modifier keys indicator */}
        <div className={`px-3 py-1 rounded ${shiftPressed ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
          Shift
        </div>
        <div className={`px-3 py-1 rounded ${altPressed ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
          Alt (Left)
        </div>
        <div className={`px-3 py-1 rounded ${rightAltPressed ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
          Alt Gr (Right Alt)
        </div>
        <div className={`px-3 py-1 rounded ${ctrlPressed ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
          Ctrl
        </div>
      </div>

      <div className="grid gap-1">
        {keyboardLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-1">
            {row.map((key, keyIndex) => {
              // Determine if the key is currently active/pressed
              const isActive =
                key.english.toLowerCase() === pressedKey?.toLowerCase() ||
                (key.english === 'ShiftLeft' && pressedKey === 'Shift') ||
                (key.english === 'ShiftRight' && pressedKey === 'Shift') ||
                (key.english === 'ControlLeft' && pressedKey === 'Control') ||
                (key.english === 'ControlRight' && pressedKey === 'Control') ||
                (key.english === 'AltLeft' && pressedKey === 'Alt') ||
                (key.english === 'AltRight' && pressedKey === 'Alt');


              const displayChar = getKeyDisplay(key);

              if (!displayChar && !key.english && key.english !== ' ') return null; // Handle empty display for non-space keys

              return (
                <div
                  key={`${rowIndex}-${keyIndex}`}
                  className={`
                    h-12 flex flex-col items-center justify-center
                    rounded text-sm font-medium
                    ${key.width ? key.width : 'w-12'}
                    ${
                      isActive
                        ? 'bg-blue-500 text-white shadow-inner'
                        : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow'
                    }
                    transition-all duration-100
                  `}
                >
                  {key.english === ' ' ? ( // Special handling for space bar
                    <span className="font-raavi text-lg">Space</span>
                  ) : (
                    <>
                      <span className="font-raavi text-lg">{displayChar}</span>
                      <span className="text-xs text-blue-500 dark:text-blue-400">{key.english}</span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        Raavi Punjabi Keyboard Layout
      </div>
    </div>
  );
};

export default RaaviKeyboard;