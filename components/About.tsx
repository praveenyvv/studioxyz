"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, HeartHandshake, Code2, Cpu } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "Engineers, Not Salespeople",
    description:
      "When you discuss a project with us, you speak directly with the engineers designing and coding your system. No middle management or broken promises.",
  },
  {
    icon: HeartHandshake,
    title: "Empathy for the End-User",
    description:
      "We believe technology is pointless if it causes stress. We build software that simplifies daily routines, saves hours of manual work, and just works reliably.",
  },
  {
    icon: Cpu,
    title: "Software + Hardware Native",
    description:
      "Unlike pure web shops, we have deep engineering roots in IoT microcontrollers, industrial machinery, and physical-to-cloud telemetry systems.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Fluff, 100% Ownership",
    description:
      "You receive production-grade, maintainable code with full intellectual property ownership. No hidden vendor lock-ins or surprise recurring bloat.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-10 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: The Narrative & Soul */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 uppercase tracking-wider mb-4">
              Our Story &middot; Why We Build
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Born from a simple belief:
              <br />
              <span className="text-blue-600">Great software brings relief.</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                We are a tight-knit trio of software and systems engineers based in Visakhapatnam, India. For over three years, we have worked together building solutions that tackle real-world friction.
              </p>
              <p>
                Too many businesses today are trapped between two extremes: expensive corporate software that requires a manual just to generate an invoice, or fragile pen-and-paper processes that collapse when hardware fails or data is lost.
              </p>
              <p>
                We started StudioXYZ to bridge that exact gap. Whether it is an automated cloud billing system that rescues a business owner from bookkeeping anxiety, or an industrial sensor network that saves a factory from machine downtime — we engineer tools that make people genuinely happier at work.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200/80 flex items-center gap-6">
              <div>
                <div
                  className="text-3xl font-bold text-slate-950"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  3
                </div>
                <div className="text-xs font-medium text-slate-500">Founding Engineers</div>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <div
                  className="text-3xl font-bold text-slate-950"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Visakhapatnam
                </div>
                <div className="text-xs font-medium text-slate-500">Andhra Pradesh, India</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The 4 Core Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-4"
          >
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 shrink-0">
                    <Icon size={20} />
                  </div>
                  <h3
                    className="text-base font-bold text-slate-950 mb-2"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
