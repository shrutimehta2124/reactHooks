import React, { useInsertionEffect, useState, useEffect } from 'react';

const Example5 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useInsertionEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .container {
        padding: ${isMobile ? '10px' : '20px'};
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [isMobile]);

  return <div className="container">Responsive content</div>;
};

export default Example5