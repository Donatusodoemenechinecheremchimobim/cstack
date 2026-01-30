"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Crown, Shield, Hexagon } from "lucide-react";

const plans = [
  {
    name: "Protocol A",
    price: "15,000",
    desc: "Perfect for quick fixes and single-page builds.",
    features: ["One Active Request", "React / Next.js", "Average 48h Delivery", "Slack Comms"],
    icon: Zap, color: "blue", popular: false,
  },
  {
    name: "Protocol B",
    price: "25,000",
    desc: "Full-scale engineering for growing startups.",
    features: ["Two Active Requests", "Mobile + Web (Flutter)", "Priority DevOps", "Dedicated Project Manager", "24h Turnaround"],
    icon: Crown, color: "purple", popular: true,
  },
  {
    name: "Enterprise",
    price: "35,000",
    desc: "For systems handling 1M+ users.",
    features: ["Unlimited Requests", "Full Stack + AI", "On-Premise Deployment", "24/7 Security Ops", "White Glove Service"],
    icon: Shield, color: "orange", popular: false,
  },
  {
    name: "Custom Architecture",
    price: "Let's Talk",
    desc: "For unique, complex systems that defy standard categories.",
    features: ["Bespoke Architecture", "NDA & Legal Contracts", "On-Site Consultation", "Dedicated Engineering Team", "Long-term Maintenance"],
    icon: Hexagon, color: "white", popular: false, isCustom: true,
  },
];

export default function Pricing() {
  const handleSubscribe = (plan) => {
    if (plan.isCustom) {
      const phoneNumber = "2348144462467"; 
      const message = `Hello CSTACK, I have a custom project that requires special attention. I'd like to discuss the Custom Architecture plan.`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
      return;
    }

    const paymentLinks = {
      "Protocol A": "https://flutterwave.com/pay/YOUR_15K_LINK",
      "Protocol B": "https://flutterwave.com/pay/YOUR_25K_LINK",
      "Enterprise": "https://flutterwave.com/pay/YOUR_35K_LINK"
    };

    const link = paymentLinks[plan.name];

    if (link) {
      window.location.href = link; 
    } else {
      alert(`Opening payment for ${plan.name}... (Link not set)`);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-600 overflow-x-hidden">
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-4 px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter">
            CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">PROTOCOL</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Scalable subscription models for every stage of growth. Pause or cancel anytime.
          </p>
        </div>

        {/* SWIPE HINT (Mobile Only) - Moved above grid for better visibility */}
        <div className="md:hidden text-center text-blue-500 text-xs font-bold uppercase tracking-widest animate-pulse mb-4">
          ← Swipe to view plans →
        </div>

        {/* PLANS SCROLLER */}
        {/* CHANGED: Added 'pt-12' so the badge doesn't get cut off at the top */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory py-12 px-6 w-full no-scrollbar">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className="min-w-[85vw] md:min-w-0 snap-center flex" // flex ensures height matching
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative w-full p-8 rounded-2xl border flex flex-col justify-between ${
                  plan.popular 
                  ? "bg-neutral-900 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.2)] z-10" 
                  : "bg-neutral-900/50 border-white/10 hover:border-white/20 transition"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl whitespace-nowrap z-20 border-4 border-black">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-${plan.color}-500/10 text-${plan.color}-500`}>
                    <plan.icon size={24} />
                  </div>

                  {/* Title & Price */}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-black mb-4 flex items-end gap-1">
                     {plan.isCustom ? (
                       <span>{plan.price}</span>
                     ) : (
                       <>
                         <span>₦{plan.price}</span>
                         <span className="text-sm text-gray-500 font-medium mb-1">/mo</span>
                       </>
                     )}
                  </div>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed h-10">
                    {plan.desc}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check size={16} className={`mt-0.5 shrink-0 text-${plan.color}-500`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button 
                  onClick={() => handleSubscribe(plan)}
                  className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all ${
                    plan.popular 
                    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25" 
                    : plan.isCustom 
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-white/5 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {plan.isCustom ? "Chat on WhatsApp" : "Subscribe Now"}
                </button>

              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}