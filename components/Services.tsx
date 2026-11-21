"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Database,
  Cpu,
  ShoppingBag,
  Sparkles,
  Smartphone,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Enterprise ERP & Billing Engines",
    description:
      "Automated cloud invoicing, balance ledgers, inventory reconciliation, and multi-user access tailored to your specific commercial workflow.",
    tag: "Core Specialty",
  },
  {
    icon: Cpu,
    title: "Industrial IoT & Hardware Telemetry",
    description:
      "Bridging machine sensors and microcontrollers with cloud analytics. Real-time factory floor dashboards, alerts, and remote device management.",
    tag: "Hardware + Cloud",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & Digital Storefronts",
    description:
      "Blazing-fast modern online shopping platforms, instant UPI/Card payments, automated WhatsApp order receipts, and live inventory sync.",
    tag: "Conversion-Focused",
  },
  {
    icon: Sparkles,
    title: "High-Impact Brand Flagship Websites",
    description:
      "Cinematic, interactive web platforms built for manufacturing, consulting, and B2B enterprises seeking international buyer trust.",
    tag: "Brand Authority",
  },
  {
    icon: Workflow,
    title: "Custom Web Applications & APIs",
    description:
      "Full-stack internal portals, customer dashboards, automated PDF reporting, and secure REST/GraphQL backend architecture.",
    tag: "Full-Stack",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    description:
      "Performant iOS and Android mobile solutions that provide intuitive mobile interfaces for your on-field staff or customers.",
    tag: "iOS & Android",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-14 px-6 relative bg-slate-50/60 border-y border-slate-200/70">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 uppercase tracking-wider mb-4">
            Our Service Suite
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Engineering depth across
            <br />
            <span className="text-blue-600">hardware, cloud, and web.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Whether building an end-to-end industrial software suite or designing a sleek commercial application, we maintain rigorous engineering standards from day one.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-white rounded-2xl border border-slate-200/90 p-7 shadow-xs hover:shadow-xl hover:border-blue-400/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200/60">
                      {service.tag}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold text-slate-950 mb-2.5 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform duration-200">
                  <span>Inquire about this capability</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
