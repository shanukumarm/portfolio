import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { SkillsSection } from "./components/skills-section";
import { ExperienceSection } from "./components/experience-section";
import { ProjectsSection } from "./components/projects-section";
import { CertificationsSection } from "./components/certifications-section";
import { AchievementsSection } from "./components/achievements-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
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

        <div id="projects">
          <ProjectsSection />
        </div>

        <CertificationsSection />

        <AchievementsSection />

        <div id="contact">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
