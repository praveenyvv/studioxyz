"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle2, MessageSquare, MapPin, PhoneCall } from "lucide-react";

const projectCategories = [
  "ERP & Automated Invoicing System",
  "Industrial IoT & Hardware Telemetry",
  "Custom E-Commerce Engine",
  "High-Impact Brand Flagship Website",
  "Custom Web / Mobile Application",
  "I have a specific business problem (Not sure yet)",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission - hook up to Formspree or custom API
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6 relative bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Outreach & Trust */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 uppercase tracking-wider mb-4">
              Get in Touch &middot; Direct Line
            </div>
            <h2
              className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-5"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Have a problem to solve?
              <br />
              <span className="text-blue-600">Let&apos;s talk engineering.</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-8 font-normal">
              Skip the sales pitch. Schedule a 20-minute direct technical conversation with our lead engineers. Tell us where your business friction is, and we will outline how software or hardware can fix it.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* WhatsApp direct card */}
              <a
                href="https://wa.me/917569965052?text=Hi%20StudioXYZ!%20I%20have%20a%20project%20in%20mind."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 hover:bg-emerald-100/60 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
                    Direct WhatsApp
                  </div>
                  <div className="text-sm font-bold text-slate-950 group-hover:text-emerald-700 transition-colors">
                    +91 75699 65052
                  </div>
                  <div className="text-[11px] text-emerald-700/80">Available Mon &ndash; Sat &middot; Instant response</div>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Studio Location
                  </div>
                  <div className="text-sm font-bold text-slate-950">
                    Visakhapatnam, Andhra Pradesh
                  </div>
                  <div className="text-[11px] text-slate-500">Serving clients globally &amp; across India</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-50/80 rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3
                    className="text-2xl font-bold text-slate-950 mb-2"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Message Received!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto mb-6">
                    One of our founding engineers will review your notes and reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800 underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                        Work Email or Phone *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="john@company.com or phone"
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                      Category of Solution
                    </label>
                    <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all">
                      {projectCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                      Brief Description of Your Challenge or Idea *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="e.g. We have manual billing problems, or we need an IoT sensor system to track machines, or an e-commerce platform..."
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm shadow-md shadow-blue-500/20 cursor-pointer"
                  >
                    {loading ? (
                      <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center pt-1 font-normal">
                    Direct confidential review &middot; No spam &middot; Responded within 24 hours
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
