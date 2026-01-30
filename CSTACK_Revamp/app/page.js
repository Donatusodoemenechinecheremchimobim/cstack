"use client";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Smartphone, Database } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Navbar />

      <section className="relative pt-48 pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">Available for New Projects</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            WE BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-300% animate-gradient">
              DIGITAL EMPIRES
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            CSTACK is the engineering force behind Nigeria's next generation of startups. 
            We blend high-speed code with military-grade security.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/pricing" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden">
              <span className="relative z-10 group-hover:text-white transition-colors">Start a Project</span>
              <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
            <Link href="/pricing" className="px-8 py-4 border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              View Plans <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      <div className="w-full bg-neutral-900/50 border-y border-white/5 py-6 overflow-hidden">
        <div className="flex gap-12 animate-scroll whitespace-nowrap min-w-full">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-2xl font-black text-white/10 uppercase">
              NEXT.JS • FLUTTER • REACT • PYTHON • CYBERSECURITY • 
            </span>
          ))}
        </div>
      </div>

      <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Our Protocol</h2>
            <p className="text-gray-400">Engineering excellence as a service.</p>
          </div>
          <div className="hidden md:block w-32 h-[1px] bg-white/20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -5 }} className="md:col-span-2 p-8 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
              <Globe size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-2">High-Performance Web</h3>
            <p className="text-gray-400 mb-6">React/Next.js sites that load instantly and rank #1 on Google.</p>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-500"><li>• SEO Optimized</li><li>• Server-Side Rendering</li><li>• Interactive 3D</li><li>• CMS Integration</li></ul>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="row-span-2 p-8 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-purple-500/50 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
              <Smartphone size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Mobile Apps</h3>
            <p className="text-gray-400 mb-6">Native Android & iOS apps built with Flutter.</p>
            <div className="mt-8 space-y-3"><div className="h-2 bg-white/10 rounded-full w-full overflow-hidden"><div className="h-full bg-purple-500 w-3/4 animate-pulse"></div></div><div className="h-2 bg-white/10 rounded-full w-2/3"></div></div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-green-500/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all"><Shield size={24} /></div>
            <h3 className="text-2xl font-bold mb-2">Cybersecurity</h3>
            <p className="text-gray-400">Penetration testing and secure infrastructure.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-neutral-900/40 border border-white/10 hover:border-orange-500/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all"><Database size={24} /></div>
            <h3 className="text-2xl font-bold mb-2">Backend Systems</h3>
            <p className="text-gray-400">Scalable Python/Node.js APIs.</p>
          </motion.div>
        </div>
      </section>

      <Team />

      <footer className="border-t border-white/10 py-12 bg-black text-center text-gray-600 text-sm">
        <p>© 2026 CSTACK Engineering. Operated from Port Harcourt, Nigeria.</p>
      </footer>
    </main>
  );
}
