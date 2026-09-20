"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Code2, 
  Brain, 
  Users, 
  ArrowLeft,
  Mail
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function AboutDetail() {
  const highlights = [
    "Computer Vision & Deep Learning (ST-GCN, Skeleton Action Recognition)",
    "Full-Stack Architecture (Next.js, React, Tailwind, Python)",
    "Software Quality Assurance (Manual & Automated Testing, STLC)",
    "Research Publications & Technical Leadership",
  ];

  const techStackTicker = [
    "Python", "Next.js", "PyTorch", "TypeScript", "Tailwind CSS", 
    "Git", "Selenium", "WordPress", "React", "Node.js", "ST-GCN", "OpenCV"
  ];

  const featureCards = [
    {
      num: "01",
      title: "Machine Learning & CV Modeling",
      description: "Developing deep learning architectures with a core focus on Spatio-Temporal Graph Convolutional Networks (ST-GCN) for skeleton-based human action recognition and CNNs for computer vision classification.",
      tags: ["ST-GCN", "PyTorch", "TensorFlow", "OpenCV"],
    },
    {
      num: "02",
      title: "Software Quality Assurance (SQA) & Automation",
      description: "Honed professional STLC discipline at RiseUp Labs. Crafting comprehensive test plans, executing Selenium automation suites, verifying edge cases, and ensuring zero-defect production releases.",
      tags: ["Selenium", "Manual STLC", "Regression Testing", "Jira"],
    },
    {
      num: "03",
      title: "Scalable Frontend & Web Architecture",
      description: "Engineering performant, accessible digital products at Ontek Horizon. Building modular web systems using Next.js (App Router), React, TypeScript, and clean API integrations.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      num: "04",
      title: "Agile Project Coordination & Leadership",
      description: "Experienced in leading developer teams, organizing campus hackathons, coordinating technical workshops, and mentoring aspiring developers in algorithms and software practices.",
      tags: ["Agile/Scrum", "Git Workflows", "Team Coordination"],
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: portfolioData.hero.socials?.github || "https://github.com/mustafizur-09",
      ariaLabel: "GitHub Profile",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: portfolioData.hero.socials?.linkedin || "https://linkedin.com/in/mustafijur-rahman-6431a7253/",
      ariaLabel: "LinkedIn Profile",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/8801743885646",
      ariaLabel: "WhatsApp Contact",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.102.824z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: portfolioData.hero.socials?.email || "mailto:mustafijurrahman40496@gmail.com",
      ariaLabel: "Email Contact",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <div className="relative pt-24 pb-24 text-white overflow-hidden">
      {/* Sunset Orange Atmospheric Ambient Backdrop */}
      <div 
        className="absolute top-0 left-0 right-0 h-[740px] pointer-events-none -z-10"
        style={{
          background: "radial-gradient(125% 125% at 50% -10%, #d95b16 0%, #a83805 32%, #3d1405 65%, #0c0c0e 98%)",
        }}
      />
      {/* Film Grain Texture Overlay */}
      <div className="absolute top-0 left-0 right-0 h-[740px] bg-noise opacity-30 mix-blend-overlay pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Navigation Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-zinc-400 font-medium"
        >
          <Link href="/" className="hover:text-orange-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <span className="text-zinc-600">/</span>
          <span className="text-orange-400 font-semibold">About</span>
        </motion.div>

        {/* 1. HERO SECTION (Warm Sunset Ambient Agency Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Badge at top */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs sm:text-sm font-semibold tracking-wide text-orange-400">
                <Sparkles className="w-4 h-4 text-orange-400" />
                Software Engineer • ML &amp; Computer Vision Researcher
              </span>
            </div>

            {/* Big Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Engineering Intelligence. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-white">
                Building Scalable Web &amp; AI Systems.
              </span>
            </h1>

            {/* Short Intro Bio */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              I am a Computer Science &amp; Engineering graduate from <span className="text-white font-medium">BAUET</span>, Software Engineer, and Machine Learning Researcher. I bridge full-stack engineering discipline with research innovation — specializing in scalable web application development at <span className="text-white font-medium">Ontek Horizon</span>, rigorous SQA automation at <span className="text-white font-medium">RiseUp Labs</span>, and deep learning architectures for Spatio-Temporal Graph Convolutional (ST-GCN) human action recognition.
            </p>

            {/* Bullet Points with Checkmarks */}
            <div className="space-y-3 pt-1">
              {highlights.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-zinc-200 font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex items-center gap-4 flex-wrap">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <Link
                href="/#contact"
                className="px-6 py-3.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-white font-semibold text-sm sm:text-base border border-zinc-700 hover:border-orange-500/60 transition-all hover:scale-105 active:scale-95"
              >
                Get In Touch ⚡
              </Link>

              <Link
                href="/#more"
                className="px-6 py-3.5 rounded-full bg-transparent hover:bg-zinc-900/50 text-zinc-300 hover:text-white font-medium text-sm sm:text-base border border-zinc-800 hover:border-zinc-700 transition-all"
              >
                Explore Projects →
              </Link>
            </div>

            {/* Social Icons Strip */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mr-1">Connect:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={social.ariaLabel}
                  className="w-10 h-10 rounded-full bg-zinc-900/90 border border-zinc-800 hover:border-orange-500 hover:scale-110 transition-all flex items-center justify-center text-zinc-300 hover:text-white shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </motion.div>

          {/* Right Content: Portrait with Overlapping Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full flex justify-center relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Portrait Image Card */}
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-zinc-700/80 shadow-2xl bg-zinc-900/80 group">
                {/* Backlight Ambient Glow */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-orange-500/30 via-transparent to-amber-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-700 -z-10" />

                <Image
                  src="/about.jpeg"
                  alt="Md. Mustafizur Rahman"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top filter contrast-[1.04] brightness-95 group-hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Bottom Cinematic Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/85 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Floating Glassmorphism Badge 1: Top Right */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-6 -right-4 sm:-right-6 bg-zinc-900/90 backdrop-blur-xl border border-orange-500/30 p-4 rounded-2xl shadow-2xl max-w-[210px] space-y-1 group hover:border-orange-400 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-orange-500/10 text-orange-400">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white">Research-Driven</div>
                </div>
                <p className="text-[11px] text-zinc-300 leading-snug font-normal">
                  Evaluated on real-world accuracy &amp; rigorous F1-score benchmarks.
                </p>
              </motion.div>

              {/* Floating Glassmorphism Badge 2: Bottom Left */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -left-4 sm:-left-6 bg-zinc-900/90 backdrop-blur-xl border border-zinc-700/80 p-4 rounded-2xl shadow-2xl max-w-[220px] space-y-1 group hover:border-zinc-500 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-white">Production-Grade</div>
                </div>
                <p className="text-[11px] text-zinc-300 leading-snug font-normal">
                  Writing clean, maintainable code backed by robust test automation.
                </p>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* 2. METRICS & PHILOSOPHY RIBBON */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900/90 backdrop-blur-md rounded-3xl border border-orange-500/25 p-8 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pb-8 border-b border-zinc-800/90">
            {/* Stat 1 */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                2+
              </div>
              <div className="text-base sm:text-lg font-bold text-white">
                Research Publications
              </div>
              <p className="text-xs sm:text-sm text-zinc-400">
                Medical Action Recognition (ST-GCN) &amp; Plant Disease CNN
              </p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                4+
              </div>
              <div className="text-base sm:text-lg font-bold text-white">
                Production Projects
              </div>
              <p className="text-xs sm:text-sm text-zinc-400">
                Scalable web systems, microservices &amp; test frameworks
              </p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                Honors
              </div>
              <div className="text-base sm:text-lg font-bold text-white">
                BAUET CSE Graduate
              </div>
              <p className="text-xs sm:text-sm text-zinc-400">
                B.Sc. in Computer Science &amp; Engineering
              </p>
            </div>
          </div>

          {/* Tech Logo / Ticker Ribbon */}
          <div className="pt-6">
            <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap text-sm sm:text-base font-semibold text-zinc-300">
              {techStackTicker.map((tech, idx) => (
                <div key={tech} className="flex items-center gap-3">
                  <span className="hover:text-orange-400 transition-colors">{tech}</span>
                  {idx < techStackTicker.length - 1 && (
                    <span className="text-orange-500 font-bold">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3. SKILLS THAT SHAPE MEANINGFUL IMPACT (Numbered List + Visual) */}
        <div className="space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-orange-400">
              Core Competencies &amp; Experience
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Skills That Shape Meaningful Impact
            </h2>
            <p className="text-base sm:text-lg text-zinc-400">
              Combining algorithmic research depth with production software delivery and test automation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Column: Numbered Cards (01 to 04) */}
            <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
              {featureCards.map((card, idx) => (
                <motion.div
                  key={card.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-2xl sm:rounded-3xl border border-zinc-800/80 hover:border-orange-500/40 transition-all group shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    {/* Orange Accent Number Badge */}
                    <div className="px-3 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-sm sm:text-base shrink-0 group-hover:bg-orange-500/20 transition-colors">
                      {card.num}
                    </div>

                    <div className="space-y-2 flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                        {card.description}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Clean Leadership / Teamwork Visual Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col"
            >
              <div className="relative w-full h-full min-h-[420px] sm:min-h-[460px] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group flex flex-col justify-end p-6 sm:p-8">
                
                {/* Leadership Visual Image */}
                <Image
                  src="/leader.jpg"
                  alt="Md. Mustafizur Rahman - Leadership & Teamwork"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Vignette Overlay for Crisp Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-90 pointer-events-none" />

                {/* Floating Content Card at Bottom */}
                <div className="relative z-10 space-y-3 bg-zinc-900/80 backdrop-blur-md p-6 rounded-2xl border border-zinc-700/60 shadow-xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-semibold text-orange-400">
                    <Users className="w-3.5 h-3.5" />
                    Leadership &amp; Collaboration
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    Dedicated to High-Impact Code &amp; AI Research
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    Leading engineering teams, organizing tech initiatives, and collaborating across global cross-functional environments to deliver scalable, zero-defect software.
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </div>

        {/* 4. BOTTOM VIBRANT CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-10 sm:p-14 text-center overflow-hidden shadow-2xl border border-orange-500/40"
          style={{
            background: "radial-gradient(125% 125% at 50% 10%, #ea580c 0%, #c2410c 35%, #7c2d12 70%, #18181b 100%)",
          }}
        >
          {/* Subtle Film Grain */}
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-amber-200 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Collaborate &amp; Hire
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Driven by Research. <br />
              Built for Real-World Impact.
            </h2>

            <p className="text-base sm:text-xl text-orange-100/90 font-medium leading-relaxed max-w-2xl mx-auto">
              Open for full-time software engineering roles and global collaborative research. Let&apos;s build scalable architectures and intelligent systems together.
            </p>

            <div className="pt-3 flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/#contact"
                className="px-8 py-4 rounded-full bg-white text-zinc-950 hover:bg-zinc-100 font-bold text-base shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Get In Touch / Hire Me</span>
                <ArrowRight className="w-4 h-4 text-orange-600" />
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-zinc-950/70 hover:bg-zinc-950 text-white font-semibold text-base border border-orange-300/40 hover:border-white transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-amber-300" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
