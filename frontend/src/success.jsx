import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="auth-card stagger-item stagger-1" style={{ textAlign: "center", maxWidth: "420px" }}>
      <div style={{ fontSize: "36px", marginBottom: "12px" }}>🎉</div>
      <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "8px" }}>
        Login Succeeded!
      </h2>
      <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "20px" }}>
        Your credentials have been verified by the backend.
      </p>
      <Link to="/dashboard" className="submit-btn" style={{ textDecoration: "none" }}>
        Go to Dashboard
      </Link>
    </div>
  );
}
