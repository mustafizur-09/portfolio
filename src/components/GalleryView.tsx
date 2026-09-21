"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, ExternalLink, ArrowUpRight, Terminal, Play, Video, X, ZoomIn, Award } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/galleryData";
import SpotlightCard from "@/components/SpotlightCard";

export default function GalleryView() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);
  const [selectedCert, setSelectedCert] = useState<GalleryItem | null>(null);
  const [mediaEmbedType, setMediaEmbedType] = useState<"video" | "embed">("video");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalItem(null);
        setSelectedCert(null);
      }
    };
    if (activeModalItem || selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalItem, selectedCert]);

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
      : galleryItems.filter((item) => {
          if (selectedFilter === "leadership") {
            return (
              item.category === "leadership" ||
              item.category === "Leadership & Community" ||
              item.category.toLowerCase().includes("leadership")
            );
          }
          if (selectedFilter === "engineering") {
            return (
              item.category === "engineering" ||
              item.category === "Engineering & Web" ||
              item.category.toLowerCase().includes("engineering")
            );
          }
          if (selectedFilter === "research") {
            return (
              item.category === "research" ||
              item.category === "AI & Research" ||
              item.category.toLowerCase().includes("research")
            );
          }
          if (selectedFilter === "certifications") {
            return (
              item.category === "certifications" ||
              item.category.toLowerCase().includes("cert")
            );
          }
          return item.category === selectedFilter;
        });

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
                <SpotlightCard className={item.category === "certifications" || item.mediaType === "leadership-moment" ? "group rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-orange-500/60 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full shadow-xl hover:shadow-[0_0_35px_rgba(234,88,12,0.18)]" : "bg-zinc-900/60 backdrop-blur-md rounded-2xl border border-zinc-800 hover:border-zinc-700 overflow-hidden shadow-xl hover:shadow-[0_0_35px_rgba(234,88,12,0.18)] flex flex-col justify-between h-full"}>
                  {isFeaturedCard ? (
                    /* Featured Flagship Leadership Milestone Layout */
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        {/* Featured Header Imagery */}
                        <div className="relative w-full h-56 sm:h-64 lg:h-72 overflow-hidden rounded-t-2xl bg-zinc-950">
                          {item.image && (
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 66vw"
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                              priority
                            />
                          )}
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
                  ) : item.mediaType === "linkedin" ? (
                    /* LinkedIn Video Spotlight Card with Inline Media Embed */
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        {/* Live Dashboard / System Preview Header Bar */}
                        <div className="flex items-center justify-between px-3.5 py-2 bg-zinc-950 border-b border-zinc-800 text-[11px] text-zinc-400 font-mono">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
                          </div>
                          <span className="truncate max-w-[170px] text-zinc-400 text-xs font-medium">
                            LinkedIn Video Highlight
                          </span>
                          
                          {/* Toggle between Native MP4 and LinkedIn Embed */}
                          <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-lg p-0.5">
                            <button
                              type="button"
                              onClick={() => setMediaEmbedType("video")}
                              className={`px-2 py-0.5 rounded-md text-[10px] font-semibold transition-all cursor-pointer ${
                                mediaEmbedType === "video"
                                  ? "bg-orange-500 text-white shadow-sm"
                                  : "text-zinc-400 hover:text-white"
                              }`}
                            >
                              Video
                            </button>
                            <button
                              type="button"
                              onClick={() => setMediaEmbedType("embed")}
                              className={`px-2 py-0.5 rounded-md text-[10px] font-semibold transition-all cursor-pointer ${
                                mediaEmbedType === "embed"
                                  ? "bg-orange-500 text-white shadow-sm"
                                  : "text-zinc-400 hover:text-white"
                              }`}
                            >
                              Embed
                            </button>
                          </div>
                        </div>

                        {/* Inline Media Embed Container */}
                        <div className="p-3.5 pb-2">
                          {mediaEmbedType === "video" && item.videoSrc ? (
                            <video
                              controls
                              playsInline
                              preload="metadata"
                              poster={item.poster || "/images/leadership-thumbnail.png"}
                              className="w-full aspect-video rounded-xl object-cover border border-zinc-800 bg-black shadow-lg"
                            >
                              <source src={item.videoSrc} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <iframe
                              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7499399021187301377"
                              height="380"
                              width="100%"
                              frameBorder="0"
                              allowFullScreen
                              title="Embedded post"
                              className="w-full rounded-xl border border-zinc-800 bg-zinc-950"
                            />
                          )}
                        </div>

                        {/* Text Details Container */}
                        <div className="p-5 sm:p-6 pt-2">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-500/15 text-orange-300 border border-orange-500/30">
                              <Sparkles className="w-3 h-3 text-orange-400" />
                              Keynote &amp; Mentorship
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-zinc-400">
                              <Calendar className="w-3 h-3 text-orange-400/80" />
                              {item.date || "2024 - 2026"}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold text-white leading-snug mb-3">
                            {item.title}
                          </h3>

                          <div className="text-sm text-zinc-300 leading-relaxed whitespace-pre-line font-normal bg-zinc-950/40 p-3.5 rounded-xl border border-zinc-850">
                            {item.description}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Section: Tech Stack Chips & Action Buttons */}
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-zinc-800/70 space-y-3 mt-auto">
                        {/* Tech Chips */}
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag, tIndex) => (
                            <span
                              key={tIndex}
                              className="px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-orange-500/15 border border-orange-500/30 text-orange-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons Row */}
                        <div className="flex items-center justify-between gap-2 pt-2 border-t border-zinc-850">
                          <span className="text-xs text-zinc-400 italic">
                            Live Post Highlight
                          </span>

                          <a
                            href={item.postUrl || "https://lnkd.in/p/er4Nnz5e"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:scale-105 ml-auto"
                          >
                            <span>Watch on LinkedIn</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : item.mediaType === "linkedin-embed" ? (
                    /* LinkedIn Interactive Embed Card (Engineering & ML) */
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        {/* Live Dashboard / System Preview Header Bar */}
                        <div className="flex items-center justify-between px-3.5 py-2 bg-zinc-950 border-b border-zinc-800 text-[11px] text-zinc-400 font-mono">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
                          </div>
                          <span className="truncate max-w-[170px] text-zinc-400 text-xs font-medium">
                            Machine Learning Post
                          </span>
                          
                          {/* Toggle between Native MP4 and LinkedIn Embed */}
                          <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-lg p-0.5">
                            <button
                              type="button"
                              onClick={() => setMediaEmbedType("video")}
                              className={`px-2 py-0.5 rounded-md text-[10px] font-semibold transition-all cursor-pointer ${
                                mediaEmbedType === "video"
                                  ? "bg-orange-500 text-white shadow-sm"
                                  : "text-zinc-400 hover:text-white"
                              }`}
                            >
                              Video
                            </button>
                            <button
                              type="button"
                              onClick={() => setMediaEmbedType("embed")}
                              className={`px-2 py-0.5 rounded-md text-[10px] font-semibold transition-all cursor-pointer ${
                                mediaEmbedType === "embed"
                                  ? "bg-orange-500 text-white shadow-sm"
                                  : "text-zinc-400 hover:text-white"
                              }`}
                            >
                              Embed
                            </button>
                          </div>
                        </div>

                        {/* Inline Media Embed Container */}
                        <div className="p-3.5 pb-2">
                          {mediaEmbedType === "video" && item.videoSrc ? (
                            <video
                              controls
                              playsInline
                              preload="metadata"
                              poster={item.poster || "/images/clustering-thumbnail.png"}
                              className="w-full aspect-video rounded-xl object-cover border border-zinc-800 bg-black shadow-lg"
                            >
                              <source src={item.videoSrc} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <iframe
                              src={item.embedUrl || "https://www.linkedin.com/embed/feed/update/urn:li:activity:7370490742118662144"}
                              height="380"
                              width="100%"
                              frameBorder="0"
                              allowFullScreen={true}
                              title="Machine Learning & Clustering Post"
                              className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60"
                            />
                          )}
                        </div>

                        {/* Text Details Container */}
                        <div className="p-5 sm:p-6 pt-2">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-500/15 text-orange-300 border border-orange-500/30">
                              <Sparkles className="w-3 h-3 text-orange-400" />
                              {item.categoryLabel || "# Engineering & AI"}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-zinc-400">
                              <Calendar className="w-3 h-3 text-orange-400/80" />
                              {item.date || "2025 - 2026"}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold text-white hover:text-orange-400 transition-colors leading-snug mb-3">
                            {item.title}
                          </h3>

                          <div className="text-sm text-zinc-300 leading-relaxed font-normal bg-zinc-950/40 p-3.5 rounded-xl border border-zinc-850">
                            {item.description}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Section: Tech Stack Chips & Action Buttons */}
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-zinc-800/70 space-y-3 mt-auto">
                        {/* Tech Chips */}
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag, tIndex) => (
                            <span
                              key={tIndex}
                              className="px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-orange-500/15 border border-orange-500/30 text-orange-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons Row */}
                        <div className="flex items-center justify-between gap-2 pt-2 border-t border-zinc-850">
                          <span className="text-xs text-zinc-400 italic">
                            Unsupervised Learning
                          </span>

                          <a
                            href={item.postUrl || "https://www.linkedin.com/posts/mustafijur-rahman-6431a7253_artificialintelligence-machinelearning-clustering-activity-7370490742118662144-8pKq"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:scale-105 ml-auto"
                          >
                            <span>View on LinkedIn</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : item.mediaType === "leadership-moment" ? (
                    /* Leadership Moment Visual Card */
                    <div
                      onClick={() => setSelectedCert(item)}
                      className="group relative rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-orange-500/60 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[0_0_35px_rgba(249,115,22,0.18)] cursor-pointer flex flex-col justify-between h-full"
                    >
                      {/* Photo Container with subtle gradient & floating tags */}
                      <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-zinc-950">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                        )}

                        {/* Dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/35 to-transparent pointer-events-none" />

                        {/* Top Floating Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-zinc-950/85 backdrop-blur-md text-zinc-300 border border-zinc-700/60 shadow-md">
                            <Calendar className="w-3 h-3 text-orange-400" />
                            {item.date}
                          </span>

                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-500 text-white text-[11px] font-bold shadow-lg shadow-orange-500/30">
                            <ZoomIn className="w-3 h-3" />
                            <span>Preview</span>
                          </div>
                        </div>

                        {/* Bottom Caption Gradient Bar */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-transparent pt-14 pb-4 px-4 sm:px-5 flex flex-col justify-end pointer-events-none z-10">
                          <span className="text-[11px] sm:text-xs text-orange-400 font-semibold uppercase tracking-wider drop-shadow-sm truncate">
                            {item.roleTag || item.categoryLabel}
                          </span>
                          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-orange-200 transition-colors mt-0.5 line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="text-xs text-zinc-400 mt-1 line-clamp-2 font-normal">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Tags row */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="px-4 sm:px-5 py-3 border-t border-zinc-800/80 bg-zinc-900/90 flex flex-wrap gap-1.5 mt-auto">
                          {item.tags.map((tag, tIndex) => (
                            <span
                              key={tIndex}
                              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 hover:text-white"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.category === "certifications" ? (
                    /* Real Certificate Card Layout */
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        {/* Image Container (Top) */}
                        <div
                          onClick={() => setSelectedCert(item)}
                          className="relative w-full aspect-[4/3] bg-zinc-950/80 overflow-hidden border-b border-zinc-800/80 cursor-pointer"
                        >
                          {item.image && (
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                            />
                          )}

                          {/* Subtle hover overlay with magnifying glass icon and 'Click to View Full Preview' */}
                          <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 backdrop-blur-[2px]">
                            <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/40 transform group-hover:scale-110 transition-transform">
                              <ZoomIn className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-semibold text-white tracking-wide bg-zinc-950/85 px-3 py-1 rounded-full border border-orange-500/40 shadow-md">
                              Click to View Full Preview
                            </span>
                          </div>
                        </div>

                        {/* Description & Details Section (Below the Image) */}
                        <div className="p-5 sm:p-6">
                          {/* Meta row: Issuer name & Issue date */}
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs text-orange-400 font-semibold uppercase tracking-wider truncate max-w-[220px]">
                              {item.issuer}
                            </span>
                            <span className="text-xs text-zinc-400 font-medium whitespace-nowrap">
                              {item.issueDate || item.date}
                            </span>
                          </div>

                          {/* Title: Bold white headline */}
                          <h3 className="text-base sm:text-lg font-bold text-zinc-100 group-hover:text-orange-300 transition-colors mt-1 leading-snug">
                            {item.title}
                          </h3>

                          {/* Description Box: A clean readable container beneath the title */}
                          <p className="mt-2 text-sm text-zinc-400 leading-relaxed font-normal">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Tags: Tech/Leadership pills */}
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 mt-auto">
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/60">
                          {item.tags.map((tag, tIndex) => (
                            <span
                              key={tIndex}
                              className="px-2.5 py-0.5 rounded-lg text-xs font-medium bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 hover:text-white"
                            >
                              {tag}
                            </span>
                          ))}
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
                          {item.image && (
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                              priority={item.id === "1"}
                            />
                          )}

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

      {/* Interactive Modal for Media Highlights */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalItem(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-3xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/70">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-sm sm:text-base font-bold text-white truncate max-w-[240px] sm:max-w-md">
                    {activeModalItem.title}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body with embedded iframe */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-zinc-800 flex items-center justify-center">
                  {activeModalItem.embedUrl ? (
                    <iframe
                      src={activeModalItem.embedUrl}
                      height="100%"
                      width="100%"
                      frameBorder="0"
                      allowFullScreen
                      title={activeModalItem.title}
                      className="w-full h-full"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center space-y-3">
                      <Video className="w-12 h-12 text-orange-400" />
                      <p className="text-zinc-300 text-sm">
                        View this post directly on LinkedIn for the full interactive player.
                      </p>
                    </div>
                  )}
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  {activeModalItem.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {activeModalItem.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-zinc-800/80 border border-zinc-700/60 rounded-lg text-xs font-medium text-zinc-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-800 bg-zinc-950/70">
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={activeModalItem.postUrl || "https://lnkd.in/p/er4Nnz5e"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-xs font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:scale-105"
                >
                  <span>Watch on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Fullscreen Framer Motion Lightbox Dialog for Certificate Previews */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Lightbox Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-10 w-full max-w-5xl bg-zinc-950 border border-zinc-800/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Lightbox Header Bar */}
              <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-md">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-white truncate">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider truncate">
                      {(selectedCert.roleTag || selectedCert.issuer || selectedCert.categoryLabel)} • {(selectedCert.issueDate || selectedCert.date)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {selectedCert.image && (
                    <a
                      href={selectedCert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                      title="Open original file in new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="hidden sm:inline">Original File</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close lightbox"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Lightbox Image Preview */}
              <div className="relative w-full aspect-[4/3] max-h-[68vh] bg-zinc-950 flex items-center justify-center overflow-hidden p-2 sm:p-4">
                {selectedCert.image && (
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                )}
              </div>

              {/* Lightbox Footer Bar */}
              <div className="px-5 sm:px-6 py-3.5 border-t border-zinc-800 bg-zinc-900/80 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal max-w-3xl">
                  {selectedCert.description}
                </p>
                <div className="flex flex-wrap gap-1.5 shrink-0">
                  {selectedCert.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-zinc-800 border border-zinc-700 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
