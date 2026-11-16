"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Smartphone,
  LayoutDashboard,
  Zap,
  Palette,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Fast, clean websites that look great and work perfectly on every device.",
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications",
    description:
      "Complex tools, dashboards, and platforms built for real workflows.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "iOS and Android apps that feel native and solve a clear user need.",
  },
  {
    icon: Zap,
    title: "Automation & APIs",
    description:
      "Backend systems, integrations, and automations that save hours every week.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Interfaces that are easy to use, not just good to look at.",
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description:
      "Connected hardware and software systems. Currently expanding — coming soon.",
    comingSoon: true,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-medium text-[#3B82F6] tracking-widest uppercase">
            Services
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 max-w-xl leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            What we build
          </h2>
          <p className="text-[#888] mt-4 max-w-md">
            From a simple landing page to a full product — if it runs on a
            screen, we can build it.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative bg-[#111] border rounded-2xl p-6 hover:border-[#3B82F6]/30 hover:bg-[#111]/80 transition-all duration-300 ${
                  service.comingSoon
                    ? "border-white/5 opacity-60"
                    : "border-white/5"
                }`}
              >
                {service.comingSoon && (
                  <span className="absolute top-4 right-4 text-[10px] font-medium bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/20 px-2 py-0.5 rounded-full">
                    Soon
                  </span>
                )}
                <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mb-4 group-hover:bg-[#3B82F6]/20 transition-colors duration-300">
                  <Icon size={18} className="text-[#3B82F6]" />
                </div>
                <h3
                  className="text-base font-semibold text-white mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
