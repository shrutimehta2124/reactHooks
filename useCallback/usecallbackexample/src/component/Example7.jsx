import React, { useState, useCallback } from "react";

export default function Example7() {
  // 'history' keeps track of all states (or versions of states).
  const [history, setHistory] = useState(["Initial State"]);
  // 'index' keeps track of the current state in the 'history'.
  const [index, setIndex] = useState(0);

  // 'addState' adds a new state to the 'history' array and updates the index.
  // 'useCallback' ensures the 'addState' function doesn't get recreated on every render unless 'index' changes.
  const addState = useCallback((newState) => {
    setHistory((prev) => [...prev.slice(0, index + 1), newState]);  // Slice history to remove future states and add the new one
    setIndex((prev) => prev + 1);  // Increment the index to point to the newly added state
  }, [index]);  // Dependency array: only recreate the function if 'index' changes

  // 'undo' decrements the 'index' (if possible) to show the previous state.
  // 'useCallback' ensures 'undo' function is stable across re-renders.
  const undo = useCallback(() => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));  // Decrease the index, but don't go below 0
  }, []);  // Empty dependency array means 'undo' function will not be recreated unless needed

  // 'redo' increments the 'index' (if possible) to show the next state.
  // 'useCallback' ensures 'redo' function is stable across re-renders.
  const redo = useCallback(() => {
    setIndex((prev) => (prev < history.length - 1 ? prev + 1 : prev));  // Increase the index, but don't go beyond the latest state
  }, [history]);  // Dependency array: recreate 'redo' only when 'history' changes (to account for state history changes)

  return (
    <div>
      <h2>State: {history[index]}</h2>  {/* Display the current state based on the 'index' */}
      
      {/* Button to add a new state */}
      <button onClick={() => addState(`State ${index + 1}`)}>Change State</button>

      {/* Undo button: Disabled when we're at the first state */}
      <button onClick={undo} disabled={index === 0}>Undo</button>

      {/* Redo button: Disabled when we're at the most recent state */}
      <button onClick={redo} disabled={index === history.length - 1}>Redo</button>
    </div>
  );
}
