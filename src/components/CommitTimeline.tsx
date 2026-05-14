interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  desc?: string;
}

interface LevelGroup {
  level: string;
  items: ExperienceItem[];
}

export default function CommitTimeline({ data }: { data: LevelGroup[] }) {
  return (
    <div className="flex flex-col ml-2 md:ml-4">
      {data.map((group, groupIdx) => (
        <div key={group.level} className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-8 bg-brand-neon-green" />
            <h3 className="font-orbitron font-bold text-xl text-brand-neon-green uppercase tracking-widest">
              {group.level}
            </h3>
            <div className="h-[2px] flex-1 bg-brand-neon-green/10" />
          </div>

          <div className="flex flex-col">
            {group.items.map((item, itemIdx) => {
              const isLastInGroup = itemIdx === group.items.length - 1;
              const isLastGroup = groupIdx === data.length - 1;

              return (
                <div key={item.id} className="relative pl-8 pb-10 group">
                  {/* Vertical line - only show if not the very last item of the very last group */}
                  {!(isLastInGroup && isLastGroup) && (
                    <div className="absolute left-0 top-3 bottom-0 w-[1px] bg-brand-neon-green/20 group-hover:bg-brand-neon-green/50 transition-colors" />
                  )}
                  
                  {/* Node */}
                  <div className="absolute left-[-4px] top-1.5 w-[9px] h-[9px] rounded-full bg-brand-bg-primary border border-brand-neon-green group-hover:bg-brand-neon-green group-hover:shadow-[0_0_8px_rgba(0,255,102,0.8)] transition-all" />
                  
                  <div className="font-mono text-xs md:text-sm mb-1 text-brand-neon-green opacity-80">
                    commit {item.id} —
                  </div>
                  
                  <div className="font-sans font-bold text-base md:text-lg text-brand-text-primary tracking-tight">
                    {item.role} <span className="text-brand-cyan/40 font-light mx-2">|</span> {item.org}
                  </div>
                  
                  {item.desc && (
                    <div className="font-mono text-brand-text-muted text-xs md:text-sm border-l border-brand-neon-green/10 pl-4 py-2 ml-[0.5px] mt-3 group-hover:border-brand-neon-green/30 transition-colors bg-brand-neon-green/5 max-w-2xl">
                      &gt; {item.desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
