"use client";
import { useState } from "react";
import TypewriterText from "./TypewriterText";
import NeonButton from "./NeonButton";

export default function Hero() {
  const [stage, setStage] = useState(0);

  return (
    <section className="relative min-h-[90vh] flex items-center px-6 pt-10 pb-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))] pointer-events-none z-[-1]" />
      
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <div className="flex flex-col gap-6">
          <div className="animate-[fadeIn_0.4s_ease-out_forwards]">
            <span className="font-mono text-brand-neon-green text-sm tracking-widest opacity-80 uppercase">
              &lt;NACOS UI PRESIDENTIAL CAMPAIGN&gt;
            </span>
          </div>

          <h1 className="font-orbitron font-black text-5xl md:text-7xl leading-[1.1]">
            <TypewriterText text="Compiling" className="text-brand-cyan block" onComplete={() => setStage(1)} />
            {stage >= 1 && (
              <span className="flex">
                <TypewriterText text="the Future" className="text-brand-yellow" onComplete={() => setStage(2)} />
                <span className="text-brand-neon-green animate-[pulse_1s_step-end_infinite]">_</span>
              </span>
            )}
            {stage === 0 && <span className="text-brand-neon-green animate-[pulse_1s_step-end_infinite]">_</span>}
          </h1>

          <div className={`transition-opacity duration-1000 ${stage >= 2 ? "opacity-100" : "opacity-0"}`}>
            <p className="font-sans text-brand-text-primary text-lg leading-relaxed max-w-xl font-light">
              Obioma Kennedy Ezeocha is running to serve as the next President
              of NACOS UI — not just to lead, but to help build what comes next.
            </p>
          </div>

          <div className={`flex flex-wrap gap-4 mt-4 transition-all duration-700 delay-300 ${stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <NeonButton href="/join" variant="primary">
              [ Join the Movement ]
            </NeonButton>
            <NeonButton href="/vision" variant="secondary">
              [ Read My Vision ]
            </NeonButton>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square flex justify-center items-center">
          <div className="absolute inset-0 bg-brand-neon-green/5 blur-[100px] rounded-full animate-pulse" />
          <div className={`relative w-full h-full border border-brand-neon-green/20 rounded-[4px] overflow-hidden transition-all duration-1000 ${stage >= 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="absolute top-0 left-0 w-full h-6 bg-brand-bg-secondary border-b border-brand-neon-green/20 flex items-center px-3 gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5F6D]" />
              <div className="w-2 h-2 rounded-full bg-brand-yellow" />
              <div className="w-2 h-2 rounded-full bg-brand-neon-green" />
            </div>
            {/* We assume images are placed in public/images/ */}
            <div className="w-full h-full bg-brand-bg-secondary pt-6 flex items-center justify-center">
              <img src="/photos/hero-portrait.png" alt="Obioma Kennedy Ezeocha" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
