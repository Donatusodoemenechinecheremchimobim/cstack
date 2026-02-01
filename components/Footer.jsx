"use client";
import { Github, Linkedin, Activity } from "lucide-react";

// 1. The Official X Logo (Custom SVG)
const XLogo = ({ size = 18, className }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor" 
    width={size} 
    height={size} 
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-extrabold tracking-tighter text-white mb-4">CSTACK</h2>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              A digital product studio, engineering the future of web and mobile. 
              Based in Nigeria, operating globally.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Sitemap</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="/work" className="hover:text-white transition">Projects</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Legal</h3>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-green-500 font-mono">All Systems Operational</span>
          </div>
          
          <div className="text-xs text-gray-600">
            © 2026 CSTACK Inc. All rights reserved.
          </div>

          <div className="flex gap-4">
            {/* SWAPPED TWITTER FOR X LOGO */}
            <a href="https://x.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <XLogo size={18} className="text-gray-500 hover:text-white cursor-pointer transition" />
            </a>
            <Github size={18} className="text-gray-500 hover:text-white cursor-pointer transition" />
            <Linkedin size={18} className="text-gray-500 hover:text-white cursor-pointer transition" />
          </div>
        </div>
      </div>
    </footer>
  );
}
