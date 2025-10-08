import AboutSection from "../components/AboutSection";
import ContactPage from "../components/Contact";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/ProjectSection";
import ServiceSection from "../components/ServiceSection";
import TestimonialSection from "../components/TestimonailSection";

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <PortfolioSection />
      <TestimonialSection />
      <ContactPage />
    </>
  );
}

export default Home;
