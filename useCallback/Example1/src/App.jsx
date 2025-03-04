import React, { useState, useCallback } from "react";

// Child component is memoized using React.memo to prevent unnecessary re-renders
// unless its props (in this case, 'increment') change
const Child = React.memo(({ increment }) => {
  console.log("Child re-rendered"); // Logs every time the Child component re-renders
  return <button onClick={increment}>Increment</button>;
});

export default function App() {
  // useState hook to manage the 'count' state variable
  const [count, setCount] = useState(0);
  
  // useCallback hook is used to memoize the 'increment' function
  // This ensures the function doesn't get re-created on every render
  const increment = useCallback(() => {
    setCount((prev) => prev + 1); // Increments the count state by 1
  }, []); // Empty dependency array means the function is created once and doesn't change

  return (
    <div>
      <h2>Count: {count}</h2> {/* Displays the current value of 'count' */}
      <Child increment={increment} /> {/* Passes the memoized 'increment' function to the Child component */}
    </div>
  );
}
