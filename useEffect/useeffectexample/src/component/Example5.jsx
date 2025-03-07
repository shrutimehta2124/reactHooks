import { useEffect, useState } from "react";

function Example5() {
  // State hook to store the current time
  const [time, setTime] = useState(null);

  useEffect(() => {
    // Set up an interval to update the time every 1 second
    const interval = setInterval(() => {
      // Update the time state with the current time 
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Render the current time in an <h1> element
  return (<>
  <h1>Time:</h1><h1>{time}</h1>
  </>);
}

export default Example5;
