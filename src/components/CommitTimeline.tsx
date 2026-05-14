export default function CommitTimeline() {
  const commits = [
    { id: "001", title: "Volunteering", sub: "Community support and service initiatives" },
    { id: "002", title: "Teaching", sub: "Peer instruction and academic support sessions" },
    { id: "003", title: "Student Initiatives", sub: "Active participation in student-driven programs" },
    { id: "004", title: "Innovation Programs", sub: "Contributing to tech and entrepreneurship initiatives" },
    { id: "005", title: "Projects & Leadership", sub: "Organizing and leading collaborative student projects" }
  ];

  return (
    <div className="flex flex-col ml-4">
      {commits.map((commit, index) => (
        <div key={commit.id} className="relative pl-8 pb-10 group">
          {/* Connector line */}
          {index !== commits.length - 1 && (
            <div className="absolute left-0 top-3 bottom-0 w-[1px] bg-brand-neon-green/20 group-hover:bg-brand-neon-green/50 transition-colors" />
          )}
          {/* Node */}
          <div className="absolute left-[-4px] top-1.5 w-[9px] h-[9px] rounded-full bg-brand-bg-primary border border-brand-neon-green group-hover:bg-brand-neon-green group-hover:shadow-[0_0_8px_rgba(0,255,102,0.8)] transition-all" />
          
          <div className="font-mono text-sm mb-1 text-brand-neon-green">
            commit {commit.id} — <span className="text-brand-text-primary font-sans font-medium text-base ml-2 tracking-wide">{commit.title}</span>
          </div>
          <div className="font-mono text-brand-text-muted text-sm border-l border-brand-neon-green/10 pl-4 py-1 ml-[0.5px] mt-2 group-hover:border-brand-neon-green/30 transition-colors">
            &gt; {commit.sub}
          </div>
        </div>
      ))}
    </div>
  );
}
