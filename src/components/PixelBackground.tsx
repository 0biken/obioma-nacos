export default function PixelBackground() {
  return (
    <>
      {/* Layer 1: Animated Moving Grid — falls vertically, GPU-accelerated */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundColor: "#000",
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,255,156,0.07) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,255,156,0.07) 40px)",
          backgroundSize: "40px 40px",
          animation: "moveGrid 30s linear infinite",
          willChange: "background-position",
        }}
      />

      {/* Layer 2: CRT Scanline Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.03) 4px)",
        }}
      />

      {/* Layer 3: Floating ## Hash Mark */}
      <div
        className="fixed top-6 right-8 pointer-events-none z-[1] select-none"
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "80px",
          color: "#00FF9C",
          opacity: 0.07,
          lineHeight: 0.85,
          letterSpacing: "-6px",
          animation: "floatHash 6s ease-in-out infinite",
        }}
      >
        ##<br />##
      </div>
    </>
  );
}
