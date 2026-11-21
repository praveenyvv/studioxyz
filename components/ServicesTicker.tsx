"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag, MessageSquare, Smartphone, Zap, Database,
  Globe, Cpu, Search, Mail, MapPin, Cloud, Shield,
  BarChart3, Package, CreditCard, Layers, Bot, Workflow,
  Store, Truck, X, ArrowRight,
} from "lucide-react";

/* ─── Full service catalogue ───────────────────────────── */
interface Service {
  id: string;
  icon: typeof ShoppingBag;
  name: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  accentColor: string;
  bgColor: string;
}

const ALL_SERVICES: Service[] = [
  {
    id: "multiportal-ecom",
    icon: Layers,
    name: "Multi-Portal eCommerce",
    category: "E-Commerce",
    tagline: "One platform. Every role. Every user.",
    description:
      "We build Level 3 eCommerce ecosystems with completely separate dashboards for every stakeholder — customer storefront, admin control panel, owner analytics suite, delivery-partner mobile app, and warehouse picker interface — all sharing one real-time database.",
    deliverables: ["Customer storefront (web + mobile)", "Admin & owner analytics panel", "Delivery partner app", "Picker / warehouse portal", "Live inventory across all portals"],
    accentColor: "text-blue-600",
    bgColor: "bg-blue-50 border-blue-200",
  },
  {
    id: "payment-gateways",
    icon: CreditCard,
    name: "Payment Gateway Integrations",
    category: "E-Commerce",
    tagline: "Every payment method. Zero friction.",
    description:
      "We integrate Razorpay, Stripe, Cashfree, PhonePe, PayU, and UPI directly into your platform — with auto-refund handling, webhook-driven order confirmation, and multi-currency support for global checkouts.",
    deliverables: ["Razorpay / Stripe / Cashfree / PhonePe", "UPI and QR code payments", "Auto-refund & failed-payment recovery", "Webhook-driven order state machine", "Multi-currency & international support"],
    accentColor: "text-emerald-600",
    bgColor: "bg-emerald-50 border-emerald-200",
  },
  {
    id: "shiprocket",
    icon: Truck,
    name: "Shiprocket & Logistics APIs",
    category: "E-Commerce",
    tagline: "Auto-dispatch from checkout to doorstep.",
    description:
      "Full Shiprocket integration — automated courier assignment, shipping label generation, live tracking injection into WhatsApp and email notifications, return and exchange workflows.",
    deliverables: ["Auto courier selection & label generation", "Live order tracking embedded", "WhatsApp delivery status updates", "Return & exchange management", "Shipping cost calculator at checkout"],
    accentColor: "text-orange-600",
    bgColor: "bg-orange-50 border-orange-200",
  },
  {
    id: "order-notifications",
    icon: MessageSquare,
    name: "Automated Order Notifications",
    category: "E-Commerce",
    tagline: "Customers informed at every stage. Automatically.",
    description:
      "Real-time WhatsApp, SMS and email order lifecycle messaging — placement, payment confirmation, packing, dispatch, delivery, and return updates — all triggered automatically without manual effort.",
    deliverables: ["WhatsApp Business API messaging", "SMS via Twilio / MSG91", "Email transactional sequences", "Custom message templates per status", "Failed delivery re-attempt alerts"],
    accentColor: "text-green-600",
    bgColor: "bg-green-50 border-green-200",
  },
  {
    id: "crm",
    icon: Workflow,
    name: "CRM Systems",
    category: "CRM & Communication",
    tagline: "Never lose a lead. Never miss a follow-up.",
    description:
      "Custom CRM platforms built for your sales cycle — lead capture, deal pipelines, automated follow-up scheduling, sales rep assignment, activity logs, and conversion reporting.",
    deliverables: ["Lead capture & qualification", "Visual deal pipelines", "Auto-follow-up scheduling", "Sales rep assignment & tracking", "Conversion & revenue analytics"],
    accentColor: "text-violet-600",
    bgColor: "bg-violet-50 border-violet-200",
  },
  {
    id: "email-crm",
    icon: Mail,
    name: "Email CRM & Drip Campaigns",
    category: "CRM & Communication",
    tagline: "Automated email sequences that convert.",
    description:
      "Drip email workflows triggered by user behaviour — sign-up welcome sequences, abandoned cart recovery, re-engagement campaigns, and newsletter automation via Mailchimp, SendGrid, or custom SMTP.",
    deliverables: ["Behaviour-triggered drip sequences", "Abandoned cart recovery emails", "Welcome & onboarding sequences", "Newsletter management", "Open rate & click analytics"],
    accentColor: "text-sky-600",
    bgColor: "bg-sky-50 border-sky-200",
  },
  {
    id: "whatsapp-api",
    icon: MessageSquare,
    name: "WhatsApp Business API",
    category: "CRM & Communication",
    tagline: "Reach customers where they already are.",
    description:
      "Full WhatsApp Business API integration — approved message templates, bulk broadcast campaigns, two-way customer support bots, automated appointment reminders, and OTP delivery.",
    deliverables: ["WhatsApp Business API setup", "Approved template messages", "Bulk broadcast campaigns", "Two-way chatbot flows", "OTP & transactional alerts"],
    accentColor: "text-green-600",
    bgColor: "bg-green-50 border-green-200",
  },
  {
    id: "service-apps",
    icon: Store,
    name: "Service Marketplace Apps",
    category: "Apps & Platforms",
    tagline: "Build the next Swiggy, Rapido, or UrbanClap.",
    description:
      "End-to-end on-demand service and hyperlocal delivery platforms — customer booking app, service-provider app, dispatcher dashboard, real-time GPS tracking, surge pricing, and ratings engine.",
    deliverables: ["Customer booking app (Android + iOS)", "Service provider / rider app", "Real-time GPS tracking", "Dispatcher / admin console", "Ratings, reviews & surge pricing"],
    accentColor: "text-rose-600",
    bgColor: "bg-rose-50 border-rose-200",
  },
  {
    id: "cross-platform-apps",
    icon: Smartphone,
    name: "Cross-Platform Mobile Apps",
    category: "Apps & Platforms",
    tagline: "One codebase. Android, iOS, and web.",
    description:
      "React Native / Flutter apps that run natively on Android and iOS while sharing up to 90% of code with your web platform — cutting development time and cost without compromising performance or UX.",
    deliverables: ["React Native / Flutter development", "Shared codebase with web", "Push notifications & deep linking", "Offline-capable architecture", "App Store & Play Store deployment"],
    accentColor: "text-indigo-600",
    bgColor: "bg-indigo-50 border-indigo-200",
  },
  {
    id: "firebase",
    icon: Zap,
    name: "Firebase Suite Integration",
    category: "Integrations & APIs",
    tagline: "Real-time, auth, notifications — all wired in.",
    description:
      "Full Firebase integration — Firestore real-time database, Firebase Authentication, Cloud Functions, FCM push notifications, Crashlytics, and Remote Config for feature flagging.",
    deliverables: ["Firestore real-time DB", "Firebase Authentication (OAuth, OTP)", "Cloud Functions & triggers", "FCM push notifications", "Crashlytics & performance monitoring"],
    accentColor: "text-amber-600",
    bgColor: "bg-amber-50 border-amber-200",
  },
  {
    id: "google-maps",
    icon: MapPin,
    name: "Google Maps & Location APIs",
    category: "Integrations & APIs",
    tagline: "Live GPS, routing, and geofencing built in.",
    description:
      "Deep Google Maps Platform integration — live GPS tracking, geofencing triggers, route optimisation for delivery fleets, store locators, distance-based pricing, and address auto-complete.",
    deliverables: ["Live GPS order & delivery tracking", "Geofencing & zone alerts", "Route optimisation for fleets", "Address autocomplete & validation", "Distance-based pricing logic"],
    accentColor: "text-green-600",
    bgColor: "bg-green-50 border-green-200",
  },
  {
    id: "ai-integrations",
    icon: Bot,
    name: "AI & LLM Integrations",
    category: "Integrations & APIs",
    tagline: "Embed intelligence directly into your product.",
    description:
      "OpenAI GPT, Google Gemini, and custom ML model integration — AI-powered chatbots, smart product search, demand forecasting, automated content generation, and document analysis pipelines.",
    deliverables: ["AI chatbot & support automation", "Smart search with semantic ranking", "Demand & inventory forecasting", "Automated content / description generation", "Document analysis & OCR pipelines"],
    accentColor: "text-slate-700",
    bgColor: "bg-slate-100 border-slate-300",
  },
  {
    id: "vps-hosting",
    icon: Cloud,
    name: "VPS & Cloud Hosting",
    category: "Infrastructure & Scale",
    tagline: "Production-grade servers. Zero downtime setup.",
    description:
      "Full VPS provisioning and cloud deployment on AWS, GCP, DigitalOcean, or Hetzner — Nginx/Caddy reverse proxy, SSL certificates, CI/CD pipelines, automated backups, and 99.9% uptime monitoring.",
    deliverables: ["VPS provisioning & hardening", "Nginx / Caddy reverse proxy", "SSL & domain configuration", "CI/CD pipeline setup", "Automated backup & uptime monitoring"],
    accentColor: "text-cyan-600",
    bgColor: "bg-cyan-50 border-cyan-200",
  },
  {
    id: "postgresql",
    icon: Database,
    name: "PostgreSQL at Scale",
    category: "Infrastructure & Scale",
    tagline: "Lakhs of records. Millisecond queries.",
    description:
      "Database architecture and query optimisation for high-volume systems — indexing strategy, connection pooling via PgBouncer, table partitioning, read replicas, and migration planning for 100k+ record datasets.",
    deliverables: ["Schema design & normalisation", "Indexing & query optimisation", "Connection pooling (PgBouncer)", "Table partitioning & read replicas", "Data migration & backup pipelines"],
    accentColor: "text-blue-700",
    bgColor: "bg-blue-50 border-blue-200",
  },
  {
    id: "web-hosting",
    icon: Globe,
    name: "Web Hosting & Domain Setup",
    category: "Infrastructure & Scale",
    tagline: "Domain to deployed in hours.",
    description:
      "End-to-end web hosting setup — domain registration and DNS configuration, Vercel/Netlify for frontends, managed cPanel hosting for PHP/WordPress, and CDN setup for global performance.",
    deliverables: ["Domain registration & DNS config", "Vercel / Netlify deployments", "cPanel & shared hosting management", "CDN setup (Cloudflare)", "SSL certificates & HTTPS"],
    accentColor: "text-teal-600",
    bgColor: "bg-teal-50 border-teal-200",
  },
  {
    id: "google-seo",
    icon: Search,
    name: "Technical Google SEO",
    category: "Marketing Tech",
    tagline: "Show up on Google. Actually get clicked.",
    description:
      "Technical SEO audit and implementation — Core Web Vitals optimisation, structured data markup, XML sitemaps, canonical tags, page speed tuning (sub-2s LCP), and ongoing keyword tracking.",
    deliverables: ["Core Web Vitals optimisation", "Structured data & rich snippets", "XML sitemap & robots.txt", "Page speed tuning (90+ Lighthouse)", "Keyword tracking & monthly reports"],
    accentColor: "text-blue-600",
    bgColor: "bg-blue-50 border-blue-200",
  },
  {
    id: "ad-landing-pages",
    icon: BarChart3,
    name: "Ad Landing Pages",
    category: "Marketing Tech",
    tagline: "Pages built to convert, not just look good.",
    description:
      "High-conversion campaign landing pages engineered for Google Ads, Meta Ads, and LinkedIn — A/B-tested hero sections, trust signals, embedded lead forms, and Meta/Google Pixel tracking.",
    deliverables: ["Campaign-specific landing pages", "Lead capture & CRM integration", "Meta Pixel & Google Tag Manager", "A/B testing setup", "Heatmap & session recording (Hotjar)"],
    accentColor: "text-pink-600",
    bgColor: "bg-pink-50 border-pink-200",
  },
  {
    id: "erp",
    icon: Package,
    name: "Custom ERP & Billing Engines",
    category: "Business Systems",
    tagline: "Replace paper books with cloud-synced intelligence.",
    description:
      "Tailored ERP systems — automated invoice generation, GST/tax computation, supplier and inventory ledger, multi-branch P&L reporting, and cloud-synced data accessible from any device.",
    deliverables: ["Automated GST invoicing", "Supplier & inventory ledger", "Multi-branch P&L reports", "Cloud-sync with mobile access", "PDF/WhatsApp invoice dispatch"],
    accentColor: "text-violet-600",
    bgColor: "bg-violet-50 border-violet-200",
  },
  {
    id: "iot",
    icon: Cpu,
    name: "Industrial IoT Systems",
    category: "Hardware & IoT",
    tagline: "Machines that talk. Data that acts.",
    description:
      "End-to-end IoT — microcontroller firmware (ESP32 / Raspberry Pi), industrial sensor integration, MQTT/WebSocket telemetry pipelines, cloud dashboards, and automated threshold alerts.",
    deliverables: ["Microcontroller firmware (ESP32 / RPi)", "Industrial sensor integration", "Real-time MQTT telemetry", "Cloud monitoring dashboard", "SMS/WhatsApp threshold alerts"],
    accentColor: "text-slate-700",
    bgColor: "bg-slate-100 border-slate-300",
  },
  {
    id: "security",
    icon: Shield,
    name: "App Security & Auth Systems",
    category: "Infrastructure & Scale",
    tagline: "Role-based access. Bank-grade security.",
    description:
      "Secure authentication and authorisation systems — JWT / OAuth 2.0, multi-factor authentication, role-based access control (RBAC), API rate limiting, and OWASP vulnerability hardening.",
    deliverables: ["JWT / OAuth 2.0 authentication", "Multi-factor authentication (OTP)", "Role-based access control", "API rate limiting & DDoS protection", "OWASP vulnerability hardening"],
    accentColor: "text-red-600",
    bgColor: "bg-red-50 border-red-200",
  },
];

