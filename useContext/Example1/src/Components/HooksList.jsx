import { useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import UseStateHook from "./hooks/UseStateHook";
import UseEffectHook from "./hooks/UseEffectHook";
import UseContextHook from "./hooks/UseContextHook";
import UseReducerHook from "./hooks/UseReducerHook";
import UseCallbackHook from "./hooks/UseCallbackHook";
import UseMemoHook from "./hooks/UseMemoHook";

const hookComponents = {
    useState: <UseStateHook />,
    useEffect: <UseEffectHook />,
    useContext: <UseContextHook />,
    useReducer: <UseReducerHook />,
    useCallback: <UseCallbackHook />,
    useMemo: <UseMemoHook />
};

const HooksList = () => {
    const [selectedHook, setSelectedHook] = useState(null);
    const { theme } = useContext(ThemeContext);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>React Hooks</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {Object.keys(hookComponents).map((hook, index) => (
                    <li key={index} onClick={() => setSelectedHook(hook)} style={{
                        cursor: "pointer",
                        padding: "10px",
                        border: "1px solid #ddd",
                        margin: "5px",
                        borderRadius: "5px",
                        background: theme === "light" ? "#f5f5f5" : "#fff", // Change background in dark mode
                        color: "#000" // Text should always be black
                    }}>
                        {hook}
                    </li>
                ))}
            </ul>

            {selectedHook && (
                <div style={{
                    marginTop: "20px",
                    padding: "10px",
                    border: "1px solid #333",
                    borderRadius: "5px",
                    background: theme === "light" ? "#fafafa" : "#fff", // Ensure readability
                    color: "#000" // Text remains black
                }}>
                    {hookComponents[selectedHook]}
                    <button onClick={() => setSelectedHook(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default HooksList;
