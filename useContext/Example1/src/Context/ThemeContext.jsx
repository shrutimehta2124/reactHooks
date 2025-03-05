import { createContext, useState, useEffect, useCallback } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.style.background = theme === "light" ? "#f0f0f0" : "#222"; // Apply theme globally
        document.body.style.color = theme === "light" ? "#000" : "#fff";
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
