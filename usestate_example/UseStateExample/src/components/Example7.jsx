import { useState } from 'react' // Importing useState hook from React


//A simple form where a user can type their name and submit it.

function Example7() {
  // useState hook is used to create a state variable 'Name' with an initial value of an empty string
  const [Name, setName] = useState('')

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevents the default form submission behavior 
    alert(`Name entered: ${Name}`); // Displays an alert with the entered name
  }

  // Function to handle input changes and update the state
  function handleChange(e) {
    setName(e.target.value) // Updates the 'Name' state with the current input value
  }

  return (
    <>
      {/* Form element with an onSubmit event listener */}
      <form onSubmit={handleSubmit}>
        {/* Input field with an onChange event to update the state */}
        <input onChange={handleChange} placeholder='Enter Name '/>
        {/* Submit button to trigger the form submission */}
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Example7
