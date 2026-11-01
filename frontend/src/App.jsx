import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  // 1. Simple state variables for user input and status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // 2. Handle login form submission
  async function handleLogin(e) {
    e.preventDefault();
    setError(""); // Reset error message

    // Simple frontend validation
    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 5) {
      setError("Password must be at least 5 characters long.");
      return;
    }

    // 3. Send credentials to Express backend
    try {
      setLoading(true);

      const response = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      });

      // If login succeeds, navigate to dashboard
      if (response.data.success) {
        navigate("/dashboard");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("Cannot connect to server. Ensure backend is running on port 3000.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-slate-100 via-sky-50/50 to-indigo-50/40">
      {/* Apple iOS Translucent Glass Card */}
      <div className="w-full max-w-sm bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.03)] rounded-3xl p-7 text-center">
        
        {/* Apple iOS App Icon Glyphs */}
        <div className="w-14 h-14 bg-gradient-to-b from-[#007AFF] to-[#005bb5] rounded-2xl shadow-[0_6px_16px_rgba(0,122,255,0.3)] mx-auto flex items-center justify-center text-white mb-4">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-xl font-bold tracking-tight text-slate-900">Sign in with Apple ID</h1>
        <p className="text-xs text-slate-500 mt-1">Enter your credentials to access your account</p>

        {/* iOS-Style Error Banner */}
        {error && (
          <div className="mt-4 p-3 bg-red-50/90 border border-red-200/80 text-red-700 text-xs rounded-xl flex items-center gap-2 text-left">
            <svg className="w-4 h-4 shrink-0 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="mt-4">
          {/* iOS Inset Grouped Input Container */}
          <div className="bg-slate-100/70 border border-slate-200/80 rounded-2xl overflow-hidden divide-y divide-slate-200/70 text-left">
            
            {/* Email Field */}
            <div className="px-4 py-2.5 focus-within:bg-white transition-colors duration-150">
              <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                Email / Apple ID
              </label>
              <input
                type="email"
                placeholder="nazeer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>

            {/* Password Field */}
            <div className="px-4 py-2.5 focus-within:bg-white transition-colors duration-150">
              <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>

          </div>

          {/* Apple iOS System Blue Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 bg-[#007AFF] hover:bg-[#0071E3] active:scale-[0.98] text-white font-semibold text-sm rounded-xl shadow-sm transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Continue"}
          </button>
        </form>

        {/* Demo Credentials Helper Pill */}
        <div className="mt-5 p-3 bg-slate-50/80 border border-slate-200/60 rounded-xl text-left text-xs text-slate-500 space-y-1">
          <div className="font-semibold text-slate-700">Demo Account:</div>
          <div>Email: <code className="text-[#007AFF]">nazeer@example.com</code></div>
          <div>Password: <code className="text-[#007AFF]">12345</code></div>
        </div>

      </div>
    </div>
  );
}

export default App;
