import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTABanner = () => {
  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#6A7CFF]/10 to-[#FFA85B]/10 rounded-2xl p-12 border border-gray-700 hover:border-[#6A7CFF]/50 transition-all duration-300">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let's build something{' '}
            <span className="bg-gradient-to-r from-[#6A7CFF] to-[#FFA85B] bg-clip-text text-transparent">
              extraordinary
            </span>{' '}
            together.
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Ready to transform your vision into reality? Get in touch with our team and let's create something amazing.
          </p>
          
          <button
            onClick={handleContactClick}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#6A7CFF] to-[#FFA85B] text-white font-semibold rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
          >
            Contact Us
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;