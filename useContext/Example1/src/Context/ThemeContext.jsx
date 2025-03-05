import { createContext, useState, useEffect, useCallback } from "react";

// Create a new context for managing the theme
export const ThemeContext = createContext();

// ThemeProvider component that will wrap the application and provide theme context
export const ThemeProvider = ({ children }) => {
    // Initialize the theme state, fetching from localStorage if available, default to "light"
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    // useCallback ensures that the toggleTheme function is memoized and does not change unless necessary
    const toggleTheme = useCallback(() => {
        // Toggle between "light" and "dark" themes
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    }, []); // Empty dependency array ensures the function remains the same across re-renders

    // useEffect hook is used to handle side effects when the theme changes
    useEffect(() => {
        // Store the current theme in localStorage to persist the theme across sessions
        localStorage.setItem("theme", theme);

        // Apply the theme styles globally by modifying the body's background and text color
        document.body.style.background = theme === "light" ? "#f0f0f0" : "#222"; // Light theme: #f0f0f0, Dark theme: #222
        document.body.style.color = theme === "light" ? "#000" : "#fff"; // Light theme: black text, Dark theme: white text
    }, [theme]); // Dependency on 'theme', so this effect runs whenever the theme changes

    // Provide the theme and toggleTheme function to children components
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children} {/* All child components will have access to the theme and toggleTheme */}
        </ThemeContext.Provider>
    );
};
