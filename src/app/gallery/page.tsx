import PageHeader from "@/components/PageHeader";

export default function Gallery() {
  const images = [
    { src: "/photos/speaking-energy.png", title: "Innotech 4.0", desc: "Chairman Session & Speaking at Energy Club UI" },
    { src: "/photos/boardroom-meeting.png", title: "Strategy Sync", desc: "Leadership and community planning session" },
    { src: "/photos/teaching-whiteboard.png", title: "Technical Education", desc: "Empowering students through knowledge sharing" },
    { src: "/photos/nacos-team.jpg", title: "NACOS UI Team", desc: "The heart of our computing community" },
    { src: "/photos/volunteer-group.png", title: "Community Engagement", desc: "Collaborative student initiatives" },
    { src: "/photos/futurize-ambassador.png", title: "Ambassadorship", desc: "Representing innovation on campus" },
    { src: "/photos/cert-nacos-awards.png", title: "Recognition", desc: "NACOS Awards & Community Service" },
    { src: "/photos/seated-portrait.png", title: "Leadership", desc: "Candidate Portrait — Obioma Kennedy Ezeocha" },
    { src: "/photos/relaxed-portrait.png", title: "Casual", desc: "Personal Profile Portrait" },
  ];

  return (
    <div className="flex flex-col gap-20 pb-24">
      <PageHeader 
        title="Gallery" 
        subtitle="[ VISUAL_LOGS.EXE ]" 
      />

      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div key={index} className="group relative">
              <div className="aspect-[4/3] overflow-hidden border border-brand-neon-green/10 rounded-[2px] bg-brand-bg-secondary">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="font-orbitron font-bold text-sm text-brand-neon-green tracking-wider uppercase">
                  &gt; {img.title}
                </h3>
                <p className="font-mono text-[10px] text-brand-text-muted leading-tight">
                  {img.desc}
                </p>
              </div>
              
              {/* Scanline Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Decorative Terminal Line */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="border-t border-brand-neon-green/10 pt-8 flex justify-between font-mono text-[10px] text-brand-neon-green/40 uppercase">
          <span>[ END_OF_LOG ]</span>
          <span>SYSTEM_STATUS: ONLINE</span>
        </div>
      </section>
    </div>
  );
}
