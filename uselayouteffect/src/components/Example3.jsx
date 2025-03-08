import React, { useLayoutEffect, useRef } from 'react';

const Example3 = () => {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    const element = divRef.current;
    // Add a class to highlight the element
    element.classList.add('highlight');
    return () => {
      // Clean up by removing the class when the component unmounts
      element.classList.remove('highlight');
    };
  }, []); // Empty dependency array ensures it runs only once after mount

  return (
    <div
      ref={divRef}
      style={{ padding: '20px', border: '1px solid black' }}
      className="highlight"
    >
      I am highlighted!
    </div>
  );
};

export default Example3;
