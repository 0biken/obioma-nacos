"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Vision", href: "/vision" },
    { name: "Gallery", href: "/gallery" },
    { name: "Plans", href: "/plans" },
    { name: "Join Us", href: "/join" },
  ];

  return (
    <nav className="w-full border-b border-brand-neon-green/10 bg-brand-bg-primary/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-bg-secondary border border-brand-neon-green/30 rounded flex items-center justify-center transition-all group-hover:border-brand-cyan/50 group-hover:shadow-[0_0_15px_rgba(0,255,204,0.3)]">
            <span className="font-orbitron font-black text-brand-cyan text-sm">UI</span>
          </div>
          <div>
            <div className="font-orbitron font-bold text-lg text-brand-text-primary tracking-wide">NACOS</div>
            <div className="font-mono text-[9px] text-brand-text-muted tracking-[0.2em]">UNIVERSITY OF IBADAN</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-mono text-xs tracking-wider transition-colors hover:text-brand-neon-green ${
                pathname === link.href ? "text-brand-neon-green border-b border-brand-neon-green/50 pb-1" : "text-brand-text-muted"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/join"
            className="ml-4 font-mono text-xs text-brand-bg-primary bg-brand-neon-green px-4 py-2 rounded-[2px] transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,102,0.4)]"
          >
            [ JOIN THE MOVEMENT ]
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            href="/join"
            className="font-mono text-[10px] text-brand-bg-primary bg-brand-neon-green px-3 py-2 rounded-[2px] font-bold shadow-[0_0_10px_rgba(0,255,102,0.3)]"
          >
            JOIN
          </Link>
          <button className="text-brand-neon-green" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-brand-bg-secondary border-b border-brand-neon-green/20 flex flex-col p-6 shadow-xl">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-mono text-sm py-4 border-b border-brand-neon-green/5 ${
                pathname === link.href ? "text-brand-neon-green" : "text-brand-text-muted"
              }`}
            >
              &gt; {link.name}
            </Link>
          ))}
          <Link
            href="/join"
            onClick={() => setIsOpen(false)}
            className="mt-6 font-mono text-sm text-center text-brand-bg-primary bg-brand-neon-green px-4 py-3 rounded-[2px]"
          >
            [ JOIN THE MOVEMENT ]
          </Link>
        </div>
      )}
    </nav>
  );
}
