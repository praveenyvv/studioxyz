"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Cpu, Smartphone, ShieldCheck, Zap } from "lucide-react";

export default function HeroVisualShowcase() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Ambient background glow behind mockup */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-violet-500/15 rounded-3xl blur-2xl -z-10" />

      {/* Main SaaS Platform Window */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/90 shadow-2xl shadow-blue-500/10 overflow-hidden"
      >
        {/* Window Chrome Header */}
        <div className="bg-slate-50/90 px-4 py-3 border-b border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="bg-white border border-slate-200 px-3 py-1 rounded-md text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>app.studioxyz.cloud/live</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
            <span>Production V3.4</span>
          </div>
        </div>

        {/* Dashboard Mockup Body */}
        <div className="p-5 space-y-4">
          {/* Top Metric Cards */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-2.5">
              <div className="text-[10px] text-slate-500 font-medium">Active Invoices</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">₹8,42,500</div>
              <div className="text-[9px] text-emerald-600 font-semibold flex items-center gap-0.5 mt-0.5">
                <TrendingUp size={10} /> +18.4% synced
              </div>
            </div>
            <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-2.5">
              <div className="text-[10px] text-slate-500 font-medium">IoT Machine Telemetry</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">99.94%</div>
              <div className="text-[9px] text-blue-600 font-semibold flex items-center gap-0.5 mt-0.5">
                <Cpu size={10} /> 12 nodes online
              </div>
            </div>
            <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-2.5">
              <div className="text-[10px] text-slate-500 font-medium">Orders Dispatched</div>
              <div className="text-base font-bold text-slate-900 mt-0.5">1,420</div>
              <div className="text-[9px] text-violet-600 font-semibold flex items-center gap-0.5 mt-0.5">
                <Zap size={10} /> Auto-Shiprocket
              </div>
            </div>
          </div>

          {/* Interactive Flow Visualizer */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl p-4 text-white">
            <div className="flex items-center justify-between text-xs mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold text-slate-200">Integrated Systems Stream</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">Realtime</span>
            </div>

            {/* Pipeline Stage Blocks */}
            <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
              <div className="bg-slate-800/90 border border-slate-700/80 rounded-lg p-2">
                <div className="text-slate-400">1. Customer</div>
                <div className="font-bold text-blue-400 mt-0.5">Order Placed</div>
              </div>
              <div className="bg-slate-800/90 border border-slate-700/80 rounded-lg p-2">
                <div className="text-slate-400">2. Gateway</div>
                <div className="font-bold text-emerald-400 mt-0.5">UPI Settled</div>
              </div>
              <div className="bg-slate-800/90 border border-slate-700/80 rounded-lg p-2">
                <div className="text-slate-400">3. Cloud ERP</div>
                <div className="font-bold text-amber-400 mt-0.5">Ledger Synced</div>
              </div>
              <div className="bg-slate-800/90 border border-slate-700/80 rounded-lg p-2">
                <div className="text-slate-400">4. Dispatch</div>
                <div className="font-bold text-purple-400 mt-0.5">Shiprocket API</div>
              </div>
            </div>
          </div>

          {/* Bottom Live Activity Feed */}
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-emerald-50/80 border border-emerald-100 rounded-xl px-3 py-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">
                  ✓
                </div>
                <span className="text-slate-700 font-medium">WhatsApp order receipt #8492 sent</span>
              </div>
              <span className="text-[10px] text-emerald-700 font-semibold font-mono">Just now</span>
            </div>

            <div className="flex items-center justify-between bg-blue-50/80 border border-blue-100 rounded-xl px-3 py-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                  ⚡
                </div>
                <span className="text-slate-700 font-medium">PostgreSQL read replica query: 12ms</span>
              </div>
              <span className="text-[10px] text-blue-700 font-semibold font-mono">0.4s ago</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Accent Badge 1: Cross-Platform */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl rounded-2xl px-4 py-2.5 flex items-center gap-2.5 z-20"
      >
        <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
          <Smartphone size={18} />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">One Codebase</div>
          <div className="text-[10px] text-slate-500">Android · iOS · Web</div>
        </div>
      </motion.div>

      {/* Floating Accent Badge 2: Data Scale */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl rounded-2xl px-4 py-2.5 flex items-center gap-2.5 z-20"
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
          <ShieldCheck size={18} />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">Lakhs of Records</div>
          <div className="text-[10px] text-slate-500">PostgreSQL Cloud Scale</div>
        </div>
      </motion.div>
    </div>
  );
}
