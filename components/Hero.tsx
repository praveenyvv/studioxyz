"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Cpu, Layers, ShoppingBag, Database } from "lucide-react";

const capabilities = [
  { icon: Database, label: "Cloud ERP & Operations" },
  { icon: Cpu, label: "Industrial IoT & Hardware" },
  { icon: ShoppingBag, label: "E-Commerce Engines" },
  { icon: Layers, label: "High-Impact Digital Brand Sites" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 pt-28 pb-16 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Entry Animation: Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200/90 shadow-xs rounded-full px-4 py-1.5 mb-7"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
          </span>
          <span className="text-xs font-semibold text-slate-700 tracking-wide">
            Engineering Studio &middot; Visakhapatnam, India
          </span>
        </motion.div>

        {/* Entry Animation: Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 leading-[1.08] mb-6"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          We find the friction.
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
            We engineer the fix.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-9 leading-relaxed font-normal"
        >
          We are a team of software &amp; hardware engineers. We design and build{" "}
          <strong className="text-slate-800 font-semibold">custom ERP workflows, IoT telemetry, high-converting eCommerce</strong>, and digital flagship platforms that eliminate everyday chaos and unlock growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14"
        >
          <a
            href="#solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-medium text-sm px-6 py-3.5 rounded-full hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-500/20"
          >
            <span>Explore Solutions</span>
            <ArrowUpRight size={16} />
          </a>
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-700 font-medium text-sm px-6 py-3.5 rounded-full border border-slate-200/90 hover:bg-slate-50 hover:text-slate-950 transition-all duration-200 shadow-xs"
          >
            <span>View 6+ Projects</span>
          </a>
        </motion.div>

        {/* Quick Capability Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.label}
                className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-slate-200/80 px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-600 shadow-2xs"
              >
                <Icon size={14} className="text-blue-600" />
                <span>{cap.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Trust Metrics Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-16 pt-8 border-t border-slate-200/70 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "6+", label: "Completed Projects", hint: "Deployed & active" },
            { value: "3", label: "Core Engineers", hint: "Software & Hardware" },
            { value: "3+ Yrs", label: "Combined R&D", hint: "Visakhapatnam studio" },
            { value: "End-to-End", label: "Full Ownership", hint: "Sensors to cloud" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div
                className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-700 mt-0.5">{stat.label}</div>
              <div className="text-[11px] text-slate-600">{stat.hint}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gentle Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1 }}
        className="mt-10 text-slate-600 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest text-slate-600">Scroll down</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
