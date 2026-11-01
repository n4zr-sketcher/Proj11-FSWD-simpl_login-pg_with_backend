# 🌟 Aura Workspace — Full-Stack Authentication Project

A clean, modern, and beginner-friendly full-stack authentication web application built using **React (Vite)** on the frontend and **Node.js (Express)** on the backend.

Designed with an original brand identity, light-mode aesthetics, input validation, and clear error handling.

---

## 📌 Table of Contents

- [Overview & Objectives](#-overview--objectives)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [1. Backend Setup](#1-backend-setup)
  - [2. Frontend Setup](#2-frontend-setup)
- [Demo Credentials](#-demo-credentials)
- [API Documentation](#-api-documentation)
- [How It Works (Beginner Guide)](#-how-it-works-beginner-guide)
- [Author & Notes](#-author--notes)

---

## 🎯 Overview & Objectives

This project demonstrates core full-stack web development fundamentals:
1. **Original Brand Identity:** Avoids cloning commercial services (Netflix, Spotify, Instagram) to prevent phishing flags and showcase authentic styling.
2. **Client-Server Architecture:** Decoupled React frontend (Port `5173`) and Express REST API (Port `3000`).
3. **Form Handling & Validation:** Client-side input validation for empty fields, email format, and password length.
4. **HTTP API Communication:** Asynchronous POST requests powered by Axios with complete `try / catch` error handling.
5. **Authentication Flow:** Server-side credential verification with status codes (`200 OK`, `401 Unauthorized`) and route navigation to a dummy Dashboard.

---

## ✨ Key Features

- **Modern Light Shade UI:** Centered, distraction-free card design with soft shadows and high-contrast typography.
- **Frontend Form Validation:**
  - Checks for empty input fields.
  - Validates email format (ensures `@` is present).
  - Enforces minimum password length (at least 5 characters).
- **Asynchronous Feedback:**
  - "Signing in..." button loading state to prevent double submissions.
  - Contextual error banners for invalid credentials or server errors.
- **Protected Navigation:**
  - Successful login redirects to `/dashboard`.
  - "Log Out" button clears user flow and redirects back to `/`.
- **Beginner-Friendly Codebase:**
  - Written with clean, readable React functional components and hooks (`useState`, `useNavigate`).
  - Plain, easy-to-understand CSS without heavy dependencies.

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | [React 19](https://react.dev/) | Component-based UI library |
| **Build Tool** | [Vite 8](https://vite.dev/) | Fast development server & bundler |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) | Client-side page navigation |
| **HTTP Client** | [Axios](https://axios-http.com/) | API communication with backend |
| **Styling** | Plain CSS (`index.css`) | Clean, accessible light shade styles |
| **Backend** | [Node.js](https://nodejs.org/) & [Express 5](https://expressjs.com/) | REST API server |
| **Middleware** | [CORS](https://www.npmjs.com/package/cors) | Cross-Origin Resource Sharing |

---

## 📂 Project Structure

```text
FUll stack train/
├── backend/
│   ├── index.js           # Express API server (Port 3000)
│   ├── package.json       # Backend dependencies (express, cors)
│   └── package-lock.json
│
└── frontend/
    ├── public/            # Static icons & assets
    ├── src/
    │   ├── App.jsx        # Login page component & form validation
    │   ├── Dashboard.jsx  # Dummy dashboard page displayed upon login
    │   ├── main.jsx       # React Router DOM configuration
    │   ├── index.css      # Clean light-shade CSS styles
    │   ├── success.jsx    # Legacy success route component
    │   └── fail.jsx       # Legacy failure route component
    ├── index.html         # HTML root file
    ├── package.json       # Frontend dependencies (react, axios, vite, router)
    └── README.md          # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run both the backend and frontend on your local machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (`v18.x` or higher recommended). Check by running:

```bash
node -v
npm -v
```

---

### 1. Backend Setup

1. Open your terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Start the Express server:
   ```bash
   node index.js
   ```
   *The terminal will output:*
   ```text
   Server running on http://localhost:3000
   ```

---

### 2. Frontend Setup

1. Open a second terminal window and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to:
   ```text
   http://localhost:5173/
   ```

---

## 🔑 Demo Credentials

Use these mock credentials to test authentication:

| Field | Value |
| :--- | :--- |
| **Email** | `nazeer@example.com` |
| **Password** | `12345` |

> *Tip: Any other credentials will trigger a red error banner: `"Invalid email or password!"`*

---

## 📡 API Documentation

### `POST /login`

Authenticates a user against static mock credentials.

- **URL:** `http://localhost:3000/login`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`

#### Request Body
```json
{
  "email": "nazeer@example.com",
  "password": "12345"
}
```

#### Success Response (`200 OK`)
```json
{
  "success": true,
  "message": "Login successful!"
}
```

#### Failure Response (`401 Unauthorized`)
```json
{
  "success": false,
  "message": "Invalid email or password!"
}
```

---

## 💡 How It Works (Beginner Guide)

### 1. Managing Input with `useState`
In `frontend/src/App.jsx`, each input field is connected to React state:
```jsx
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
```
Whenever the user types, the `onChange` event updates these variables in real-time.

### 2. Frontend Validation
Before sending network traffic, the code checks if the inputs are valid:
```jsx
if (!email || !password) {
  setError("Please fill in all fields.");
  return;
}
```
If an error is found, `return` stops the function and displays a red warning box.

### 3. Calling the API with `axios.post`
When validation passes, Axios sends the data as a JSON payload to Express:
```jsx
const response = await axios.post("http://localhost:3000/login", {
  email: email,
  password: password,
});

if (response.data.success) {
  navigate("/dashboard"); // Redirect to Dashboard
}
```

### 4. Express Handling the Request
In `backend/index.js`, Express parses the incoming JSON using `app.use(express.json())` and checks if the credentials match:
```javascript
if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
  return res.json({ success: true, message: "Login successful!" });
} else {
  return res.status(401).json({ success: false, message: "Invalid email or password!" });
}
```

---

## 📄 License & Notes

- **Educational Purpose:** Built as a full-stack learning project.
- **Originality Guarantee:** Created with unique styling to ensure portfolio suitability and compliance with interview best practices.

