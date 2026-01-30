"use client";
import { motion } from "framer-motion";
import { Shield, Lock, CreditCard, Scale, Mail } from "lucide-react";
import Navbar from "../../components/Navbar";

const legalSections = [
  { title: "Data Privacy & Auth", icon: Lock, color: "blue", content: "When you use 'Continue with Google', CSTACK collects your Name, Email, and Profile Picture solely to generate your client dashboard. Your data is encrypted via Google Firebase. We never sell, trade, or expose your personal data to third parties." },
  { title: "Payments & Invoicing", icon: CreditCard, color: "green", content: "All payments are processed securely via Flutterwave or Direct Bank Transfer. For projects under ?50,000, full payment is required upfront. For Enterprise projects, a 70% deposit is required to commence engineering work." },
  { title: "Refund Policy", icon: Scale, color: "orange", content: "Strict Protocol: Refunds are ONLY issued if CSTACK has not commenced work. Once a repository is created or design work begins, deposits are non-refundable to cover initial server and labor costs." }
];

export default function Legal() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
             <Shield size={14} className="text-blue-500" /><span className="text-xs font-mono text-gray-300">LAST UPDATED: JAN 30, 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">LEGAL & TERMS</h1>
          <p className="text-gray-400 max-w-xl mx-auto">Transparency is part of our protocol.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {legalSections.map((section, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-8 rounded-3xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60 hover:border-white/20 transition-all group">
              <div className={`w-12 h-12 rounded-xl bg-${section.color}-500/10 flex items-center justify-center mb-6`}><section.icon className={`text-${section.color}-400`} size={24} /></div>
              <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
