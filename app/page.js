"use client";
import { Typewriter } from 'react-simple-typewriter';
import Stats from "../components/Stats";
import Team from "../components/Team";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link"; 

// --- BROWSER CARD (Optimized for Mobile Stability) ---
function BrowserCard({ title, subtitle, tag, color, className }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
    currentTarget.style.setProperty("--spot-x", `${clientX - left}px`);
    currentTarget.style.setProperty("--spot-y", `${clientY - top}px`);
  }

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={`relative group rounded-xl bg-neutral-900 border border-white/10 overflow-hidden w-full ${className}`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none z-20"
           style={{ background: `radial-gradient(400px circle at var(--spot-x) var(--spot-y), rgba(255,255,255,0.1), transparent 40%)` }}>
      </div>
      <div className="h-8 border-b border-white/10 bg-black/40 flex items-center px-4 gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
        <div className="ml-auto text-[10px] font-mono text-gray-500">Localhost:3000</div>
      </div>
      <div className="relative h-[250px] md:h-full bg-gradient-to-br from-neutral-800 to-black overflow-hidden group-hover:scale-[1.02] transition duration-700">
         <div className={`absolute top-10 left-10 right-10 bottom-0 rounded-t-lg border-t border-l border-r border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl ${color}`}></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
         <div className="absolute bottom-6 left-6 z-30">
            <span className="px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full">{tag}</span>
         </div>
      </div>
      <div className="p-6 border-t border-white/10 bg-black/20 backdrop-blur-sm absolute bottom-0 w-full z-30 translate-y-full group-hover:translate-y-0 transition duration-300">
         <h3 className="text-xl font-bold text-white">{title}</h3>
         <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-white selection:text-black overflow-x-hidden bg-black text-white">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
             <div className="flex -space-x-2">
               <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-black"></div>
               <div className="w-6 h-6 rounded-full bg-pink-500 border-2 border-black"></div>
               <div className="w-6 h-6 rounded-full bg-white border-2 border-black flex items-center justify-center text-[8px] font-bold text-black">+1</div>
             </div>
             <span className="text-xs font-medium text-gray-300">Active Systems Online</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-white mb-6 leading-tight min-h-[180px] md:min-h-[300px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              CSTACK
            </span>{' '}
            <br className="md:hidden" />
            <span className="text-white">
              <Typewriter
                words={['BUILDS.', 'SCALES.', 'DOMINATES.']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-base md:text-lg text-gray-400 mb-12">
            The full-stack studio for the ambitious. We don't just write code; we engineer your legacy.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
             <Link href="/pricing" className="bg-white text-black px-8 py-4 font-bold rounded-lg hover:scale-105 transition shadow-[0_0_40px_rgba(255,255,255,0.2)] uppercase tracking-widest text-sm">
               View Protocols
             </Link>
             <Link href="/dashboard" className="px-8 py-4 border border-white/20 text-white rounded-lg font-bold hover:bg-white/10 transition uppercase tracking-widest text-sm">
               Command Center
             </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. STATS COUNTER */}
      <Stats /> 

      {/* 3. RECENT WORK GRID */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
         <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter">Recent Deployments</h2>
            <Link href="/work" className="flex items-center gap-2 text-gray-400 hover:text-white transition cursor-pointer text-xs md:text-sm uppercase tracking-widest font-bold">
               <span>Archive</span>
               <ArrowUpRight size={16} />
            </Link>
         </div>

         {/* FIXED GRID: Auto height on mobile, fixed height on desktop */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 h-auto lg:h-[600px]">
            <BrowserCard className="lg:col-span-2 h-[350px] lg:h-full" title="Cactus Bear" subtitle="Headless E-commerce" tag="Full Stack" color="bg-green-500/20" />
            <div className="flex flex-col gap-4 md:gap-6 h-auto lg:h-full">
              <BrowserCard className="h-[280px] lg:flex-1" title="Titan Shield" subtitle="Encrypted Network" tag="Mobile Core" color="bg-blue-500/20" />
              <BrowserCard className="h-[280px] lg:flex-1" title="Anime Track" subtitle="Media SaaS" tag="Next.js" color="bg-pink-500/20" />
            </div>
         </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="py-24 border-t border-white/10">
        <div className="text-center mb-16 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter">The Leadership</h2>
          <p className="text-gray-400 text-sm md:text-base">Meet the minds behind the systems.</p>
        </div>
        <Team />
      </section>

    </main>
  );
}