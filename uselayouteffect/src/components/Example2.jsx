import React, { useLayoutEffect, useRef } from 'react';

const  Example2 = () => {
  const divRef = useRef(null);

  useLayoutEffect(() => {
    const element = divRef.current;
    element.style.opacity = 0;
    element.style.transition = 'opacity 1s';
    // Start the fade-in animation immediately after the component is rendered
    setTimeout(() => {
      element.style.opacity = 1;
    }, 0); // Make sure the DOM update is reflected
  }, []);

  return <div ref={divRef}>This will fade in!</div>;
};


 export default Example2