# React + Vite
Step-by-Step Flow:
Initial State: The counter starts at 0 (initialState = { count: 0 }).
Dispatching Actions:
When you click the "Increment" button, it triggers dispatch({ type: "increment" }), which sends the action to the reducer.
The reducer then increases the count by 1 and returns the updated state.
When you click the "Decrement" button, it triggers dispatch({ type: "decrement" }), which decreases the count by 1.
State Update: React automatically re-renders the component, and the new count value is displayed.
