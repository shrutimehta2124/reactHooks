import { useState, useEffect } from "react"; 
import "./App.css"; 

function App() {
  // State variable to keep track of button clicks
  const [count, setCount] = useState(0); 

  // useEffect hook to update the document title whenever 'count' changes
  useEffect(() => {
    document.title = `You clicked ${count} times`; // Updates the title dynamically
  }, [count]); // Dependency array ensures the effect runs only when 'count' changes

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times{" "}
      </button>
    </div>
  );
}
export default App;
