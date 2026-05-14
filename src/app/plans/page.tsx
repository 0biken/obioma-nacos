import TypewriterText from "@/components/TypewriterText";

export default function Plans() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <div className="font-mono text-brand-neon-green text-sm tracking-widest uppercase opacity-70 mb-6">
        &lt;NACOS&gt;
      </div>
      
      <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-brand-cyan mb-8">
        Plans & Manifesto
      </h2>
      
      <div className="bg-brand-bg-secondary border border-brand-neon-green/20 rounded-[2px] p-8 max-w-2xl w-full text-left relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-neon-green/50 shadow-[0_0_15px_rgba(0,255,102,0.8)]" />
        
        <div className="flex items-center gap-2 mb-6 opacity-50">
          <div className="w-3 h-3 rounded-full bg-[#FF5F6D]" />
          <div className="w-3 h-3 rounded-full bg-brand-yellow" />
          <div className="w-3 h-3 rounded-full bg-brand-neon-green" />
        </div>

        <div className="font-mono text-brand-text-primary text-base md:text-lg leading-loose space-y-2">
          <TypewriterText text="> Initializing manifesto compilation..." speed={40} className="block text-brand-text-muted" />
          <TypewriterText text="> Gathering community input..." speed={40} delay={1500} className="block text-brand-text-muted" />
          <TypewriterText text="> Check back soon." speed={50} delay={3000} className="block text-brand-neon-green font-bold mt-4" />
        </div>
        
        <div className="mt-12 flex justify-between items-end border-t border-brand-neon-green/10 pt-4">
          <span className="bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-orbitron text-xs font-bold px-3 py-1 rounded-[2px] inline-block animate-pulse uppercase tracking-wider">
            Status: Coming Soon
          </span>
          <span className="font-mono text-brand-text-muted text-xs">
            v0.9.0
          </span>
        </div>
      </div>
      
      <div className="font-mono text-brand-neon-green text-sm tracking-widest uppercase opacity-70 mt-6">
        &lt;/NACOS&gt;
      </div>
    </div>
  );
}
