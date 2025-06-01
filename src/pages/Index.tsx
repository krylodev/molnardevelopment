
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyUsSection from '@/components/WhyUsSection';
import ServicesSection from '@/components/ServicesSection';
import TechStackSection from '@/components/TechStackSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatsSection from '@/components/StatsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParticleSystem from '@/components/ParticleSystem';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-hidden">
      <ParticleSystem />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <WhyUsSection />
        <ServicesSection />
        <TechStackSection />
        <PortfolioSection />
        <StatsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
