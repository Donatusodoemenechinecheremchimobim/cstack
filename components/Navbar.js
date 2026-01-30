"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 top-0 left-0 bg-black/50 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer z-50">
             <div className="h-8 w-8 bg-white text-black font-extrabold flex items-center justify-center rounded hover:rotate-12 transition transform">
               C
             </div>
             <span className="font-bold text-xl tracking-tighter mix-blend-difference">CSTACK</span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA BUTTON & LOGIN */}
          <div className="hidden md:flex items-center gap-6">
             {/* ADDED LOGIN LINK */}
             <Link href="/login" className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors">
               Log In
             </Link>

             {/* UPDATED BUTTON: Let's Build -> Pricing */}
             <Link href="/pricing" className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition duration-300 rounded-sm">
               Let's Build
             </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden z-50">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-8">
              
              {/* Added Login to Mobile Menu */}
              <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0 }}
                >
                  <Link 
                    href="/login" 
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 hover:to-white transition-all flex items-center justify-between group"
                  >
                    Log In
                    <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-10 group-hover:translate-x-0" />
                  </Link>
                </motion.div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (i + 1) * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 hover:to-white transition-all flex items-center justify-between group"
                  >
                    {link.name}
                    <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-10 group-hover:translate-x-0" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer Info */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 left-8 text-gray-500 text-xs font-mono"
            >
              <p>PORT HARCOURT, NG</p>
              <p>SYSTEM ONLINE</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}