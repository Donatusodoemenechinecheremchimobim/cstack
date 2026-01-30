"use client";
import { signInWithPopup } from "firebase/auth";
// Using ../../ to go back to the main folder to find 'lib'
import { auth, googleProvider } from "../../lib/firebase"; 
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "lucide-react"; // Removed Shield
import Link from "next/link";
import { createUserProfile } from "../../lib/db"; 

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    try {
      setError(""); 
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await createUserProfile(user);
      router.push("/dashboard"); 

    } catch (err) {
      console.error("Login Error:", err);
      setError(err.message.replace("Firebase: ", ""));
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative">
      
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-white transition">
        <ArrowLeft size={20} /> Back to CSTACK
      </Link>

      <div className="w-full max-w-md bg-neutral-900/50 border border-white/10 p-10 rounded-3xl text-center backdrop-blur-md">
        
        {/* CSTACK LOGO (Replaces Shield) */}
        <div className="mx-auto mb-6 w-16 h-16 bg-white text-black font-extrabold flex items-center justify-center rounded-lg text-4xl hover:rotate-12 transition transform cursor-default select-none shadow-[0_0_30px_rgba(255,255,255,0.2)]">
           C
        </div>

        <h1 className="text-3xl font-black mb-2 tracking-tight">Get Started</h1>
        <p className="text-gray-400 mb-10">Sign in or create a new account.</p>

        <button 
          onClick={handleGoogleLogin}
          className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition flex items-center justify-center gap-3"
        >
          <img 
            src="https://www.svgrepo.com/show/475656/google-color.svg" 
            className="w-5 h-5" 
            alt="Google Logo"
          />
          Continue with Google
        </button>

        {error && (
          <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-red-500 text-sm font-mono text-left">{error}</p>
          </div>
        )}
        
        <p className="text-[10px] text-gray-600 mt-8 uppercase tracking-widest">
          One-Click Access • Secure • Encrypted
        </p>
      </div>
    </main>
  );
}