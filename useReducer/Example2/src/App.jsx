import React, { useReducer } from 'react';

// Initial state setup, where isOn is initially false (the switch is off)
const initialState = { isOn: false };

// Reducer function handles state changes based on actions
function reducer(state, action) {
  switch (action.type) {
    // 'toggle' action will invert the current state of isOn
    case 'toggle':
      return { isOn: !state.isOn };  // Return the new state with isOn flipped
    default:
      return state;  // Return the current state if no recognized action type
  }
}

function App() {
  // useReducer hook is used for state management with the reducer and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* Conditionally render text based on the state of isOn */}
      <p>{state.isOn ? 'On' : 'Off'}</p>
      
      {/* Button triggers the toggle action to change the state */}
      <button onClick={() => dispatch({ type: 'toggle' })}>Toggle</button>
    </div>
  );
}

export default App;
