"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const projectTypes = [
  "Website",
  "Web Application",
  "Mobile App",
  "Automation / API",
  "UI/UX Design",
  "IoT Solution",
  "Not sure yet",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission — replace with Formspree action later
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium text-[#3B82F6] tracking-widest uppercase">
              Contact
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Have a project
              <br />
              in mind?{" "}
              <span className="text-[#3B82F6]">Let&apos;s talk.</span>
            </h2>
            <p className="text-[#888] leading-relaxed mb-8">
              Tell us what you&apos;re trying to solve. We&apos;ll get back to
              you within 24 hours — no sales pitch, just an honest conversation.
            </p>

            {/* Contact details placeholder */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#555]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                <span>hello@studioxyz.com</span>
                <span className="text-[10px] bg-white/5 text-[#444] px-2 py-0.5 rounded">
                  Coming Soon
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#555]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                <span>Visakhapatnam, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-[#111] border border-white/5 rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
                <CheckCircle size={48} className="text-[#3B82F6] mb-4" />
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Message sent!
                </h3>
                <p className="text-[#666] text-sm">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#111] border border-white/5 rounded-2xl p-6 space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#555] mb-1.5 block">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-[#0A0A0A] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-[#333] focus:outline-none focus:border-[#3B82F6]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#555] mb-1.5 block">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-[#0A0A0A] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-[#333] focus:outline-none focus:border-[#3B82F6]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#555] mb-1.5 block">
                    Project Type
                  </label>
                  <select
                    className="w-full bg-[#0A0A0A] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3B82F6]/50 transition-colors appearance-none cursor-pointer"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#111]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-[#555] mb-1.5 block">
                    Tell us about your project
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="What problem are you trying to solve?"
                    className="w-full bg-[#0A0A0A] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-[#333] focus:outline-none focus:border-[#3B82F6]/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-60 text-white font-medium py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  {loading ? (
                    <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                  ) : (
                    <>
                      Send Message <Send size={14} />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-[#333] text-center">
                  We reply within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
