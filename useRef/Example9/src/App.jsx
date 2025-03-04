import React, { useRef } from "react";

function App() {
  // Create a reference to the box element
  const boxRef = useRef(null);

  // Function to animate the box
  const animateBox = () => {
    // Access the box and change its position to animate it
    const box = boxRef.current;

    // Reset position before starting animation
    box.style.transition = "transform 2s ease";
    box.style.transform = "translateX(300px)";
  };

  return (
    <div>
      {/* Button to trigger the animation */}
      <button onClick={animateBox}>Animate Box</button>

      {/* The box we are going to animate */}
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "lightblue",
          marginTop: "20px",
        }}
      ></div>
    </div>
  );
}

export default App;
