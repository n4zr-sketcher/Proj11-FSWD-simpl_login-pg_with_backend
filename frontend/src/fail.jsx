import { Link } from "react-router-dom";

export default function Fail() {
  return (
    <div className="auth-card stagger-item stagger-1" style={{ textAlign: "center", maxWidth: "420px" }}>
      <div style={{ fontSize: "36px", marginBottom: "12px" }}>⚠️</div>
      <h2 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "8px" }}>
        Authentication Failed
      </h2>
      <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "20px" }}>
        The email or password you entered was invalid.
      </p>
      <Link to="/" className="submit-btn" style={{ textDecoration: "none" }}>
        Try Again
      </Link>
    </div>
  );
}
