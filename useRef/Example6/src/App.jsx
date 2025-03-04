import { useRef } from "react";

function App() {
  // useRef is used to create a reference to the target section for scrolling
  const sectionRef = useRef(null);

  // handleScroll is called when the button is clicked
  const handleScroll = () => {
    // scrollIntoView smoothly scrolls to the element referenced by sectionRef
    // scrollview is method that let you scroll an element into the visible area of the browser window
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Button that triggers the scrolling when clicked */}
      <button onClick={handleScroll}>Scroll to Section</button>
      
      {/* A section with height to create space and make the page scrollable */}
      <div style={{ height: "100vh" }}>Scroll down</div>
      
      {/* Target section where the page will scroll to */}
      <div 
        ref={sectionRef} 
        style={{ background: "lightgray", padding: "50px" }}
      >
        Target Section
      </div>
    </div>
  );
}

export default App;

