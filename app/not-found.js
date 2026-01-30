"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white p-4 relative overflow-hidden">
      
      {/* Background Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-red-500/5 pointer-events-none animate-pulse"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-[150px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 tracking-tighter">
          404
        </h1>
        <div className="inline-block px-3 py-1 bg-red-500/20 border border-red-500 text-red-500 font-mono text-xs mb-6">
          FATAL_ERROR: PAGE_NOT_FOUND
        </div>
        
        <p className="text-gray-400 max-w-md mx-auto mb-10 font-mono text-sm">
          The requested resource has been moved, deleted, or incinerated.
          Please return to base immediately.
        </p>

        <Link href="/" className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition">
           Reboot System
        </Link>
      </div>
    </div>
  );
}