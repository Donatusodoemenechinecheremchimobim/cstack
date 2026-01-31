"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, User, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/work" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const { user, logOut } = useAuth(); // <--- Get the user status
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // FIXED: Using 'inset-x-0' instead of 'w-full' to prevent horizontal overflow
    <nav className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
      scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
            <Shield size={18} className="text-white" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">CSTACK</span>
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

          {/* DYNAMIC BUTTON LOGIC */}
          {user ? (
            <div className="flex items-center gap-4">
              <Link 
                href="/dashboard" 
                className="px-5 py-2.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-blue-500 transition-all flex items-center gap-2"
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
              className="px-5 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-gray-200 transition-all"
            >
              Client Login
            </Link>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-6 p-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black uppercase tracking-tighter"
                >
                  {link.name}
                </Link>
              ))}

              <div className="border-t border-white/10 pt-6 mt-2">
                {user ? (
                  <div className="flex flex-col gap-4">
                     <Link 
                      href="/dashboard" 
                      onClick={() => setIsOpen(false)}
                      className="w-full py-4 bg-blue-600 text-white text-center font-black uppercase tracking-widest rounded-xl"
                    >
                      Open Dashboard
                    </Link>
                    <button 
                      onClick={() => { logOut(); setIsOpen(false); }}
                      className="text-left text-red-500 font-black uppercase tracking-widest text-sm"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <Link 
                    href="/login" 
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-4 bg-white text-black text-center font-black uppercase tracking-widest rounded-xl"
                  >
                    Client Login
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}