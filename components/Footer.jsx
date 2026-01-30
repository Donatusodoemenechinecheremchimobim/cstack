"use client";
import { Github, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";

const socialLinks = [
  { name: "X", href: "https://x.com/yourhandle", icon: Twitter, hover: "hover:text-blue-400" },
  { name: "Instagram", href: "https://instagram.com/yourhandle", icon: Instagram, hover: "hover:text-pink-500" },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile", icon: Linkedin, hover: "hover:text-blue-700" },
  { name: "WhatsApp", href: "https://wa.me/2348144462467", icon: MessageCircle, hover: "hover:text-green-500" },
];

// ... inside your Footer return statement, find the social section:
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