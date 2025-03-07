import React, { useState, useEffect } from 'react';

function Example2() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    
    // If the timer is running, start the interval
    if (isRunning) {
      interval = setInterval(() => setSeconds(prev => prev + 1), 1000);
    } else {
      // If the timer is not running, clear the interval
      clearInterval(interval);
    }

    // Cleanup function to clear the interval when the component unmounts or state changes
    return () => clearInterval(interval);

  }, [isRunning]); // Dependency on `isRunning` to start or stop the timer

  return (
    <div>
      <p>Time: {seconds} seconds</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
}

export default Example2;
