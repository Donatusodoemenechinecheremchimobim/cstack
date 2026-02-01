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
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

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
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

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
      setError(isLogin ? "Invalid credentials." : "Registration failed. Email may be in use.");
    }
  };

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (err) {
      setError("Google authentication cancelled.");
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-black">
      
      {/* 1. LEFT SIDE - ARTWORK (Visible on Desktop) */}
      <div className="hidden lg:flex w-1/2 bg-neutral-900 relative items-center justify-center overflow-hidden border-r border-white/10">
         {/* Abstract Grid Background */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>

         <div className="relative z-10 text-center p-12">
            <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-2xl mx-auto mb-8">
               <span className="text-black text-6xl font-black tracking-tighter">C</span>
            </div>
            <h1 className="text-5xl font-black text-white tracking-tighter mb-4">SYSTEM ACCESS.</h1>
            <div className="flex flex-col gap-2 text-gray-500 font-mono text-xs uppercase tracking-widest">
               <p>Secure Connection Established</p>
               <p>Encryption: AES-256 / TLS 1.3</p>
               <p>Location: Nigeria (HQ)</p>
            </div>
         </div>
      </div>

      {/* 2. RIGHT SIDE - FORM */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-24 relative bg-black">
         {/* Back Link - Top Left */}
         <Link 
            href="/" 
            className="absolute top-8 left-8 text-gray-400 hover:text-white flex items-center gap-2 transition-colors group z-50 font-bold text-xs uppercase tracking-widest"
         >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Base
         </Link>

         <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full mx-auto"
         >
            {/* Mobile Logo (Visible only on mobile) */}
            <div className="lg:hidden mb-12 flex justify-center">
               <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-black text-4xl font-black tracking-tighter">C</span>
               </div>
            </div>

            <div className="mb-10">
               <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
                  {isLogin ? "Welcome Back." : "Join the Team."}
               </h2>
               <p className="text-gray-400">
                  {isLogin ? "Enter your credentials to access the command center." : "Create your specialized profile."}
               </p>
            </div>

            {/* Google Button */}
            <button 
               onClick={handleGoogle}
               className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-100 transition-all mb-8 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-[0.98]"
            >
               <GoogleIcon />
               <span className="text-sm">Continue with Google</span>
            </button>

            <div className="relative mb-8">
               <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
               <div className="relative flex justify-center text-xs uppercase tracking-widest"><span className="bg-black px-4 text-gray-500">Or use email</span></div>
            </div>

            <form onSubmit={handleAuth} className="space-y-5">
               <div className="group">
                  <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Email Address</label>
                  <input
                     type="email"
                     className="w-full bg-neutral-900/50 border border-white/10 text-white p-4 rounded-xl focus:border-blue-500 focus:bg-neutral-900 focus:outline-none transition-all placeholder:text-gray-700"
                     placeholder="name@cstack.com"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                  />
               </div>
               
               <div className="group">
                  <label className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Password</label>
                  <input
                     type="password"
                     className="w-full bg-neutral-900/50 border border-white/10 text-white p-4 rounded-xl focus:border-blue-500 focus:bg-neutral-900 focus:outline-none transition-all placeholder:text-gray-700"
                     placeholder="••••••••••••"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                  />
               </div>

               {error && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-xs font-bold text-center">
                     {error}
                  </motion.div>
               )}

               <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-500 transition-all shadow-[0_4px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_40px_rgba(37,99,235,0.5)] active:scale-[0.98] uppercase tracking-widest text-xs flex items-center justify-center gap-2"
               >
                  {isLogin ? "Authenticate System" : "Create Account"}
               </button>
            </form>

            <div className="mt-8 text-center">
               <p className="text-gray-500 text-sm">
                  {isLogin ? "New to CSTACK? " : "Already have access? "}
                  <button 
                     onClick={() => { setIsLogin(!isLogin); setError(""); }}
                     className="text-white font-bold hover:text-blue-500 transition-colors ml-1"
                  >
                     {isLogin ? "Initialize Account" : "Log In"}
                  </button>
               </p>
            </div>
         </motion.div>
      </div>
    </div>
  );
                 }
