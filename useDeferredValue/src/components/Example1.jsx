import { useState, useDeferredValue } from 'react';

function Example1() {
  const [query, setQuery] = useState('');
  // Deferring the query value, so the displayed query lags behind
  const deferredQuery = useDeferredValue(query);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <p>Showing results for: {deferredQuery}</p> {/* Display the deferred query */}
    </>
  );
}

export default Example1;