"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "OmniMatrix Technologies",
    description:
      "End-to-end precision manufacturing company website — industrial moulds, CNC tooling, and custom automation for global B2B clients.",
    tags: ["Web", "Manufacturing", "B2B"],
    url: "https://omnimatrixs.com",
    type: "Client Project",
  },
  {
    name: "VijayaHub",
    description:
      "A student-first platform aggregating free courses, certifications, internships, job listings, and study resources for Indian college students.",
    tags: ["Web App", "EdTech", "Students"],
    url: "https://vijayahub.vercel.app/",
    type: "Product",
  },
  {
    name: "Siegen Global",
    description:
      "Company website for a precision engineering firm — tooling, injection moulds, and industrial components for automotive and aerospace sectors.",
    tags: ["Web", "Engineering", "B2B"],
    url: "https://praveenyvv.github.io/siegenglobal/",
    type: "Client Project",
  },
  {
    name: "CLS Tech AI",
    description:
      "Industrial AI and Industry 4.0 consulting firm website — smart factory integration, IIoT, digital twins, and enterprise digital transformation.",
    tags: ["Web", "AI/IoT", "Enterprise"],
    url: "https://praveenyvv.github.io/clstechai_website/",
    type: "Client Project",
  },
  {
    name: "Coming Soon",
    description:
      "Another project is on the way. Stay tuned.",
    tags: [],
    url: null,
    type: "Coming Soon",
    comingSoon: true,
  },
  {
    name: "Coming Soon",
    description:
      "More work to be showcased here soon.",
    tags: [],
    url: null,
    type: "Coming Soon",
    comingSoon: true,
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-medium text-[#3B82F6] tracking-widest uppercase">
            Our Work
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 max-w-xl leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Projects we&apos;re proud of
          </h2>
          <p className="text-[#888] mt-4 max-w-md">
            Real clients, real problems, real software. Here&apos;s a selection
            of what we&apos;ve shipped.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={`${project.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative bg-[#111] border rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                project.comingSoon
                  ? "border-white/5 border-dashed opacity-40"
                  : "border-white/5 hover:border-[#3B82F6]/30"
              }`}
            >
              {/* Type badge */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${
                    project.comingSoon
                      ? "bg-white/5 text-[#555] border-white/10"
                      : project.type === "Product"
                      ? "bg-green-500/10 text-green-400 border-green-500/20"
                      : "bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20"
                  }`}
                >
                  {project.type}
                </span>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#555] hover:text-[#3B82F6] transition-colors duration-200"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>

              {/* Project name */}
              <h3
                className={`text-base font-semibold mb-3 ${
                  project.comingSoon ? "text-[#444]" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {project.name}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed flex-1 ${
                  project.comingSoon ? "text-[#333]" : "text-[#666]"
                }`}
              >
                {project.description}
              </p>

              {/* Tags */}
              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-[#555] bg-white/5 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* View link */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 text-sm text-[#555] hover:text-[#3B82F6] transition-colors duration-200 flex items-center gap-1 group-hover:text-[#3B82F6]"
                >
                  Visit site
                  <ExternalLink size={12} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
