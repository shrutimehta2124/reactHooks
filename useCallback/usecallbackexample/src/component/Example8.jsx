import React, { useEffect, useCallback } from "react";

export default function Example8() {
  // 'handleKeyPress' is a function that is called when any key is pressed.
  // We use 'useCallback' to ensure that this function is not recreated every time the component re-renders.
  // The empty array [] means that the function doesn't depend on any state or props and will not be re-created unless necessary.
  const handleKeyPress = useCallback((event) => {
    // If the "Enter" key is pressed, show an alert.
    if (event.key === "Enter") {
      alert("Enter key pressed!");
    }
  }, []); // 'handleKeyPress' function will not change unless dependencies change (there are no dependencies here).

  useEffect(() => {
    // When the component is mounted (rendered for the first time), we add an event listener to listen for "keydown" events.
    window.addEventListener("keydown", handleKeyPress);

    // The return function is a cleanup function that removes the event listener when the component is unmounted.
    // This prevents memory leaks by ensuring that we don't have multiple event listeners hanging around.
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]); // The effect depends on 'handleKeyPress'. It will re-run only if 'handleKeyPress' changes.

  return <h2>Press "Enter" key to trigger an alert</h2>; // Display a message prompting the user to press "Enter"
}
