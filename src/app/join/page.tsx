"use client";
import NeonButton from "@/components/NeonButton";

export default function Join() {
  return (
    <div className="flex flex-col gap-20 md:gap-32 pb-24 pt-10 md:pt-20">
      
      {/* CTA Banner */}
      <section className="px-6 max-w-4xl mx-auto w-full text-center">
        <h1 className="font-orbitron font-black text-3xl md:text-6xl text-brand-cyan mb-6">
          Join the Movement
        </h1>
        <p className="font-sans text-brand-text-primary text-lg md:text-xl font-light mb-10 md:mb-12">
          Join the campaign community and help us build what comes next.
        </p>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <NeonButton href="https://chat.whatsapp.com/ECgFFW878vr5f1ufmBPhBE" variant="whatsapp" className="w-full sm:w-auto text-sm md:text-base">
            [ Join WhatsApp Group ]
          </NeonButton>
          <NeonButton href="#volunteer" variant="primary" className="w-full sm:w-auto text-sm md:text-base">
            [ Volunteer ]
          </NeonButton>
        </div>
      </section>

      {/* Volunteer Form UI (Terminal Style) */}
      <section id="volunteer" className="px-6 max-w-2xl mx-auto w-full scroll-mt-32">
        <div className="bg-brand-bg-secondary border border-brand-neon-green/20 rounded-[2px] p-6 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-brand-neon-green/40 transition-colors">
          <div className="flex items-center gap-3 mb-8 border-b border-brand-neon-green/10 pb-4">
            <span className="font-mono text-brand-neon-green text-xl font-bold">&gt;_</span>
            <h2 className="font-orbitron text-brand-cyan text-2xl font-bold">Volunteer.exe</h2>
          </div>
          
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-brand-text-muted text-xs uppercase tracking-wider">Full Name</label>
              <input type="text" placeholder="Enter your full name" className="bg-brand-bg-primary border border-brand-neon-green/30 rounded-[2px] px-4 py-3 font-mono text-sm text-brand-text-primary focus:outline-none focus:border-brand-neon-green focus:shadow-[0_0_10px_rgba(0,255,102,0.2)] transition-all placeholder:text-brand-text-muted/50" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-brand-text-muted text-xs uppercase tracking-wider">Department / Level</label>
              <input type="text" placeholder="e.g. Computer Science / 300L" className="bg-brand-bg-primary border border-brand-neon-green/30 rounded-[2px] px-4 py-3 font-mono text-sm text-brand-text-primary focus:outline-none focus:border-brand-neon-green focus:shadow-[0_0_10px_rgba(0,255,102,0.2)] transition-all placeholder:text-brand-text-muted/50" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-mono text-brand-text-muted text-xs uppercase tracking-wider">WhatsApp Number</label>
              <input type="tel" placeholder="Enter WhatsApp number" className="bg-brand-bg-primary border border-brand-neon-green/30 rounded-[2px] px-4 py-3 font-mono text-sm text-brand-text-primary focus:outline-none focus:border-brand-neon-green focus:shadow-[0_0_10px_rgba(0,255,102,0.2)] transition-all placeholder:text-brand-text-muted/50" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-brand-text-muted text-xs mb-2 uppercase tracking-wider">Area of Interest (Select one)</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Graphics", "Publicity", "Mobilization", "Content", "Event Support", "Strategy", "Technical Support"].map(area => (
                  <label key={area} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 rounded-full border border-brand-neon-green/50 flex items-center justify-center group-hover:border-brand-neon-green transition-colors">
                      <div className="w-2 h-2 rounded-full bg-brand-neon-green opacity-0 group-active:opacity-100 transition-opacity" />
                    </div>
                    <span className="font-mono text-sm text-brand-text-primary group-hover:text-brand-neon-green transition-colors">{area}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <button type="submit" className="mt-6 bg-brand-neon-green text-brand-bg-primary font-mono text-sm font-bold py-4 rounded-[2px] shadow-[0_0_15px_rgba(0,255,102,0.2)] hover:shadow-[0_0_25px_rgba(0,255,102,0.4)] hover:scale-[1.01] active:scale-[0.98] transition-all tracking-widest uppercase">
              [ Submit_Application ]
            </button>
          </form>
        </div>
      </section>

      {/* Community Photo */}
      <section className="px-6 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="space-y-4">
          <img src="/photos/nacos-team.jpg" alt="NACOS Team" className="w-full aspect-video object-cover rounded-[2px] grayscale hover:grayscale-0 transition-all duration-500 border border-brand-neon-green/10" />
          <p className="font-mono text-[10px] text-brand-neon-green/60 uppercase text-center tracking-widest">&gt; Community Spirit @ NACOS UI</p>
        </div>
        <div className="space-y-4">
          <img src="/photos/volunteer-group.png" alt="Volunteer Group" className="w-full aspect-video object-cover rounded-[2px] grayscale hover:grayscale-0 transition-all duration-500 border border-brand-neon-green/10" />
          <p className="font-mono text-[10px] text-brand-neon-green/60 uppercase text-center tracking-widest">&gt; Community Engagement</p>
        </div>
      </section>
    </div>
  );
}
