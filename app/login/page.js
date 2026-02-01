"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err) {
      setError("Access Denied: Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* FIX: ADDED 'relative z-50' TO BRING THIS LINK TO THE FRONT */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 text-gray-400 hover:text-white flex items-center gap-2 transition-colors relative z-50"
      >
        <ArrowLeft size={18} /> Back to CSTACK
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-neutral-900/50 border border-white/10 p-8 rounded-2xl backdrop-blur-xl relative z-40"
      >
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
             <span className="text-black text-2xl font-black tracking-tighter">C</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-white mb-2">Client Portal</h2>
        <p className="text-gray-400 text-center text-sm mb-8">Enter your secure credentials to access the command center.</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="admin@cstack.com"
              className="w-full bg-black/50 border border-white/10 text-white p-4 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-black/50 border border-white/10 text-white p-4 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-xs text-center font-bold uppercase tracking-widest">{error}</p>}

          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-transform active:scale-95 uppercase tracking-widest text-xs"
          >
            Authenticate
          </button>
        </form>
      </motion.div>
    </div>
  );
          }
