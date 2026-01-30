"use client";
import { useEffect } from "react";

export default function SoundManager() {
  useEffect(() => {
    // Preload audio
    const hoverAudio = new Audio("/hover.mp3");
    const clickAudio = new Audio("/click.mp3");
    hoverAudio.volume = 0.2; // Keep it subtle
    clickAudio.volume = 0.4;

    const handleMouseOver = (e) => {
      // Play sound if hovering over interactive elements
      if (e.target.tagName === "BUTTON" || e.target.tagName === "A" || e.target.closest(".group")) {
        hoverAudio.currentTime = 0;
        hoverAudio.play().catch(() => {}); // Ignore errors if user hasn't interacted yet
      }
    };

    const handleClick = () => {
      clickAudio.currentTime = 0;
      clickAudio.play().catch(() => {});
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return null; // This component renders nothing visual
}