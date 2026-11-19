"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Layers, Sparkles } from "lucide-react";

const projects = [
  {
    name: "OmniMatrix Technologies",
    category: "Precision Engineering & Industrial Manufacturing",
    description:
      "End-to-end digital flagship for an international precision manufacturing and tooling enterprise, showcasing high-tolerance molds, CNC capabilities, and cleanroom aerospace parts.",
    tags: ["Precision Tooling", "B2B Manufacturing", "Global Web"],
    url: "https://omnimatrixs.com",
    type: "Client Deployment",
  },
  {
    name: "VijayaHub",
    category: "EdTech & Career Opportunity Platform",
    description:
      "A student-first aggregator web application delivering curated free certifications, job listings, internships, and study cheat-sheets for university students and freshers across India.",
    tags: ["Web Application", "EdTech", "Vercel Cloud"],
    url: "https://vijayahub.vercel.app/",
    type: "Product Lab",
  },
  {
    name: "Siegen Global Manufacturing",
    category: "Industrial Engineering & Tool Design",
    description:
      "Corporate web presence for a specialized tool, die, and injection mold manufacturer founded by NTTF alumni serving automotive and aerospace OEMs.",
    tags: ["Tool & Die", "Industrial Web", "Automotive"],
    url: "https://praveenyvv.github.io/siegenglobal/",
    type: "Client Deployment",
  },
  {
    name: "CLS Tech AI",
    category: "Industry 4.0 & Industrial AI Consulting",
    description:
      "Enterprise digital platform for a smart factory consulting firm providing IIoT edge connectivity, predictive maintenance ML, digital twins, and SAP cloud integrations.",
    tags: ["Industry 4.0", "Industrial IoT", "Enterprise AI"],
    url: "https://praveenyvv.github.io/clstechai_website/",
    type: "Client Deployment",
  },
  {
    name: "Custom Cloud ERP & Invoicing Engine",
    category: "Business Operations & Automation",
    description:
      "Automated billing, real-time ledger accounting, and cloud backup software engineered to replace fragile offline bookkeeping with zero data loss.",
    tags: ["Cloud ERP", "Automated Billing", "Ledger Sync"],
    url: null,
    type: "Internal Case Study",
    comingSoon: true,
  },
  {
    name: "Industrial IoT Edge Telemetry Hub",
    category: "Hardware & Connected Sensors",
    description:
      "Microcontroller-based telemetry system streaming real-time machine temperature, vibration, and uptime data to cloud monitoring dashboards.",
    tags: ["Microcontrollers", "MQTT / Sensors", "Real-Time"],
    url: null,
    type: "Hardware R&D",
    comingSoon: true,
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={ref} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 uppercase tracking-wider mb-4">
              Proven Track Record
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Real projects we have built.
              <br />
              <span className="text-blue-600">Active and deployed.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed font-normal">
            From precision manufacturing flagships to student aggregators and industrial consulting — here is a snapshot of our engineering footprint.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group bg-white rounded-2xl border p-7 flex flex-col justify-between transition-all duration-300 ${
                project.comingSoon
                  ? "border-dashed border-slate-300 bg-slate-50/50"
                  : "border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-300"
              }`}
            >
              <div>
                {/* Top Type Badge & External Link */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      project.comingSoon
                        ? "bg-slate-100 text-slate-600 border-slate-200"
                        : project.type === "Product Lab"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-blue-50 text-blue-700 border-blue-200"
                    }`}
                  >
                    {project.type}
                  </span>

                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-600 p-1 transition-colors"
                      aria-label={`Visit ${project.name}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Sparkles size={12} className="text-amber-500" />
                      <span>Previewing</span>
                    </span>
                  )}
                </div>

                {/* Subcategory */}
                <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1">
                  {project.category}
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-bold mb-3 ${
                    project.comingSoon ? "text-slate-800" : "text-slate-950 group-hover:text-blue-600 transition-colors"
                  }`}
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              {/* Tags and Link */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
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
                    <span>View live deployment</span>
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-400 font-mono">
                    Case study available upon request
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
