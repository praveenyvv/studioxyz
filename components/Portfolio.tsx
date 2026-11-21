"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Receipt, Radio, Sparkles } from "lucide-react";
import LiveWebsitePreview from "./LiveWebsitePreview";

interface Project {
  name: string;
  category: string;
  type: string;
  description: string;
  tags: string[];
  url: string | null;
  displayDomain?: string;
  comingSoon?: boolean;
  visualPreview?: React.ReactNode;
}

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const projects: Project[] = [
    {
      name: "OmniMatrix Technologies",
      category: "Precision Engineering & Tooling",
      type: "Client Deployment",
      description:
        "High-performance digital flagship for an international precision manufacturing enterprise producing high-cavity plastic injection molds, PDC dies, and cleanroom aerospace components.",
      tags: ["Precision Tooling", "B2B Manufacturing", "Global Web"],
      url: "https://omnimatrixs.com",
      displayDomain: "omnimatrixs.com",
    },
    {
      name: "VijayaHub",
      category: "EdTech & Career Opportunities",
      type: "Product Lab",
      description:
        "Student-first career resource platform aggregating vetted free certifications from Google/Microsoft, verified fresher jobs, government hackathons, and curated study notes.",
      tags: ["EdTech Platform", "Next.js", "Vercel Cloud"],
      url: "https://vijayahub.vercel.app/",
      displayDomain: "vijayahub.vercel.app",
    },
    {
      name: "Siegen Global Manufacturing",
      category: "Precision Engineering & Moulds",
      type: "Client Deployment",
      description:
        "Industrial tooling and die design showcase for an engineering firm founded by NTTF alumni, highlighting pressure die casting, sand casting, and special purpose machinery (SPM).",
      tags: ["Tool & Die", "Industrial Engineering", "OEMs"],
      url: "https://praveenyvv.github.io/siegenglobal/",
      displayDomain: "siegenglobal.in",
    },
    {
      name: "CLS Tech AI",
      category: "Industry 4.0 & Digital Transformation",
      type: "Client Deployment",
      description:
        "Enterprise technology platform delivering Industry 4.0 transformation — smart factory connectivity, IIoT telemetry, digital twins, and SAP ERP edge integration for heavy industries.",
      tags: ["Industry 4.0", "Industrial IoT", "Enterprise AI"],
      url: "https://praveenyvv.github.io/clstechai_website/",
      displayDomain: "clstechai.com",
    },
    {
      name: "Cloud ERP & Automated Invoicing Suite",
      category: "Business Operations & Automation",
      type: "Internal Solution",
      description:
        "Custom cloud ledger and invoicing software engineered to eliminate manual paper bill books and prevent catastrophic data loss with automatic continuous cloud backups and WhatsApp receipts.",
      tags: ["Cloud ERP", "Automated Billing", "Ledger Sync"],
      url: null,
      comingSoon: true,
      visualPreview: (
        <div className="rounded-xl border border-slate-200/90 bg-white overflow-hidden shadow-sm">
          {/* Header */}
          <div className="bg-slate-100/90 border-b border-slate-200 px-3 py-2 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="bg-white border border-slate-200 rounded px-2 py-0.5 text-[10px] font-mono text-slate-600">
              erp.studioxyz.cloud
            </div>
            <span className="text-[9px] font-bold text-blue-600 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded">
              CLOUD SYNCED
            </span>
          </div>

          {/* Invoice Visual */}
          <div className="p-3.5 space-y-2.5 bg-slate-50/60 h-[180px] flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900 flex items-center gap-1">
                  <Receipt size={13} className="text-blue-600" />
                  Tax Invoice #INV-2024-108
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold font-mono">
                  ✓ Backed Up to Cloud
                </span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-slate-200/80 text-[11px] space-y-1">
                <div className="flex justify-between text-slate-600">
                  <span>Manufacturing Job Work (Batch #4)</span>
                  <span className="font-mono font-bold text-slate-900">₹64,250</span>
                </div>
                <div className="flex justify-between text-slate-500 text-[10px]">
                  <span>GST (18%) Auto-Computed</span>
                  <span className="font-mono text-blue-600">₹11,565</span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2 text-[10px] text-emerald-800 flex items-center justify-between font-medium">
              <span>📲 WhatsApp PDF Sent &middot; 0 Paper Lost</span>
              <span className="text-emerald-700 font-bold font-mono">Active</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Industrial IoT Edge Telemetry Hub",
      category: "Hardware & Connected Sensors",
      type: "Hardware R&D",
      description:
        "Microcontroller-driven sensor hub (ESP32 / Raspberry Pi) monitoring machine vibration, motor current, and thermal levels with real-time MQTT telemetry and automated anomaly alerts.",
      tags: ["Microcontrollers", "MQTT Telemetry", "Hardware Native"],
      url: null,
      comingSoon: true,
      visualPreview: (
        <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-sm">
          {/* Header */}
          <div className="bg-slate-900 border-b border-slate-800 px-3 py-2 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded px-2 py-0.5 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>telemetry://esp32-node-01</span>
            </div>
            <span className="text-[9px] font-mono text-slate-400">14ms</span>
          </div>

          {/* Telemetry Visual */}
          <div className="p-3.5 space-y-2.5 h-[180px] flex flex-col justify-between font-mono text-white">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-slate-300">
                <span className="flex items-center gap-1 font-semibold text-emerald-400">
                  <Radio size={13} />
                  Live Sensor Stream
                </span>
                <span className="text-[9px] text-slate-500">MQTT QoS 1</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-center text-xs">
                <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg">
                  <div className="text-[9px] text-slate-400">Temp</div>
                  <div className="text-amber-400 font-bold mt-0.5">41.2&deg;C</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg">
                  <div className="text-[9px] text-slate-400">Vibration</div>
                  <div className="text-emerald-400 font-bold mt-0.5">0.14g</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg">
                  <div className="text-[9px] text-slate-400">Current</div>
                  <div className="text-blue-400 font-bold mt-0.5">4.8A</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-2 text-[9px] text-slate-400 flex items-center justify-between">
              <span>Status: All machine thresholds nominal</span>
              <span className="text-emerald-400 font-bold">OPTIMAL</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="work" ref={ref} className="py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 px-3.5 py-1 rounded-full text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2.5">
              Live Deployments &middot; Interactive Previews
            </div>
            <h2
              className="text-2xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Real systems we have engineered.
              <br />
              <span className="text-blue-600">Active, tested, and deployed.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md leading-relaxed font-normal">
            Every card renders the real, active deployment live inside the browser window. Click any preview to explore the live website.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`group bg-white rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 ${
                project.comingSoon
                  ? "border-slate-200/90 shadow-2xs hover:shadow-md"
                  : "border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300"
              }`}
            >
              <div>
                {/* Live Miniature Browser Preview Block */}
                <div className="mb-4">
                  {project.url && project.displayDomain ? (
                    <LiveWebsitePreview
                      url={project.url}
                      title={project.name}
                      displayDomain={project.displayDomain}
                    />
                  ) : (
                    project.visualPreview
                  )}
                </div>

                {/* Subcategory & Type */}
                <div className="flex items-center justify-between text-[10px] font-semibold mb-1.5">
                  <span className="uppercase tracking-wider text-slate-500 font-mono truncate mr-2">
                    {project.category}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full border shrink-0 ${
                      project.type === "Product Lab"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : project.type === "Hardware R&D"
                        ? "bg-purple-50 text-purple-700 border-purple-200"
                        : "bg-blue-50 text-blue-700 border-blue-200"
                    }`}
                  >
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold text-slate-950 group-hover:text-blue-600 transition-colors mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              {/* Tags and Live URL */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Open full website</span>
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-[10px] text-slate-400 font-mono">
                    Live demo on request
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
