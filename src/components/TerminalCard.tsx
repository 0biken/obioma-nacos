import { ReactNode } from "react";

interface TerminalCardProps {
  title: string;
  children: ReactNode;
  number?: string;
  className?: string;
}

export default function TerminalCard({ title, children, number, className = "" }: TerminalCardProps) {
  return (
    <div
      className={`relative overflow-hidden group rounded-[2px] p-6 transition-all duration-300
        border border-[rgba(0,255,156,0.2)] hover:border-[rgba(0,255,156,0.5)]
        hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,255,156,0.12),0_0_40px_rgba(0,255,156,0.06)]
        ${className}`}
      style={{ backgroundColor: "#000" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        {number ? (
          <span className="font-mono text-brand-neon-green text-xl font-bold">{number}</span>
        ) : (
          <span className="font-mono font-bold text-lg text-brand-text-label">&gt;_</span>
        )}
        <h3 className="font-mono text-brand-neon-green text-xs font-bold uppercase tracking-[2px]">{title}</h3>
      </div>

      {/* Body */}
      <div className="font-sans text-brand-text-muted font-light leading-relaxed text-sm">
        {children}
      </div>

      {/* Top glow bar on hover */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-neon-green/0 group-hover:bg-brand-neon-green/60 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,156,0.8)]" />
    </div>
  );
}
