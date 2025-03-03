import { useEffect, useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!email) {
      setError("");
      return;
    }

    const isValidEmail = email.includes("@") && email.includes(".");
    setError(isValidEmail ? "" : "Invalid email format");
  }, [email]); // Runs when 'email' changes

  return (
    <div>
      <h3>Enter your email:</h3>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ border: error ? "2px solid red" : "2px solid green", padding: "8px" }}
      />
      <p style={{ color: "red" }}>{error}</p>
      <button disabled={!!error} style={{ marginTop: "10px" }}>
        Submit
      </button>
    </div>
  );
}


export default App
