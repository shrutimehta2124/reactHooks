import { useRef, useEffect, useState } from "react";

function Example6() {
  // useRef to keep a reference to the div element
  const ref = useRef(null);
  
  // useState to control whether the message is visible or not
  const [isOpen, setIsOpen] = useState(false);

  // useEffect to listen for clicks outside the box
  useEffect(() => {
    // This function will be called whenever a click happens
    const handleClickOutside = (event) => {
      // Check if the click happened outside the div (ref.current points to the div)
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false); // Close the message if the click is outside
      }
    };

    // Add the event listener when the component is mounted
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <div ref={ref} style={{ border: "1px solid", padding: "20px" }}>
      {/* Button to toggle the message */}
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      
      {/* Only show the message if isOpen is true */}
      {isOpen && <p>Click outside to close</p>}
    </div>
  );
}

export default Example6;
