"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900 text-zinc-400 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-zinc-800 shadow-[0_0_15px_rgba(154,52,18,0.3)]">
                <Image 
                  src="/profile.jpeg" 
                  alt="Mustafizur Rahman"
                  fill
                  sizes="48px"
                  className="object-cover object-top filter contrast-110"
                />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Mustafizur Rahman</h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-400">
              Software Engineer & Machine Learning Researcher building robust digital solutions and practical AI models — from Rajshahi, Bangladesh.
            </p>
            <div className="flex items-center gap-3">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/mustafizur-09" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-zinc-900 rounded-full border border-zinc-800 hover:border-orange-500/50 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white shadow-sm" aria-label="GitHub">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/mustafijur-rahman-6431a7253/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-zinc-900 rounded-full border border-zinc-800 hover:border-orange-500/50 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white shadow-sm" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/8801743885646" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-zinc-900 rounded-full border border-zinc-800 hover:border-orange-500/50 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white shadow-sm" aria-label="WhatsApp">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:mustafijurrahman40496@gmail.com" className="p-2.5 bg-zinc-900 rounded-full border border-zinc-800 hover:border-orange-500/50 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white shadow-sm" aria-label="Email">
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-base sm:text-lg">Navigation</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><Link href="/" className="text-zinc-400 hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-zinc-400 hover:text-orange-400 transition-colors">About</Link></li>
              <li><Link href="/#experience" className="text-zinc-400 hover:text-orange-400 transition-colors">Experience</Link></li>
              <li><Link href="/gallery" className="text-zinc-400 hover:text-orange-400 transition-colors">Professional Gallery</Link></li>
              <li><Link href="/#more" className="text-zinc-400 hover:text-orange-400 transition-colors">Projects & Research</Link></li>
              <li><Link href="/#contact" className="text-zinc-400 hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Expertise / Services */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-base sm:text-lg">Expertise</h4>
            <ul className="space-y-3 text-sm sm:text-base text-zinc-400">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>Web Development</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>Machine Learning Models</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>SQA & Test Automation</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>Action Recognition (CV)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>WordPress Solutions</li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-base sm:text-lg">Get in Touch</h4>
            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex items-start gap-3 text-zinc-400">
                <MapPin className="w-5 h-5 text-orange-400 shrink-0" />
                <span>Rajshahi, Bangladesh (UTC+6)</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Mail className="w-5 h-5 text-orange-400 shrink-0" />
                <a href="mailto:mustafijurrahman40496@gmail.com" className="text-zinc-400 hover:text-zinc-200 hover:text-orange-400 transition-colors truncate">
                  mustafijurrahman40496@gmail.com
                </a>
              </div>
            </div>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="mt-4 inline-flex items-center gap-2 bg-white text-zinc-950 font-semibold px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors text-sm sm:text-base"
            >
              <Calendar className="w-4 h-4" />
              Schedule a Call
            </motion.a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400 font-medium">
          <p>© 2026 Md. Mustafizur Rahman. All rights reserved.</p>
          <p>Designed & Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
