import React, { useState, useCallback, useEffect } from "react";

export default function App() {
  // 'position' state stores the current mouse position. Initially, both x and y are set to 0.
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // 'handleMouseMove' function is called whenever the mouse moves.
  // 'useCallback' is used to ensure that the function is not recreated unnecessarily on every render.
  const handleMouseMove = useCallback((event) => {
    // 'setPosition' updates the state with the new mouse coordinates (x and y)
    setPosition({ x: event.clientX, y: event.clientY });
  }, []); // 'handleMouseMove' doesn't depend on any state or props, so no dependencies are needed.

  useEffect(() => {
    // When the component mounts, we add an event listener to track the mouse movement.
    // It listens for 'mousemove' events on the window, and calls 'handleMouseMove' whenever the mouse moves.
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function: When the component unmounts, we remove the event listener to avoid memory leaks.
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]); // 'useEffect' depends on 'handleMouseMove', so it will re-run only if the function changes.

  // Render the current mouse position (x and y) on the screen.
  return <h2>Mouse Position: {position.x}, {position.y}</h2>;
}
