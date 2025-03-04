import React, { useReducer } from 'react';

const initialState = { todos: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { todos: [...state.todos, action.payload] };
    case 'remove':
      return { todos: state.todos.filter(todo => todo !== action.payload) };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = React.useState('');

  return (
    <div>
      <h2>ToDo </h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={() => dispatch({ type: 'add', payload: newTodo })}>Add</button>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => dispatch({ type: 'remove', payload: todo })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;