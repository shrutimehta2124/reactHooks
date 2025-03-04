import React, { useMemo, useState } from 'react';

function App() {
  // State to store the input value from the user
  const [input, setInput] = useState('');

  // State to store the count value which is incremented on button click
  const [count, setCount] = useState(0);

  // useMemo hook to memoize the filtered list based on the 'input' value.
  // This ensures that the filtering only happens when 'input' changes.
  const filteredList = useMemo(() => {
    console.log('Filtering list...'); // Log when the filtering happens
    // Filter the list of fruits based on whether they include the input value
    return ['apple', 'banana', 'cherry'].filter((item) => item.includes(input));
  }, [input]); // The filter will re-run only when the 'input' state changes

  return (
    <div>
      {/* Input field to capture user input */}
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} // Update 'input' state as the user types
      />

      {/* Display the filtered list as a comma-separated string */}
      <p>Filtered List: {filteredList.join(', ')}</p>

      {/* Button to increment the 'count' state */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default App;
