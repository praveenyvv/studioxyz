"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Cpu,
  ShoppingBag,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

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
}

const solutions: SolutionItem[] = [
  {
    id: "erp",
    category: "ERP & Operations",
    icon: Database,
    title: "Custom Cloud ERP & Workflow Engines",
    tagline: "Replace fragile paper logbooks and offline desktop software with indestructible cloud systems.",
    problem:
      "Businesses often struggle with fragmented physical books, un-synced Excel files, or offline software that crashes and loses years of critical financial records whenever a computer is repaired.",
    engineeredFix:
      "We build tailored, lightweight cloud ERPs featuring instant invoicing, automated tax/ledger reconciliation, role-based employee access, and auto-synced cloud backups accessible from phone and desktop.",
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
  },
  {
    id: "ecommerce",
    category: "E-Commerce Engines",
    icon: ShoppingBag,
    title: "High-Speed Custom E-Commerce & Retail Engines",
    tagline: "Move beyond slow, bloated templates to sub-second digital storefronts that convert.",
    problem:
      "Standard templates often load slowly, frustrate shoppers on mobile devices, and lack seamless integration with local payment processors or multi-channel inventory.",
    engineeredFix:
      "We develop custom headless storefronts engineered for lightning-fast mobile checkouts, custom product configuration, automated inventory alerts, and instant order tracking.",
    realWorldImpact: [
      "Sub-second page load times directly boosting buyer conversion",
      "Frictionless single-click checkout and UPI/Card integrations",
      "Automated inventory decrement and reorder triggers",
    ],
    deliverables: [
      "Lightning-fast Next.js Headless Storefront",
      "Direct UPI, Stripe, Razorpay & Card Gateway Integration",
      "Real-time Inventory & Stock Management",
      "Automated Order Confirmation via WhatsApp & Email",
    ],
  },
  {
    id: "brand",
    category: "Advertisement & Digital Flagships",
    icon: Sparkles,
    title: "High-Impact Brand Flagships & Interactive Websites",
    tagline: "Websites that command authority and turn casual visitors into enterprise leads.",
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
  },
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(solutions[0].id);
  const activeSolution = solutions.find((s) => s.id === activeTab) || solutions[0];

  return (
    <section id="solutions" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 uppercase tracking-wider mb-4">
            Capabilities &middot; Real Use Cases
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            We don&apos;t just build websites.
            <br />
            <span className="text-blue-600">We solve operational bottlenecks.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Whether it is an offline manual ledger causing billing panic or factory machinery lacking real-time telemetry — our engineering team bridges software and hardware into dependable products.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {solutions.map((item) => {
            const Icon = item.icon;
            const isSelected = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/15"
                    : "bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                <Icon size={16} className={isSelected ? "text-blue-400" : "text-slate-600"} />
                <span>{item.category}</span>
                {item.badge && (
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded-sm">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Solution Deep-Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSolution.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-100/80 p-8 sm:p-12 overflow-hidden relative"
          >
            {/* Top Row: Icon + Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <activeSolution.icon size={28} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {activeSolution.category}
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {activeSolution.title}
                  </h3>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white px-4 py-2.5 rounded-full transition-all border border-blue-200/80 w-fit"
              >
                <span>Discuss This Use Case</span>
                <ArrowRight size={14} />
              </a>
            </div>

            <p className="text-slate-600 text-base sm:text-lg mt-6 leading-relaxed font-normal">
              {activeSolution.tagline}
            </p>

            {/* Problem vs Engineered Solution Breakdown */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {/* Problem Column */}
              <div className="bg-rose-50/50 border border-rose-100/80 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-3">
                  <AlertCircle size={16} />
                  <span>The Pain Point You Face</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {activeSolution.problem}
                </p>
              </div>

              {/* Solution Column */}
              <div className="bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-6">
                <div className="flex items-center gap-2 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
                  <CheckCircle2 size={16} />
                  <span>How We Engineer The Fix</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {activeSolution.engineeredFix}
                </p>
              </div>
            </div>

            {/* Bottom Row: Real Impact + Deliverables */}
            <div className="grid md:grid-cols-2 gap-8 mt-10 pt-8 border-t border-slate-100">
              {/* Proven Outcomes */}
              <div>
                <div className="flex items-center gap-2 text-slate-900 text-xs font-bold uppercase tracking-wider mb-4">
                  <TrendingUp size={16} className="text-blue-600" />
                  <span>Measurable Business Impact</span>
                </div>
                <ul className="space-y-3">
                  {activeSolution.realWorldImpact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Deliverables */}
              <div>
                <div className="text-slate-900 text-xs font-bold uppercase tracking-wider mb-4">
                  <span>What We Deliver</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSolution.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 border border-slate-200/70 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-800"
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
