import Header from "./components/Header";
import Hero from "./components/Home/Hero";
import AboutSection from "./components/Home/AboutSection";
import LegacySection from "./components/Home/LegacySection";
import VisionMissionSection from "./components/Home/VisionMissionSection";
import FeaturesSection from "./components/Home/FeaturesSection";
import ContactSection from "./components/Home/ContactSection";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  return (
    <>
      {/* Interactive Navigation Header */}
      <Header />

      <main className="flex-1 pb-24">
        {/* Hero Section */}
        <Hero />

        {/* Tentang Kami Section */}
        <AboutSection />

        {/* A Legacy of Sound Section */}
        <LegacySection />

        {/* Visi & Misi Section */}
        <VisionMissionSection />

        {/* Keunggulan Kami Section */}
        <FeaturesSection />

        {/* Send a Message / Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Music Player Nav Bar */}
      <MusicPlayer />
    </>
  );
}