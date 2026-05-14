import PageHeader from "@/components/PageHeader";
import Image from "next/image";

interface GalleryImage {
  src: string;
  title: string;
  desc: string;
  position?: string;
}

const sections: { heading: string; images: GalleryImage[] }[] = [
  {
    heading: "Leadership & Events",
    images: [
      { src: "/photos/speaking-energy.png", title: "Energy Club UI", desc: "Speaking session at the Energy Club, University of Ibadan" },
      { src: "/photos/boardroom-meeting.png", title: "Strategy Sync", desc: "Leadership and community planning session" },
      { src: "/photos/nacoss-week.png", title: "NACOSS Week", desc: "Representing NACOS UI at NACOSS week activities" },
      { src: "/photos/student-gathering.png", title: "Student Gathering", desc: "Community engagement and student mobilization" },
      { src: "/photos/office-strategy.png", title: "Office Strategy", desc: "Planning and coordination session" },
    ],
  },
  {
    heading: "Community & Volunteering",
    images: [
      { src: "/photos/nacos-team.jpg", title: "NACOS UI Team", desc: "As PRO 2024 — the heartbeat of our computing community" },
      { src: "/photos/volunteer-group.png", title: "Community Engagement", desc: "Collaborative student initiatives" },
      { src: "/photos/redcross-volunteer.png", title: "Red Cross", desc: "Volunteer work with the Red Cross initiative" },
      { src: "/photos/energy-searchlight-group.png", title: "Energy Searchlight", desc: "Delegate at Energy Searchlight student initiative", position: "center top" },
      { src: "/photos/energy-trio.png", title: "Energy Club Delegate", desc: "Representing at the Energy Club event" },
    ],
  },
  {
    heading: "Tech & Innovation",
    images: [
      { src: "/photos/teaching-whiteboard.png", title: "Technical Education", desc: "Empowering students through hands-on knowledge sharing" },
      { src: "/photos/gitex-agentspace.png", title: "Agentspace Summit", desc: "Industry-level collaborations at the world's largest tech event", position: "center top" },
      { src: "/photos/gitex-selfie.png", title: "International Exposure", desc: "Seizing global opportunities — one event at a time" },
      { src: "/photos/gitex-sign.png", title: "Global Representation", desc: "Proudly standing on the global stage — GITEX, Dubai", position: "top" },
      { src: "/photos/innovators-magazine.png", title: "Innovators Magazine", desc: "Featured in student innovators publication" },
      { src: "/photos/itconnect-feature.png", title: "ITConnect Feature", desc: "Featured on ITConnect — bridging tech and real life, one connection at a time" },
    ],
  },
  {
    heading: "Recognition & Certifications",
    images: [
      { src: "/photos/cert-nacos-awards.png", title: "NACOS Recognition", desc: "NACOS Awards & Community Service" },
      { src: "/photos/cert-leap.png", title: "LEAP Certification", desc: "Leadership and entrepreneurship program certificate" },
      { src: "/photos/futurize-ambassador.png", title: "Futurize Ambassador", desc: "Campus Ambassador for Futurize innovation program" },
    ],
  },
  {
    heading: "Out and About",
    images: [
      { src: "/photos/selfie-conference.png", title: "Met a Fan", desc: "Have fun — cos why not" },
    ],
  },
];

const totalImages = sections.reduce((acc, s) => acc + s.images.length, 0);

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
            <h2 className="font-orbitron font-bold text-xs md:text-sm text-brand-neon-green uppercase tracking-widest">
              {section.heading}
            </h2>
            <div className="h-[2px] flex-1 bg-brand-neon-green/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {section.images.map((img, index) => (
              <div key={index} className="group relative">
                <div className="aspect-[4/3] overflow-hidden border border-brand-neon-green/10 rounded-[2px] bg-brand-bg-secondary hover:border-brand-neon-green/30 transition-colors duration-300 relative">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    style={{ objectPosition: img.position ?? "center center" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-3 space-y-1 px-1">
                  <h3 className="font-mono font-bold text-[10px] md:text-xs text-brand-neon-green uppercase tracking-widest">
                    &gt; {img.title}
                  </h3>
                  <p className="font-mono text-[10px] text-brand-text-muted leading-snug">
                    {img.desc}
                  </p>
                </div>

                {/* Hover scanline overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,156,0.15) 4px)" }}
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
          <span>TOTAL_ITEMS: {totalImages}</span>
        </div>
      </div>
    </div>
  );
}
