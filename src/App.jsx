import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/sections/Footer";
import AboutSection from "./components/sections/AboutSection";
import CertificationsSection from "./components/sections/CertificationsSection";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import WhyChooseSection from "./components/sections/WhyChooseSection";

function App() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section[id]"));

    if (!sections.length) {
      return undefined;
    }

    if (window.location.hash) {
      setActiveSection(window.location.hash);
    }

    function updateActiveSection() {
      const marker = window.scrollY + 140;
      let currentSection = `#${sections[0].id}`;

      sections.forEach((section) => {
        if (section.offsetTop <= marker) {
          currentSection = `#${section.id}`;
        }
      });

      setActiveSection(currentSection);
    }

    function handleHashChange() {
      if (window.location.hash) {
        setActiveSection(window.location.hash);
      }
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="relative">
      <div className="relative">
        <Navbar activeSection={activeSection} />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <WhyChooseSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
