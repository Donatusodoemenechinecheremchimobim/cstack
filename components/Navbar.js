"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1. SCROLL LOCK: Freezes the body when menu is open to stop "glitching"
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // 2. SCROLL BLUR: Only blurs background when you scroll down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
      scrolled ? "bg-black/80 backdrop-blur-xl py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO - THE WHITE "C" BOX */}
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-transform duration-300">
            <span className="text-black text-xl font-black tracking-tighter">C</span>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase text-white hidden md:block">
            STACK
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* AUTH LOGIC (Desktop) */}
          {user ? (
            <div className="flex items-center gap-4">
              <Link 
                href="/dashboard" 
                className="px-5 py-2.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-blue-500 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              >
                <User size={14} /> Dashboard
              </Link>
              <button 
                onClick={logOut}
                className="text-gray-400 hover:text-red-500 transition-colors"
                title="Sign Out"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <Link 
              href="/login" 
              className="px-5 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Client Login
            </Link>
          )}
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button 
          className="md:hidden text-white relative z-50 p-2 hover:bg-white/10 rounded-full transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU - SMOOTH OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Bezier curve for "butter" feel
            className="fixed inset-0 bg-black z-40 flex flex-col justify-center px-8 h-dvh" // h-dvh fixes mobile browser jump
          >
             {/* Background Noise */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

            <div className="flex flex-col gap-8 relative z-50">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1), duration: 0.4 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 hover:to-blue-500 transition-all block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "60px" }}
                transition={{ delay: 0.4 }}
                className="h-[1px] bg-white/20 my-4"
              />

              {/* AUTH LOGIC (Mobile) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {user ? (
                  <div className="flex flex-col gap-6">
                     <Link 
                      href="/dashboard" 
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-bold text-white flex items-center gap-3"
                    >
                      <User size={24} className="text-blue-500"/> Open Dashboard
                    </Link>
                    <button 
                      onClick={() => { logOut(); setIsOpen(false); }}
                      className="text-left text-red-500 font-black uppercase tracking-widest text-sm flex items-center gap-2"
                    >
                      <LogOut size={16} /> Log Out
                    </button>
                  </div>
                ) : (
                  <Link 
                    href="/login" 
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold text-white flex items-center gap-3"
                  >
                    Client Login <span className="text-blue-500">→</span>
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}