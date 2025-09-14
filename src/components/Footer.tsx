import React from 'react';
import { Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-[#6A7CFF] mb-2">Empelix</h3>
            <p className="text-gray-400 text-sm">
              © 2025 Empelix. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://instagram.com/empelix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FFA85B] transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://youtube.com/empelix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FFA85B] transition-colors"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://facebook.com/empelix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FFA85B] transition-colors"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;