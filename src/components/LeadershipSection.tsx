"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { MapPin, Calendar, Award, Sparkles, Building2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function LeadershipSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      originY: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full">
      {/* Section Header with Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-zinc-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Community Service &amp; Governance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Leadership &amp; Community
          </h2>
        </div>
        <div className="text-xs sm:text-sm text-zinc-400 font-medium flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span>BAUET Campus Organizations</span>
        </div>
      </div>

      {/* Unified Modern Card Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 hover:border-zinc-700/90 rounded-2xl p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] relative overflow-hidden"
      >
        {/* Subtle Ambient Background Gradient Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        {portfolioData.leadershipOrganizations.map((org, orgIndex) => {
          return (
            <div key={org.id}>
              {/* Organization Header */}
              <motion.div variants={itemVariants} className="flex items-start gap-4 sm:gap-5 mb-8">
                {/* Rounded Club Logo Badge */}
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center p-1.5 shrink-0 shadow-md group">
                  {org.logo ? (
                    <Image
                      src={org.logo}
                      alt={org.name}
                      width={48}
                      height={48}
                      className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <Building2 className="w-6 h-6 text-orange-400" />
                  )}
                </div>

                {/* Organization Title, Tenure, & Location */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {org.name}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-500/15 border border-orange-500/30 text-orange-400 shrink-0">
                      {org.totalTenure}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs sm:text-sm text-zinc-400 mt-1.5 font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-orange-400/80 shrink-0" />
                      {org.location}
                    </span>
                    <span className="text-zinc-600 hidden sm:inline">•</span>
                    <span className="inline-flex items-center gap-1.5 text-zinc-400">
                      <Building2 className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                      Student Body Governance
                    </span>
                  </div>

                  {org.description && (
                    <p className="text-xs sm:text-sm text-zinc-400 mt-2 line-clamp-2">
                      {org.description}
                    </p>
                  )}
                </div>
              </motion.div>

              {/* Nested LinkedIn-style Promotional Timeline Track */}
              <div className="relative pl-7 sm:pl-9 ml-2.5 sm:ml-3">
                {/* Continuous Vertical Connecting Line */}
                <motion.div
                  variants={lineVariants}
                  className="absolute left-[5px] top-2 bottom-4 w-[2px] bg-gradient-to-b from-orange-500 via-zinc-700 to-zinc-800/60 rounded-full"
                />

                {/* Nested Timeline Items */}
                <div className="space-y-6 sm:space-y-7">
                  {org.roles.map((roleItem, roleIndex) => {
                    const isFirst = roleIndex === 0;

                    return (
                      <motion.div
                        key={roleIndex}
                        variants={itemVariants}
                        className="relative group/role"
                      >
                        {/* Timeline Node Dot */}
                        <div className="absolute -left-[28px] sm:-left-[36px] top-1.5 flex items-center justify-center">
                          {isFirst ? (
                            <div className="relative flex items-center justify-center">
                              <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-orange-500 opacity-60"></span>
                              <span className="relative w-3 h-3 rounded-full bg-orange-500 ring-4 ring-orange-500/20 shadow-[0_0_12px_rgba(249,115,22,0.9)] border-2 border-[#0c0c0e]"></span>
                            </div>
                          ) : (
                            <div className="w-3 h-3 rounded-full bg-zinc-600 border-2 border-zinc-900 group-hover/role:bg-orange-400 transition-colors shadow-sm"></div>
                          )}
                        </div>

                        {/* Role Details */}
                        <div className="flex flex-col">
                          <div className="flex flex-wrap items-center gap-2">
                            <h4
                              className={`text-base sm:text-lg font-semibold tracking-tight transition-colors ${
                                isFirst
                                  ? "text-white group-hover/role:text-orange-400"
                                  : "text-zinc-200 group-hover/role:text-white"
                              }`}
                            >
                              {roleItem.role}
                            </h4>
                            {isFirst && (
                              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-orange-500/20 text-orange-300 border border-orange-500/30">
                                Latest Rank
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-zinc-400 mt-0.5 font-medium">
                            <Calendar className="w-3 h-3 text-zinc-500 shrink-0" />
                            <span>{roleItem.timeline}</span>
                          </div>

                          {roleItem.description && (
                            <p className="text-xs sm:text-sm text-zinc-300/90 mt-1.5 leading-relaxed font-normal">
                              {roleItem.description}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Clean Horizontal Border between the two organizations */}
              {orgIndex < portfolioData.leadershipOrganizations.length - 1 && (
                <div className="my-8 sm:my-10 border-t border-zinc-800/80" />
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
