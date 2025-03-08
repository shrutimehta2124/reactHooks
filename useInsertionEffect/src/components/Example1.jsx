import React, { useInsertionEffect, useState } from 'react';

const Example1 = () => {
  const [theme, setTheme] = useState('light'); // You can still toggle between themes if needed

  useInsertionEffect(() => {
    console.log('Applying theme:', theme);  // Log to ensure the theme is updated

    const style = document.createElement('style');
    style.textContent = `
      body {
        background-color: pink;  /* Set background to pink */
        color: red;               /* Set text color to red */
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [theme]);

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
};


export default Example1;