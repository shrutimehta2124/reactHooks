import React, { useState, useMemo } from 'react';

function App() {
  // State to track the sorting key (either 'name' or 'age')
  const [sortKey, setSortKey] = useState('name');
  
  // State to track the sorting direction ('asc' or 'desc')
  const [direction, setDirection] = useState('asc');
  
  // Memoize the data array to avoid re-creating it on every render
  const data = useMemo(() => {
    return [
      { name: 'shruti', age: 30 },
      { name: 'shreya', age: 22 },
      { name: 'ria', age: 45 },
      { name: 'neha', age: 34 }
    ];
  }, []); 

  // Memoize the sorted data based on 'sortKey' and 'direction'
  // This prevents re-sorting the data on every render and only does so when the relevant states change
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return direction === 'asc' ? -1 : 1; // Ascending or descending order
      if (a[sortKey] > b[sortKey]) return direction === 'asc' ? 1 : -1;
      return 0; // Return 0 if the values are equal
    });
  }, [data, sortKey, direction]); // Recompute sorted data only when 'data', 'sortKey', or 'direction' changes

  return (
    <div>
      {/* Buttons to control sorting */}
      <button onClick={() => setSortKey('name')}>Sort by Name</button>
      <button onClick={() => setSortKey('age')}>Sort by Age</button>
      
      {/* Toggle button to switch between ascending and descending order */}
      <button onClick={() => setDirection(direction === 'asc' ? 'desc' : 'asc')}>
        Toggle Direction
      </button>

      {/* Table to display sorted data */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop over the sorted data and display each row */}
          {sortedData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
