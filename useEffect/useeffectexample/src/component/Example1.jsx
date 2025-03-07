import { useState, useEffect } from "react"; 

function Example1() {
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
      <p>Note :- On Clicking the Button the Vale get Changed on titlt </p>
    </div>
  );
}
export default Example1;
