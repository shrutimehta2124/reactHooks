import { useState } from 'react'

import { useMemo } from 'react';

function Example4() {
  // State to store the count, which represents the person's age
  const [count, setCount] = useState(0);

  // useMemo is used to memoize the 'person' object.
  // This ensures the 'person' object is only recreated when 'count' changes,
  // rather than on every re-render.
  const person = useMemo(() => ({ name: 'shruti mehta', age: count }), [count]);

  return (
    <div>
      <p>{`Name: ${person.name}, Age: ${person.age}`}</p>
      <button onClick={() => setCount(count + 1)}>Increment Age</button>
    </div>
  );
}

export default Example4;
