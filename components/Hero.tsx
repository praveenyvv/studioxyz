"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20 pb-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-[#888]">
            3 engineers · Visakhapatnam, India
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          We find your problem.
          <br />
          <span className="text-[#3B82F6]">We build the fix.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#888] max-w-xl mx-auto mb-10 leading-relaxed"
        >
          A small software studio that turns real user problems into clean,
          working software — websites, apps, and tools that actually make a
          difference.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#work"
            className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-[#3B82F6] hover:text-white transition-all duration-200 text-sm"
          >
            See Our Work
          </a>
          <a
            href="#contact"
            className="bg-white/5 border border-white/10 text-white font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-200 text-sm"
          >
            Let&apos;s Talk
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-sm mx-auto"
        >
          {[
            { value: "6+", label: "Projects" },
            { value: "3", label: "Engineers" },
            { value: "3yr", label: "Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-[#555] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#333] animate-bounce"
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
