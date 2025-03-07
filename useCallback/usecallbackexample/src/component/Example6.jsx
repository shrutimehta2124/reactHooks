import React, { useState, useCallback } from "react";

export default function Example6() {
  // 'darkMode' is a state variable that keeps track of the current theme.
  // Initially, it is set to 'false', meaning the app starts in Light mode.
  const [darkMode, setDarkMode] = useState(false);

  // 'toggleTheme' is a function that toggles the value of 'darkMode'.
  // It switches from Light mode to Dark mode and vice versa.
  // We use 'useCallback' to ensure that the function is not recreated unnecessarily.
  const toggleTheme = useCallback(() => {
    setDarkMode((prev) => !prev); // Flips the value of 'darkMode'
  }, []); // The empty array means this function is created only once and doesn't change unless necessary.

  return (
    <div
      // Inline styling is applied to the <div> based on the 'darkMode' state.
      style={{
        background: darkMode ? "#333" : "#fff", // Dark background for dark mode, light background for light mode
        color: darkMode ? "#fff" : "#000", // White text for dark mode, black text for light mode
        padding: "20px", // Adds padding around the content for better spacing
      }}
    >
      {/* Display the current theme (Dark or Light) based on 'darkMode' */}
      <h2>Current Theme: {darkMode ? "Dark" : "Light"}</h2>

      {/* Button to toggle between Light and Dark mode. When clicked, it calls the 'toggleTheme' function */}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
