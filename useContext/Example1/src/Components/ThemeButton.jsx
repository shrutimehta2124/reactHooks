import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemeButton = () => {
    const { toggleTheme, theme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} style={{
            padding: "10px 20px",
            cursor: "pointer",
            marginTop: "20px",
            background: theme === "light" ? "#000" : "#fff",
            color: theme === "light" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px"
        }}>
            Toggle Theme
        </button>
    );
};

export default ThemeButton;
