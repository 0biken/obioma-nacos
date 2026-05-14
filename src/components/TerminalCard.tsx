import { ReactNode } from "react";

interface TerminalCardProps {
  title: string;
  children: ReactNode;
  number?: string;
  className?: string;
}

export default function TerminalCard({ title, children, number, className = "" }: TerminalCardProps) {
  return (
    <div className={`bg-brand-bg-secondary border border-brand-neon-green/15 rounded-[4px] p-6 transition-all duration-300 hover:border-brand-neon-green/40 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,255,102,0.1)] relative overflow-hidden group ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        {number ? (
          <span className="font-mono text-brand-neon-green text-xl font-bold">{number}</span>
        ) : (
          <span className="font-mono text-brand-neon-green text-lg font-bold">&gt;_</span>
        )}
        <h3 className="font-orbitron text-brand-cyan text-xl font-bold">{title}</h3>
      </div>
      <div className="text-brand-text-muted font-light leading-relaxed">
        {children}
      </div>
      {/* Decorative top border glow on hover */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-neon-green/0 transition-all duration-300 group-hover:bg-brand-neon-green/50 shadow-[0_0_10px_rgba(0,255,102,0.8)]" />
    </div>
  );
}
