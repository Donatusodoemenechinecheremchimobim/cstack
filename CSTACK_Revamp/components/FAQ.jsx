"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { question: "Do you handle hosting?", answer: "Yes. We deploy primarily on Vercel and AWS for maximum speed and uptime." },
  { question: "What is the timeline?", answer: "Basic sites take 3-5 days. Full apps usually take 2-4 weeks depending on complexity." },
  { question: "Can I pay in installments?", answer: "Yes. For projects over ?50,000, we accept a 70% deposit to start and 30% on completion." }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((q, i) => (
          <div key={i} className="border border-white/10 rounded-2xl bg-neutral-900/30 overflow-hidden">
            <button 
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <span className="font-bold text-white">{q.question}</span>
              <Plus className={`text-blue-500 transition-transform ${open === i ? "rotate-45" : ""}`} />
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <p className="p-6 pt-0 text-gray-400">{q.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
