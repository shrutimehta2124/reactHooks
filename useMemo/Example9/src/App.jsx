import React, { useState, useMemo } from 'react';

function App() {
  // State to hold the current date (initially set to the current date and time)
  const [date, setDate] = useState(new Date());

  // Memoizing the formatted date to avoid unnecessary recalculation on every render
  const formattedDate = useMemo(() => {
    console.log('Formatting date...'); // Log to show when the date is being formatted
    return date.toLocaleString(); // Format the date to a readable string using the user's locale
  }, [date]); // Recalculate the formatted date only when the 'date' state changes

  return (
    <div>
      {/* Display the formatted date */}
      <p>Formatted Date: {formattedDate}</p>

      {/* Button to update the current date */}
      <button onClick={() => setDate(new Date())}>Update Date</button>
    </div>
  );
}

export default App;
