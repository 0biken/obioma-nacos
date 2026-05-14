import CommitTimeline from "@/components/CommitTimeline";
import TerminalCard from "@/components/TerminalCard";
import Image from "next/image";

export default function About() {
  const values = [
    "Service", "Innovation", "Accountability",
    "Collaboration", "Growth", "Community"
  ];

  const timelineData = [
    {
      level: "100 Level",
      items: [
        { id: "101", role: "Member", org: "YALI Network Oyo State", desc: "Participated in youth leadership and community development initiatives." },
        { id: "102", role: "Member", org: "NACOS Social Committee", desc: "Supported student engagement and departmental activities." },
        { id: "103", role: "Member", org: "NACOS Representative Council", desc: "Represented student interests and contributed to departmental decision-making." },
        { id: "104", role: "Volunteer", org: "Innotech 2.0", desc: "Assisted in organizing and coordinating innovation-focused student events." },
        { id: "105", role: "Volunteer", org: "Ibadan Student Tech Fest", desc: "Supported event operations and community engagement activities." },
      ]
    },
    {
      level: "200 Level",
      items: [
        { id: "201", role: "PRO", org: "Dept. of Computer Science, UI", desc: "Led departmental publicity and communication efforts. Organized student-focused events and campaigns." },
        { id: "202", role: "Ambassador", org: "Helix BioGen Institute, UI", desc: "Represented the institute and promoted biotechnology and innovation programs." },
        { id: "203", role: "Member", org: "Postman Student Community", desc: "Engaged in API development and developer community activities." },
        { id: "204", role: "Media Team Lead", org: "Tech Fusion", desc: "Coordinated media operations, photography, and digital communication for classroom-to-career initiatives." },
        { id: "205", role: "Founder", org: "GiT Community (Grow in Tech)", desc: "Founded a student-focused tech growth community promoting mentorship and technical development." },
      ]
    },
    {
      level: "300 Level",
      items: [
        { id: "301", role: "General Secretary", org: "FASSA UI", desc: "Managed official documentation, communication, and administrative coordination for the Faculty of Science." },
        { id: "302", role: "Vice President", org: "Students Against Pollution Nigeria", desc: "Supported advocacy, environmental awareness, and student outreach activities." },
        { id: "303", role: "Chairman", org: "Innotech 4.0", desc: "Led planning and execution of large-scale innovation programs, hackathons, and accelerators." },
        { id: "304", role: "Workshop Organizer", org: "Web3/Crypto", desc: "Coordinated workshops introducing students to blockchain and developer onboarding." },
      ]
    },
    {
      level: "400 Level",
      items: [
        { id: "401", role: "Campus Ambassador", org: "Futurize / Finna / Infinix", desc: "Promoted innovation and brand engagement through marketing campaigns on campus." },
        { id: "402", role: "Member", org: "NACOS Social Committee", desc: "Continued contributing to student engagement and departmental community activities." },
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-20 md:gap-32 pb-24 pt-10 md:pt-20">
      
      {/* Intro Section */}
      <section className="px-6 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div className="relative aspect-[4/5] w-full max-w-sm mx-auto md:mx-0">
          <div className="absolute inset-0 bg-brand-neon-green/10 -translate-x-3 md:-translate-x-4 translate-y-3 md:translate-y-4 rounded-[4px] border border-brand-neon-green/30" />
          <Image 
            src="/photos/relaxed-portrait.png" 
            alt="Obioma Relaxed Portrait" 
            fill
            className="object-cover rounded-[4px] grayscale hover:grayscale-0 transition-all duration-700" 
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-4">
            <h1 className="font-orbitron font-black text-3xl md:text-5xl text-brand-cyan leading-tight">
              Obioma <br /><span className="text-brand-text-primary">Kennedy Ezeocha</span>
            </h1>
            <div className="font-mono text-brand-neon-green text-xs md:text-sm font-bold uppercase tracking-widest border-l-2 border-brand-neon-green pl-4">
              Leadership • Technology • Community • Strategy
            </div>
          </div>
          
          <p className="font-sans text-brand-text-primary text-base md:text-xl leading-relaxed font-light">
            Hi, I&apos;m Obioma, a 400-level Computer Science student at the University of Ibadan and a passionate student leader 
            within the Nigeria Association of Computing Students community. My leadership journey began in 200L as the 
            Public Relations Officer (PRO) of the Department of Computer Science, where I focused on student engagement, 
            communication, and community visibility. In 300L, I served as the General Secretary of FASSA, 
            representing students and supporting faculty-wide coordination and administration.
          </p>
          
          <p className="font-sans text-brand-text-muted text-base md:text-lg leading-relaxed font-light">
            Beyond leadership, I&apos;m deeply passionate about technology, innovation, and community building. 
            I believe leadership is about creating impact, amplifying student voices, and building opportunities that help others grow. 
            Through every role and initiative I&apos;ve been part of, my mission has remained the same: 
            <span className="text-brand-cyan font-normal"> to serve, connect people, and contribute meaningfully to the growth of our community.</span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 pt-4">
            {values.map((value) => (
              <div key={value} className="bg-brand-bg-secondary border border-brand-neon-green/10 rounded-[2px] p-3 flex items-center gap-2 hover:border-brand-neon-green/40 transition-colors">
                <span className="font-mono text-brand-neon-green font-bold text-xs">#</span>
                <span className="font-mono text-brand-text-primary text-[10px] md:text-xs uppercase tracking-wider">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="px-6 max-w-4xl mx-auto w-full">
        <h2 className="font-orbitron font-bold text-2xl md:text-3xl text-brand-cyan mb-12 flex items-center gap-4">
          <span className="text-brand-neon-green font-mono tracking-tighter">git log --all</span>
        </h2>
        <CommitTimeline data={timelineData} />
      </section>

      {/* Professional & Technical Experience */}
      <section className="px-6 max-w-6xl mx-auto w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-orbitron font-bold text-2xl md:text-4xl text-brand-text-primary uppercase tracking-widest">
            Professional <span className="text-brand-neon-green">.exe</span>
          </h2>
          <p className="font-mono text-brand-text-muted text-xs md:text-sm">Technical Education & Product Strategy</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TerminalCard title="Frontend Tutor & SMM">
            <div className="space-y-4">
              <div className="font-mono text-[10px] text-brand-neon-green uppercase mb-2">Linux Professional Institute (2025)</div>
              <ul className="space-y-2 font-sans text-sm text-brand-text-muted list-inside">
                <li className="flex gap-2"><span>&gt;</span> Mentored students in HTML, CSS, and JS</li>
                <li className="flex gap-2"><span>&gt;</span> Managed digital communication & SEO strategy</li>
                <li className="flex gap-2"><span>&gt;</span> Organized Hubbers Day event</li>
              </ul>
            </div>
          </TerminalCard>

          <TerminalCard title="Product & Strategy">
            <div className="space-y-4">
              <div className="font-mono text-[10px] text-brand-cyan uppercase mb-2">Cydex & Party Currency Project</div>
              <ul className="space-y-2 font-sans text-sm text-brand-text-muted list-inside">
                <li className="flex gap-2"><span>&gt;</span> Project/Product Management with Cydex</li>
                <li className="flex gap-2"><span>&gt;</span> Business Analyst for Digital Event Payment Platform</li>
                <li className="flex gap-2"><span>&gt;</span> Requirement analysis & workflow structuring</li>
              </ul>
            </div>
          </TerminalCard>
        </div>
      </section>

      {/* Entrepreneurship & Community */}
      <section className="px-6 max-w-6xl mx-auto w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-orbitron font-bold text-2xl md:text-4xl text-brand-text-primary uppercase tracking-widest">
            Ventures <span className="text-brand-yellow">&</span> Communities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "KARMA", desc: "Technology & creative agency focused on brand identity and software development." },
            { title: "KENIME", desc: "Anime merchandise and culture brand focused on merchandise strategy and brand building." },
            { title: "GiT Community", desc: "Student-focused tech growth community promoting mentorship and technical growth." }
          ].map(venture => (
            <div key={venture.title} className="bg-brand-bg-secondary border border-brand-neon-green/10 p-6 rounded-[2px] hover:border-brand-yellow/40 transition-all group">
              <h3 className="font-orbitron font-bold text-xl text-brand-yellow mb-4 group-hover:scale-105 transition-transform">{venture.title}</h3>
              <p className="font-sans text-sm text-brand-text-muted leading-relaxed">{venture.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Candidate Quote */}
      <section className="px-6 max-w-4xl mx-auto w-full">
        <blockquote className="border-l-4 border-brand-neon-green pl-6 md:pl-8 py-8 bg-brand-bg-secondary relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-[60px] leading-none text-brand-neon-green opacity-5 select-none font-black">"</div>
          <p className="font-orbitron text-xl md:text-3xl text-brand-text-primary leading-tight font-light relative z-10">
            "Leadership, to me, is not just about occupying a position.
            <br className="hidden md:block" />
            <span className="text-brand-cyan font-bold mt-2 inline-block">It is about building systems that continue to serve people."</span>
          </p>
        </blockquote>
      </section>

      {/* Photo Cluster */}
      <section className="px-6 max-w-6xl mx-auto w-full pt-12 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <img src="/photos/futurize-ambassador.png" alt="Student Ambassador" className="w-full aspect-square object-cover rounded-[2px] border border-brand-neon-green/10 grayscale hover:grayscale-0 transition-all duration-500" />
            <p className="font-mono text-[10px] text-brand-neon-green/60 uppercase text-center tracking-widest">&gt; Futurize Ambassador Role</p>
          </div>
          <div className="space-y-4 md:translate-y-12">
            <img src="/photos/cert-nacos-awards.png" alt="NACOS Awards" className="w-full aspect-square object-cover rounded-[2px] border border-brand-neon-green/10 grayscale hover:grayscale-0 transition-all duration-500" />
            <p className="font-mono text-[10px] text-brand-neon-green/60 uppercase text-center tracking-widest">&gt; NACOS Recognition</p>
          </div>
          <div className="space-y-4">
            <img src="/photos/seated-portrait.png" alt="Personal Portrait" className="w-full aspect-square object-cover rounded-[2px] border border-brand-neon-green/10 grayscale hover:grayscale-0 transition-all duration-500" />
            <p className="font-mono text-[10px] text-brand-neon-green/60 uppercase text-center tracking-widest">&gt; Executive Portrait</p>
          </div>
        </div>
      </section>

    </div>
  );
}
