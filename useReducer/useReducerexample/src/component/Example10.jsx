import React, { useReducer } from 'react';

const initialState = { items: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { items: [...state.items, action.payload] };
    case 'remove':
      return { items: state.items.filter(item => item.id !== action.payload.id) };
    default:
      return state;
  }
};

function Example10() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const newItem = { id: 1, name: 'Item 1' };

  return (
    <div>
      <h3>Click on Button to add item </h3>
      <button onClick={() => dispatch({ type: 'add', payload: newItem })}>Add Item</button>
      <ul>
        {state.items.map(item => (
          <li key={item.id}>
            {item.name} <button onClick={() => dispatch({ type: 'remove', payload: item })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Example10;