"use client";
import Link from "next/link";
import { Github, Instagram, Linkedin, MessageCircle, Shield } from "lucide-react";

// The Official X Logo (Custom SVG)
const XLogo = ({ size = 20, className }) => (
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

const socialLinks = [
  { name: "X", href: "https://x.com/yourhandle", icon: XLogo, hover: "hover:text-white" }, // Updated to X
  { name: "Instagram", href: "https://instagram.com/yourhandle", icon: Instagram, hover: "hover:text-pink-500" },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile", icon: Linkedin, hover: "hover:text-blue-700" },
  { name: "WhatsApp", href: "https://wa.me/2348144462467", icon: MessageCircle, hover: "hover:text-green-500" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Block */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                 <span className="text-black text-lg font-black tracking-tighter">C</span>
              </div>
              <span className="text-xl font-black tracking-tighter uppercase text-white">CSTACK</span>
            </div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
              Engineering high-performance digital systems for the next generation of founders and enterprises.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Directory</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-gray-500 hover:text-white transition text-sm">Capabilities</Link></li>
              <li><Link href="/work" className="text-gray-500 hover:text-white transition text-sm">Deployments</Link></li>
              <li><Link href="/pricing" className="text-gray-500 hover:text-white transition text-sm">Pricing</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-gray-500 transition-all duration-300 bg-white/5 ${social.hover} hover:border-current hover:-translate-y-1`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em]">
            © 2026 CSTACK SYSTEMS LLC. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em]">
            Ihiagwa, Nigeria // HQ
          </p>
        </div>
      </div>
    </footer>
  );
}