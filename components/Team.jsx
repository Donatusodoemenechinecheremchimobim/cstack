"use client";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

// The Official X Logo (Custom SVG)
const XLogo = ({ size = 14, className }) => (
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

// 👇 YOUR TEAM DATA 👇
const teamMembers = [
  {
    name: "Chinecherem Donatus",
    role: "Lead Systems Architect",
    bio: "Specializing in high-performance backends and cybersecurity. Building the unbuildable.",
    image: "/team/member1.jpg", 
  },
  {
    name: "Light Onuchuku",
    role: "Head of Engineering",
    bio: "Full-stack expert with a focus on scalable React architectures and cloud infrastructure.",
    image: "/team/member2.jpg",
  },
  {
    name: "Manuchimso Christian",
    role: "Product Director",
    bio: "Bridging the gap between complex code and intuitive user experiences.",
    image: "/team/member11.jpg",
  },
  {
    name: "Princewill Ezechukwu",
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
    name: "Martins Nwokeukwu",
    role: "Operations Lead",
    bio: "Keeping the studio running efficiently and projects delivering on time.",
    image: "/team/member6.jpg",
  },
];

export default function Team() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition duration-500 flex flex-col shadow-lg"
        >
          {/* BRANDING: "C" Logo (Always Visible) */}
          <div className="absolute top-2 right-2 md:top-4 md:right-4 w-6 h-6 md:w-10 md:h-10 bg-white rounded md:rounded-lg flex items-center justify-center shadow-xl z-20">
             <span className="text-black text-xs md:text-xl font-black tracking-tighter">C</span>
          </div>

          {/* IMAGE SECTION - FIXED: No grayscale, No dark overlay */}
          <div className="h-40 md:h-64 overflow-hidden relative bg-neutral-800">
            {member.image ? (
               <img 
                 src={member.image} 
                 alt={member.name} 
                 // REMOVED 'grayscale' here. Image is now full color.
                 className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
               />
            ) : (
               <div className="w-full h-full flex items-center justify-center text-neutral-600 text-[10px]">
                 NO IMAGE
               </div>
            )}
            
            {/* Subtle gradient at bottom ONLY for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>
          </div>

          {/* INFO SECTION */}
          <div className="p-3 md:p-6 flex flex-col flex-1 relative z-10 bg-neutral-900">
            <h3 className="text-sm md:text-xl font-bold text-white mb-1 leading-tight">
              {member.name}
            </h3>
            
            <p className="text-[10px] md:text-xs font-bold text-blue-500 uppercase tracking-widest mb-2 md:mb-4">
              {member.role}
            </p>
            
            <p className="text-gray-400 text-[10px] md:text-sm leading-relaxed mb-4 line-clamp-3 md:line-clamp-none">
              {member.bio}
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-auto flex gap-2 md:gap-4 pt-2 border-t border-white/5">
              <div className="p-1.5 md:p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer">
                <Linkedin size={14} className="md:w-4 md:h-4" />
              </div>
              <div className="p-1.5 md:p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer">
                <XLogo size={14} className="md:w-4 md:h-4" />
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
