"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenLine, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Friction Discovery",
    description:
      "We interview your workflow before writing a single line of code. Finding what wastes your time or money is 80% of building the right solution.",
  },
  {
    icon: PenLine,
    number: "02",
    title: "System Architecture",
    description:
      "We map the database schema, hardware pinouts (if IoT), and intuitive user interfaces. Simple enough for anyone on your team to use without training.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Agile Engineering",
    description:
      "Rapid iterative sprints with continuous live staging links. You test the product as it is being built — zero surprises on delivery day.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Handover & Autonomy",
    description:
      "We deploy to secure cloud infrastructure, train your staff, and hand over 100% of the intellectual property and code repository.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-24 px-6 relative bg-slate-50/60 border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 uppercase tracking-wider mb-4">
            How We Execute
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            A predictable engineering process.
            <br />
            <span className="text-blue-600">Zero corporate bloat.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            We operate with the speed of an elite engineering pod and the transparency of in-house team members.
          </p>
        </div>

        {/* 4 Steps */}
        <div className="grid md:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md">
                      STEP {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center text-slate-700">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3
                    className="text-lg font-bold text-slate-950 mb-2.5"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
