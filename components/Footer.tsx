"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/praveenyvv",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/917569965052",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M12.042 2C6.516 2 2.025 6.49 2.025 12.016c0 1.947.558 3.766 1.528 5.312L2 22l4.821-1.505c1.479.882 3.204 1.385 5.221 1.385 5.526 0 10.017-4.49 10.017-10.016C22.059 6.49 17.568 2 12.042 2zm0 18.232c-1.737 0-3.344-.492-4.712-1.341l-.338-.211-2.859.892.908-2.784-.231-.368c-.96-1.527-1.47-3.298-1.47-5.124 0-4.57 3.719-8.289 8.288-8.289 4.57 0 8.289 3.719 8.289 8.289 0 4.57-3.719 8.289-8.289 8.289z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white py-8 px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <span
              className="text-xl font-bold tracking-tight text-slate-950"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Studio<span className="text-blue-600">XYZ</span>
            </span>
            <span className="text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full">
              Engineering Studio
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            We find friction and engineer solutions across custom ERPs, IoT ecosystems, e-commerce engines, and brand flagships.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center gap-6">
          {[
            { label: "Solutions", href: "#solutions" },
            { label: "Services", href: "#services" },
            { label: "Work", href: "#work" },
            { label: "About", href: "#about" },
            { label: "Process", href: "#process" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social / Connect */}
        <div className="flex items-center gap-2.5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all border border-slate-200/80"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 font-normal">
        <div>&copy; {year} StudioXYZ &middot; Visakhapatnam, Andhra Pradesh, India.</div>
        <div>Engineered with precision &middot; Built for real human relief.</div>
      </div>
    </footer>
  );
}
