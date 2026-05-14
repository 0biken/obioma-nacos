export default function PixelBackground() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-[linear-gradient(rgba(0,255,102,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,102,0.05)_1px,transparent_1px)] bg-[length:40px_40px]" />
      <div className="fixed top-6 right-8 opacity-20 text-brand-neon-green font-mono text-5xl leading-[0.85] tracking-[-4px] pointer-events-none z-[-1] animate-[float_6s_ease-in-out_infinite]">
        ##<br />##
      </div>
    </>
  );
}
