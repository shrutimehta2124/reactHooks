import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Navbar = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <nav style={{
            background: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            padding: "10px",
            textAlign: "center"
        }}>
            <h1>React Hooks App</h1>
        </nav>
    );
};

export default Navbar;
