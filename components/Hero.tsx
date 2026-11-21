"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import HeroVisualShowcase from "./HeroVisualShowcase";

export default function Hero() {
  return (
    <section className="relative overflow-x-hidden px-6 pt-24 pb-8">
      {/* 2-Column Responsive Layout */}
      <div className="relative z-20 max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Core Positioning & Value Proposition */}
        <div className="lg:col-span-7">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs rounded-full px-4 py-1.5 mb-5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            <span className="text-xs font-semibold text-slate-700">
              Software &amp; Hardware Engineering Studio &middot; Visakhapatnam
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-slate-950 leading-[1.12] mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            We engineer the
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              integrated software
            </span>
            <br />
            your business actually needs.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-600 max-w-xl mb-6 leading-relaxed font-normal"
          >
            From multi-portal eCommerce and automated WhatsApp CRM to cross-platform mobile apps, cloud ERPs, and industrial IoT — we build reliable, production-ready systems for startups and growing enterprises.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <a
              href="#services-ticker"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-lg shadow-blue-500/25 transition-all duration-200"
            >
              <span>Explore All 20+ Services</span>
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm px-6 py-3 rounded-full border border-slate-200/90 shadow-2xs transition-all duration-200"
            >
              View 6+ Live Deployments
            </a>
          </motion.div>

          {/* Trust stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-slate-200/70"
          >
            {[
              { val: "6+", label: "Live Deployments" },
              { val: "20+", label: "Technical Capabilities" },
              { val: "3 Yrs", label: "Studio Engineering" },
              { val: "Lakhs", label: "Records Handled" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl sm:text-2xl font-bold text-slate-950" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  {s.val}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Visual Interactive Showcase */}
        <div className="lg:col-span-5 mt-4 lg:mt-0">
          <HeroVisualShowcase />
        </div>
      </div>
    </section>
  );
}
