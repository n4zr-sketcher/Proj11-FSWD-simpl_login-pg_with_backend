import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  // Step 1: Create state to store user input and errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Hook to redirect/navigate to another page
  const navigate = useNavigate();

  // Step 2: Handle form submit
  async function handleLogin(e) {
    e.preventDefault(); // Prevents the browser from reloading the page
    setError(""); // Reset any previous error message

    // Frontend validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 5) {
      setError("Password must be at least 5 characters.");
      return;
    }

    // Step 3: Send data to Express backend
    try {
      setLoading(true);

      const response = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      });

      // If login is successful, go to the Dashboard page
      if (response.data.success) {
        navigate("/dashboard");
      }
    } catch (err) {
      // If backend returns an error (401), show the message
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("Cannot connect to server. Make sure backend is running.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <h1 className="title">Sign In</h1>
      <p className="subtitle">Enter your email and password to continue</p>

      {/* Show error message if something went wrong */}
      {error && <div className="error-box">{error}</div>}

      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="nazeer@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="button" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      {/* Test details for beginner practice */}
      <div className="hint-box">
        <strong>Demo Credentials:</strong><br />
        Email: <code>nazeer@example.com</code><br />
        Password: <code>12345</code>
      </div>
    </div>
  );
}

export default App;
