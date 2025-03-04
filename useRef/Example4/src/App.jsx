import { useRef } from "react"; // Import the useRef hook to hold the timer reference

function App() {
  // Create a reference to store the timer ID returned by setTimeout
  const timerRef = useRef(null);

  // Function to start the timer
  const startTimer = () => {
    // Start a timer that shows an alert after 3 seconds
    timerRef.current = setTimeout(() => {
      alert("Timer finished!"); // Display an alert when the timer finishes
    }, 3000); // 3000 milliseconds (3 seconds) delay
  };

  // Function to clear the timer if it's running
  const clearTimer = () => {
    clearTimeout(timerRef.current); // Clears the timeout using the stored timer ID
  };

  return (
    <div>
      <p> Display an alert when the timer finishes  3 seconds</p>
      {/* Button to start the timer */}
      <button onClick={startTimer}>Start Timer</button>
      
      {/* Button to clear the timer */}
      <button onClick={clearTimer}>Clear Timer</button>
    </div>
  );
}

export default App;
