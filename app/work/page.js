"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// --- PROJECT DATA ---
const projects = [
  { id: 1, title: "Cactus Bear", cat: "E-Commerce", desc: "Headless Shopify Architecture.", img: "bg-green-900/20" },
  { id: 2, title: "Titan Shield", cat: "Security", desc: "Encrypted Mobile Network.", img: "bg-blue-900/20" },
  { id: 3, title: "Anime Track", cat: "SaaS", desc: "Media Consumption Dashboard.", img: "bg-purple-900/20" },
  { id: 4, title: "Lagos Transit", cat: "Fintech", desc: "NFC Payment Systems.", img: "bg-orange-900/20" },
];

export default function Work() {
  return (
    // Added overflow-x-hidden and removed unnecessary perspective to keep it fixed
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-6 max-w-7xl mx-auto overflow-x-hidden">
      
      {/* HEADER SECTION - ALIGNED & RESPONSIVE */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="mb-16 md:mb-20"
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase leading-none">
          Deployments<span className="text-blue-600">.</span>
        </h1>
        <p className="text-base md:text-xl text-gray-400 max-w-2xl font-medium">
          A collection of high-performance systems engineered for scale and extreme stability.
        </p>
      </motion.div>

      {/* PROJECTS GRID - STACKED ON MOBILE, GRID ON DESKTOP */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {projects.map((p, i) => (
          <motion.div 
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            // Changed fixed h-[500px] to aspect-square on mobile for better fit
            className="group relative aspect-[4/5] md:h-[550px] border border-white/10 rounded-2xl overflow-hidden bg-neutral-900"
          >
            {/* IMAGE AREA */}
            <div className={`absolute inset-0 ${p.img} group-hover:scale-105 transition duration-700`}>
               <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
               <div className="flex h-full items-center justify-center text-white/5 text-2xl md:text-4xl font-black uppercase tracking-widest select-none">
                 CSTACK // {p.id}
               </div>
            </div>

            {/* OVERLAY CONTENT */}
            <div className="absolute bottom-0 w-full p-6 md:p-10 bg-gradient-to-t from-black via-black/90 to-transparent">
              <div className="flex justify-between items-end">
                <div className="max-w-[80%]">
                  <span className="text-[10px] md:text-xs font-bold text-blue-500 border border-blue-500/30 px-3 py-1 rounded-full uppercase tracking-widest bg-blue-500/5">
                    {p.cat}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold mt-4 mb-2 tracking-tight">{p.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed">{p.desc}</p>
                </div>
                
                {/* ACTION BUTTON - Larger touch target for mobile */}
                <div className="w-10 h-10 md:w-14 md:h-14 bg-white text-black rounded-full flex items-center justify-center md:opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-xl">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}