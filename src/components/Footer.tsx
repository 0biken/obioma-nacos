import Link from "next/link";

export default function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About Obioma", href: "/about" },
    { label: "Vision", href: "/vision" },
    { label: "Gallery", href: "/gallery" },
    { label: "Plans", href: "/plans" },
    { label: "Join the Movement", href: "/join" },
  ];

  return (
    <footer className="w-full border-t border-brand-neon-green/10 bg-brand-bg-primary relative z-10 pb-24 md:pb-0">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
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

          {/* Connect */}
          <div>
            <h4 className="font-mono text-brand-neon-green text-[10px] tracking-[3px] mb-5 uppercase">&gt;_ Connect</h4>
            <ul className="space-y-3 font-mono text-xs">
              <li>
                <a href="https://chat.whatsapp.com/ECgFFW878vr5f1ufmBPhBE" target="_blank" rel="noreferrer"
                  className="text-brand-text-muted hover:text-brand-cyan transition-colors">
                  WhatsApp Community ↗
                </a>
              </li>
              <li>
                <Link href="/join" className="text-brand-text-muted hover:text-brand-cyan transition-colors">
                  Volunteer Form
                </Link>
              </li>
            </ul>

            {/* Status badge */}
            <div className="mt-6 inline-flex items-center gap-2 border border-brand-neon-green/20 px-3 py-2 rounded-[2px]">
              <span className="w-2 h-2 rounded-full bg-brand-neon-green animate-pulse" />
              <span className="font-mono text-[10px] text-brand-neon-green uppercase tracking-wider">Status: Active</span>
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
