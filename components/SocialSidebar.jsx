"use client";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";

// The Official X Logo Component
const XLogo = () => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor" 
    width="20" 
    height="20" 
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

export default function SocialSidebar() {
  return (
    <div className="fixed left-6 bottom-0 z-50 hidden xl:flex flex-col items-center gap-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-6 text-gray-500"
      >
        {/* X (Formerly Twitter) */}
        <a href="https://x.com/yourhandle" target="_blank" className="hover:text-white transition-colors hover:scale-110 duration-300">
          <XLogo />
        </a>
        
        {/* GitHub */}
        <a href="https://github.com/yourusername" target="_blank" className="hover:text-white transition-colors hover:scale-110 duration-300">
          <Github size={20} />
        </a>
        
        {/* Instagram */}
        <a href="https://instagram.com/yourhandle" target="_blank" className="hover:text-pink-500 transition-colors hover:scale-110 duration-300">
          <Instagram size={20} />
        </a>
      </motion.div>
      <div className="w-[1px] h-24 bg-gradient-to-t from-white/20 to-transparent mt-2"></div>
    </div>
  );
}