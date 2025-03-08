import React, { useInsertionEffect } from 'react';

const Example2 = () => {
  useInsertionEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .hover-effect:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease-in-out;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <div className="hover-effect">Hover over me!</div>;
};


 export default Example2