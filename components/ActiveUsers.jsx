"use client";
import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";
import { useEffect, useState } from "react";

const clients = [
  { name: "Client 1", color: "#2563eb" }, // Blue
  { name: "Client 2", color: "#16a34a" }, // Green
  { name: "Client 3", color: "#d946ef" }, // Pink
  { name: "Client 4", color: "#f97316" }, // Orange
];

export default function ActiveUsers() {
  const [positions, setPositions] = useState(
    clients.map(() => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    // Move them every 2-4 seconds to a random spot
    const interval = setInterval(() => {
      setPositions(
        clients.map(() => ({
          x: Math.random() * (window.innerWidth - 100), // Random Width
          y: Math.random() * (window.innerHeight - 100), // Random Height
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {clients.map((client, i) => (
        <motion.div
          key={i}
          initial={{ x: Math.random() * 1000, y: Math.random() * 1000, opacity: 0 }}
          animate={{ 
            x: positions[i].x, 
            y: positions[i].y, 
            opacity: 1 
          }}
          transition={{ 
            duration: Math.random() * 2 + 2, // Random speed (2s to 4s)
            ease: "easeInOut" 
          }}
          className="absolute flex items-center gap-2"
        >
          <MousePointer2 
            className="w-4 h-4" 
            style={{ fill: client.color, color: client.color }} 
          />
          <div 
            className="px-2 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider shadow-lg"
            style={{ backgroundColor: client.color }}
          >
            {client.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
}