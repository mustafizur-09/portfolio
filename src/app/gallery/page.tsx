import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryView from "@/components/GalleryView";

export const metadata: Metadata = {
  title: "Professional Gallery | Md. Mustafizur Rahman",
  description:
    "Explore the professional gallery of Md. Mustafizur Rahman: engineering projects, ST-GCN deep learning research, software quality assurance, and technical milestones.",
};

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen bg-[#0c0c0e] font-sans selection:bg-orange-500/30 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0 opacity-40" />

      <div className="relative z-10">
        <Header />
        <GalleryView />
        <Footer />
      </div>
    </main>
  );
}
