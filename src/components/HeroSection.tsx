import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Dark Gradient Background */}
      <div className="absolute inset-0">
        {/* Main animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] animate-gradient-shift"></div>
        
        {/* Secondary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#6A7CFF]/5 via-transparent to-[#FFA85B]/5 animate-gradient-pulse"></div>
        
        {/* Radial gradient spots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#6A7CFF]/10 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-[#FFA85B]/8 to-transparent rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#6A7CFF] rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <div
              key={`orange-${i}`}
              className="absolute w-0.5 h-0.5 bg-[#FFA85B] rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Animated lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6A7CFF]/50 to-transparent animate-slide-right"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFA85B]/50 to-transparent animate-slide-left"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-[#6A7CFF] to-[#FFA85B] bg-clip-text text-transparent">
              Empelix
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed">
            Empowering creators with design, media, and AI-driven learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={scrollToServices}
              className="px-8 py-4 bg-[#6A7CFF] text-white font-semibold rounded-lg hover:bg-[#5a6bef] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#6A7CFF]/25"
            >
              Explore Services
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent border-2 border-[#FFA85B] text-[#FFA85B] font-semibold rounded-lg hover:bg-[#FFA85B] hover:text-[#212121] transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-[#6A7CFF]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;