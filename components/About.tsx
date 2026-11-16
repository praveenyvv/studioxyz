"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "6+", label: "Projects Delivered" },
  { value: "3", label: "Engineers" },
  { value: "3yr", label: "Combined Experience" },
  { value: "∞", label: "Problems Solved" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium text-[#3B82F6] tracking-widest uppercase">
              About Us
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Engineers who care about{" "}
              <span className="text-[#3B82F6]">the why</span>
            </h2>
            <p className="text-[#888] leading-relaxed mb-4">
              We&apos;re a team of three software engineers based in
              Visakhapatnam, India. We&apos;ve spent three years building real
              software for real people — not just writing code, but finding the
              problems worth solving.
            </p>
            <p className="text-[#888] leading-relaxed mb-4">
              We believe the best software comes from understanding people first.
              Some problems look small on paper but make a huge difference in
              someone&apos;s day. That&apos;s exactly the kind of problem we
              like to solve.
            </p>
            <p className="text-[#888] leading-relaxed">
              No agency fluff. No unnecessary complexity. Just clean, working
              software delivered by people who genuinely give a damn.
            </p>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-[#111] border border-white/5 rounded-2xl p-6"
              >
                <div
                  className="text-4xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-[#555]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
