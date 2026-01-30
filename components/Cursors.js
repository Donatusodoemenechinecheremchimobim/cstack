"use client";
import { MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Cursors() {
  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden hidden md:block">
      
      {/* Ghost 1: Pointing at the Main Project (Cactus Bear) */}
      <motion.div 
        initial={{ left: "10%", top: "80%" }}
        animate={{ 
          left: ["10%", "12%", "10%"], 
          top: ["80%", "78%", "80%"] 
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute"
      >
        <MousePointer2 className="text-pink-500 fill-pink-500 transform -rotate-12" size={24} />
        <div className="ml-4 px-2 py-1 bg-pink-500 text-black text-[10px] font-bold rounded-full whitespace-nowrap shadow-lg">
          Reviewer_Steve
        </div>
      </motion.div>

      {/* Ghost 2: Inspecting the Tech Stack (Titan Shield) */}
      <motion.div 
        initial={{ left: "70%", top: "70%" }}
        animate={{ 
          left: ["70%", "68%", "70%"], 
          top: ["70%", "72%", "70%"] 
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute"
      >
        <MousePointer2 className="text-cyan-500 fill-cyan-500 transform -rotate-12" size={24} />
        <div className="ml-4 px-2 py-1 bg-cyan-500 text-black text-[10px] font-bold rounded-full whitespace-nowrap shadow-lg">
          Guest_London
        </div>
      </motion.div>

      {/* Ghost 3: Looking at the CTA Button */}
      <motion.div 
        initial={{ left: "55%", top: "45%" }}
        animate={{ 
           scale: [1, 1.1, 1],
           left: ["55%", "55%", "55%"] 
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute"
      >
        <MousePointer2 className="text-yellow-400 fill-yellow-400 transform -rotate-12" size={24} />
        <div className="ml-4 px-2 py-1 bg-yellow-400 text-black text-[10px] font-bold rounded-full whitespace-nowrap shadow-lg">
          Recruiter_V
        </div>
      </motion.div>

    </div>
  );
}