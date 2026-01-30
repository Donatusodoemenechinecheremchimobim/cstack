"use client";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/2348144462467" // Your verified number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[999] bg-green-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center justify-center"
    >
      <MessageSquare size={24} fill="currentColor" />
      <span className="absolute right-full mr-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded border border-white/10 whitespace-nowrap opacity-0 md:group-hover:opacity-100 transition-opacity">
        Chat with CSTACK
      </span>
    </motion.a>
  );
}