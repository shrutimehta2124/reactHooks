import React, { useMemo, useState } from 'react';

function App() {
  // State to store the input value from the user
  const [input, setInput] = useState('');

  // useMemo is used to memoize the expensive function so that it is not re-created on every render.
  // The function will only be re-created if the dependencies (which is an empty array in this case) change.
  const expensiveFunction = useMemo(() => (str) => {
    console.log('Running expensive function...'); // Log to show when the function is running
    return str.toUpperCase(); // Convert the string to uppercase
  }, []); // Empty dependency array means the function is only created once

  return (
    <div>
      {/* Input field to capture user input */}
      <input 
        value={input} 
        placeholder='Enter value in string formate'
        onChange={(e) => setInput(e.target.value)} // Update the 'input' state as the user types
      />
      {/* Display the output of the expensive function */}
      <p>Output: {expensiveFunction(input)}</p>
    </div>
  );
}

export default App;
