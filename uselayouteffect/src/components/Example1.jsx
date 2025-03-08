import React, { useState } from 'react';

const Example1 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Button */}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Hover Me
      </button>

      {/* Tooltip */}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: '-30px', // Position above the button
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '5px 10px',
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '5px',
            fontSize: '14px',
          }}
        >
          This is a tooltip!
        </div>
      )}
    </div>
  );
};
export default Example1;