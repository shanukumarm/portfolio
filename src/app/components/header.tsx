import { useState, useEffect } from "react";
import { Cloud, Menu, X, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/icons";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "skills", "experience", "projects", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/shanukumarm", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/shanukumarm", label: "LinkedIn" },
    { icon: Mail, href: "mailto:shanukumarm@gmail.com", label: "Email" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
            <Cloud className="h-6 w-6 text-white" />
          </div>
          <div className="hidden md:block text-left">
            <p className="font-bold text-gray-900">Shanu Kumar</p>
            <p className="text-xs text-gray-600">Platform Engineering | AWS & Kubernetes</p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`font-medium transition-colors relative py-1 ${
                activeSection === id
                  ? "text-blue-600 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-gray-600 hover:text-blue-600 transition-colors p-2 hover:bg-gray-100 rounded-lg">
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-gray-700 hover:text-blue-600">
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <nav className="md:hidden px-6 pt-4 pb-6 space-y-3 bg-white border-b border-gray-100 shadow-lg">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                activeSection === id ? "text-blue-600 bg-blue-50 font-semibold" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              {label}
            </button>
          ))}
          <div className="flex items-center gap-4 px-4 pt-3 border-t border-gray-100">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-gray-600 hover:text-blue-600 transition-colors">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
