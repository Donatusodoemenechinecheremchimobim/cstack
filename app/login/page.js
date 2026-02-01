"use client";
import { useState } from "react";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider 
} from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Google Icon Component
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

export default function Login() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // 1. Handle Email/Password (Login OR Sign Up)
  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      router.push("/dashboard");
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError("This email is already registered.");
      } else if (err.code === 'auth/invalid-credential') {
        setError("Incorrect email or password.");
      } else {
        setError(isLogin ? "Access Denied: Check credentials." : "Registration failed.");
      }
    }
  };

  // 2. Handle Google Login
  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (err) {
      setError("Google authentication failed.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* BACK LINK - Fixed Z-Index */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 text-gray-400 hover:text-white flex items-center gap-2 transition-colors relative z-50 group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to CSTACK
      </Link>

      <motion.div 
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-neutral-900/50 border border-white/10 p-8 rounded-2xl backdrop-blur-xl relative z-40"
      >
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
             <span className="text-black text-2xl font-black tracking-tighter">C</span>
          </div>
        </div>

        <motion.h2 layout className="text-2xl font-bold text-center text-white mb-2">
          {isLogin ? "Client Portal" : "Create Account"}
        </motion.h2>
        <motion.p layout className="text-gray-400 text-center text-sm mb-8">
          {isLogin ? "Enter your secure credentials to continue." : "Join the ecosystem and start building."}
        </motion.p>

        {/* GOOGLE SIGN IN BUTTON */}
        <button 
          onClick={handleGoogle}
          className="w-full bg-white text-black font-bold py-3.5 rounded-lg hover:bg-gray-100 transition-all mb-6 flex items-center justify-center gap-3 shadow-lg active:scale-95"
        >
          <GoogleIcon />
          <span className="text-sm font-bold tracking-wide">
            {isLogin ? "Sign in with Google" : "Sign up with Google"}
          </span>
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-black/50 px-2 text-gray-500 backdrop-blur-md">Or continue with email</span></div>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="admin@cstack.com"
              className="w-full bg-black/50 border border-white/10 text-white p-4 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-sm placeholder:text-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-black/50 border border-white/10 text-white p-4 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-sm placeholder:text-gray-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-xs text-center font-bold uppercase tracking-widest bg-red-500/10 p-2 rounded">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-500 transition-transform active:scale-95 uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            {isLogin ? "Authenticate" : "Create Account"}
          </button>
        </form>

        {/* TOGGLE SWITCH */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => { setIsLogin(!isLogin); setError(""); }}
              className="text-white font-bold hover:underline transition-all"
            >
              {isLogin ? "Create one" : "Log in"}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
    }
