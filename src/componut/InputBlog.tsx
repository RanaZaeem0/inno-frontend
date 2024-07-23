import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const AutoGrowingInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputWidth, setInputWidth] = useState('100px');

  useEffect(() => {
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.whiteSpace = 'pre';
    span.style.fontSize = '1rem'; // Make sure this matches the input font size
    span.style.padding = '0.5rem'; // Make sure this matches the input padding
    span.textContent = inputValue || 'Start typing...';
    document.body.appendChild(span);
    setInputWidth(`${span.offsetWidth}px`);
    document.body.removeChild(span);
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative inline-block">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-300 p-2 text-lg"
        placeholder="Start typing..."
        style={{ width: inputWidth, minWidth: '100px' }}
      />
    </div>
  );
};

export default AutoGrowingInput;
