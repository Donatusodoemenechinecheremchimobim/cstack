"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
        
        {/* LEFT SIDE: The Human Connection */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4">Contact</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Let's build your <br />
            <span className="text-gray-500">next big move.</span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-md">
            I’m Cherem. I don't use automated replies. When you send this form, it goes directly to my personal device. Let's discuss your vision.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Mail size={18} />
              </div>
              <span className="text-sm font-medium">cstackng@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Phone size={18} />
              </div>
              <span className="text-sm font-medium">+234 814 446 2467</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <MapPin size={18} />
              </div>
              <span className="text-sm font-medium">Port Harcourt, Nigeria (Global Remote)</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: The Clean Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-900/50 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">First Name</label>
                <input type="text" placeholder="Jane" className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-blue-500 focus:outline-none transition" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Last Name</label>
                <input type="text" placeholder="Doe" className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-blue-500 focus:outline-none transition" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
              <input type="email" placeholder="jane@company.com" className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-blue-500 focus:outline-none transition" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Project Details</label>
              <textarea rows="4" placeholder="Tell me about what you want to build..." className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-blue-500 focus:outline-none transition resize-none"></textarea>
            </div>

            <button className="w-full bg-white text-black font-bold text-sm uppercase tracking-widest py-5 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2 group">
               Send Request
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>

      </div>
    </main>
  );
}