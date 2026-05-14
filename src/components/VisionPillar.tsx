interface VisionPillarProps {
  number: string;
  title: string;
  description: string;
}

export default function VisionPillar({ number, title, description }: VisionPillarProps) {
  return (
    <div className="flex gap-6 bg-brand-bg-secondary border border-brand-neon-green/10 rounded-[2px] p-6 md:p-8 hover:border-brand-neon-green/30 transition-colors group relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-neon-green group-hover:shadow-[0_0_15px_rgba(0,255,102,0.8)] transition-all" />
      <div className="font-mono text-brand-neon-green text-3xl md:text-5xl font-bold opacity-80 pt-1">
        {number}
      </div>
      <div>
        <h3 className="font-orbitron font-bold text-xl md:text-2xl text-brand-text-primary mb-3">
          {title}
        </h3>
        <p className="font-sans text-brand-text-muted leading-relaxed font-light text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
