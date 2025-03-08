import React, { useInsertionEffect } from 'react';

const Example3 = () => {
  useInsertionEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return <div style={{ fontFamily: 'Roboto' }}>This text uses the Roboto font.</div>;
};

export default Example3;
