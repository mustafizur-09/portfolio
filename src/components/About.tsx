"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-white relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* 1. Left Column (Portrait Image Card) */}
          <motion.div
            className="lg:col-span-5 w-full flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900/50 group">
              {/* Subtle ambient glow behind image */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-orange-500/20 via-transparent to-amber-500/10 rounded-3xl blur-lg opacity-50 group-hover:opacity-80 transition duration-700 -z-10" />

              <Image
                src="/profile.png"
                alt="Md. Mustafizur Rahman"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Gentle bottom shadow gradient overlay for cinematic contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/80 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </motion.div>

          {/* 2. Right Column (Content & Bio) */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            {/* Small uppercase accent tag */}
            <div>
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-orange-500 uppercase">
                ABOUT ME
              </span>
            </div>

            {/* Large bold heading */}
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Md. Mustafizur Rahman
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 font-medium leading-normal">
              Software Engineer &amp; ML Researcher • Rajshahi, Bangladesh • Available Worldwide
            </p>

            {/* Bio Paragraphs */}
            <div className="space-y-4 pt-1">
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                I specialize in building scalable web applications, machine learning architectures, and deep learning models for computer vision — focusing on human action recognition and intelligent automation. With experience spanning software development at <span className="text-white font-medium">Ontek Horizon</span> and quality assurance at <span className="text-white font-medium">RiseUp Labs</span>, I bridge engineering discipline with research innovation.
              </p>
            </div>

            {/* Action Row: Read full story CTA + Circular Social Icon Buttons */}
            <div className="pt-2 flex items-center gap-4 flex-wrap">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-orange-600/30 hover:shadow-orange-500/50 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Read full story</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>

              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    aria-label={social.ariaLabel}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-900 border border-zinc-700 hover:border-orange-500 hover:scale-110 transition-all flex items-center justify-center text-white shadow-md hover:shadow-orange-500/20"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
