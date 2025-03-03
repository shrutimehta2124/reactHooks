import React, { useState } from "react";

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    setSelectedOptions((prevOptions) =>
      prevOptions.includes(value)
        ? prevOptions.filter((option) => option !== value) // Remove if already selected
        : [...prevOptions, value] // Add new selection
    );
  };

  return (
    <div>
      <h2>Select Your Interests:</h2>
      <label>
        <input
          type="checkbox"
          value="IceCream"
          checked={selectedOptions.includes("IceCream")}
          onChange={handleCheckboxChange}
        />
        IceCream
      </label>
      <label>
        <input
          type="checkbox"
          value="Pizza"
          checked={selectedOptions.includes("Pizza")}
          onChange={handleCheckboxChange}
        />
        Pizza
      </label>
      <label>
        <input
          type="checkbox"
          value="Chips"
          checked={selectedOptions.includes("Chips")}
          onChange={handleCheckboxChange}
        />
        Chips
      </label>

      <h3>Selected: {selectedOptions.join(", ") || "None"}</h3>
    </div>
  );
}

export default App;
