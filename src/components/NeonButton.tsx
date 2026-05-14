import { ReactNode } from "react";
import Link from "next/link";

interface NeonButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "whatsapp";
  className?: string;
}

export default function NeonButton({ children, href, onClick, variant = "primary", className = "" }: NeonButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-mono text-sm tracking-wide transition-all duration-300 rounded-[2px] px-5 py-3 hover:scale-[1.02] active:scale-[0.98]";
  
  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses = "bg-brand-neon-green text-brand-bg-primary border border-brand-neon-green shadow-[0_0_15px_rgba(0,255,102,0.3)] hover:shadow-[0_0_25px_rgba(0,255,102,0.5)]";
      break;
    case "secondary":
      variantClasses = "bg-brand-neon-green/10 text-brand-neon-green border border-brand-neon-green/30 hover:bg-brand-neon-green/20 hover:border-brand-neon-green/60 hover:shadow-[0_0_15px_rgba(0,255,102,0.2)]";
      break;
    case "danger":
      variantClasses = "bg-[#FF5F6D] text-white border border-[#FF5F6D] shadow-[0_0_15px_rgba(255,95,109,0.3)] hover:shadow-[0_0_25px_rgba(255,95,109,0.5)]";
      break;
    case "whatsapp":
      variantClasses = "bg-[#25D366] text-white border border-[#25D366] shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] animate-[pulse_3s_ease-in-out_infinite]";
      break;
  }

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
}
