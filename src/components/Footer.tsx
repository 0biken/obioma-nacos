import Link from "next/link";

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    <path d="M14 4c0 2.5 2 5 5 5" />
  </svg>
);

const SnapchatIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11.99 2C8.55 2 6 4.7 6 8c0 1.5.5 2.5 1 3-1 0-2-.5-3-.5-.5 0-.8.3-.8.6 0 .5.4.8.8.8 1.5 0 2.5.5 3.2 1.5-.5.8-1 1.5-1 2.5 0 1 .5 1.5 1 1.5.2 0 .5-.1.8-.2.8.6 1.8 1.2 3 1.2s2.2-.6 3-1.2c.3.1.6.2.8.2.5 0 1-.5 1-1.5 0-1-.5-1.7-1-2.5.7-1 1.7-1.5 3.2-1.5.4 0 .8-.3.8-.8 0-.3-.3-.6-.8-.6-1 0-2 .5-3 .5.5-.5 1-1.5 1-3 0-3.3-2.55-6-5.99-6Z" />
  </svg>
);

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/obioma-ezeocha-590923353/", icon: <LinkedinIcon /> },
  { label: "Instagram", href: "https://www.instagram.com/obi.ken_360/", icon: <InstagramIcon /> },
  { label: "X / Twitter", href: "https://x.com/obioma_ezeocha", icon: <XIcon /> },
  { label: "TikTok", href: "https://www.tiktok.com/@yourfavoritetechweeb", icon: <TikTokIcon /> },
  { label: "Snapchat", href: "https://www.snapchat.com/add/obiken_360", icon: <SnapchatIcon /> },
  { label: "GitHub", href: "https://github.com/0biken", icon: <GithubIcon /> },
];

const links = [
  { label: "Home", href: "/" },
  { label: "About Obioma", href: "/about" },
  { label: "Vision", href: "/vision" },
  { label: "Gallery", href: "/gallery" },
  { label: "Plans", href: "/plans" },
  { label: "Join the Movement", href: "/join" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-brand-neon-green/10 bg-brand-bg-primary relative z-10 pb-24 md:pb-0">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="col-span-2">
            <div className="font-orbitron font-black text-lg md:text-xl text-brand-text-primary mb-2 tracking-tight">
              Obioma<span className="text-brand-cyan">For</span><span className="text-brand-yellow">001</span>
            </div>
            <p className="font-mono text-[10px] text-brand-text-label leading-relaxed uppercase tracking-wide max-w-xs mt-3">
              Compiling the Future.<br />
              For the good of NACOS.<br />
              University of Ibadan.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-brand-neon-green/10 border border-brand-neon-green/30 text-brand-neon-green font-orbitron text-[9px] font-bold px-2 py-1 rounded-[2px]">
                #OBIOMAFOR001
              </span>
              <span className="bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow font-orbitron text-[9px] font-bold px-2 py-1 rounded-[2px]">
                #COMPILINGTHEFUTURE
              </span>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-mono text-brand-neon-green text-[10px] tracking-[3px] mb-3 uppercase">&gt;_ Connect</h4>
              <div className="flex flex-wrap gap-2">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.label}
                    className="w-8 h-8 flex items-center justify-center border border-brand-neon-green/20 rounded-[2px] font-mono text-[9px] text-brand-text-muted hover:border-brand-cyan/50 hover:text-brand-cyan transition-all duration-200 uppercase"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <div className="mt-3 flex flex-col gap-1">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[10px] text-brand-text-muted hover:text-brand-cyan transition-colors"
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-brand-neon-green text-[10px] tracking-[3px] mb-5 uppercase">&gt;_ Quick Links</h4>
            <ul className="space-y-3 font-mono text-xs">
              {links.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-brand-text-muted hover:text-brand-cyan transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Campaign */}
          <div>
            <h4 className="font-mono text-brand-neon-green text-[10px] tracking-[3px] mb-5 uppercase">&gt;_ Campaign</h4>
            <ul className="space-y-3 font-mono text-xs">
              <li>
                <a href="https://chat.whatsapp.com/ECgFFW878vr5f1ufmBPhBE" target="_blank" rel="noreferrer"
                  className="text-brand-text-muted hover:text-brand-cyan transition-colors">
                  WhatsApp Community ↗
                </a>
              </li>
            </ul>

            {/* Status badge */}
            <div className="mt-6 inline-flex items-center gap-2 border border-brand-neon-green/20 px-3 py-2 rounded-[2px]">
              <span className="w-2 h-2 rounded-full bg-brand-neon-green animate-pulse" />
              <span className="font-mono text-[10px] text-brand-neon-green uppercase tracking-wider">Campaign: Active</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-brand-neon-green/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div className="font-mono text-[10px] text-brand-text-label">
            &lt;/NACOS&gt; · UNIVERSITY OF IBADAN · BRAND SYSTEM v2.0
          </div>
          <div className="font-mono text-[10px] text-brand-text-label">
            #FORTHEGOODOFNACOS
          </div>
        </div>

      </div>
    </footer>
  );
}
