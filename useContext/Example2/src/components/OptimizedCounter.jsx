import React from 'react';
import { useCounter } from '../contexts/CounterContext';

const OptimizedCounter = () => {
  const { count, setCount } = useCounter();

  return (
    <div>
      <h2>Optimized Counter Example</h2>
      <p>Optimized Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default OptimizedCounter;
