import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutDetail from "@/components/AboutDetail";

export const metadata: Metadata = {
  title: "About Me | Md. Mustafizur Rahman - Software Engineer & ML Researcher",
  description:
    "Learn about Md. Mustafizur Rahman: Computer Science & Engineering graduate from BAUET, deep learning research in Computer Vision (ST-GCN), and full-stack software development experience.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#0c0c0e] font-sans selection:bg-orange-500/30 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0 opacity-40" />

      <div className="relative z-10">
        <Header />
        <AboutDetail />
        <Footer />
      </div>
    </main>
  );
}
