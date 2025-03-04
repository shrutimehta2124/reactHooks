import React, { useState, useMemo } from "react";

function App() {
    // State for storing the input number
    const [number, setNumber] = useState(0);

    // useMemo is used here to memoize the squared value of 'number'.
    // This means the square of the number will only be recalculated when the number changes.
    const squaredNum = useMemo(() => squareNum(number), [number]);

    // State for storing the counter value
    const [counter, setCounter] = useState(0);

    // Handler for the input field that updates the 'number' state
    const onChangeHandler = (e) => {
        setNumber(e.target.value);
    };

    // Handler for the button click that increments the 'counter' state
    const counterHander = () => {
        setCounter(counter + 1);
    };

    // Function to square the given number
    function squareNum(number) {
        console.log("Squaring will be done!"); // Log to demonstrate when the calculation happens
        return Math.pow(number, 2); // Square the number and return the result
    }

    return (
        <div className="App">
         
            <input
                type="number"
                placeholder="Enter a number"
                value={number}
                onChange={onChangeHandler} 
            ></input>

            {/* Display the squared number */}
            <div>OUTPUT: {squaredNum}</div>

            {/* Button to increment the counter */}
            <button onClick={counterHander}>Counter ++</button>

            {/* Display the current counter value */}
            <div>Counter : {counter}</div>
        </div>
    );
}

export default App;
