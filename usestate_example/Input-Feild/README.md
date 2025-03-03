# React + Vite

Why Use useState?
The state allows React to track input field values dynamically.


State Management:

The useState hook is used to create a state variable Name to store the input value.
setName updates the state whenever the user types in the input field.
Handling Input Changes:s

The handleChange function is triggered whenever the user types in the input field.
It updates the Name state with the current value of the input.
Handling Form Submission:

When the form is submitted, handleSubmit is triggered.
It prevents the default form submission behavior (e.preventDefault()).
It then shows an alert displaying the name entered by the user.