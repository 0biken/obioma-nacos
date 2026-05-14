import Hero from "@/components/Hero";
import TerminalCard from "@/components/TerminalCard";
import NeonButton from "@/components/NeonButton";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 md:gap-32 pb-24">
      <Hero />

      {/* Why I'm Running Section */}
      <section className="px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <div className="font-mono text-brand-neon-green text-sm tracking-widest uppercase opacity-70">
            &lt;p&gt; Why I&apos;m Running &lt;/p&gt;
          </div>
          <p className="font-sans text-brand-text-primary text-lg md:text-3xl leading-relaxed font-light">
            NACOS has given many of us more than a classroom experience.<br className="hidden md:block" />
            It has given us community, growth, opportunities, and direction.<br />
            <span className="text-brand-neon-green font-normal">I am running because I believe we can build more intentional systems</span>
            <br className="hidden md:block" />that support student growth, collaboration, and opportunity.
          </p>
        </div>
        <div className="max-w-5xl mx-auto mt-12 md:mt-16 border border-brand-neon-green/10 rounded-[4px] p-1.5 md:p-2 bg-brand-bg-secondary">
          <img src="/photos/teaching-whiteboard.png" alt="Obioma Teaching" className="w-full aspect-[4/3] md:aspect-[21/9] object-cover rounded-[2px] opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
        </div>
      </section>

      {/* Promise Cards Section */}
      <section className="px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TerminalCard title="Student Growth">
            Build programs that help members learn, improve, and access opportunities.
          </TerminalCard>
          <TerminalCard title="Innovation & Projects">
            Encourage practical tech initiatives and collaboration.
          </TerminalCard>
          <TerminalCard title="Stronger Community">
            Better systems for communication, inclusion, and support.
          </TerminalCard>
        </div>
      </section>

      {/* Community Photo Section */}
      <section className="relative w-full py-20 md:py-32 flex items-center justify-center overflow-hidden border-y border-brand-neon-green/10">
        <div className="absolute inset-0 bg-brand-bg-primary z-10 opacity-70" />
        <img src="/photos/nacos-team.jpg" alt="NACOS Team" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40" />
        <div className="relative z-20 px-6 text-center">
          <h2 className="font-orbitron font-bold text-2xl md:text-5xl text-brand-text-primary max-w-4xl mx-auto leading-tight">
            The future of <span className="text-brand-cyan">NACOS UI</span> is something we build together.
          </h2>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 text-center flex flex-col items-center justify-center">
        <NeonButton href="https://chat.whatsapp.com/ECgFFW878vr5f1ufmBPhBE" variant="whatsapp" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
          [ Join the WhatsApp Group → ]
        </NeonButton>
      </section>
    </div>
  );
}
