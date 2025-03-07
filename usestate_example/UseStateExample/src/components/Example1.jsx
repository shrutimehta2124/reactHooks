import { useState } from 'react';


function Example1() {
  // State to store the user input text
  const [text, setText] = useState("");

  return (
    <>
      {/* Textarea for user input */}
      <textarea  
        rows="4"
        cols="50"
        placeholder="Type here..."
        value={text}  // Controlled component bound to state
        onChange={(e) => setText(e.target.value)}  // Update state on input change
      />

      {/* Display word count */}
      <p>
        Word count: {text.trim() ? text.trim().split(/\s+/).length : 0}
        {/* 
          - `text.trim()` removes leading/trailing spaces to avoid extra counts
          - `.split(/\s+/)` splits the text by spaces to count words
          - If `text` is empty after trimming, return `0` instead of 1 (edge case)
        */}
      </p>

      {/* Display character count */}
      <p>
        Character count: {text.length}
        {/* 
          - `text.length` gives the total number of characters (including spaces)
        */}
      </p>
    </>
  );
}

export default Example1;
