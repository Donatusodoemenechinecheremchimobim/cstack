"use client";
import { motion } from "framer-motion";
import { Code, Database, Smartphone, Cloud, Shield, Cpu } from "lucide-react";

const services = [
  { title: "Full Stack Web", icon: Code, desc: "React, Next.js, TypeScript. High-performance dashboards and marketing sites." },
  { title: "Mobile Core", icon: Smartphone, desc: "Flutter & React Native. iOS and Android compiled from a single codebase." },
  { title: "Backend Ops", icon: Database, desc: "Node.js, PostgreSQL, Redis. Scalable architecture." },
  { title: "Cloud Infra", icon: Cloud, desc: "AWS, Vercel, Docker. Automated CI/CD pipelines." },
  { title: "Cybersec", icon: Shield, desc: "Pen-testing, Audits, Zero-Trust Architecture." },
  { title: "AI Integration", icon: Cpu, desc: "LLM integration, Vector DBs, Automation." },
];

export default function Services() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">CAPABILITIES</h1>
        <p className="text-gray-400">Engineering precision meets creative fluidity.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 border border-white/10 rounded-2xl bg-neutral-900/50 hover:bg-neutral-800 transition duration-300 group"
          >
            <s.icon className="w-10 h-10 text-gray-400 group-hover:text-white mb-6 transition-colors" />
            <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}