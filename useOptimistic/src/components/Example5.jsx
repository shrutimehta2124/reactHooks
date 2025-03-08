import React, { useState } from 'react';

function Example5() {
  const [isOn, setIsOn] = useState(false);
  const [optimisticState, setOptimisticState] = useState(null);

  const toggle = () => {
    // Save the optimistic state for rollback
    setOptimisticState(isOn);

    // Optimistically toggle the setting
    setIsOn(!isOn);

    // Simulate a delay (e.g., server call)
    setTimeout(() => {
      console.log(isOn ? 'Turned Off' : 'Turned On');
    }, 500);
  };

  const undoToggle = () => {
    // Rollback the setting to the previous state
    setIsOn(optimisticState);
    setOptimisticState(null);
  };

  return (
    <div>
      <h2>The setting is {isOn ? 'On' : 'Off'}</h2>
      <button onClick={toggle}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
      {optimisticState !== null && (
        <button onClick={undoToggle}>Undo Toggle</button>
      )}
    </div>
  );
}

export default Example5;
