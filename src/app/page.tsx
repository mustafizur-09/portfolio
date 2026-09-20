import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechTicker from "@/components/TechTicker";
import Experience from "@/components/Experience";
import OtherSections from "@/components/OtherSections";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0c0c0e] font-sans selection:bg-orange-500/30 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0 opacity-40"></div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <TechTicker />
        <Experience />
        <OtherSections />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
