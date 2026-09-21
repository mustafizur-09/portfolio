"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  // Determine active item based on route & scroll
  useEffect(() => {
    if (pathname === "/about") {
      setActiveNav("About");
      return;
    }

    if (pathname === "/gallery") {
      setActiveNav("Professional Gallery");
      return;
    }

    if (pathname === "/leadership") {
      setActiveNav("Leadership");
      return;
    }

    // Scroll spy for homepage
    if (pathname === "/") {
      const handleScroll = () => {
        const sections = [
          { id: "hero", name: "Home" },
          { id: "experience", name: "Experience" },
          { id: "contact", name: "Contact" },
        ];

        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i].id);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveNav(sections[i].name);
            break;
          }
        }
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/#experience" },
    { name: "Professional Gallery", href: "/gallery" },
    { name: "Leadership", href: "/leadership" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-neutral-200/90 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo / Title */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-1 group transition-transform hover:scale-[1.02] shrink-0"
          >
            <span>Mustafizur&apos;s Profile</span>
            <span className="text-orange-600 group-hover:scale-125 transition-transform duration-300">.</span>
          </Link>

          {/* Desktop & Tablet: Modern Floating Capsule / Pill Nav Links */}
          <div className="hidden md:flex items-center">
            <div className="bg-white/95 border border-neutral-200 shadow-sm p-1.5 rounded-full flex items-center gap-0.5 lg:gap-1 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeNav === link.name;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveNav(link.name)}
                    className={`relative px-3 lg:px-4 py-2 text-xs lg:text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                      isActive
                        ? "text-zinc-950 font-bold"
                        : "text-zinc-800 hover:text-zinc-950 hover:bg-neutral-200/80"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navPill"
                        className="absolute inset-0 bg-neutral-200/80 rounded-full -z-10 shadow-inner"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    )}
                  </Link>
                );
              })}

              {/* Distinct Primary CTA Contact Button */}
              <Link
                href="/#contact"
                onClick={() => setActiveNav("Contact")}
                className="ml-1 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-medium px-4 lg:px-5 py-2 rounded-full shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all text-xs lg:text-sm flex items-center gap-1.5 shrink-0 whitespace-nowrap"
              >
                <span>Contact</span>
                <span className="text-orange-100 text-xs">⚡</span>
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-orange-500 to-amber-600 text-white font-medium px-4 py-1.5 rounded-full text-xs shadow-md shadow-orange-500/25"
            >
              Contact
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-700 hover:text-zinc-950 hover:bg-neutral-200/60 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#FAF9F6] border-b border-neutral-200 px-4 pt-2 pb-6 space-y-2 shadow-lg"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  activeNav === link.name
                    ? "bg-neutral-200/90 text-zinc-950"
                    : "text-zinc-800 hover:text-orange-600 hover:bg-neutral-200/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => {
                setActiveNav("Contact");
                setMobileMenuOpen(false);
              }}
              className="block w-full text-center bg-gradient-to-r from-orange-500 to-amber-600 text-white font-medium py-3 rounded-xl shadow-md shadow-orange-500/25 mt-3"
            >
              Contact Me ⚡
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
