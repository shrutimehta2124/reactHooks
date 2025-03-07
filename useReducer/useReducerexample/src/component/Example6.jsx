import React, { useReducer } from 'react';

const initialState = { currentPage: 1, totalPages: 10 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'next':
      return { ...state, currentPage: Math.min(state.currentPage + 1, state.totalPages) };
    case 'previous':
      return { ...state, currentPage: Math.max(state.currentPage - 1, 1) };
    default:
      return state;
  }
};

function Example6() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Current Page: {state.currentPage}</p>
      <button onClick={() => dispatch({ type: 'previous' })}>Previous</button>
      <button onClick={() => dispatch({ type: 'next' })}>Next</button>
    </div>
  );
}
export default Example6;