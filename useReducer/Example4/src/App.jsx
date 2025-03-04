import React, { useReducer } from 'react';

// Initial state with two properties: name (starts as an empty string) and email (also starts as an empty string)
const initialState = { name: '', email: '' };

// Reducer function defines how the state should be updated based on the action received
function reducer(state, action) {
  switch (action.type) {
    // If the action type is 'updateName', update the name property with the value in payload
    case 'updateName':
      return { ...state, name: action.payload };
      
    // If the action type is 'updateEmail', update the email property with the value in payload
    case 'updateEmail':
      return { ...state, email: action.payload };
      
    // Default case, return the current state if the action type doesn't match
    default:
      return state;
  }
}

function App() {
  // useReducer hook to manage the state, using the reducer function and the initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* Input for name */}
      <input
        type="text"
        value={state.name}  // The value of the name input is controlled by the state
        onChange={(e) => 
          // When the user types, dispatch an action to update the name
          dispatch({ type: 'updateName', payload: e.target.value })
        }
        placeholder="Name"  // Placeholder for the name input field
      />
      
      {/* Input for email */}
      <input
        type="email"
        value={state.email}  // The value of the email input is controlled by the state
        onChange={(e) => 
          // When the user types, dispatch an action to update the email
          dispatch({ type: 'updateEmail', payload: e.target.value })
        }
        placeholder="Email"  // Placeholder for the email input field
      />

      {/* Display the entered data below the input fields */}
      <div>
        <h3>Entered Data:</h3>
        {/* Display the name entered by the user */}
        <p><strong>Name:</strong> {state.name}</p>
        {/* Display the email entered by the user */}
        <p><strong>Email:</strong> {state.email}</p>
      </div>
    </div>
  );
}

export default App;
