import { useReducer } from 'react'

function Example1() {
  const initialState = { count: 0 };  // Step 1: Define the initial state.
  function reducer(state, action) {  // Step 2: Define the reducer function.
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };  // Increment the count
      case "decrement":
        return { count: state.count - 1 };  // Decrement the count
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);  // Step 3: Use the useReducer hook


  return (
    <>  
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <h2>Count: {state.count}</h2>  {/* Step 5: Display the updated state*/}

    </>
  )
}

export default Example1
