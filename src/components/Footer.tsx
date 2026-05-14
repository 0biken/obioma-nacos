import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-brand-neon-green/10 bg-brand-bg-primary mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="font-orbitron font-bold text-xl text-brand-text-primary mb-2">
              Obioma<span className="text-brand-cyan">For</span><span className="text-brand-yellow">001</span>
            </div>
            <p className="font-mono text-[10px] text-brand-text-muted leading-relaxed max-w-xs uppercase">
              Compiling the Future.<br />
              For the good of NACOS.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-brand-neon-green text-xs tracking-widest mb-4 uppercase">&gt; Quick Links</h4>
            <ul className="space-y-2 font-mono text-xs">
              <li><Link href="/" className="text-brand-text-muted hover:text-brand-cyan transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-brand-text-muted hover:text-brand-cyan transition-colors">About Obioma</Link></li>
              <li><Link href="/vision" className="text-brand-text-muted hover:text-brand-cyan transition-colors">Vision</Link></li>
              <li><Link href="/plans" className="text-brand-text-muted hover:text-brand-cyan transition-colors">Plans (Coming Soon)</Link></li>
              <li><Link href="/join" className="text-brand-text-muted hover:text-brand-cyan transition-colors">Join the Movement</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-brand-neon-green text-xs tracking-widest mb-4 uppercase">&gt; Connect</h4>
            <ul className="space-y-2 font-mono text-xs">
              <li><a href="https://chat.whatsapp.com/ECgFFW878vr5f1ufmBPhBE" target="_blank" rel="noreferrer" className="text-brand-text-muted hover:text-brand-cyan transition-colors">WhatsApp Community</a></li>
              <li><Link href="/contact" className="text-brand-text-muted hover:text-brand-cyan transition-colors">Contact Team</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-brand-neon-green/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[10px] text-brand-text-muted">
            &lt;/NACOS&gt; UNIVERSITY OF IBADAN · BRAND SYSTEM v1.0
          </div>
          <div className="flex gap-4">
            <span className="bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-orbitron text-[10px] font-bold px-3 py-1 rounded-[2px]">#FORTHEGOODOFNACOS</span>
            <span className="bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-orbitron text-[10px] font-bold px-3 py-1 rounded-[2px]">#COMPILINGTHEFUTURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
