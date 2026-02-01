"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";

export default function GhostCursors() {
  // Only run on client to avoid hydration errors
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    // Hidden on mobile, visible on desktop
    <div className="pointer-events-none fixed inset-0 z-[40] overflow-hidden hidden md:block">
      
      {/* 1. Client 1 (Blue) */}
      <Cursor 
        label="Client 1" 
        color="#3b82f6" 
        xPath={[100, 800, 400, 900, 100]} 
        yPath={[100, 600, 300, 100, 100]} 
        duration={12} 
      />

      {/* 2. Visitor (Pink) */}
      <Cursor 
        label="Visitor (LDN)" 
        color="#ec4899" 
        xPath={[900, 200, 600, 100, 900]} 
        yPath={[600, 100, 500, 800, 600]} 
        duration={15} 
        delay={2}
      />

      {/* 3. Engineer (Cyan) - NEW */}
      <Cursor 
        label="Engineer (SF)" 
        color="#06b6d4" 
        xPath={[50, 400, 800, 200, 50]} 
        yPath={[800, 500, 200, 700, 800]} 
        duration={18} 
        delay={5}
      />

      {/* 4. Designer (Orange) - NEW */}
      <Cursor 
        label="Designer (NYC)" 
        color="#f97316" 
        xPath={[500, 900, 100, 500, 500]} 
        yPath={[50, 400, 600, 50, 50]} 
        duration={20} 
        delay={8}
      />
    </div>
  );
}

function Cursor({ label, color, xPath, yPath, duration, delay = 0 }) {
  return (
    <motion.div
      initial={{ x: xPath[0], y: yPath[0], opacity: 0 }}
      animate={{
        x: xPath,
        y: yPath,
        opacity: [0, 1, 1, 1, 0], // Fade in/out at start/end of loop
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: delay,
      }}
      className="absolute top-0 left-0 flex flex-col items-start"
    >
      <MousePointer2 
        fill={color} 
        className="relative z-10 w-4 h-4" 
        style={{ color: color }}
      />
      <div 
        className="px-2 py-0.5 rounded-md text-[10px] font-bold text-white whitespace-nowrap ml-3 -mt-1 shadow-lg backdrop-blur-sm bg-black/50 border border-white/10"
      >
        <span style={{ color: color }}>●</span> {label}
      </div>
    </motion.div>
  );
}
