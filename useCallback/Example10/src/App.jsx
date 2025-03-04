import React, { useState, useCallback } from "react";

export default function App() {
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    alert(`You typed: ${text}`);
  }, [text]); // Only updates when text changes

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>Show Text</button>
    </div>
  );
}
