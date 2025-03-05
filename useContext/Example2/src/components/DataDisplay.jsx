//fetch data from api
import React from 'react';
import { useData } from '../contexts/DataContext';

const DataDisplay = () => {
  const data = useData();

  return (
    <div>
      <h2>Data Example</h2>
      {data ? (
        <div>
          <h3>Title: {data.title}</h3>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DataDisplay;