/* ─── Ticker item component ─────────────────────────────── */
function TickerItem({
  service,
  isActive,
  onClick,
}: {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = service.icon;
  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-semibold cursor-pointer transition-all duration-200 mx-2 ${
        isActive
          ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-105"
          : "bg-white/80 backdrop-blur-sm text-slate-700 border-slate-200/90 hover:border-blue-400 hover:text-blue-600"
      }`}
    >
      <Icon size={15} className={isActive ? "text-blue-400" : "text-slate-500"} />
      <span>{service.name}</span>
    </button>
  );
}

/* ─── Detail panel ──────────────────────────────────────── */
function DetailPanel({ service, onClose }: { service: Service; onClose: () => void }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="relative mt-6 bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-200/60 p-7 sm:p-10 overflow-hidden"
    >
      {/* Background accent */}
      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-20 ${service.bgColor.split(" ")[0]}`} />

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
      >
        <X size={16} className="text-slate-600" />
      </button>

      <div className="relative">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${service.bgColor}`}>
            <Icon size={26} className={service.accentColor} />
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 mb-1">
              {service.category}
            </div>
            <h3
              className="text-2xl sm:text-3xl font-bold text-slate-950"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {service.name}
            </h3>
            <p className={`text-sm font-semibold mt-1 ${service.accentColor}`}>
              {service.tagline}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {service.description}
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all shadow-md shadow-blue-500/20"
            >
              <span>Discuss This With Us</span>
              <ArrowRight size={15} />
            </a>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              What We Deliver
            </div>
            <div className="space-y-2">
              {service.deliverables.map((d) => (
                <div
                  key={d}
                  className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-sm text-slate-700"
                >
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${service.accentColor.replace("text-", "bg-")}`} />
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main component ────────────────────────────────────── */
export default function ServicesTicker() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeService = ALL_SERVICES.find((s) => s.id === activeId) ?? null;

  const handleClick = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  // Duplicate for seamless loop
  const doubled = [...ALL_SERVICES, ...ALL_SERVICES];
  const firstHalf = ALL_SERVICES.slice(0, Math.ceil(ALL_SERVICES.length / 2));
  const secondHalf = ALL_SERVICES.slice(Math.ceil(ALL_SERVICES.length / 2));
  const doubledFirst = [...firstHalf, ...firstHalf];
  const doubledSecond = [...secondHalf, ...secondHalf];

  return (
    <section id="services-ticker" className="py-20 overflow-hidden">
      {/* Section header */}
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 uppercase tracking-wider mb-4">
          Full Capability Suite · 20+ Services
        </div>
        <h2
          className="text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Click any service to explore
        </h2>
        <p className="text-slate-600 text-base mt-3">
          Every service we offer — built, deployed, and production-ready.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-3 overflow-hidden">
        <div className="ticker-track-left">
          {doubledFirst.map((s, i) => (
            <TickerItem
              key={`r1-${s.id}-${i}`}
              service={s}
              isActive={activeId === s.id}
              onClick={() => handleClick(s.id)}
            />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative overflow-hidden">
        <div className="ticker-track-right">
          {doubledSecond.map((s, i) => (
            <TickerItem
              key={`r2-${s.id}-${i}`}
              service={s}
              isActive={activeId === s.id}
              onClick={() => handleClick(s.id)}
            />
          ))}
        </div>
      </div>

      {/* Detail panel */}
      <div className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {activeService && (
            <DetailPanel
              key={activeService.id}
              service={activeService}
              onClose={() => setActiveId(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
