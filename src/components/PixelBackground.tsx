export default function PixelBackground() {
  return (
    <>
      {/* Self-contained keyframes — ensures animations always load regardless of CSS order */}
      <style>{`
        @keyframes moveGrid {
          from { background-position: 0 0; }
          to   { background-position: 0 40px; }
        }
        @keyframes floatHash {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .moving-grid {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-color: #000;
          background-image:
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,255,156,0.07) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,255,156,0.07) 40px);
          background-size: 40px 40px;
          animation: moveGrid 30s linear infinite;
          will-change: background-position;
        }
        .scanline-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.03) 4px
          );
        }
        .pixel-hash {
          position: fixed;
          top: 1.5rem;
          right: 2rem;
          pointer-events: none;
          z-index: 1;
          user-select: none;
          font-family: var(--font-mono, monospace);
          font-size: 80px;
          color: #00FF9C;
          opacity: 0.07;
          line-height: 0.85;
          letter-spacing: -6px;
          animation: floatHash 6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .moving-grid, .pixel-hash {
            animation: none !important;
          }
        }
      `}</style>

      {/* Layer 1: Animated Moving Grid */}
      <div className="moving-grid" />

      {/* Layer 2: CRT Scanline Overlay */}
      <div className="scanline-overlay" />

      {/* Layer 3: Floating ## Hash Mark */}
      <div className="pixel-hash">##<br />##</div>
    </>
  );
}
