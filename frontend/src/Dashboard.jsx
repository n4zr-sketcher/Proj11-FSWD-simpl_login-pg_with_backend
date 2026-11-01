import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  // Redirect back to login page
  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="card">
      <h1 className="title">🎉 Dashboard</h1>
      <p className="subtitle">Login Successful! Welcome to your account.</p>

      <button onClick={handleLogout} className="button">
        Log Out
      </button>
    </div>
  );
}

export default Dashboard;
