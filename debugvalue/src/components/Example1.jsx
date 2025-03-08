import React, { useState, useEffect } from 'react';
import {useDebugValue } from 'react';
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  // Debugging the counter value
  useDebugValue(count > 0 ? `Count is positive: ${count}` : 'Count is non-positive');

  return [count, setCount];
}

function Example1() {
  const [count, setCount] = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Example1;
