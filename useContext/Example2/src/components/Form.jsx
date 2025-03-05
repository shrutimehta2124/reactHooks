import React from 'react';
import { useForm } from '../contexts/FormContext';

const Form = () => {
  const { formState, setFormState } = useForm();

  return (
    <div>
      <h2>Form Example</h2>
      <input
        type="text"
        placeholder="Name"
        value={formState.name}
        onChange={e => setFormState({ ...formState, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formState.email}
        onChange={e => setFormState({ ...formState, email: e.target.value })}
      />
      <div>
        <p>Name: {formState.name}</p>
        <p>Email: {formState.email}</p>
      </div>
    </div>
  );
};

export default Form;
