import PageHeader from "@/components/PageHeader";

interface GalleryImage {
  src: string;
  title: string;
  desc: string;
  aspect?: string;
}

const sections: { heading: string; images: GalleryImage[] }[] = [
  {
    heading: "Leadership & Events",
    images: [
      { src: "/photos/speaking-energy.png",       title: "Energy Club UI",         desc: "Speaking session at the Energy Club, University of Ibadan" },
      { src: "/photos/boardroom-meeting.png",      title: "Strategy Sync",          desc: "Leadership and community planning session" },
      { src: "/photos/nacoss-week.png",            title: "NACOSS Week",            desc: "Representing NACOS UI at NACOSS week activities" },
      { src: "/photos/student-gathering.png",      title: "Student Gathering",      desc: "Community engagement and student mobilization" },
      { src: "/photos/office-strategy.png",        title: "Office Strategy",        desc: "Planning and coordination session" },
    ],
  },
  {
    heading: "Community & Volunteering",
    images: [
      { src: "/photos/nacos-team.jpg",             title: "NACOS UI Team",          desc: "The heart of our computing community" },
      { src: "/photos/volunteer-group.png",        title: "Community Engagement",   desc: "Collaborative student initiatives" },
      { src: "/photos/redcross-volunteer.png",     title: "Red Cross",              desc: "Volunteer work with the Red Cross initiative" },
      { src: "/photos/energy-searchlight-group.png", title: "Energy Searchlight",  desc: "Group session at Energy Searchlight initiative" },
      { src: "/photos/energy-trio.png",            title: "Energy Trio",            desc: "Collaboration at Energy Club event" },
    ],
  },
  {
    heading: "Tech & Innovation",
    images: [
      { src: "/photos/teaching-whiteboard.png",    title: "Technical Education",    desc: "Empowering students through knowledge sharing" },
      { src: "/photos/gitex-agentspace.png",       title: "GITEX Agentspace",       desc: "Representing at GITEX technology showcase" },
      { src: "/photos/gitex-selfie.png",           title: "GITEX Selfie",           desc: "At GITEX global technology event" },
      { src: "/photos/gitex-sign.png",             title: "GITEX Sign",             desc: "GITEX event documentation" },
      { src: "/photos/innovators-magazine.png",    title: "Innovators Magazine",    desc: "Featured in student innovators publication" },
      { src: "/photos/itconnect-feature.png",      title: "ITConnect Feature",      desc: "Featured in ITConnect platform" },
    ],
  },
  {
    heading: "Recognition & Certifications",
    images: [
      { src: "/photos/cert-nacos-awards.png",      title: "NACOS Recognition",      desc: "NACOS Awards & Community Service" },
      { src: "/photos/cert-leap.png",              title: "LEAP Certification",      desc: "Leadership and entrepreneurship program certificate" },
      { src: "/photos/futurize-ambassador.png",    title: "Futurize Ambassador",     desc: "Campus Ambassador for Futurize innovation program" },
    ],
  },
  {
    heading: "Portraits & Profiles",
    images: [
      { src: "/photos/hero-portrait.png",          title: "Hero Portrait",          desc: "Official campaign portrait — Obioma Kennedy Ezeocha" },
      { src: "/photos/seated-portrait.png",        title: "Leadership Portrait",    desc: "Candidate portrait" },
      { src: "/photos/relaxed-portrait.png",       title: "Casual Portrait",        desc: "Personal profile portrait" },
      { src: "/photos/selfie-conference.png",      title: "Conference Selfie",      desc: "At a student conference" },
      { src: "/photos/conference-smile.jpg",       title: "Conference Smile",       desc: "Engagement at student conference" },
    ],
  },
  {
    heading: "Brand Assets",
    images: [
      { src: "/photos/Nacos_logo.jpg",             title: "NACOS UI Logo",          desc: "Nigeria Association of Computing Students, University of Ibadan" },
      { src: "/photos/personal-logo.png",          title: "Personal Logo",          desc: "Obioma Kennedy Ezeocha — Personal brand identity" },
    ],
  },
];

export default function Gallery() {
  return (
    <div className="flex flex-col gap-20 pb-24">
      <PageHeader
        title="Gallery"
        subtitle="[ VISUAL_LOGS.EXE ]"
      />

      {sections.map((section) => (
        <section key={section.heading} className="px-6 max-w-7xl mx-auto w-full">
          {/* Section heading */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-6 bg-brand-neon-green" />
            <h2 className="font-orbitron font-bold text-sm md:text-base text-brand-neon-green uppercase tracking-widest">
              {section.heading}
            </h2>
            <div className="h-[2px] flex-1 bg-brand-neon-green/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.images.map((img, index) => (
              <div key={index} className="group relative">
                <div className="aspect-[4/3] overflow-hidden border border-brand-neon-green/10 rounded-[2px] bg-brand-bg-secondary hover:border-brand-neon-green/30 transition-colors duration-300">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 space-y-1">
                  <h3 className="font-mono font-bold text-xs text-brand-neon-green uppercase tracking-widest">
                    &gt; {img.title}
                  </h3>
                  <p className="font-mono text-[10px] text-brand-text-muted leading-snug">
                    {img.desc}
                  </p>
                </div>

                {/* Hover scanline */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,156,0.15) 4px)"
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* End marker */}
      <div className="px-6 max-w-7xl mx-auto w-full">
        <div className="border-t border-brand-neon-green/10 pt-8 flex justify-between font-mono text-[10px] text-brand-neon-green/40 uppercase">
          <span>[ END_OF_LOG ]</span>
          <span>TOTAL_ITEMS: {sections.reduce((acc, s) => acc + s.images.length, 0)}</span>
        </div>
      </div>
    </div>
  );
}
