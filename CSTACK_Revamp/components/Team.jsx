"use client";
import React from "react";

const teamMembers = [
  {
    name: "Donatus-Odoemene Chinecherem",
    role: "Lead Engineer & Founder",
    bio: "Head of GDG Cyber Security (FUTO). Specializing in high-performance Web Architecture and Systems Security.",
    image: "/my-pic.jpg", 
  },
  {
    name: "Co-Founder",
    role: "Creative Director",
    bio: "Expert in Brand Identity and UI/UX Design. Turning complex ideas into intuitive, beautiful digital experiences.",
    image: "/partner1.jpg", 
  },
  {
    name: "Partner",
    role: "Operations Manager",
    bio: "Ensuring smooth project delivery and client satisfaction. Bridging the gap between technical complexity and business goals.",
    image: "/partner2.jpg", 
  },
];

const Team = () => {
  return (
    <section className="py-24 bg-black text-white" id="team">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Meet the Minds
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collective of engineers, designers, and strategists building the future of African tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center group max-w-sm">
              <div className="relative w-48 h-48 mb-6">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-900 group-hover:border-blue-600 transition-colors duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/200/1a1a1a/FFFFFF?text=IMG"; }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-blue-500 font-medium text-sm mb-4 uppercase tracking-wider">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed text-center px-4">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team;
