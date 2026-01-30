"use client";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

// 👇 EDIT YOUR TEAM HERE 👇
const teamMembers = [
  {
    name: "Chinecherem Donatus",
    role: "Lead Systems Architect",
    bio: "Specializing in high-performance backends and cybersecurity. Building the unbuildable.",
    image: "/team/member1.jpg", 
  },
  {
    name: "Princewill Ezechukwu",
    role: "Head of Engineering",
    bio: "Full-stack expert with a focus on scalable React architectures and cloud infrastructure.",
    image: "/team/member2.jpg",
  },
  {
    name: "Manuchimso Christian",
    role: "Product Director",
    bio: "Bridging the gap between complex code and intuitive user experiences.",
    image: "/team/member3.jpg",
  },
  {
    name: "Light Onuchuku",
    role: "AI Research Lead",
    bio: "Integrating machine learning models into everyday business logic.",
    image: "/team/member4.jpg",
  },
  {
    name: "Andrew Udochukwu",
    role: "Creative Director",
    bio: "Ensuring pixel-perfect design systems across all deployed protocols.",
    image: "/team/member5.jpg",
  },
  {
    name: "Martins Nwokekwu",
    role: "Operations Lead",
    bio: "Keeping the studio running efficiently and projects delivering on time.",
    image: "/team/member6.jpg",
  },
];

export default function Team() {
  return (
    // CHANGED: grid-cols-2 for mobile, grid-cols-3 for desktop
    // CHANGED: gap-3 for mobile (tight fit), gap-8 for desktop
    <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative bg-neutral-900/50 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition duration-500 flex flex-col"
        >
          {/* IMAGE SECTION */}
          {/* CHANGED: h-40 on mobile, h-64 on desktop */}
          <div className="h-40 md:h-64 overflow-hidden relative bg-neutral-800">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500 z-10"></div>
            
            {member.image ? (
               <img 
                 src={member.image} 
                 alt={member.name} 
                 className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
               />
            ) : (
               <div className="w-full h-full flex items-center justify-center text-neutral-600 text-[10px]">
                 NO IMAGE
               </div>
            )}
          </div>

          {/* INFO SECTION */}
          {/* CHANGED: p-3 on mobile, p-6 on desktop */}
          <div className="p-3 md:p-6 flex flex-col flex-1">
            {/* Name: Smaller on mobile */}
            <h3 className="text-sm md:text-xl font-bold text-white mb-1 leading-tight">
              {member.name}
            </h3>
            
            {/* Role: Tiny on mobile */}
            <p className="text-[10px] md:text-xs font-bold text-blue-500 uppercase tracking-widest mb-2 md:mb-4">
              {member.role}
            </p>
            
            {/* Bio: Hidden on very small screens if needed, or smaller font */}
            <p className="text-gray-400 text-[10px] md:text-sm leading-relaxed mb-4 line-clamp-3 md:line-clamp-none">
              {member.bio}
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-auto flex gap-2 md:gap-4 pt-2 border-t border-white/5">
              <div className="p-1.5 md:p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer">
                <Linkedin size={14} className="md:w-4 md:h-4" />
              </div>
              <div className="p-1.5 md:p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer">
                <Twitter size={14} className="md:w-4 md:h-4" />
              </div>
              <div className="p-1.5 md:p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer">
                <Github size={14} className="md:w-4 md:h-4" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}