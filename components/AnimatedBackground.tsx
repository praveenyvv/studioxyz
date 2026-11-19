"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle Ambient Mesh Grid */}
      <div className="absolute inset-0 bg-subtle-mesh opacity-70" />

      {/* Floating Animated Gradient Orb 1 - Indigo/Blue */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-12 left-1/4 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-blue-400/20 via-indigo-300/25 to-sky-200/20 blur-[100px]"
      />

      {/* Floating Animated Gradient Orb 2 - Violet/Cyan */}
      <motion.div
        animate={{
          x: [0, -90, 50, 0],
          y: [0, 70, -50, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-10 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-violet-300/20 via-purple-200/20 to-blue-200/25 blur-[120px]"
      />

      {/* Floating Animated Gradient Orb 3 - Soft Teal/Emerald (IoT & Real-time feel) */}
      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, 50, -30, 0],
          scale: [0.95, 1.1, 1, 0.95],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-teal-200/25 via-sky-200/20 to-indigo-200/15 blur-[90px]"
      />

      {/* Floating Dynamic Tech Tokens drifting in the atmosphere */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
          y: [-10, 15, -10],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="hidden lg:flex absolute top-32 right-[14%] items-center gap-2 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-sm text-[11px] font-mono text-slate-600"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Hardware &middot; Telemetry Stream</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: [0.35, 0.65, 0.35],
          y: [10, -15, 10],
          x: [-5, 8, -5],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="hidden lg:flex absolute top-[58%] left-[8%] items-center gap-2 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-sm text-[11px] font-mono text-slate-600"
      >
        <span className="w-2 h-2 rounded-full bg-blue-500" />
        <span>Cloud ERP &middot; Ledger Synced</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          y: [-8, 12, -8],
          x: [5, -5, 5],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="hidden lg:flex absolute top-[80%] right-[10%] items-center gap-2 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-sm text-[11px] font-mono text-slate-600"
      >
        <span className="w-2 h-2 rounded-full bg-violet-500" />
        <span>E-Commerce Engine &middot; Active</span>
      </motion.div>
    </div>
  );
}
