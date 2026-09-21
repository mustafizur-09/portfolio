"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/galleryData";

import SpotlightCard from "@/components/SpotlightCard";

export default function GalleryView() {
  const [selectedFilter, setSelectedFilter] = useState<string>("leadership");

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
          A showcase of engineering products, deep learning research experiments, software testing suites, and academic milestones.
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
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item: GalleryItem) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="h-full"
            >
              <SpotlightCard className="bg-zinc-900/60 backdrop-blur-md rounded-2xl border border-zinc-800 hover:border-zinc-700 overflow-hidden shadow-xl hover:shadow-[0_0_35px_rgba(234,88,12,0.18)]">
                {/* Top Image Container */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-t-2xl bg-zinc-950">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    priority={item.id === "5" || item.id === "1"}
                  />

                  {/* Subtle dark gradient overlay for tag contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent pointer-events-none" />

                  {/* Overlaid Category Tag & Year Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-zinc-950/80 backdrop-blur-md text-orange-400 border border-orange-500/30 shadow-md">
                      {item.categoryLabel}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-950/80 backdrop-blur-md text-zinc-300 border border-zinc-700/60 shadow-md">
                      <Calendar className="w-3 h-3 text-orange-400/90" />
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Text Details Container */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors leading-snug mb-2.5 line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-zinc-300 leading-relaxed line-clamp-3 mb-4 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Section: Tech Stack Tags & Action Row */}
                  <div className="pt-3 border-t border-zinc-800/70 space-y-3">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2.5 py-0.5 bg-zinc-800/80 border border-zinc-700/60 rounded-lg text-xs font-medium text-zinc-300 hover:text-orange-300 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metrics Pill & Explore Button */}
                    <div className="flex items-center justify-between text-xs pt-1">
                      {item.stats && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 font-semibold tracking-wide">
                          ⚡ {item.stats}
                        </span>
                      )}

                      {item.link ? (
                        <Link
                          href={item.link}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-300 hover:text-orange-400 transition-colors ml-auto group/btn"
                        >
                          <span>Explore</span>
                          <span className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200">
                            ↗
                          </span>
                        </Link>
                      ) : (
                        <span className="text-xs text-zinc-500 italic ml-auto">Preview</span>
                      )}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
