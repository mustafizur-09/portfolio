"use client";

import { portfolioData } from "@/data/portfolioData";
import { motion, Variants } from "framer-motion";

export default function Experience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent text-white overflow-hidden relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Experience</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full shadow-[0_0_10px_rgba(234,88,12,0.5)]"></div>
        </motion.div>

        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.experience.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="relative border-l border-zinc-800 pl-8 pb-6 hover:border-orange-900 transition-colors duration-300">
              <div className="absolute w-4 h-4 bg-orange-600 rounded-full -left-[9px] top-1.5 shadow-[0_0_10px_rgba(234,88,12,0.5)]"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.title}</h3>
                <span className="text-orange-400 font-medium bg-orange-500/10 border border-orange-500/20 px-3.5 py-1 rounded-full text-sm sm:text-base shadow-sm self-start sm:self-auto">{exp.duration}</span>
              </div>
              <h4 className="text-lg sm:text-xl text-zinc-300 mb-4 font-serif italic">{exp.company}</h4>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-5">{exp.description}</p>
              <div className="flex flex-wrap gap-2.5">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="text-sm sm:text-base font-medium text-zinc-200 bg-zinc-900/90 border border-zinc-700 px-3.5 py-1.5 rounded-xl shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
