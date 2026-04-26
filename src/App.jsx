import Navbar from "./components/layout/Navbar";
import Footer from "./components/sections/Footer";
import AboutSection from "./components/sections/AboutSection";
import CertificationsSection from "./components/sections/CertificationsSection";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import WhyChooseSection from "./components/sections/WhyChooseSection";

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="relative">
        <Navbar />
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
