import { React, useEffect, useState } from 'react';

export default function Example3() {
  // useState hook to store the current width of the window
  const [width, setWidth] = useState(window.innerWidth);

  // useEffect hook to set up an event listener for window resize events
  useEffect(() => {
    //  function is called whenever the window is resized
    const handleResize = () => setWidth(window.innerWidth);

    // Adding the event listener for the 'resize' event
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    // Display the current width of the window
    <h2>Window width: {width}px</h2>
  );
}
