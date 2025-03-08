import { useState, useDeferredValue, useEffect } from 'react';

function Example2() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const [data, setData] = useState(null);

  // Simulating data fetching after a delay
  useEffect(() => {
    if (deferredQuery) {
      setData('Loading...');
      setTimeout(() => {
        setData(`Results for "${deferredQuery}"`);
      }, 1000);
    }
  }, [deferredQuery]);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Type to fetch data"
      />
      <p>{data}</p> {/* Display the deferred data */}
    </>
  );
}

 export default Example2