"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, ExternalLink, ArrowUpRight, Terminal } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/galleryData";
import SpotlightCard from "@/components/SpotlightCard";

export default function GalleryView() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Works" },
    { id: "leadership", label: "Leadership & Community" },
    { id: "engineering", label: "Engineering & Web" },
    { id: "research", label: "AI & Research" },
    { id: "certifications", label: "Certifications" },
  ];

  const filteredItems =
    selectedFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedFilter);

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Visual Portfolio &amp; Milestones</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
          Professional Gallery
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          High-impact spotlight on full-stack web engineering, deep learning research, campus leadership, and developer community impact.
        </p>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 mx-auto rounded-full mt-6 shadow-[0_0_12px_rgba(234,88,12,0.6)]" />
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
        {filterTabs.map((tab) => {
          const isSelected = selectedFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/25 scale-105"
                  : "bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Gallery Bento Grid with 3D Tilt & Mouse Spotlight Glow */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item: GalleryItem) => {
            const isFeaturedCard = item.isFeatured && (selectedFilter === "all" || selectedFilter === "leadership");

            return (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`h-full ${isFeaturedCard ? "md:col-span-2 lg:col-span-2" : "col-span-1"}`}
              >
                <SpotlightCard className="bg-zinc-900/60 backdrop-blur-md rounded-2xl border border-zinc-800 hover:border-zinc-700 overflow-hidden shadow-xl hover:shadow-[0_0_35px_rgba(234,88,12,0.18)] flex flex-col justify-between h-full">
                  {isFeaturedCard ? (
                    /* Featured Flagship Leadership Milestone Layout */
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        {/* Featured Header Imagery */}
                        <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden rounded-t-2xl bg-zinc-950">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 66vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />

                          {/* Overlaid Badge */}
                          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500 text-zinc-950 shadow-lg border border-amber-300">
                              <Sparkles className="w-3.5 h-3.5 fill-zinc-950" />
                              Flagship Leadership Milestone
                            </span>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-zinc-950/80 backdrop-blur-md text-zinc-300 border border-zinc-700 shadow-md">
                              <Calendar className="w-3 h-3 text-orange-400" />
                              {item.date}
                            </span>
                          </div>

                          <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white drop-shadow-md leading-tight">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description & Impact Metrics */}
                        <div className="p-6 sm:p-7">
                          <p className="text-sm sm:text-base text-zinc-200 leading-relaxed mb-6 font-normal">
                            {item.description}
                          </p>

                          {/* Key Metrics Bento row */}
                          {item.metrics && (
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                              {item.metrics.map((metric, mIdx) => (
                                <div
                                  key={mIdx}
                                  className="bg-zinc-950/70 border border-amber-500/20 rounded-xl p-3.5 text-center shadow-inner"
                                >
                                  <div className="text-xl sm:text-2xl font-black text-amber-300">
                                    {metric.value}
                                  </div>
                                  <div className="text-xs text-zinc-400 font-medium mt-1">
                                    {metric.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Bottom Footer Section */}
                      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-4 border-t border-zinc-800/80 space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tIndex) => (
                            <span
                              key={tIndex}
                              className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs font-semibold text-amber-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-bold">
                            ⚡ {item.stats}
                          </span>
                          <div className="flex items-center gap-3">
                            {item.repoUrl && (
                              <a
                                href={item.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 border border-zinc-700 transition-colors"
                              >
                                <span>GitHub</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                            {item.demoUrl && (
                              <Link
                                href={item.demoUrl}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-xs font-bold text-white shadow-lg shadow-orange-500/25 transition-transform hover:scale-105"
                              >
                                <span>Explore Leadership Story</span>
                                <ArrowUpRight className="w-4 h-4" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Technical Engineering & Research Project Cards */
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        {/* Live Dashboard / System Preview Header Bar */}
                        <div className="flex items-center justify-between px-3.5 py-2 bg-zinc-950 border-b border-zinc-800 text-[11px] text-zinc-400 font-mono">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
                          </div>
                          <span className="truncate max-w-[160px] text-zinc-400 text-xs font-medium">
                            {item.dashboardTitle || "Live Project Preview"}
                          </span>
                          <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Live
                          </span>
                        </div>

                        {/* Project Image Container */}
                        <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-zinc-950">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                            priority={item.id === "1"}
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent pointer-events-none" />

                          {/* Overlaid Category Tag & Year Badge */}
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-zinc-950/85 backdrop-blur-md text-orange-400 border border-orange-500/30 shadow-md">
                              {item.categoryLabel}
                            </span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-950/85 backdrop-blur-md text-zinc-300 border border-zinc-700/60 shadow-md">
                              <Calendar className="w-3 h-3 text-orange-400/90" />
                              {item.date}
                            </span>
                          </div>
                        </div>

                        {/* Text Details Container */}
                        <div className="p-5 sm:p-6">
                          <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors leading-snug mb-2.5 line-clamp-2">
                            {item.title}
                          </h3>

                          <p className="text-sm text-zinc-300 leading-relaxed line-clamp-3 mb-4 font-normal">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Section: Tech Stack Chips & Action Buttons */}
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-zinc-800/70 space-y-3">
                        {/* Tech Chips */}
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag, tIndex) => {
                            const isCoreTag =
                              tag.includes("Next.js") ||
                              tag.includes("Python") ||
                              tag.includes("PyTorch") ||
                              tag.includes("SQA") ||
                              tag.includes("TensorFlow");

                            return (
                              <span
                                key={tIndex}
                                className={`px-2.5 py-0.5 rounded-lg text-xs font-medium transition-colors ${
                                  isCoreTag
                                    ? "bg-orange-500/15 border border-orange-500/30 text-orange-300 font-semibold"
                                    : "bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 hover:text-white"
                                }`}
                              >
                                {tag}
                              </span>
                            );
                          })}
                        </div>

                        {/* Live Demo & Repo Buttons Row */}
                        <div className="flex items-center justify-between gap-2 pt-2 border-t border-zinc-850">
                          {item.repoUrl && (
                            <a
                              href={item.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800/90 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 hover:text-white transition-colors border border-zinc-700/70"
                            >
                              <Terminal className="w-3 h-3 text-orange-400" />
                              <span>Code</span>
                            </a>
                          )}

                          {item.demoUrl ? (
                            <Link
                              href={item.demoUrl}
                              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:scale-105 ml-auto"
                            >
                              <span>Live Preview</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          ) : (
                            <span className="text-xs text-zinc-500 italic ml-auto">Preview</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </SpotlightCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
