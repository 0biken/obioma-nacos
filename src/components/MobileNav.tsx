"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Lightbulb, FileText, Users, Image as ImageIcon } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Vision", href: "/vision", icon: Lightbulb },
    { name: "Gallery", href: "/gallery", icon: ImageIcon },
    { name: "Plans", href: "/plans", icon: FileText },
    { name: "Join", href: "/join", icon: Users },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-brand-bg-primary/95 backdrop-blur-md border-t border-brand-neon-green/10 z-50 flex justify-around items-center h-20 px-2 pb-safe">
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex flex-col items-center justify-center gap-1 w-full h-full transition-colors ${
              isActive ? "text-brand-neon-green" : "text-brand-text-muted"
            }`}
          >
            <div className={`p-2 rounded-full transition-all ${isActive ? "bg-brand-neon-green/10 shadow-[0_0_10px_rgba(0,255,102,0.2)]" : ""}`}>
              <Icon size={20} />
            </div>
            <span className="font-mono text-[9px] uppercase tracking-tighter font-medium">{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
