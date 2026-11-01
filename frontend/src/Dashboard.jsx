import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-slate-100 via-sky-50/50 to-indigo-50/40">
      {/* Apple iOS Translucent Glass Card */}
      <div className="w-full max-w-sm bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.03)] rounded-3xl p-7 text-center">
        
        {/* Apple Style Avatar */}
        <div className="w-16 h-16 bg-gradient-to-tr from-[#007AFF] to-[#34C759] rounded-full mx-auto flex items-center justify-center text-white font-bold text-2xl shadow-[0_8px_20px_rgba(0,122,255,0.25)] mb-4">
          N
        </div>

        <h1 className="text-xl font-bold tracking-tight text-slate-900">Welcome, Nazeer</h1>
        <p className="text-xs text-slate-500 mt-1">nazeer@example.com</p>

        {/* Apple Inset Grouped Info Box */}
        <div className="bg-slate-100/70 border border-slate-200/80 rounded-2xl overflow-hidden divide-y divide-slate-200/70 text-left my-5 text-xs">
          <div className="flex justify-between items-center px-4 py-3">
            <span className="text-slate-500 font-medium">Account Status</span>
            <span className="font-semibold text-[#34C759] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#34C759]"></span>
              Active
            </span>
          </div>
          <div className="flex justify-between items-center px-4 py-3">
            <span className="text-slate-500 font-medium">Security</span>
            <span className="font-semibold text-slate-800">Two-Factor Protected</span>
          </div>
          <div className="flex justify-between items-center px-4 py-3">
            <span className="text-slate-500 font-medium">Session</span>
            <span className="font-semibold text-[#007AFF]">Local Node 3000</span>
          </div>
        </div>

        {/* Log Out Button */}
        <button
          onClick={handleLogout}
          className="w-full py-3 bg-red-50 hover:bg-red-100 text-red-600 active:scale-[0.98] font-semibold text-sm rounded-xl transition-all duration-150 cursor-pointer"
        >
          Sign Out
        </button>

      </div>
    </div>
  );
}

export default Dashboard;
