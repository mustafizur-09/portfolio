"use client";

import { portfolioData } from "@/data/portfolioData";
import { motion, Variants } from "framer-motion";

export default function OtherSections() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="more" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent text-white overflow-hidden relative z-10">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Featured Projects Bento Grid */}
        {portfolioData.projects && portfolioData.projects.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8 border-b border-zinc-800 pb-4 inline-block">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.projects.map((project, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-3xl border border-zinc-800/80 hover:border-zinc-600 transition-colors duration-300 hover:shadow-[0_0_30px_rgba(234,88,12,0.15)] group flex flex-col h-full relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/5 transition-colors duration-500 pointer-events-none"></div>
                  
                  <div className="relative z-10 flex-1">
                    {/* Mockup Frame placeholder */}
                    <div className="bg-[#0a0a0c] border border-zinc-800/60 rounded-2xl mb-6 p-4 h-36 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-orange-500/30 transition-colors shadow-inner">
                      <div className="absolute top-3 left-3 flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50"></div>
                      </div>
                      <div className="text-zinc-600/50 font-mono text-xs uppercase tracking-widest mt-4 group-hover:text-orange-500/30 transition-colors">
                        Preview Unavailable
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{project.title}</h3>
                    <p className="text-base sm:text-lg text-zinc-300 my-4 leading-relaxed">{project.description}</p>
                    {project.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag: string, tIndex: number) => (
                          <span key={tIndex} className="px-3.5 py-1 bg-zinc-800/70 border border-zinc-700/70 rounded-full text-xs sm:text-sm font-medium text-orange-200/90 tracking-wide">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="relative z-10 flex items-center gap-3 mt-4 pt-4 border-t border-zinc-800/50">
                    {/* @ts-ignore */}
                    {project.githubLink && project.githubLink !== "#" ? (
                      /* @ts-ignore */
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 bg-zinc-800/50 hover:bg-zinc-700 px-3.5 py-1.5 rounded-full border border-zinc-700">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        GitHub
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-zinc-500 flex items-center gap-1.5 bg-zinc-800/20 px-3.5 py-1.5 rounded-full cursor-not-allowed border border-zinc-800">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        Private
                      </span>
                    )}
                    {/* @ts-ignore */}
                    {project.demoLink && project.demoLink !== "#" ? (
                      /* @ts-ignore */
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1.5 bg-orange-500/10 hover:bg-orange-500/20 px-3.5 py-1.5 rounded-full border border-orange-500/20">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        Live Demo
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-zinc-500 flex items-center gap-1.5 bg-zinc-800/20 px-3.5 py-1.5 rounded-full cursor-not-allowed border border-zinc-800">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        No Demo
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 2-Column Layout for the rest */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Column: Leadership & Publications */}
          <div className="space-y-12">
            {/* Leadership */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8 border-b border-zinc-800 pb-4 inline-block">Leadership</h2>
              <div className="space-y-8">
                {portfolioData.leadership.map((lead, index) => (
                  <motion.div key={index} variants={itemVariants} className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-3xl border border-zinc-800/80 hover:border-zinc-600 transition-colors">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{lead.role}</h3>
                    <div className="text-sm sm:text-base text-orange-400 font-medium mb-1.5 mt-1">{lead.organization}</div>
                    <div className="text-xs sm:text-sm text-zinc-400 mb-3 uppercase tracking-wider font-semibold">{lead.duration}</div>
                    <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">{lead.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Publications */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8 border-b border-zinc-800 pb-4 inline-block">Publications</h2>
              <div className="space-y-8">
                {portfolioData.publications.map((pub, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-3xl border border-zinc-800/80 hover:border-zinc-600 transition-colors duration-300 hover:shadow-[0_0_30px_rgba(234,88,12,0.15)] group relative overflow-hidden"
                  >
                    {/* @ts-ignore */}
                    {pub.badge && (
                      <span className="absolute top-0 right-0 bg-orange-500/10 text-orange-400 border-l border-b border-orange-500/20 px-4 py-1.5 text-xs font-bold rounded-bl-xl tracking-wider uppercase">
                        {/* @ts-ignore */}
                        {pub.badge}
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors mt-2">{pub.title}</h3>
                    <div className="text-sm sm:text-base text-zinc-400 font-medium mb-3">{pub.publisher} &bull; {pub.date}</div>
                    <p className="text-base sm:text-lg text-zinc-300 mb-5 leading-relaxed">{pub.description}</p>
                    
                    {/* @ts-ignore */}
                    {pub.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {/* @ts-ignore */}
                        {pub.tags.map((tag: string, tIndex: number) => (
                          <span key={tIndex} className="px-3.5 py-1 bg-zinc-800/70 border border-zinc-700/70 rounded-full text-xs sm:text-sm font-medium text-orange-200/90 tracking-wide">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {pub.link !== "#" && (
                       <a href={pub.link} className="text-base font-semibold text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center mt-2 group-hover:underline">Read Paper &rarr;</a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Education & Skills */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8 border-b border-zinc-800 pb-4 inline-block">Education</h2>
              <div className="space-y-8">
                {portfolioData.education.map((edu, index) => (
                  <motion.div key={index} variants={itemVariants} className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-3xl border border-zinc-800/80 hover:border-zinc-600 transition-colors">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{edu.degree}</h3>
                    <div className="text-sm sm:text-base text-orange-400 font-medium mb-1.5 mt-1">{edu.institution}</div>
                    <div className="text-xs sm:text-sm text-zinc-400 mb-3 uppercase tracking-wider font-semibold">{edu.duration}</div>
                    <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">{edu.details}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8 border-b border-zinc-800 pb-4 inline-block">Skills</h2>
              <div className="flex flex-wrap gap-2.5">
                {portfolioData.skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-zinc-900/80 backdrop-blur-md border border-zinc-700/80 rounded-xl text-base font-medium text-zinc-300 hover:border-orange-500/50 hover:text-orange-400 transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
