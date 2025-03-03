import React, { useState } from 'react';

function App() {
  // state variable 'searchQuery' to keep track of the user's search input.
  const [searchQuery, setSearchQuery] = useState('');
  
  // Step 2: List of items that the user can search through
  const items = ['Apple', 'Banana', 'Cherry', 'Date'];

  // Step 3: Filter the items based on the search query entered by the user
  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(searchQuery.toLowerCase()) // Case-insensitive search
  );

  return (
    <div>
      {/* Step 4: Input field for the user to type their search query */}
      <input 
        type="text" 
        value={searchQuery} // Bind the input value to the state variable 'searchQuery'
        onChange={(e) => setSearchQuery(e.target.value)} // Update the state whenever the user types
        placeholder="Search items" // Placeholder text in the search bar
      />
      
      {/* Step 5: Display the filtered list of items or a message if no items match */}
      <ul>
        {/* Step 6: Conditional rendering - Check if any items match the search query */}
        {filteredItems.length === 0 ? (
          // If no items match, show a message saying "No items found"
          <li>No items found</li>
        ) : (
          // If there are matching items, map over them and display each one in a list item (<li>)
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        )}
      </ul>
    </div>
  );
}

export default App;
