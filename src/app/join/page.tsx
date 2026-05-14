"use client";
import NeonButton from "@/components/NeonButton";
import Image from "next/image";

export default function Join() {
  return (
    <div className="flex flex-col gap-20 md:gap-32 pb-24 pt-10 md:pt-20">
      
      {/* CTA Banner */}
      <section className="px-6 max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-brand-neon-green/50 shadow-[0_0_20px_rgba(0,255,102,0.3)] mb-6 relative">
          <Image 
            src="/photos/relaxed-portrait.png" 
            alt="Obioma Kennedy Ezeocha" 
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>
        <h1 className="font-orbitron font-black text-3xl md:text-6xl text-brand-cyan mb-6">
          Join the Movement
        </h1>
        <p className="font-sans text-brand-text-primary text-lg md:text-xl font-light mb-10 md:mb-12">
          Join the campaign community and help us build what comes next.
        </p>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <NeonButton href="https://chat.whatsapp.com/ECgFFW878vr5f1ufmBPhBE" variant="whatsapp" className="w-full sm:w-auto text-sm md:text-base">
            [ Join WhatsApp Group ]
          </NeonButton>
        </div>
      </section>

      {/* Community Photo */}
      <section className="px-6 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="space-y-4">
          <div className="relative w-full aspect-video border border-brand-neon-green/10 rounded-[2px] overflow-hidden">
            <Image 
              src="/photos/nacos-team.jpg" 
              alt="NACOS Team" 
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className="font-mono text-[10px] text-brand-neon-green/60 uppercase text-center tracking-widest">&gt; Community Spirit @ NACOS UI</p>
        </div>
        <div className="space-y-4">
          <div className="relative w-full aspect-video border border-brand-neon-green/10 rounded-[2px] overflow-hidden">
            <Image 
              src="/photos/volunteer-group.png" 
              alt="Volunteer Group" 
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className="font-mono text-[10px] text-brand-neon-green/60 uppercase text-center tracking-widest">&gt; Community Engagement</p>
        </div>
      </section>
    </div>
  );
}
