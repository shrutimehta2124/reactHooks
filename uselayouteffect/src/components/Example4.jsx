import React, { useLayoutEffect, useState } from 'react';

const Example4 = () => {
  const [theme, setTheme] = useState('light');

  useLayoutEffect(() => {
    // Dynamically add the theme class to the body
    document.body.classList.remove('light', 'dark'); // Remove previous theme classes
    document.body.classList.add(theme); // Add the current theme class
  }, [theme]);

  return (
    <div>
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>

      <style>
        {`
          /* Light theme */
          .light {
            background-color: white;
            color: black;
          }

          /* Dark theme */
          .dark {
            background-color: black;
            color: white;
          }

          /* Button styling */
          button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            margin: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Example4;
