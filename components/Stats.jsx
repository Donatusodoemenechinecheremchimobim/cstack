"use client";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const items = [
  { label: "Projects Delivered", value: 116 },
  { label: "Active Clients", value: 11 },
  { label: "Years Experience", value: 4 },
  // Removed "Team Members" count
];

function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, { mass: 1, stiffness: 100, damping: 20 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Stats() {
  return (
    <section className="py-24 border-y border-white/10 bg-neutral-900/30">
      {/* Changed grid-cols-4 to grid-cols-3 so it centers nicely */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <h3 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-2">
              <Counter value={item.value} />+
            </h3>
            <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}