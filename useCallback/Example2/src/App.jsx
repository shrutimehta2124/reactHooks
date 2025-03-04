import React, { useState, useCallback } from "react";

export default function App() {
  const [text, setText] = useState("");  // State to store the typed text

  // useCallback is used here to memoize the handleClick function
  // This ensures that handleClick is not recreated every time the component re-renders.
  // handleClick will only be updated if 'text' changes.
  const handleClick = useCallback(() => {
    alert(`You typed: ${text}`);  // Shows an alert with the current 'text'
  }, [text]);  // Dependency array: The function is only recreated if 'text' changes

  return (
    <div>
      {/* The input field updates the 'text' state */}
      <input type="text" onChange={(e) => setText(e.target.value)} />
      
      {/* The button calls the memoized handleClick function when clicked */}
      <button onClick={handleClick}>Show Text</button>
    </div>
  );
}
