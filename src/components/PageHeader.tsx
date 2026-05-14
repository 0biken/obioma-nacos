export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="pt-10 md:pt-20 px-6 border-b border-brand-neon-green/10 pb-10 md:pb-16 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(0,255,102,0.05)_0%,transparent_70%)]">
      <div className="max-w-7xl mx-auto w-full space-y-4">
        <h1 className="font-orbitron font-black text-4xl md:text-7xl text-brand-text-primary uppercase tracking-tighter">
          {title}
        </h1>
        {subtitle && (
          <div className="font-mono text-brand-neon-green text-xs md:text-sm font-bold uppercase tracking-[0.3em] opacity-80">
            {subtitle}
          </div>
        )}
      </div>
      
      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-32 h-[1px] bg-brand-neon-green" />
      <div className="absolute bottom-0 right-0 w-32 h-[1px] bg-brand-neon-green/20" />
    </section>
  );
}
