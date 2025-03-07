import React, { useReducer, useEffect } from 'react';

const initialState = { time: 0, isRunning: false };

const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { ...state, isRunning: true };
    case 'stop':
      return { ...state, isRunning: false };
    case 'reset':
      return { ...state, time: 0 };
    case 'tick':
      return { ...state, time: state.time + 1 };
    default:
      return state;
  }
};

function Example7() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let interval;
    if (state.isRunning) {
      interval = setInterval(() => dispatch({ type: 'tick' }), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [state.isRunning]);

  return (
    <div>
      <p>Time: {state.time}s</p>
      <button onClick={() => dispatch({ type: 'start' })}>Start</button>
      <button onClick={() => dispatch({ type: 'stop' })}>Stop</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
export default Example7;