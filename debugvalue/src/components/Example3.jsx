import React, { useState } from 'react';
import {useDebugValue } from 'react';

function useFormValidation(inputValue) {
  const isValid = inputValue.length >= 3;

  // Debugging the validation result
  useDebugValue(isValid ? 'Valid input' : 'Invalid input');

  return isValid;
}

function Example3() {
  const [input, setInput] = useState('');
  const isValid = useFormValidation(input);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert('Form submitted');
    } else {
      alert('Please enter a valid input');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter text" 
      />
      <button type="submit" disabled={!isValid}>Submit</button>
      {!isValid && <p style={{ color: 'red' }}>Input must be at least 3 characters long.</p>}
    </form>
  );
}

export default Example3;
