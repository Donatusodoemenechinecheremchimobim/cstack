"use client";
import { motion } from "framer-motion";
import { Github, Twitter, Instagram } from "lucide-react";

export default function SocialSidebar() {
  return (
    <div className="fixed left-6 bottom-0 z-50 hidden xl:flex flex-col items-center gap-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-4 text-gray-500"
      >
        <a href="#" className="hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
        <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
        <a href="#" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
      </motion.div>
      <div className="w-[1px] h-24 bg-gradient-to-t from-white/20 to-transparent mt-2"></div>
    </div>
  );
}