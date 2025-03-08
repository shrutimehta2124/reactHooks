import React, { useState, useImperativeHandle, forwardRef } from 'react';

// Child component: CustomInput
const CustomInput = forwardRef((props, ref) => {
  const [value, setValue] = useState('');
  
  // Exposing focus and clear method to parent via useImperativeHandle
  useImperativeHandle(ref, () => ({
    focus: () => {
      document.getElementById("input-field").focus();
    },
    clear: () => {
      setValue('');
    }
  }));

  return <input id="input-field" value={value} onChange={e => setValue(e.target.value)} />;
});

// Parent component
function Example1() {
  const inputRef = React.createRef();
  
  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <button onClick={() => inputRef.current.clear()}>Clear Input</button>
    </div>
  );
}


export default Example1;