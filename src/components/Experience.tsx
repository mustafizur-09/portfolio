"use client";

import { portfolioData } from "@/data/portfolioData";
import { motion, Variants } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export default function Experience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent text-white overflow-hidden relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-white">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full shadow-[0_0_10px_rgba(234,88,12,0.5)]"></div>
        </motion.div>

        {/* Timeline with Modern Card Layout */}
        <motion.div 
          className="relative ml-2 sm:ml-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.experience.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="relative border-l-2 border-zinc-800 hover:border-orange-500/50 transition-colors duration-300 pl-6 sm:pl-10 pb-12 last:pb-2 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[13px] top-6 w-6 h-6 flex items-center justify-center">
                {exp.isCurrent ? (
                  <div className="relative flex h-5 w-5 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-70"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.9)] border-2 border-[#0c0c0e]"></span>
                  </div>
                ) : (
                  <div className="w-3.5 h-3.5 rounded-full bg-orange-600/80 group-hover:bg-orange-500 border-2 border-[#0c0c0e] shadow-[0_0_8px_rgba(234,88,12,0.4)] group-hover:shadow-[0_0_12px_rgba(249,115,22,0.8)] transition-all duration-300"></div>
                )}
              </div>

              {/* Modern Card Container with 3D Tilt & Mouse Spotlight Glow */}
              <SpotlightCard className="bg-zinc-900/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-zinc-800 hover:border-zinc-700 shadow-xl hover:shadow-[0_0_35px_rgba(234,88,12,0.18)]">
                <div className="relative z-10">
                  {/* Top Row: Role Title & Status Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors tracking-tight">
                      {exp.title}
                    </h3>

                    {/* Status Badge in warm orange/amber pill tag */}
                    {exp.statusBadge ? (
                      <span className="text-orange-400 font-medium bg-orange-500/10 border border-orange-500/20 px-3.5 py-1 rounded-full text-sm sm:text-base shadow-sm self-start sm:self-auto flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
                        {exp.statusBadge}
                      </span>
                    ) : (
                      <span className="text-zinc-400 font-medium bg-zinc-800/80 border border-zinc-700/60 px-3.5 py-1 rounded-full text-xs sm:text-sm self-start sm:self-auto">
                        {exp.duration}
                      </span>
                    )}
                  </div>

                  {/* Company Name (Classic Serif Italic style matching original) */}
                  <h4 className="text-lg sm:text-xl text-zinc-300 mb-3 font-serif italic">
                    {exp.company}
                  </h4>

                  {/* Location & Duration Meta */}
                  <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs sm:text-sm text-zinc-400 mb-5 font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-orange-400/80 shrink-0" />
                      {exp.location}
                    </span>
                    <span className="text-zinc-600 hidden sm:inline">•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-orange-400/80 shrink-0" />
                      {exp.duration}
                    </span>
                  </div>

                  {/* Bullet Points with readable text-base sm:text-lg text-zinc-300 */}
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-3">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_6px_rgba(249,115,22,0.8)] shrink-0"></span>
                        <span className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="pt-4 border-t border-zinc-800/70">
                      <div className="flex flex-wrap gap-2.5">
                        {exp.skills.map((skill, sIndex) => (
                          <span
                            key={sIndex}
                            className="text-sm sm:text-base font-medium text-zinc-200 bg-zinc-900/90 border border-zinc-700 hover:border-orange-500/40 hover:text-orange-300 px-3.5 py-1.5 rounded-xl shadow-sm transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
