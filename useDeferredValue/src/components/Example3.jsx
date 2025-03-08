import { useState, useDeferredValue } from 'react';

function Example3() {
  const [sortOrder, setSortOrder] = useState('asc');
  const deferredSortOrder = useDeferredValue(sortOrder);

  // Simulated large list of numbers
  const numbers = Array.from({ length: 10}, (_, index) => index + 1);

  // Sorting the numbers based on deferred sort order
  const sortedNumbers = [...numbers].sort((a, b) => {
    return deferredSortOrder === 'asc' ? a - b : b - a;
  });

  return (
    <>
      <button onClick={() => setSortOrder('asc')}>Sort Ascending</button>
      <button onClick={() => setSortOrder('desc')}>Sort Descending</button>

      <ul>
        {sortedNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </>
  );
}
export default Example3