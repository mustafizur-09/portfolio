"use client";

export default function TechTicker() {
  const stack = [
    "Python", "Next.js", "React", "TypeScript", "ST-GCN", 
    "Deep Learning", "Tailwind CSS", "Git", "SQA", "WordPress"
  ];

  return (
    <div className="w-full bg-zinc-900/90 backdrop-blur-md border-y border-orange-500/30 shadow-[0_0_35px_-5px_rgba(234,88,12,0.2)] py-4 overflow-hidden relative z-10 flex items-center">
      {/* Subtle warm amber ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-amber-500/10 to-orange-500/5 pointer-events-none" />

      {/* Gradients to fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#0c0c0e] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#0c0c0e] to-transparent z-20 pointer-events-none"></div>
      
      <div className="flex animate-scroll-x min-w-max hover:[animation-play-state:paused] items-center relative z-10">
        {[...stack, ...stack, ...stack].map((tech, index) => (
          <div key={index} className="flex items-center mx-4 sm:mx-6">
            <span className="text-sm sm:text-base font-semibold tracking-wider uppercase text-zinc-100 hover:text-orange-400 transition-colors whitespace-nowrap cursor-default">
              {tech}
            </span>
            <span className="mx-3 sm:mx-4 text-orange-500 font-bold text-base drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]">
              •
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

