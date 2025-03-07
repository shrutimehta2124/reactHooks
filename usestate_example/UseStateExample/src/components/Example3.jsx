import { useState } from 'react'

function Example3() {
  //initializes 'items' as an empty array
  const [items, setItems] = useState([]);

  function addItem ()
  {
  // Adding a new item by spreading the current 'items' array and appending a new item with a unique name
    setItems([...items, `Item ${items.length + 1}`]);  }
  return (
    <>
       { /* btn to add new item */}
        <button onClick={addItem}>Add Item</button>
         {/* List of items */}
        <ul>
              {/* Mapping through the 'items' array and displaying each item as a list element */}

        {items.map((item, index) => (
          
          <li key={index}>{item}</li>
          
        ))}
      </ul>
    </>
  )
}

export default Example3
