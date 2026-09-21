"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden"
      style={{
        background: "radial-gradient(125% 125% at 50% 10%, #d95b16 0%, #a83805 35%, #3d1405 65%, #0c0c0e 95%)"
      }}
    >
      {/* Subtle Noise / Film Grain texture overlay for cinematic atmospheric depth */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-40 mix-blend-overlay -z-10" />

      {/* Grid Pattern overlay with soft opacity */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30 -z-10" />

      {/* Seamless bottom fade into pure pitch dark (#0c0c0e) */}
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/80 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-20">
        
        {/* Left Column: Text & Info */}
        <motion.div 
          className="lg:col-span-7 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Dual-Focus Accent Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs sm:text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(249,115,22,0.25)] backdrop-blur-md">
              <span>⚡</span> Full-Stack &amp; ML Engineer
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(245,158,11,0.25)] backdrop-blur-md">
              <span>🌟</span> Tech Community Leader
            </div>
          </motion.div>

          {/* Large Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white drop-shadow-md">
            Building the web & models that carry <span className="font-elegant text-amber-200 font-normal pr-2 drop-shadow">real</span> solutions.
          </motion.h1>
          
          {/* Subtext */}
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-zinc-100/90 font-normal leading-relaxed max-w-2xl drop-shadow-sm">
            {portfolioData.hero.description}
          </motion.p>
          
          {/* Tech Tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5">
            {["Python", "Next.js", "ST-GCN", "WordPress", "Tailwind", "SQA"].map((tag, i) => (
              <span key={i} className="px-4 py-1.5 bg-zinc-950/75 backdrop-blur-md border border-zinc-700/80 rounded-xl text-sm sm:text-base font-medium text-zinc-200 shadow-md transition-colors hover:border-amber-500/50">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* 4 Dynamic Stat Metrics */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="bg-zinc-950/50 backdrop-blur-md border border-orange-500/20 rounded-2xl p-3.5 sm:p-4 hover:border-orange-500/40 transition-colors shadow-lg">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-sm flex items-baseline gap-1">
                <span>4+</span>
                <span className="text-xs text-orange-400 font-bold">Systems</span>
              </div>
              <div className="text-xs text-zinc-300 font-medium mt-1 leading-snug">
                Production Systems Built
              </div>
            </div>

            <div className="bg-zinc-950/50 backdrop-blur-md border border-orange-500/20 rounded-2xl p-3.5 sm:p-4 hover:border-orange-500/40 transition-colors shadow-lg">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-sm flex items-baseline gap-1">
                <span>2+</span>
                <span className="text-xs text-orange-400 font-bold">Papers</span>
              </div>
              <div className="text-xs text-zinc-300 font-medium mt-1 leading-snug">
                AI Research Papers
              </div>
            </div>

            <div className="bg-zinc-950/50 backdrop-blur-md border border-amber-500/20 rounded-2xl p-3.5 sm:p-4 hover:border-amber-500/40 transition-colors shadow-lg">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-sm flex items-baseline gap-1">
                <span>500+</span>
                <span className="text-xs text-amber-400 font-bold">People</span>
              </div>
              <div className="text-xs text-zinc-300 font-medium mt-1 leading-snug">
                Community Members &amp; Students Impacted
              </div>
            </div>

            <div className="bg-zinc-950/50 backdrop-blur-md border border-amber-500/20 rounded-2xl p-3.5 sm:p-4 hover:border-amber-500/40 transition-colors shadow-lg">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-sm flex items-baseline gap-1">
                <span>3+</span>
                <span className="text-xs text-amber-400 font-bold">Events</span>
              </div>
              <div className="text-xs text-zinc-300 font-medium mt-1 leading-snug">
                Tech Events &amp; Hackathons Spearheaded
              </div>
            </div>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
            <a
              href="#more"
              className="px-8 py-4 rounded-full bg-zinc-950/60 backdrop-blur-md border border-white/20 hover:border-white/40 text-white font-semibold transition-all duration-300 hover:bg-zinc-900/80 hover:-translate-y-0.5 flex items-center gap-2"
            >
              View my work <span className="text-amber-300">↓</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Floating ID Card */}
        <motion.div 
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Ambient glow directly behind ID card */}
          <div className="absolute -inset-2 bg-amber-500/20 rounded-[36px] blur-2xl pointer-events-none -z-10" />

          <motion.div 
            className="w-full max-w-[400px] bg-zinc-950/80 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_80px_-20px_rgba(234,88,12,0.4)] flex flex-col items-center relative overflow-hidden"
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            {/* Ambient inner glow for card */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/15 blur-3xl rounded-full pointer-events-none"></div>
            
            {/* Status Chip */}
            <div className="w-full flex justify-center mb-6 z-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900/90 border border-orange-500/30 rounded-full text-xs font-semibold text-orange-400 shadow-sm">
                ★ Available for full-time / freelance work
              </span>
            </div>

            {/* Portrait */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-zinc-700/80 shadow-2xl mb-6 z-10 group">
              <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image
                src="/profile.jpeg"
                alt="Md Mustafizur Rahman"
                fill
                sizes="(max-width: 640px) 192px, 224px"
                className="object-cover object-top filter contrast-110 saturate-100 group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Info */}
            <div className="text-center space-y-2 mb-8 w-full z-10">
              <a href={portfolioData.hero.socials?.email} className="block text-sm sm:text-base font-medium text-zinc-200 hover:text-orange-400 transition-colors">
                mustafijurrahman40496@gmail.com
              </a>
              <p className="text-sm sm:text-base text-zinc-300 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Rajshahi, Bangladesh
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4 mb-8 z-10">
              <a href={portfolioData.hero.socials?.github} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-700/80 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all hover:scale-105" aria-label="GitHub Profile">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a href={portfolioData.hero.socials?.linkedin} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-700/80 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all hover:scale-105" aria-label="LinkedIn Profile">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://wa.me/8801743885646" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-700/80 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all hover:scale-105" aria-label="WhatsApp Contact">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.102.824z"/></svg>
              </a>
            </div>

            {/* Download Link */}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full py-4 flex items-center justify-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 border-t border-zinc-700/80 text-base font-semibold text-white transition-colors z-10 group rounded-b-3xl absolute bottom-0 left-0">
              Download my resume
              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-orange-400">↗</span>
            </a>
            
            {/* Added spacing at the bottom to prevent absolute download link overlapping icons */}
            <div className="h-8"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
