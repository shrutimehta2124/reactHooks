import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import Example2 from './Example2';

// Child Component
const ChildComponent = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  // Use functional setCount to ensure we always get the latest state
  useImperativeHandle(ref, () => ({
    increment() {
      setCount(prevCount => prevCount + 1); // Use the latest state value
    },
    getCount() {
      return count;
    }
  }));

  return <div>{count}</div>;
});

// Parent Component
const Example3 = () => {
  const childRef = useRef();

  const handleClick = () => {
    childRef.current.increment();
  };

  return (
    <>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

export default Example3;
