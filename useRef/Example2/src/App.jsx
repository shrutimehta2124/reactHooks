import { useState } from 'react';  
import './App.css';               
import { useRef } from 'react';    
import { useEffect } from 'react'; 

function App() {
  const [count, setCount] = useState(0); // Declare a state variable 'count' and a setter function 'setCount'
  const num = useRef(0); // Create a ref to store the 'num' value, initialized to 0

  // useEffect hook that runs after every render (when count is updated)
  useEffect(() => {
    num.current = num.current + 1; // Increment num.current by 1 on each render
  });

  return (
    <>
      {/* Button to decrease the count by 1 */}
      <button onClick={() => {
        setCount(prev => prev - 1); // Decrease the count by 1
      }}>-1</button>

      <h2>{count}</h2> {/* Display the current value of count */}

      {/* Button to increase the count by 1 */}
      <button onClick={() => {
        setCount(prev => prev + 1); // Increase the count by 1
      }}>+1</button>

      {/* Display the value of num.current */}
      <h2>Component Render: {num.current}</h2> {/* This shows the incremented value of num.current */}
    </>
  );
}

export default App;
