import React, { useState, useCallback } from "react";

export default function App() {
  const [data, setData] = useState(null);  // State to store fetched data

  // useCallback is used here to memoize the fetchData function
  // The function is only recreated if the dependencies change. Since we have an empty dependency array, 
  // it will only be created once when the component mounts.
  const fetchData = useCallback(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const result = await response.json();
    setData(result);  // Sets the fetched data into the 'data' state
  }, []);  // Empty dependency array means the function will only be created once

  return (
    <div>
      {/* Button that triggers the fetchData function when clicked */}
      <button onClick={fetchData}>Fetch Data</button>
      
      {/* Display the fetched data in a formatted way if 'data' is not null */}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
