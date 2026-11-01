const express = require("express");
const cors = require("cors");

const app = express();

// 1. Allow React frontend to connect to this server
app.use(cors());

// 2. Allow server to read JSON sent from the frontend
app.use(express.json());

// 3. Simple Mock user credentials for testing
const MOCK_EMAIL = "nazeer@example.com";
const MOCK_PASSWORD = "12345";

// 4. POST route to check login credentials
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check if email and password match
  if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
    return res.json({ 
      success: true, 
      message: "Login successful!" 
    });
  } else {
    return res.status(401).json({ 
      success: false, 
      message: "Invalid email or password!" 
    });
  }
});

// 5. Start the server on port 3000
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
