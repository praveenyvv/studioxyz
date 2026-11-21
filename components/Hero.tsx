"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import HeroMockups from "./HeroMockups";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-28 pb-16">
      <HeroMockups />

      {/* Left content — takes ~55% on desktop */}
      <div className="relative z-20 max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm rounded-full px-4 py-1.5 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            <span className="text-xs font-semibold text-slate-700">
              Software &amp; Hardware Engineering · Visakhapatnam, India
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-slate-950 leading-[1.1] mb-5"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            We engineer the
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              software your startup
            </span>
            <br />
            actually needs.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed"
          >
            From multi-portal eCommerce and CRM automation to cross-platform apps and
            IoT hardware — we build{" "}
            <strong className="text-slate-800 font-semibold">scalable, integrated systems</strong>{" "}
            for startups and growing businesses that want real traction, not just a website.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a
              href="#services-ticker"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-blue-500/25 transition-all duration-200"
            >
              <span>See All 20+ Services</span>
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm px-6 py-3.5 rounded-full border border-slate-200/90 shadow-sm transition-all duration-200"
            >
              View Projects
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-8 border-t border-slate-200/70"
          >
            {[
              { val: "6+", label: "Live Deployments" },
              { val: "20+", label: "Capabilities" },
              { val: "3yr", label: "Engineering R&D" },
              { val: "Lakhs", label: "Records Handled" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-slate-950" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {s.val}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Spacer col for mockups on desktop */}
        <div className="hidden lg:block lg:col-span-5" />
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.1 }}
        className="relative z-20 mt-10 flex flex-col items-center gap-1 text-slate-500"
      >
        <span className="text-[9px] uppercase font-mono tracking-widest">scroll to explore</span>
        <ArrowDown size={13} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
