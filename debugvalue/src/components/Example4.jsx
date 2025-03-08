import React, { useState, useEffect } from 'react';
import {useDebugValue } from 'react';

function useTimer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Debugging the elapsed time
  useDebugValue(`Elapsed time: ${time} seconds`);

  return time;
}

function Example4() {
  const time = useTimer();

  return <p>Time: {time} seconds</p>;
}

export default Example4;
