"use client";
import Link from "next/link";
import { Github, Twitter, Instagram, Linkedin, Shield } from "lucide-react";

const socials = [
  { name: "Twitter", href: "https://twitter.com/yourhandle", icon: Twitter },
  { name: "GitHub", href: "https://github.com/yourusername", icon: Github },
  { name: "Instagram", href: "https://instagram.com/yourhandle", icon: Instagram },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Block */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Shield size={18} className="text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">CSTACK</span>
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
              {socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all"
                >
                  <social.icon size={18} />
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