import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

function Example9() {
  const [state, dispatch] = useReducer(reducer, { isDarkMode: false });

  return (
    <div style={{ background: state.isDarkMode ? 'black' : 'white', color: state.isDarkMode ? 'white' : 'black' }}>
      <p>{state.isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
      <button onClick={() => dispatch({ type: 'toggle' })}>Toggle Mode</button>
    </div>
  );
}
export default Example9;