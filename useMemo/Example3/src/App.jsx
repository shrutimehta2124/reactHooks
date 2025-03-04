import React, { useMemo, useState } from 'react';

function App() {
  // State to store the list of numbers
  const [list, setList] = useState([5, 3, 8, 1, 2]);

  // useMemo ensures that the sorting only happens when the list of numbers changes
  // If 'list' hasn't changed, it won't re-run the sort, improving performance
  const sortedList = useMemo(() => {
    console.log('Sorting list...'); 
    // Sort the list in ascending order
    return [...list].sort((a, b) => a - b);
  }, [list]); // The sorting will only re-run when 'list' changes

  return (
    <div>
      <p>Sorted List: {sortedList.join(', ')}</p>
      <button onClick={() => setList([...list, Math.floor(Math.random() * 10)])}>Add Random Number</button>
    </div>
  );
}

export default App;
