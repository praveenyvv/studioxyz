"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Lock } from "lucide-react";

interface LiveWebsitePreviewProps {
  url: string;
  title: string;
  displayDomain: string;
}

export default function LiveWebsitePreview({
  url,
  title,
  displayDomain,
}: LiveWebsitePreviewProps) {
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  // If the site is omnimatrixs.com, use our server proxy to remove x-frame-options.
  // For GitHub Pages and Vercel sites that allow iframes, direct or proxy works.
  const isCustomDomainWithFrameLock = url.includes("omnimatrixs.com");
  const iframeSrc = isCustomDomainWithFrameLock
    ? `/api/proxy?url=${encodeURIComponent(url)}`
    : url;

  // Fallback timer: ensure the loader dismisses within 1.2s even if external analytics/fonts take time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative rounded-xl border border-slate-200/90 bg-slate-900 overflow-hidden shadow-sm group cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-blue-400"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
    >
      {/* Browser Chrome Header */}
      <div className="bg-slate-100/95 border-b border-slate-200 px-3 py-2 flex items-center justify-between text-xs select-none">
        {/* Window controls */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 mx-3 max-w-[210px] bg-white border border-slate-200/90 rounded-md px-2 py-0.5 flex items-center gap-1.5 text-[10px] text-slate-600 font-mono shadow-2xs truncate">
          <Lock size={10} className="text-emerald-600 shrink-0" />
          <span className="truncate">{displayDomain}</span>
        </div>

        {/* Live Indicator */}
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[9px] font-bold text-emerald-700 tracking-wider uppercase font-mono">
            LIVE
          </span>
        </div>
      </div>

      {/* Miniature Viewport Container */}
      <div className="relative w-full h-[195px] bg-slate-950 overflow-hidden">
        {/* Scaled Desktop Webpage iframe - NO lazy loading or opacity 0 trap */}
        <div
          className="absolute top-0 left-0 w-[1200px] h-[720px] origin-top-left pointer-events-none select-none"
          style={{
            transform: "scale(0.28)",
          }}
        >
          <iframe
            src={iframeSrc}
            title={`Live preview of ${title}`}
            onLoad={() => setLoaded(true)}
            className="w-full h-full border-0 bg-white"
          />
        </div>

        {/* Shimmer loading mask that smoothly fades away once loaded */}
        {!loaded && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900/90 text-slate-300 text-xs gap-2 transition-opacity duration-300">
            <span className="w-4 h-4 rounded-full border-2 border-blue-400 border-t-transparent animate-spin" />
            <span className="font-mono text-[10px] text-slate-400">Connecting live stream...</span>
          </div>
        )}

        {/* Hover Action Overlay */}
        <div
          className={`absolute inset-0 z-20 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center gap-2 transition-opacity duration-200 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-1.5 bg-white text-slate-950 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-lg">
            <span>Open Live Deployment</span>
            <ExternalLink size={13} className="text-blue-600" />
          </span>
        </div>
      </div>
    </div>
  );
}
