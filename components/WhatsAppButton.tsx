"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const phoneNumber = "917569965052";
  const defaultMessage = encodeURIComponent(
    "Hi StudioXYZ! I have a software/hardware project in mind and would love to discuss with your team."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip prompt */}
      <motion.div
        initial={{ opacity: 0, x: 10, scale: 0.95 }}
        animate={{
          opacity: hovered ? 1 : 0.9,
          x: 0,
          scale: 1,
        }}
        className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-lg text-xs font-medium text-slate-800"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>Quick Chat on WhatsApp</span>
      </motion.div>

      {/* Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
      >
        {/* Continuous soft pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-pulse pointer-events-none" />

        {/* WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 relative z-10"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.877-2.056-.977-.276-.1-.477-.15-.678.15-.201.3-.778.978-.954 1.179-.176.2-.351.226-.653.075-.301-.151-1.272-.469-2.424-1.496-.897-.799-1.503-1.787-1.68-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.631-.929-2.234-.244-.588-.493-.508-.678-.517-.176-.009-.377-.009-.578-.009s-.527.075-.803.376c-.276.301-1.054 1.029-1.054 2.509 0 1.48 1.079 2.909 1.23 3.109.15.2 2.122 3.24 5.141 4.544.718.31 1.278.495 1.716.634.723.23 1.381.198 1.901.12.58-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.201-.577-.351zM12.042 2C6.516 2 2.025 6.49 2.025 12.016c0 1.947.558 3.766 1.528 5.312L2 22l4.821-1.505c1.479.882 3.204 1.385 5.221 1.385 5.526 0 10.017-4.49 10.017-10.016C22.059 6.49 17.568 2 12.042 2zm0 18.232c-1.737 0-3.344-.492-4.712-1.341l-.338-.211-2.859.892.908-2.784-.231-.368c-.96-1.527-1.47-3.298-1.47-5.124 0-4.57 3.719-8.289 8.288-8.289 4.57 0 8.289 3.719 8.289 8.289 0 4.57-3.719 8.289-8.289 8.289z" />
        </svg>
      </motion.a>
    </div>
  );
}
