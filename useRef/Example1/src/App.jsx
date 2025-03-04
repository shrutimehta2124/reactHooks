import React, { useRef } from 'react';

function App() {
    // Create a reference to the textarea element
    const focusPoint = useRef(null);

    // Function to handle button click event
    const onClickHandler = () => {
        // Set the value of the textarea to a specific sentence
        focusPoint.current.value = "pizaa,burger,choclate ";
        
        // Focus on the textarea, placing the cursor inside it
        focusPoint.current.focus();
    };

    return (
        <>
            {/* Button that triggers the onClickHandler when clicked */}
            <div>
                <button onClick={onClickHandler}>
                    ACTION
                </button>
            </div>

            {/* Label providing instructions for the user */}
            <label>
                Click on the action button to
                focus and populate the text.
            </label><br />

            {/* Textarea element that will be focused and populated with text */}
            <textarea ref={focusPoint} />
        </>
    );
};

export default App;
