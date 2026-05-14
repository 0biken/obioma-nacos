import { ReactNode } from "react";
import Link from "next/link";

interface NeonButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "danger" | "whatsapp";
  className?: string;
}

export default function NeonButton({ children, href, onClick, variant = "primary", className = "" }: NeonButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-mono text-sm tracking-[1px] uppercase transition-all duration-300 rounded-[2px] px-5 py-3 hover:scale-[1.02] active:scale-[0.98] cursor-pointer";
  
  let variantClasses = "";
  switch (variant) {
    case "primary":
      // Solid neon green fill — primary CTA
      variantClasses = "text-[#030807] font-bold";
      break;
    case "secondary":
      // Transparent, neon green border
      variantClasses = "text-brand-neon-green border border-brand-neon-green/40 hover:border-brand-neon-green hover:bg-brand-neon-green/10";
      break;
    case "ghost":
      // Transparent, cyan border — tertiary
      variantClasses = "text-brand-cyan border border-brand-cyan/40 hover:border-brand-cyan hover:bg-brand-cyan/10";
      break;
    case "danger":
      variantClasses = "text-white border border-[#FF5F6D] bg-[#FF5F6D]/10 hover:bg-[#FF5F6D]/20";
      break;
    case "whatsapp":
      // Neon green with pulsing glow — matches WhatsApp entry in brand guide
      variantClasses = "text-[#030807] font-bold wa-pulse";
      break;
  }

  // Shared inline styles per variant for precise v2.0 glow values
  const getStyle = (): React.CSSProperties => {
    if (variant === "primary") {
      return {
        backgroundColor: "var(--neon-green, #00FF9C)",
        boxShadow: "0 0 20px rgba(0,255,156,0.35), 0 0 40px rgba(0,255,156,0.12)",
      };
    }
    if (variant === "whatsapp") {
      return { backgroundColor: "var(--neon-green, #00FF9C)" };
    }
    return {};
  };

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses} ${className}`} style={getStyle()}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`} style={getStyle()}>
      {children}
    </button>
  );
}
