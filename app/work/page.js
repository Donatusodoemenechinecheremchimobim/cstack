"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// --- PROJECT DATA (Add your image paths here later) ---
const projects = [
  { id: 1, title: "Cactus Bear", cat: "E-Commerce", desc: "Headless Shopify Architecture.", img: "bg-green-900/20" },
  { id: 2, title: "Titan Shield", cat: "Security", desc: "Encrypted Mobile Network.", img: "bg-blue-900/20" },
  { id: 3, title: "Anime Track", cat: "SaaS", desc: "Media Consumption Dashboard.", img: "bg-purple-900/20" },
  { id: 4, title: "Lagos Transit", cat: "Fintech", desc: "NFC Payment Systems.", img: "bg-orange-900/20" },
];

export default function Work() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6">DEPLOYMENTS</h1>
        <p className="text-xl text-gray-400 max-w-2xl">A collection of high-performance systems engineered for scale.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div 
            key={p.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-[500px] border border-white/10 rounded-2xl overflow-hidden bg-neutral-900"
          >
            {/* IMAGE PLACEHOLDER - Replace div below with <img src="/your-image.png" /> */}
            <div className={`absolute inset-0 ${p.img} group-hover:scale-105 transition duration-700`}>
               {/* Noise Overlay */}
               <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
               {/* Center text for now */}
               <div className="flex h-full items-center justify-center text-white/10 text-4xl font-black uppercase tracking-tighter">
                 Preview Img
               </div>
            </div>

            <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-xs font-mono text-gray-400 border border-white/20 px-2 py-1 rounded-full">{p.cat}</span>
                  <h3 className="text-3xl font-bold mt-3 mb-1">{p.title}</h3>
                  <p className="text-gray-400 text-sm">{p.desc}</p>
                </div>
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}