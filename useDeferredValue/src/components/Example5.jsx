import { useState, useDeferredValue } from 'react';

function Example5() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  const items = ["apple", "banana", "cherry", "date", "elderberry"];
  const filteredItems = items.filter(item => item.includes(deferredText));

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Filter list"
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p>No results</p>
        )}
      </ul>
    </>
  );
}

export default Example5