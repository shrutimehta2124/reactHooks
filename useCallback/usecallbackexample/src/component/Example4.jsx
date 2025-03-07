import React, { useCallback, useRef } from "react";

export default function Example4() {
  // useRef is used to create a reference to the input field
  const inputRef = useRef();

  // useCallback is used to memoize the focusInput function
  // This ensures the function doesn't get recreated on every render, unless its dependencies change.
  const focusInput = useCallback(() => {
    inputRef.current.focus();  // Focuses the input element when called
  }, []);  // Empty dependency array means this function will only be created once

  return (
    <div>
      {/* The input field, referenced by inputRef */}
      <input ref={inputRef} type="text" />
      
      {/* The button calls the focusInput function to focus the input */}
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
