"use client";

function DashboardCard() {
  return (
    <div className="bob-slow bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 p-4 w-60">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-[10px] text-slate-400 font-mono">analytics.dashboard</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "Revenue", val: "₹4.2L", color: "text-blue-600" },
          { label: "Orders", val: "1,284", color: "text-emerald-600" },
          { label: "Users", val: "43.6k", color: "text-violet-600" },
        ].map((s) => (
          <div key={s.label} className="bg-slate-50 rounded-xl p-2 text-center">
            <div className={`text-sm font-bold ${s.color}`}>{s.val}</div>
            <div className="text-[9px] text-slate-500">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-slate-50 rounded-xl p-3">
        <div className="text-[9px] text-slate-500 mb-2 font-medium">Monthly Orders</div>
        <div className="flex items-end gap-1 h-10">
          {[40, 65, 50, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm bg-blue-500 opacity-80" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WhatsAppCard() {
  return (
    <div className="bob-medium bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 p-4 w-52">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
            <path d="M12.042 2C6.516 2 2.025 6.49 2.025 12.016c0 1.947.558 3.766 1.528 5.312L2 22l4.821-1.505c1.479.882 3.204 1.385 5.221 1.385 5.526 0 10.017-4.49 10.017-10.016C22.059 6.49 17.568 2 12.042 2z" />
          </svg>
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900">Order Alerts</div>
          <div className="text-[9px] text-emerald-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            WhatsApp API · Live
          </div>
        </div>
      </div>
      <div className="space-y-1.5">
        {[
          { msg: "🛍️ Order #2847 placed!", time: "Now", bg: "bg-emerald-50" },
          { msg: "📦 Dispatched via Shiprocket", time: "2m", bg: "bg-blue-50" },
          { msg: "✅ Delivered successfully", time: "14m", bg: "bg-slate-50" },
        ].map((m) => (
          <div key={m.msg} className={`${m.bg} rounded-xl px-3 py-1.5 flex items-center justify-between gap-2`}>
            <span className="text-[10px] text-slate-700 leading-tight">{m.msg}</span>
            <span className="text-[9px] text-slate-400 shrink-0">{m.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortalCard() {
  return (
    <div className="bob-fast bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 p-4 w-48">
      <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mb-2.5">
        Multi-Portal Access
      </div>
      <div className="space-y-1.5">
        {[
          { role: "🏪 Customer", color: "bg-blue-100 text-blue-700" },
          { role: "⚙️ Admin", color: "bg-violet-100 text-violet-700" },
          { role: "📊 Owner Analytics", color: "bg-amber-100 text-amber-700" },
          { role: "🚚 Delivery", color: "bg-emerald-100 text-emerald-700" },
        ].map((p) => (
          <div key={p.role} className={`${p.color} text-[10px] font-semibold px-3 py-1.5 rounded-lg flex items-center justify-between`}>
            <span>{p.role}</span>
            <span className="opacity-50 text-xs">→</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function IntegrationCard() {
  const logos = [
    { name: "Razorpay", color: "bg-blue-600", letter: "R" },
    { name: "Firebase", color: "bg-amber-500", letter: "F" },
    { name: "Shiprocket", color: "bg-orange-500", letter: "S" },
    { name: "OpenAI", color: "bg-slate-800", letter: "AI" },
    { name: "Maps", color: "bg-green-600", letter: "G" },
    { name: "Twilio", color: "bg-red-500", letter: "T" },
  ];
  return (
    <div className="bob-slow bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 p-4 w-48">
      <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mb-3">
        20+ Integrations
      </div>
      <div className="grid grid-cols-3 gap-2">
        {logos.map((l) => (
          <div key={l.name} className="flex flex-col items-center gap-1">
            <div className={`w-9 h-9 rounded-xl ${l.color} text-white text-[11px] font-bold flex items-center justify-center shadow-sm`}>
              {l.letter}
            </div>
            <span className="text-[9px] text-slate-500 leading-tight text-center">{l.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroMockups() {
  return (
    <div className="hidden md:block absolute inset-0 pointer-events-none z-10">
      {/* Dashboard card — top right */}
      <div className="absolute top-20 right-6 xl:right-16">
        <DashboardCard />
      </div>

      {/* WhatsApp alerts — middle right */}
      <div className="absolute top-[42%] right-8 xl:right-20">
        <WhatsAppCard />
      </div>

      {/* Multi-portal — lower right */}
      <div className="absolute bottom-24 right-6 xl:right-14">
        <PortalCard />
      </div>

      {/* Integrations — lower center-right */}
      <div className="absolute bottom-20 right-60 xl:right-72">
        <IntegrationCard />
      </div>
    </div>
  );
}
