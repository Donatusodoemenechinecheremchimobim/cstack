"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { doc, onSnapshot } from "firebase/firestore";
import { 
  Shield, 
  Activity, 
  LifeBuoy,      // Changed Icon
  Receipt,       // Changed Icon
  Calendar,      // Changed Icon
  LogOut, 
  Loader2, 
  Check,
  ChevronRight
} from "lucide-react";
import { useAuth } from "../../context/AuthContext"; 
import { db, auth } from "../../lib/firebase"; 
import { cancelSubscription } from "../../lib/db"; 

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [diagnosticStatus, setDiagnosticStatus] = useState("idle");

  // 1. Protect Route
  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [user, loading, router]);

  // 2. Real-time Database
  useEffect(() => {
    if (user) {
      const unsub = onSnapshot(doc(db, "users", user.uid), (docSnapshot) => {
        if (docSnapshot.exists()) {
          setUserData(docSnapshot.data());
        } else {
          setUserData({ name: user.displayName, plan: "Free", status: "Inactive" });
        }
      });
      return () => unsub();
    }
  }, [user]);

  // --- DIAGNOSTICS LOGIC ---
  const runDiagnostics = () => {
    if (diagnosticStatus === "running") return;
    setDiagnosticStatus("running");
    setTimeout(() => {
      setDiagnosticStatus("safe");
      setTimeout(() => setDiagnosticStatus("idle"), 3000);
    }, 2000);
  };

  const handleCancel = async () => {
    if (confirm("Are you sure you want to downgrade to the Free Protocol?")) {
      try {
        await cancelSubscription(user.uid);
        alert("Subscription has been canceled.");
      } catch (error) {
        console.error("Error canceling:", error);
      }
    }
  };

  const handleSignOut = () => {
    auth.signOut();
    router.push("/");
  };

  // --- USEFUL BUSINESS ACTIONS (REAL ENGINE) ---
  const handleHubAction = (action) => {
    const phoneNumber = "2348144462467"; 
    let message = "";
    
    if (action === "support") {
      message = `SUPPORT REQUEST: I have a question or issue regarding my project (${user.email}).`;
    } else if (action === "billing") {
      message = `BILLING INQUIRY: I need an invoice or want to update my payment details.`;
    } else if (action === "meeting") {
      message = `SCHEDULING: I'd like to book a brief call to discuss project updates.`;
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  if (loading || !userData) return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <Loader2 size={48} className="text-white animate-spin mb-4 relative z-10" />
      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest relative z-10">
        Authenticating Secure Channel...
      </p>
    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 relative overflow-hidden selection:bg-blue-500/30">
      
      {/* BACKGROUND AMBIENCE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-white/5">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/10 overflow-hidden relative z-10">
                 {user?.photoURL ? (
                   <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center font-bold text-xl text-gray-500">
                     {user?.displayName?.charAt(0) || "U"}
                   </div>
                 )}
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Command Center</h1>
              <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                ONLINE // {userData.name.toUpperCase()}
              </div>
            </div>
          </div>
          
          <button 
            onClick={handleSignOut} 
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-400 transition-all text-xs font-bold uppercase tracking-widest text-gray-400"
          >
            <LogOut size={14} className="group-hover:-translate-x-1 transition-transform" /> Sign Out
          </button>
        </div>

        {/* MAIN DASHBOARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT: PLAN CARD (Span 7) */}
          <div className="lg:col-span-7 bg-neutral-900/40 border border-white/10 p-8 rounded-3xl relative overflow-hidden backdrop-blur-xl group hover:border-white/20 transition-colors duration-500">
             
             {/* Background Gradient */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl -translate-y-12 translate-x-12 pointer-events-none"></div>

             <div className="flex flex-col h-full justify-between relative z-10">
               <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Active Protocol</h2>
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 tracking-tighter mb-2">
                      {userData.plan || "Free"}
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                      <Shield size={12} />
                      {userData.status === 'Active' ? 'System Secured' : 'System Dormant'}
                    </div>
                  </div>
                  
                  {/* Visual Decoration */}
                  <div className="hidden md:block opacity-20 rotate-12">
                     <Shield size={80} strokeWidth={1} />
                  </div>
               </div>

               <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between gap-4">
                 <div className="text-xs text-gray-500 font-mono">
                    ID: {user.uid.slice(0, 8)}... <br/>
                    REGION: LAGOS_NODE_1
                 </div>

                 {userData.plan !== "Free" ? (
                   <button onClick={handleCancel} className="px-6 py-3 bg-red-500/5 hover:bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-xs font-bold uppercase tracking-widest transition-all hover:scale-105">
                     Deactivate
                   </button>
                 ) : (
                   <Link href="/pricing" className="px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-lg text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-105 flex items-center gap-2">
                     Upgrade System <ChevronRight size={14} />
                   </Link>
                 )}
               </div>
             </div>
          </div>

          {/* RIGHT: CLIENT HUB (Span 5) */}
          <div className="lg:col-span-5 bg-neutral-900/40 border border-white/10 p-8 rounded-3xl backdrop-blur-xl flex flex-col h-full relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
            
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
               <h2 className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">Client Hub</h2>
               
               {/* DIAGNOSTICS BUTTON */}
               <button 
                 onClick={runDiagnostics}
                 disabled={diagnosticStatus === "running"}
                 className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-[10px] font-bold uppercase tracking-wider ${
                   diagnosticStatus === "running" ? "bg-yellow-500/10 border-yellow-500/50 text-yellow-500" :
                   diagnosticStatus === "safe" ? "bg-green-500/10 border-green-500/50 text-green-500" :
                   "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                 }`}
               >
                  {diagnosticStatus === "running" ? <Loader2 size={12} className="animate-spin"/> : 
                   diagnosticStatus === "safe" ? <Check size={12}/> : <Activity size={12}/>}
                  {diagnosticStatus === "running" ? "SCANNING..." : 
                   diagnosticStatus === "safe" ? "100% STABLE" : "RUN DIAGNOSTIC"}
               </button>
            </div>

            <div className="space-y-3 flex-1">
               
               {/* 1. Tech Support */}
               <button 
                 onClick={() => handleHubAction("support")}
                 className="w-full group/btn relative p-4 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300"
               >
                 <div className="relative z-10 flex items-center gap-3">
                   <div className="p-2 bg-white/5 rounded-lg text-gray-300"><LifeBuoy size={18}/></div>
                   <div className="text-left">
                     <span className="block text-sm font-bold text-white">Tech Support</span>
                     <span className="block text-[10px] text-gray-500">Report bugs or issues</span>
                   </div>
                 </div>
               </button>

               {/* 2. Billing & Invoices */}
               <button 
                 onClick={() => handleHubAction("billing")}
                 className="w-full p-4 bg-white/5 border border-white/5 rounded-xl flex items-center gap-4 hover:bg-white/10 hover:border-white/20 transition-all text-left group/btn"
               >
                 <div className="p-2 bg-white/5 rounded-lg text-gray-300"><Receipt size={18}/></div>
                 <div>
                   <span className="block text-sm font-medium text-white">Billing & Invoices</span>
                   <span className="block text-[10px] text-gray-500">View history or update card</span>
                 </div>
               </button>

               {/* 3. Book Meeting */}
               <button 
                 onClick={() => handleHubAction("meeting")}
                 className="w-full mt-auto p-4 bg-blue-600/10 border border-blue-600/20 rounded-xl flex items-center gap-4 hover:bg-blue-600/20 transition-all text-left group/btn"
               >
                 <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400"><Calendar size={18}/></div>
                 <div>
                   <span className="block text-sm font-medium text-blue-100">Book Consultation</span>
                   <span className="block text-[10px] text-blue-400/60">Schedule a 1:1 session</span>
                 </div>
               </button>

            </div>
          </div>
          
        </div>

      </div>
    </main>
  );
}