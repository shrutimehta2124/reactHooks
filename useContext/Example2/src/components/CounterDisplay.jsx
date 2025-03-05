import React from 'react';
import { useCounter } from '../contexts/CounterContext';

const CounterDisplay = () => {
  const { count, setCount } = useCounter();
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default CounterDisplay;
