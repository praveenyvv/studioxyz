"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Cpu,
  ShoppingBag,
  Sparkles,
  Layers,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Receipt,
  Radio,
  Smartphone,
  Globe,
  Workflow,
  Zap,
  MessageSquare,
} from "lucide-react";
import BillingDemoModal from "./BillingDemoModal";

interface SolutionItem {
  id: string;
  category: string;
  icon: typeof Database;
  title: string;
  tagline: string;
  problem: string;
  engineeredFix: string;
  realWorldImpact: string[];
  deliverables: string[];
  badge?: string;
  visualMockup: (onOpenDemo?: () => void) => React.ReactNode;
}

export default function Solutions() {
  const [isBillingModalOpen, setIsBillingModalOpen] = useState(false);

  const solutions: SolutionItem[] = [
    {
      id: "erp",
      category: "ERP & Operations",
      icon: Database,
      title: "Custom Cloud ERP & Workflow Engines",
      tagline: "Replace fragile paper logbooks and crashed offline desktop software with indestructible cloud systems.",
      problem:
        "Businesses struggle with physical paper bill books, un-synced Excel files, or offline software that crashes and destroys years of financial records when a computer is repaired.",
      engineeredFix:
        "We build tailored, lightweight cloud ERPs featuring instant invoicing, automated GST ledger reconciliation, role-based access, and continuous cloud backups accessible from phone and desktop.",
      realWorldImpact: [
        "Zero data loss with continuous redundant cloud backups",
        "80% reduction in daily administrative invoice creation time",
        "Instant WhatsApp & PDF invoice dispatch to clients directly",
      ],
      deliverables: [
        "Automated Invoicing & Billing Engine",
        "Multi-Branch Ledger & Payment Tracking",
        "Client Management & Payment Reminders",
        "Offline-Resilient Cloud Architecture",
      ],
      visualMockup: (onOpenDemo) => (
        <div
          onClick={onOpenDemo}
          className="bg-slate-900 rounded-2xl p-4 text-white border border-slate-800 shadow-xl space-y-3 cursor-pointer group hover:border-blue-400 transition-all"
        >
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
            <span className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Receipt size={14} className="text-blue-400" />
              Cloud Billing &middot; #INV-9284
            </span>
            <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Click to Test Live Demo
            </span>
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 space-y-2 text-xs">
            <div className="flex justify-between text-slate-400 text-[11px]">
              <span>Industrial Precision Parts Order</span>
              <span className="text-white font-mono font-bold">₹1,48,000</span>
            </div>
            <div className="flex justify-between text-slate-400 text-[11px]">
              <span>Automated GST (18%) Reconciliation</span>
              <span className="text-blue-400 font-mono">₹26,640</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-slate-800 text-slate-200 font-bold">
              <span>Total Synced Balance</span>
              <span className="text-emerald-400 font-mono">₹1,74,640</span>
            </div>
          </div>
          <div className="bg-blue-950/60 border border-blue-800/50 rounded-xl p-2.5 text-[11px] text-blue-200 flex items-center justify-between group-hover:bg-blue-900/60 transition-colors">
            <span>⚡ Click to launch interactive billing engine</span>
            <span className="text-emerald-400 font-mono text-[10px]">Try Now &rarr;</span>
          </div>
        </div>
      ),
    },
    {
      id: "iot",
      category: "Industrial IoT & Hardware",
      icon: Cpu,
      title: "Connected Hardware & Industrial IoT Ecosystems",
      tagline: "Bridge the physical shop floor to the cloud with real-time telemetry and sensors.",
      badge: "Hardware Native",
      problem:
        "Factory machines, environmental storage, and field equipment operate as black boxes. Breakdowns happen unexpectedly, causing expensive downtimes because there is no live telemetry.",
      engineeredFix:
        "We design end-to-end embedded systems (ESP32/Raspberry Pi microcontrollers) with custom industrial sensors, streaming live telemetry to real-time cloud dashboards with automated incident alerts.",
      realWorldImpact: [
        "Early warning alerts before machine failure",
        "Remote monitoring across multiple plant sites from any smartphone",
        "Elimination of manual sensor-logging sheets",
      ],
      deliverables: [
        "Custom Microcontroller & Sensor Integration",
        "Real-time Telemetry Dashboard (MQTT / WebSockets)",
        "Automated SMS/WhatsApp Threshold Alerts",
        "Edge-to-Cloud Predictive Maintenance Analytics",
      ],
      visualMockup: () => (
        <div className="bg-slate-950 rounded-2xl p-4 text-white border border-slate-800 shadow-xl space-y-3 font-mono">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <Radio size={14} className="animate-pulse" />
              ESP32 NODE #04 TELEMETRY
            </span>
            <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
              MQTT: 16ms
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-slate-900 border border-slate-800 p-2 rounded-xl">
              <div className="text-[10px] text-slate-400">Motor Temp</div>
              <div className="text-amber-400 font-bold text-sm mt-0.5">44.8&deg;C</div>
              <div className="text-[9px] text-slate-500">Normal</div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-2 rounded-xl">
              <div className="text-[10px] text-slate-400">Vibration</div>
              <div className="text-emerald-400 font-bold text-sm mt-0.5">0.12g</div>
              <div className="text-[9px] text-slate-500">Optimal</div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-2 rounded-xl">
              <div className="text-[10px] text-slate-400">Line Voltage</div>
              <div className="text-blue-400 font-bold text-sm mt-0.5">415V</div>
              <div className="text-[9px] text-slate-500">3-Phase</div>
            </div>
          </div>
          <div className="bg-emerald-950/60 border border-emerald-800/50 rounded-xl p-2 text-[10px] text-emerald-300 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>All 12 edge sensors reporting nominal operating telemetry</span>
          </div>
        </div>
      ),
    },
    {
      id: "ecommerce",
      category: "E-Commerce Engines",
      icon: ShoppingBag,
      title: "High-Speed Custom E-Commerce & Retail Engines",
      tagline: "Move beyond slow, bloated templates to sub-second digital storefronts that convert.",
      problem:
        "Standard templates load slowly, lose shoppers on mobile, and lack seamless integration with multi-portal dashboards, WhatsApp order triggers, and Shiprocket logistics.",
      engineeredFix:
        "We build Level 3 multi-portal eCommerce with separate role views (Customer, Admin, Owner Analytics, Delivery, Warehouse) and one-click UPI checkout with automated dispatch.",
      realWorldImpact: [
        "Sub-second page load times directly boosting buyer conversion",
        "Frictionless single-click checkout and UPI/Card integrations",
        "Automated inventory decrement and reorder triggers",
      ],
      deliverables: [
        "Multi-Portal Dashboard Architecture (Customer/Admin/Delivery)",
        "Direct UPI, Stripe, Razorpay & Card Gateway Integration",
        "Real-time Inventory & Stock Sync Across Warehouses",
        "Automated Order Confirmation via WhatsApp & Email",
      ],
      visualMockup: () => (
        <div className="bg-slate-900 rounded-2xl p-4 text-white border border-slate-800 shadow-xl space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
            <span className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Smartphone size={14} className="text-violet-400" />
              Instant Mobile Checkout Flow
            </span>
            <span className="bg-violet-500/20 text-violet-300 text-[10px] px-2 py-0.5 rounded-full font-mono">
              0.8s Checkout
            </span>
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-medium">1-Click UPI Payment</span>
              <span className="text-emerald-400 font-mono font-bold">₹3,499 Settled ✓</span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Auto-generated AWB Label</span>
              <span className="text-blue-400 font-mono">Shiprocket #SR8923</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px] text-center">
            <div className="bg-slate-800/80 p-2 rounded-lg text-slate-300">
              <div className="text-slate-400">Live Inventory</div>
              <div className="font-bold text-white mt-0.5">Auto-Decremented</div>
            </div>
            <div className="bg-slate-800/80 p-2 rounded-lg text-slate-300">
              <div className="text-slate-400">WhatsApp Alert</div>
              <div className="font-bold text-emerald-400 mt-0.5">Dispatched</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "brand",
      category: "Advertisement & Digital Flagships",
      icon: Sparkles,
      title: "High-Impact Brand Flagships & Interactive Websites",
      tagline: "Websites that command authority and turn casual visitors into enterprise contracts.",
      problem:
        "Generic brochure websites look identical to competitors, fail to communicate the engineering excellence of the company, and generate zero incoming inquiries.",
      engineeredFix:
        "We craft cinematic, interactive web presences with smooth animations, clear value-proposition storytelling, and tailored inquiry funnels that establish immediate market trust.",
      realWorldImpact: [
        "Positions upcoming companies as high-caliber industry leaders",
        "Interactive 3D/animated demonstrations of complex machinery and tech",
        "Significantly higher qualified lead conversion from international buyers",
      ],
      deliverables: [
        "High-Performance Modern Architectural Design",
        "Interactive Product Showcases & Micro-Interactions",
        "Optimized Technical SEO & Core Web Vitals 95+",
        "Direct Inbound Inquiry & CRM Funnels",
      ],
      visualMockup: () => (
        <div className="bg-slate-900 rounded-2xl p-4 text-white border border-slate-800 shadow-xl space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
            <span className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Globe size={14} className="text-pink-400" />
              Enterprise Flagship Performance
            </span>
            <span className="bg-pink-500/20 text-pink-300 text-[10px] px-2 py-0.5 rounded-full font-mono">
              98/100 Lighthouse
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">First Paint</div>
              <div className="text-emerald-400 font-bold font-mono text-sm mt-0.5">0.6s</div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">SEO Score</div>
              <div className="text-blue-400 font-bold font-mono text-sm mt-0.5">100/100</div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Lead Conversion</div>
              <div className="text-violet-400 font-bold font-mono text-sm mt-0.5">+42%</div>
            </div>
          </div>
          <div className="bg-slate-800/80 rounded-xl p-2 text-[10px] text-slate-300 flex items-center justify-between">
            <span>✨ Smooth 60FPS fluid scroll transitions</span>
            <span className="text-emerald-400 font-semibold font-mono">Zero Jitter</span>
          </div>
        </div>
      ),
    },
    {
      id: "custom",
      category: "Custom Web Applications",
      icon: Layers,
      title: "Tailored Web Apps & Internal Business Tools",
      tagline: "Specialized software tailored exactly to your unique organizational operational quirks.",
      problem:
        "Off-the-shelf software forces your team to change how you work, or charges exorbitant monthly per-seat licensing fees for features you never use.",
      engineeredFix:
        "We build custom-fit web applications designed around your exact team workflow — giving you 100% intellectual property ownership and zero ongoing SaaS licensing bloat.",
      realWorldImpact: [
        "Engineered strictly for your company's proprietary workflow",
        "Zero per-seat licensing fees — you own the code",
        "Bank-grade security and role-level data segregation",
      ],
      deliverables: [
        "Custom Administrative Portals & Dashboards",
        "Interactive Data Visualizations & Reporting",
        "Third-party API Integrations & Webhooks",
        "Full Source Code & Database Ownership",
      ],
      visualMockup: () => (
        <div className="bg-slate-900 rounded-2xl p-4 text-white border border-slate-800 shadow-xl space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs">
            <span className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Workflow size={14} className="text-amber-400" />
              Role-Based Admin Console
            </span>
            <span className="bg-amber-500/20 text-amber-300 text-[10px] px-2 py-0.5 rounded-full font-mono">
              100% Code Ownership
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 text-[10px] text-center font-medium">
            <div className="bg-blue-900/40 text-blue-300 border border-blue-700/50 p-2 rounded-lg">
              Owner Dashboard
            </div>
            <div className="bg-slate-800 text-slate-300 border border-slate-700 p-2 rounded-lg">
              Manager Panel
            </div>
            <div className="bg-slate-800 text-slate-300 border border-slate-700 p-2 rounded-lg">
              Staff Portal
            </div>
          </div>
          <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] flex justify-between items-center text-slate-300">
            <span>PostgreSQL Data Scalability</span>
            <span className="text-emerald-400 font-mono font-bold">1 Lakh+ Records</span>
          </div>
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(solutions[0].id);
  const activeSolution = solutions.find((s) => s.id === activeTab) || solutions[0];

  return (
    <section id="solutions" className="py-12 px-6 relative">
      <BillingDemoModal
        isOpen={isBillingModalOpen}
        onClose={() => setIsBillingModalOpen(false)}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2.5">
            Operational Capabilities &middot; Real Use Cases
          </div>
          <h2
            className="text-2xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            We don&apos;t just build websites.
            <br />
            <span className="text-blue-600">We solve operational bottlenecks.</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
            From fragile paper logbooks and crashed desktop software to factory machine telemetry — explore how our engineering solves real commercial problems.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            const isSelected = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/15"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                <Icon size={15} className={isSelected ? "text-blue-400" : "text-slate-500"} />
                <span>{item.category}</span>
                {item.badge && (
                  <span className="text-[9px] bg-blue-500/20 text-blue-300 px-1.5 py-0.2 rounded">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Solution Card with Visual Mockup */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSolution.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-100/80 p-6 sm:p-10 overflow-hidden"
          >
            {/* Top Grid: Details on Left, Visual Mockup on Right */}
            <div className="grid lg:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-100">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <activeSolution.icon size={24} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 font-mono">
                      {activeSolution.category}
                    </div>
                    <h3
                      className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {activeSolution.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                  {activeSolution.tagline}
                </p>

                {/* Specific Action Buttons for ERP & Billing */}
                {activeSolution.id === "erp" && (
                  <div className="flex flex-wrap gap-2.5 mb-5">
                    <button
                      onClick={() => setIsBillingModalOpen(true)}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                    >
                      <Zap size={14} className="text-amber-300" />
                      <span>⚡ Test Interactive Billing Demo</span>
                    </button>
                    <a
                      href="https://wa.me/917569965052?text=Hi%20StudioXYZ!%20Your%20team%20member%20visited%20my%20office%20regarding%20a%20custom%20billing%20webapp.%20I'd%20like%20to%20discuss%20pricing%20and%20timeline%20for%20my%20business."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 font-semibold text-xs px-3.5 py-2.5 rounded-xl transition-all"
                    >
                      <MessageSquare size={13} className="text-emerald-600" />
                      <span>WhatsApp Lead Engineer About Billing</span>
                    </a>
                  </div>
                )}

                {/* Problem vs Solution quick tags */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-rose-50/70 border border-rose-100 rounded-xl p-3 text-xs">
                    <div className="flex items-center gap-1.5 text-rose-700 font-semibold mb-1">
                      <AlertCircle size={14} />
                      <span>The Frustration</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-[11px]">
                      {activeSolution.problem}
                    </p>
                  </div>
                  <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-3 text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-700 font-semibold mb-1">
                      <CheckCircle2 size={14} />
                      <span>The Engineered Fix</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-[11px]">
                      {activeSolution.engineeredFix}
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual Mockup Container */}
              <div className="lg:col-span-5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span>Interactive System Preview</span>
                  </span>
                  {activeSolution.id === "erp" && (
                    <span className="text-blue-600 font-semibold font-sans cursor-pointer hover:underline" onClick={() => setIsBillingModalOpen(true)}>
                      Click to Test &rarr;
                    </span>
                  )}
                </div>
                {activeSolution.visualMockup(() => {
                  if (activeSolution.id === "erp") {
                    setIsBillingModalOpen(true);
                  }
                })}
              </div>
            </div>

            {/* Bottom Row: Measurable Outcomes & Deliverables */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <div className="flex items-center gap-1.5 text-slate-900 text-xs font-bold uppercase tracking-wider mb-3">
                  <TrendingUp size={14} className="text-blue-600" />
                  <span>Measurable Business Impact</span>
                </div>
                <ul className="space-y-2">
                  {activeSolution.realWorldImpact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-slate-900 text-xs font-bold uppercase tracking-wider mb-3">
                  <span>Engineered Deliverables</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeSolution.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 border border-slate-200/70 rounded-xl px-3 py-2 text-[11px] font-medium text-slate-800"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
