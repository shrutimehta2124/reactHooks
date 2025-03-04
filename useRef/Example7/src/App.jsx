//calculate a value once and then display it without recalculating it on every render.
import React, { useRef } from 'react';
function App() {
  const expensiveValue = useRef(calculateExpensiveValue());

  function calculateExpensiveValue() {
    console.log('Calculating expensive value...');
    return 21+2; // Example value
  }

  return (
    <div>
      <p>Expensive Value: {expensiveValue.current}</p>
    </div>
  );
}

export default App
