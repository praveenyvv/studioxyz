"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Large ambient gradient — top left */}
      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, #bfdbfe 0%, #e0e7ff 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Soft teal orb — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle at center, #a7f3d0 0%, #bae6fd 50%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Violet accent — center right */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle at center, #ddd6fe 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
