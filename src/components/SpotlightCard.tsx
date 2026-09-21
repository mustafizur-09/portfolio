"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  enableTilt?: boolean;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(249, 115, 22, 0.16)",
  enableTilt = true,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse coordinates inside card for spotlight
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Normalized values for 3D tilt (-0.5 to 0.5)
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  // Springs for buttery smooth tilt response
  const springConfig = { stiffness: 240, damping: 22 };
  const springX = useSpring(tiltX, springConfig);
  const springY = useSpring(tiltY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    mouseX.set(clientX);
    mouseY.set(clientY);

    if (enableTilt) {
      const normX = clientX / rect.width - 0.5;
      const normY = clientY / rect.height - 0.5;
      tiltX.set(normX);
      tiltY.set(normY);
    }
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={enableTilt ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        className={`relative group h-full rounded-3xl transition-shadow duration-300 will-change-transform ${className}`}
      >
        {/* Dynamic Mouse Spotlight Radial Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 overflow-hidden"
          style={{
            background: useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 75%)`,
          }}
        />

        {/* Dynamic Glowing Border Highlight Nearest Cursor */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 border border-orange-500/70"
          style={{
            maskImage: useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, black 30%, transparent 80%)`,
            WebkitMaskImage: useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, black 30%, transparent 80%)`,
          }}
        />

        {/* Card Content */}
        <div className="relative z-0 h-full flex flex-col justify-between">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
