import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadershipSection from "@/components/LeadershipSection";

export const metadata: Metadata = {
  title: "Leadership & Community | Md. Mustafizur Rahman",
  description:
    "Explore the student body governance, executive leadership milestones, and community initiatives of Md. Mustafizur Rahman across BAUET Welfare Club and BAUET Computer Society.",
};

export default function LeadershipPage() {
  return (
    <main className="relative min-h-screen bg-[#09090b] font-sans selection:bg-orange-500/30 overflow-hidden text-white">
      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0 opacity-40" />

      <div className="relative z-10">
        <Header />

        <div className="max-w-4xl mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8">
          {/* Back to Home Navigation Button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-orange-400 text-xs sm:text-sm font-semibold transition-all group shadow-sm hover:-translate-x-0.5"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Dedicated Leadership Timeline Component */}
          <LeadershipSection />
        </div>

        <Footer />
      </div>
    </main>
  );
}
