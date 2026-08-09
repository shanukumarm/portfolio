import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { SkillsSection } from "./components/skills-section";
import { ExperienceSection } from "./components/experience-section";
import { EducationSection } from "./components/education-section";
import { ProjectsSection } from "./components/projects-section";
import { CertificationsSection } from "./components/certifications-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { ArrowUp } from "lucide-react";

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white relative">
      <Header />

      <main>
        <HeroSection />

        <div id="about">
          <AboutSection />
        </div>

        <div id="skills">
          <SkillsSection />
        </div>

        <div id="experience">
          <ExperienceSection />
        </div>

        <EducationSection />

        <div id="projects">
          <ProjectsSection />
        </div>

        <CertificationsSection />

        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      <Footer />
    </div>
  );
}
