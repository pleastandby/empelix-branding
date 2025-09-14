import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CTABanner />
    </main>
  );
};

export default Home;