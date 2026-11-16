"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span
            className="text-lg font-bold tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Studio<span className="text-[#3B82F6]">XYZ</span>
          </span>
          <span className="text-[10px] font-medium bg-[#3B82F6]/10 text-[#3B82F6] border border-[#3B82F6]/20 px-2 py-0.5 rounded-full">
            Coming Soon
          </span>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-6">
          {["About", "Services", "Work", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs text-[#555] hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#555] hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <Github size={14} />
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#555] hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <Linkedin size={14} />
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#555] hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <Twitter size={14} />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-[#333]">
          © {year} StudioXYZ. All rights reserved.
        </p>
        <p className="text-xs text-[#333]">
          Built by engineers, for real problems.
        </p>
      </div>
    </footer>
  );
}
