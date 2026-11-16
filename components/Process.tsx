"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenLine, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description:
      "We dig into your problem before writing a single line of code. Understanding the why matters more than the how.",
  },
  {
    icon: PenLine,
    number: "02",
    title: "Design",
    description:
      "Clean wireframes and UI that your users will actually understand — simple, not flashy.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Build",
    description:
      "Transparent development with regular updates. No black boxes, no surprises.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description:
      "We deploy, test, and hand over with documentation. Your product, your control.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-medium text-[#3B82F6] tracking-widest uppercase">
            How We Work
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 max-w-xl leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Simple process. <br />
            Clear results.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-4 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-[#3B82F6]/20 transition-all duration-300"
              >
                {/* Number */}
                <span
                  className="text-[10px] text-[#333] font-mono tracking-widest"
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center my-4">
                  <Icon size={18} className="text-[#3B82F6]" />
                </div>

                <h3
                  className="text-base font-semibold text-white mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
