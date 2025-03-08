import React, { useState, useEffect } from 'react';
import {useDebugValue } from 'react';

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    
    fetchData();
  }, [url]);

  // Debugging the data loading state
  useDebugValue(loading ? 'Loading...' : 'Data loaded');

  return { data, loading };
}

function Example2() {
  const { data, loading } = useFetchData('https://jsonplaceholder.typicode.com/posts/1');

  return (
    <div>
      {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default Example2;
