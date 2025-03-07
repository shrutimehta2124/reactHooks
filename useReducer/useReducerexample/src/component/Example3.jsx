import React, { useReducer } from 'react';

// Initial state has two properties: count (starts at 0) and name (starts as 'shruti')
const initialState = { count: 0, name: 'shruti' };

// Reducer function defines how the state should change based on the action
function reducer(state, action) {
  switch (action.type) {
    // If the action type is 'increment', increase the count by 1
    case 'increment':
      return { ...state, count: state.count + 1 };
      
    // If the action type is 'changeName', change the name to the value in payload
    case 'changeName':
      return { ...state, name: action.payload };
      
    // Default case, return current state if no recognized action type
    default:
      return state;
  }
}

function Example3() {
  // useReducer hook to manage the state, using the reducer and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* Display the current name */}
      <p>{state.name}</p>
      
      {/* Display the current count */}
      <p>Count: {state.count}</p>
      
      {/* Button to trigger 'increment' action, which increases the count */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      
      {/* Button to trigger 'changeName' action, which changes the name to 'shreya' */}
      <button onClick={() => dispatch({ type: 'changeName', payload: 'shreya' })}>
        Change Name
      </button>
    </div>
  );
}

export default  Example3;
