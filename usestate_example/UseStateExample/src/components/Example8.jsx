import React, { useState } from "react";

function Example8() {
    // useState hook to manage user object with name and age properties
  const [user, setUser] = useState({ name: "", age: "" });

  return (
    <div>
        {/* Input field for the name */}
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}// Updates name property while preserving other state properties
      />
        {/* Input field for the age */} 
      <input
        type="number"
        placeholder="Age"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}// Updates name property while preserving other state properties
      />
      {/* Displaying user input dynamically */}
      <h3>Name: {user.name}  Age: {user.age}</h3>
    </div>
  );
}

export default Example8;
