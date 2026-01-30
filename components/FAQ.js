"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const questions = [
  { q: "Why not just hire a full-time developer?", a: "A senior full-stack dev costs $120k+ plus benefits. With CSTACK, you get a senior team for a fraction of the cost, and you can pause anytime." },
  { q: "How fast is the turnaround?", a: "Most requests are completed within 48 hours. Complex systems (like full backends) are broken down into 48-hour deliverables so you see constant progress." },
  { q: "What is your tech stack?", a: "We specialize in the T3 Stack (Next.js, TypeScript, Tailwind) for web, and Flutter for mobile. Backend is usually Node, Go, or Supabase." },
  { q: "What if I don't like the design?", a: "We revise it until you do. We don't stop until the system meets the protocol standards." },
  { q: "Is there a refund policy?", a: "Due to the high-quality nature of the work, we do not issue refunds. However, you can cancel your subscription at any time." }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">SYSTEM FAQs</h2>
      <div className="space-y-4">
        {questions.map((item, i) => (
          <div key={i} className="border border-white/10 rounded-xl bg-neutral-900/30 overflow-hidden">
            <button 
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition"
            >
              <span className="font-medium text-lg">{item.q}</span>
              {open === i ? <Minus className="text-gray-400" /> : <Plus className="text-gray-400" />}
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: "auto", opacity: 1 }} 
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}