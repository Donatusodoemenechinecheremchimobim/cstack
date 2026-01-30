"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Crown, Shield, Trello, Code2, Rocket } from "lucide-react";
import FAQ from "../../components/FAQ";
import Navbar from "../../components/Navbar";

const plans = [
  { name: "Protocol A", price: "15,000", desc: "Perfect for quick fixes and single-page builds.", features: ["One Active Request", "React / Next.js", "Average 48h Delivery", "Slack Comms"], icon: Zap, color: "blue", popular: false },
  { name: "Protocol B", price: "25,000", desc: "Full-scale engineering for growing startups.", features: ["Two Active Requests", "Mobile + Web (Flutter)", "Priority DevOps", "24h Turnaround"], icon: Crown, color: "purple", popular: true },
  { name: "Enterprise", price: "35,000", desc: "For systems handling 1M+ users.", features: ["Unlimited Requests", "Full Stack + AI", "On-Premise Deployment", "24/7 Security Ops"], icon: Shield, color: "orange", popular: false },
];

const steps = [
  { num: "01", title: "Subscribe", desc: "Choose your protocol tier.", icon: Zap },
  { num: "02", title: "Request", desc: "Add tasks to your board.", icon: Trello },
  { num: "03", title: "Build", desc: "We deploy updates every 48h.", icon: Code2 },
  { num: "04", title: "Scale", desc: "Launch and iterate instantly.", icon: Rocket },
];

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  const handleSubscribe = (plan) => {
    const refId = "CS-" + Math.floor(1000 + Math.random() * 9000);
    const phoneNumber = "2348144462467"; 
    const message = `Hello CSTACK, I want to subscribe to the ${plan.name} plan (?${plan.price}). My Ref is ${refId}. Please send me the Flutterwave payment link.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-600">
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-xs font-mono text-gray-300">3 SLOTS OPEN FOR JANUARY</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">ACCESS TIERS</h1>
          <p className="text-gray-400 max-w-xl mx-auto">Stop hiring expensive contractors. Get a senior engineering team for a flat monthly fee.</p>

          <div className="mt-10 inline-flex bg-neutral-900 p-1 rounded-full border border-white/10">
            <button onClick={() => setBilling("monthly")} className={`px-6 py-2 rounded-full text-sm font-bold transition ${billing === "monthly" ? "bg-white text-black" : "text-gray-400 hover:text-white"}`}>Monthly</button>
            <button onClick={() => setBilling("quarterly")} className={`px-6 py-2 rounded-full text-sm font-bold transition flex items-center gap-2 ${billing === "quarterly" ? "bg-white text-black" : "text-gray-400 hover:text-white"}`}>Quarterly <span className="text-[10px] bg-green-500 text-black px-1.5 py-0.5 rounded ml-1">-10%</span></button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {steps.map((s, i) => (
             <div key={i} className="p-6 border border-white/10 rounded-2xl bg-neutral-900/20 relative overflow-hidden group">
               <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition"><s.icon size={100} /></div>
               <span className="text-4xl font-black text-white/10 mb-4 block">{s.num}</span>
               <h3 className="text-xl font-bold mb-1">{s.title}</h3>
               <p className="text-xs text-gray-500">{s.desc}</p>
             </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`relative p-8 rounded-3xl border flex flex-col h-full group ${plan.popular ? "bg-neutral-900/80 border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.15)]" : "bg-neutral-900/40 border-white/10 hover:border-white/20"}`}>
              {plan.popular && (<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">Most Popular</div>)}
              <div className={`w-12 h-12 rounded-xl bg-${plan.color}-500/20 flex items-center justify-center mb-6`}><plan.icon className={`text-${plan.color}-400`} size={24} /></div>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6 h-10">{plan.desc}</p>
              <div className="mb-8"><span className="text-2xl font-bold mr-1">?</span><span className="text-4xl font-extrabold">{plan.price}</span><span className="text-gray-500">/mo</span></div>
              <div className="space-y-4 mb-8 flex-1">{plan.features.map((feat, j) => (<div key={j} className="flex items-start gap-3"><Check size={16} className={`mt-1 text-${plan.color}-400`} /><span className="text-sm text-gray-300">{feat}</span></div>))}</div>
              <button onClick={() => handleSubscribe(plan)} className={`w-full py-4 rounded-xl font-bold transition uppercase tracking-widest text-xs ${plan.popular ? "bg-white text-black hover:bg-gray-200" : "border border-white/20 hover:bg-white/10"}`}>Subscribe Now</button>
            </motion.div>
          ))}
        </div>
        <FAQ />
      </div>
    </main>
  );
}
