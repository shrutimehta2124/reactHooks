import React, { useState, useMemo } from 'react';

function Example8() {
  // State to control the size of the box 
  const [size, setSize] = useState(100);

  // State to control the color of the box
  const [color, setColor] = useState('lightgreen');

  // Memoizing the styles of the box to avoid recalculating on every render
  const boxStyles = useMemo(() => {
    console.log('Updating styles...');
    return {
      width: `${size}px`, // Set the width of the box
      height: `${size}px`, // Set the height of the box
      backgroundColor: color, // Set the background color of the box
      transition: 'all 0.3s ease', // Add smooth transition for size and color changes
    };
  }, [size, color]); // Recalculate styles only when 'size' or 'color' changes

  return (
    <div>
      {/* The box is styled based on 'boxStyles' */}
      <div style={boxStyles}></div>
      
      <button onClick={() => setSize(size === 100 ? 200 : 100)}>
        Toggle Size
      </button>
      
      <button onClick={() => setColor(color === 'pink' ? 'yellow' : 'pink')}>
        Toggle Color
      </button>
    </div>
  );
}

export default Example8;
