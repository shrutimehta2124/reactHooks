import React, { useState, useCallback } from "react";

// The Item component is wrapped with React.memo to prevent unnecessary re-renders.
// React.memo only re-renders the component when its props change.
const Item = React.memo(({ item, remove }) => (
  <div>
    {item} <button onClick={() => remove(item)}>Remove</button>
  </div>
));

export default function Example5() {
  // 'items' state holds the list of items to be displayed.
  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

  // 'removeItem' is the function to remove an item from the 'items' state.
  // We use useCallback to memoize the function and prevent unnecessary re-creations
  // of the 'removeItem' function on every render.
  const removeItem = useCallback((item) => {
    setItems((prev) => prev.filter((i) => i !== item));  // Removes the item from the list
  }, []);  // The empty dependency array ensures the function is memoized only once

  return (
    <div>
      {/* Render each item using the Item component. */}
      {/* 'remove' prop is passed the memoized 'removeItem' function */}
      {items.map((item) => (
        <Item key={item} item={item} remove={removeItem} />
      ))}
    </div>
  );
}
