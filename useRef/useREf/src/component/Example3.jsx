import React, { useState, useEffect, useRef } from 'react';

function Example3() {
  // State variable to hold the current 'name'
  const [name, setName] = useState('shruti');
  
  // Reference to store the previous 'name' value (it persists across renders)
  const prevNameRef = useRef(''); 

  // useEffect runs after every render when 'name' changes
  useEffect(() => {
    // Update prevNameRef with the current 'name' value after each render
    prevNameRef.current = name;
  }, [name]); // Dependency array: the effect runs whenever 'name' changes

  return (
    <div>
      {/* Display the current value of 'name' */}
      <p>Current Name: {name}</p>
      
      {/* Display the previous value of 'name', stored in 'prevNameRef.current' */}
      <p>Previous Name: {prevNameRef.current}</p>
      
      {/* Input field to update the 'name' state */}
      <input
        type="text"
        value={name} // Bind the value of the input field to 'name' state
        onChange={(e) => setName(e.target.value)} // Update 'name' state when the input changes
      />
    </div>
  );
}

export default Example3;
