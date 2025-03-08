import React, { useState, useEffect } from 'react';
import {useDebugValue } from 'react';

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Debugging the mouse position
  useDebugValue(`X: ${position.x}, Y: ${position.y}`);

  return position;
}

function Example5() {
  const position = useMousePosition();

  return (
    <div>
      <p>Mouse Position: X = {position.x}, Y = {position.y}</p>
    </div>
  );
}

export default Example5;
