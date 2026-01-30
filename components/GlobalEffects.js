"use client";
import { useEffect, useRef } from "react";
import { MousePointer2 } from "lucide-react";
import Cursors from "./Cursors"; // Your ghosts

export default function GlobalEffects() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // 1. Set Global CSS Variables for Torch/Spotlight
      document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.body.style.setProperty("--mouse-y", `${e.clientY}px`);

      // 2. Move "Guest (You)" Cursor
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* BACKGROUND GRID & TORCH */}
      <div className="bg-dot-grid fixed inset-0 z-0 pointer-events-none" />
      
      {/* GHOST CURSORS */}
      <Cursors />

      {/* YOUR CURSOR (PLAYER 1) */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block will-change-transform"
      >
        <MousePointer2 className="text-white fill-white" size={24} />
        <div className="absolute top-4 left-4 px-2 py-1 bg-white text-black text-[10px] font-bold rounded-full whitespace-nowrap shadow-xl">
          Guest (You)
        </div>
      </div>
    </>
  );
}