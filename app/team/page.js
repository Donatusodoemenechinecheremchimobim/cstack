"use client";
import React from "react";
import Team from "../../components/Team"; // Importing the component we just made
// import Navbar from "../../components/Navbar"; // Uncomment if you have a Navbar

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-600">
      
      {/* <Navbar /> */}

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
             <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
             <span className="text-xs font-mono text-gray-300">EST. 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">MINDS</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A collective of engineers, physicists, and strategists building the future of African tech.
          </p>
        </div>

        {/* The Team Grid */}
        <Team />

      </div>
    </main>
  );
}