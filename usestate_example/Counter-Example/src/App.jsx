import { useState } from 'react';  // Importing the useState hook from React
import './App.css'; 

function App() {
  /*
    * The useState hook allows you to add state to a functional component.
   *  It takes an initial value as an argument and returns an array with two elements: the current state value and a function to update it. 
   * Syntax for useState:
   * const [state, setState] = useState(initialValue);
   * 
   * Declare a state variable "state" initialized to 0.
   * "state" will hold the current value, and "setState" will be used to update the value.
   */
  const [state, setState] = useState(0);

  // Function to increment the counter
  function incrementCounter() {
    // Update state by adding 1 to the current value
    setState(state + 1);
  }

  // Function to decrement the counter
  function decrementCounter() {
    // Update state by subtracting 1 from the current value
    setState(state - 1);
  }

  return (
    <>
      {/* Display the current value of the state */}
      <h3>Count: {state} </h3>

      {/* Button to trigger the incrementCounter function */}
      <button onClick={incrementCounter}>Increment Counter</button>

      <br /> <br />

      {/* Button to trigger the decrementCounter function */}
      <button onClick={decrementCounter}>Decrement Counter</button>
    </>
  );
}

export default App; // Export the App component so it can be used elsewhere
