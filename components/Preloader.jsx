"use client";
import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)]"
      >
        <span className="text-black text-5xl font-black tracking-tighter">C</span>
      </motion.div>
    </div>
  );
}