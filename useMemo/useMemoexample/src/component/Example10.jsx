import React, { useState, useMemo } from 'react';

function Example10() {
  // State to hold the value of 'n' for the Fibonacci calculation (default  10)
  const [n, setN] = useState(10);

  // Memoizing the Fibonacci result to avoid unnecessary recalculation on every render
  const fib = useMemo(() => {
    // Helper function to calculate Fibonacci recursively
    const calculateFib = (n) => {
      if (n <= 1) return n; // if n is 0 or 1, return n
      return calculateFib(n - 1) + calculateFib(n - 2); // Recursive call
    };

    return calculateFib(n); // Calculate and return the Fibonacci number for the given n
  }, [n]); // Recalculate the Fibonacci number only when 'n' changes

  return (
    <div>
      {/* Display the calculated Fibonacci number */}
      <h3>Fibonacci of {n}: {fib}</h3>

      {/* Button to increment 'n' and trigger a recalculation of the Fibonacci number */}
      <button onClick={() => setN(n + 1)}>Increment N</button>
    </div>
  );
}

export default Example10;
