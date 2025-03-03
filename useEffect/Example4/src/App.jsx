import { useEffect, useState } from "react";

function App() {
  // State hook to keep track of the current user ID
  const [userId, setUserId] = useState(1);

  // State hook to store the fetched user data
  const [user, setUser] = useState(null);

  // useEffect hook to fetch user data whenever the userId changes
  useEffect(() => {
    // Fetch user data based on the current userId
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json()) // Parse the response as JSON
      .then(data => setUser(data)); // Set the fetched data into the 'user' state
  }, [userId]); // Dependency array ensures the effect runs whenever 'userId' changes

  return (
    <>
      {/* Button to increment the userId and fetch the next user's data */}
      <button onClick={() => setUserId(userId + 1)}>Next User</button>
      <h3>User Data</h3>

      {/* Display the fetched user data as a formatted JSON string */}
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}

export default App;
