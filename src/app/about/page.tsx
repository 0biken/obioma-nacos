import CommitTimeline from "@/components/CommitTimeline";
import TerminalCard from "@/components/TerminalCard";

export default function About() {
  const values = [
    "Service", "Innovation", "Accountability",
    "Collaboration", "Growth", "Community"
  ];

  return (
    <div className="flex flex-col gap-32 pb-24 pt-20">
      
      {/* Intro Section */}
      <section className="px-6 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0">
          <div className="absolute inset-0 bg-brand-neon-green/10 -translate-x-4 translate-y-4 rounded-[4px] border border-brand-neon-green/30" />
          <img src="/photos/relaxed-portrait.png" alt="Obioma Relaxed Portrait" className="relative w-full h-full object-cover rounded-[4px] grayscale mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" />
        </div>
        <div className="space-y-6">
          <h1 className="font-orbitron font-bold text-4xl text-brand-cyan">
            Meet Obioma <br /><span className="text-brand-text-primary">Kennedy Ezeocha</span>
          </h1>
          <div className="font-mono text-brand-neon-green text-sm opacity-70 uppercase tracking-wider mb-6">
            &lt;h3&gt; Candidate Intro &lt;/h3&gt;
          </div>
          <p className="font-sans text-brand-text-primary text-lg leading-relaxed font-light">
            I am a student of the Faculty of Computing and an active member
            of the NACOS UI community. Over the years, I have contributed
            through student initiatives, innovation programs, volunteering,
            teaching, and projects across different positions I have held.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-orbitron font-bold text-3xl text-brand-cyan mb-12 flex items-center gap-4">
          <span className="text-brand-neon-green">#</span> Experience Log
        </h2>
        <CommitTimeline />
      </section>

      {/* Values Section */}
      <section className="px-6 max-w-6xl mx-auto w-full">
        <div className="font-mono text-brand-neon-green text-sm opacity-70 uppercase tracking-wider mb-8 text-center">
          &lt;!-- Core Values --&gt;
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {values.map((value) => (
            <div key={value} className="bg-brand-bg-secondary border border-brand-neon-green/20 rounded-[2px] p-4 flex items-center gap-3 transition-colors hover:border-brand-neon-green/50 hover:bg-brand-neon-green/5">
              <span className="font-mono text-brand-neon-green font-bold">&gt;_</span>
              <span className="font-mono text-brand-text-primary text-sm tracking-wide">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Candidate Quote */}
      <section className="px-6 max-w-4xl mx-auto w-full">
        <blockquote className="border-l-4 border-brand-neon-green pl-8 py-4 bg-[linear-gradient(90deg,rgba(0,255,102,0.05),transparent)]">
          <p className="font-orbitron text-2xl md:text-3xl text-brand-text-primary leading-tight font-light">
            "Leadership, to me, is not just about occupying a position.
            <br className="hidden md:block" />
            <span className="text-brand-cyan font-bold mt-2 inline-block">It is about building systems that continue to serve people."</span>
          </p>
        </blockquote>
      </section>

      {/* Photo Cluster */}
      <section className="px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/photos/futurize-ambassador.png" alt="Student Ambassador" className="w-full aspect-square object-cover rounded-[2px] border border-brand-neon-green/10 grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="/photos/cert-nacos-awards.png" alt="NACOS Awards" className="w-full aspect-square object-cover rounded-[2px] border border-brand-neon-green/10 grayscale hover:grayscale-0 transition-all duration-500 md:translate-y-12" />
          <img src="/photos/seated-portrait.png" alt="Personal Portrait" className="w-full aspect-square object-cover rounded-[2px] border border-brand-neon-green/10 grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
      </section>

    </div>
  );
}
