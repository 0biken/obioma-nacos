"use client";
import { useState } from "react";
import Image from "next/image";
import TypewriterText from "./TypewriterText";
import NeonButton from "./NeonButton";

export default function Hero() {
  const [stage, setStage] = useState(0);

  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center px-6 pt-10 pb-20 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text Column */}
        <div className="flex flex-col gap-6">
          <div className="animate-[fadeIn_0.4s_ease-out_forwards]">
            <span className="font-mono text-brand-neon-green text-sm tracking-widest opacity-80 uppercase">
              &lt;NACOS UI PRESIDENTIAL CAMPAIGN&gt;
            </span>
          </div>

          <h1 className="font-orbitron font-black text-5xl md:text-7xl leading-[1.1]">
            <TypewriterText text="Compiling " className="text-brand-cyan" onComplete={() => setStage(1)} />
            {stage >= 1 && (
              <TypewriterText text="the " className="text-brand-red" onComplete={() => setStage(2)} />
            )}
            {stage >= 2 && (
              <span className="inline-flex">
                <TypewriterText text="Future" className="text-brand-yellow" onComplete={() => setStage(3)} />
                <span className="text-brand-neon-green animate-[pulse_1s_step-end_infinite]">_</span>
              </span>
            )}
            {stage < 2 && <span className="text-brand-neon-green animate-[pulse_1s_step-end_infinite]">_</span>}
          </h1>

          <div className={`transition-opacity duration-1000 ${stage >= 3 ? "opacity-100" : "opacity-0"}`}>
            <p className="font-mono text-brand-text-muted text-xs md:text-sm mb-2 opacity-50">&lt;p&gt;</p>
            <p className="font-sans text-brand-text-primary text-lg leading-relaxed max-w-xl font-light pl-4 border-l border-brand-neon-green/20">
              Obioma Kennedy Ezeocha is running to serve as the next President
              of NACOS UI — not just to lead, but to help build what comes next.
            </p>
            <p className="font-mono text-brand-text-muted text-xs md:text-sm mt-2 opacity-50">&lt;/p&gt;</p>
          </div>

          <div className={`flex flex-col gap-4 mt-2 transition-all duration-700 delay-300 ${stage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div>
              <p className="font-mono text-brand-text-muted text-xs md:text-sm mb-2 opacity-50">&lt;a href=&quot;/join&quot;&gt;</p>
              <div className="pl-4 border-l border-brand-neon-green/20 flex gap-4">
                <NeonButton href="/join" variant="primary">
                  [ Join the Movement ]
                </NeonButton>
                <NeonButton href="/vision" variant="secondary">
                  [ Read My Vision ]
                </NeonButton>
              </div>
              <p className="font-mono text-brand-text-muted text-xs md:text-sm mt-2 opacity-50">&lt;/a&gt;</p>
            </div>
            
            <div className="mt-4 inline-block bg-brand-neon-green text-[#030807] font-bold font-mono text-sm px-4 py-3 border-l-4 border-white shadow-[0_0_20px_rgba(0,255,156,0.2)]">
              <div className="hover:text-white transition-colors duration-300">#OBIOMAFOR001</div>
              <div className="hover:text-white transition-colors duration-300">#FORTHEGOODOFNACOS</div>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square flex justify-center items-center">
          <div className="absolute inset-0 bg-brand-neon-green/5 blur-[100px] rounded-full animate-pulse" />
          <div className={`relative w-full h-full border border-brand-neon-green/20 rounded-[4px] overflow-hidden transition-all duration-1000 ${stage >= 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="absolute top-0 left-0 w-full h-6 bg-brand-bg-secondary border-b border-brand-neon-green/20 flex items-center px-3 gap-2 z-10">
              <div className="w-2 h-2 rounded-full bg-[#FF5F6D]" />
              <div className="w-2 h-2 rounded-full bg-brand-yellow" />
              <div className="w-2 h-2 rounded-full bg-brand-neon-green" />
            </div>
            {/* We assume images are placed in public/images/ */}
            <div className="w-full h-full bg-brand-bg-secondary pt-6 flex items-center justify-center relative">
              <Image 
                src="/photos/relaxed-portrait.png" 
                alt="Obioma Kennedy Ezeocha" 
                fill
                priority
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 opacity-80" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
