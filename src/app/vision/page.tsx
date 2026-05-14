import VisionPillar from "@/components/VisionPillar";
import TypewriterText from "@/components/TypewriterText";

export default function Vision() {
  const pillars = [
    { num: "01", title: "Academic Support", desc: "Tutorials, resource sharing, revision sessions, peer learning, better information flow" },
    { num: "02", title: "Technical Growth", desc: "Workshops, coding sessions, project groups, hackathons, practical skill development" },
    { num: "03", title: "Opportunity Access", desc: "Internship info, scholarships, competitions, tech events, career guidance" },
    { num: "04", title: "Community & Welfare", desc: "Stronger communication, student support, inclusive participation, active engagement" },
    { num: "05", title: "Innovation Culture", desc: "Encouraging students to build, collaborate, showcase, and solve real problems" },
  ];

  return (
    <div className="flex flex-col gap-20 md:gap-32 pb-24">
      
      {/* Hero Statement */}
      <section className="min-h-[40vh] md:min-h-[50vh] flex items-center justify-center px-6 border-b border-brand-neon-green/10 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(0,255,102,0.05)_0%,transparent_70%)]">
        <h1 className="font-orbitron font-black text-2xl md:text-6xl text-center max-w-4xl leading-tight">
          <TypewriterText text="Not just to lead." className="text-brand-cyan block mb-2" speed={50} />
          <TypewriterText text="But to help build what comes next." className="text-brand-yellow block" speed={50} delay={1000} />
        </h1>
      </section>

      {/* Vision Statement */}
      <section className="px-6 max-w-4xl mx-auto text-center">
        <p className="font-sans text-brand-text-primary text-lg md:text-2xl leading-relaxed font-light border border-brand-neon-green/20 p-6 md:p-12 bg-brand-bg-secondary rounded-[2px] relative">
          <span className="absolute top-2 left-2 md:top-4 md:left-4 text-brand-neon-green/30 font-mono text-3xl md:text-4xl leading-none">"</span>
          My vision is to make NACOS UI a more intentional, innovative,
          and opportunity-driven community where students are supported
          academically, technically, socially, and professionally.
          <span className="absolute bottom-[-10px] right-2 md:right-4 text-brand-neon-green/30 font-mono text-3xl md:text-4xl leading-none">"</span>
        </p>
      </section>

      {/* Vision Pillars */}
      <section className="px-6 max-w-5xl mx-auto w-full">
        <div className="font-mono text-brand-neon-green text-xs md:text-sm opacity-70 uppercase tracking-wider mb-8 md:mb-12 text-center">
          &lt;!-- Vision Pillars --&gt;
        </div>
        <div className="flex flex-col gap-6">
          {pillars.map((pillar) => (
            <VisionPillar key={pillar.num} number={pillar.num} title={pillar.title} description={pillar.desc} />
          ))}
        </div>
      </section>

      {/* Photos */}
      <section className="px-6 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src="/photos/speaking-energy.png" alt="Speaking Energy" className="w-full aspect-[4/3] object-cover rounded-[2px] border border-brand-neon-green/10 grayscale hover:grayscale-0 transition-all duration-500" />
        <img src="/photos/boardroom-meeting.png" alt="Boardroom Meeting" className="w-full aspect-[4/3] object-cover rounded-[2px] border border-brand-neon-green/10 grayscale hover:grayscale-0 transition-all duration-500" />
      </section>

    </div>
  );
}
