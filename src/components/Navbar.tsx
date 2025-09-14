import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#212121]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-[#6A7CFF] hover:text-[#FFA85B] transition-colors">
            <img src="/src/public/empelix-icon.svg" alt="Empelix Icon" className="h-8 w-8" />
            <span>Empelix</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="hover:text-[#6A7CFF] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-[#6A7CFF] transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-[#6A7CFF] transition-colors"
              >
                About
              </button>
              <Link to="/contact" className="hover:text-[#6A7CFF] transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F6F5ED] hover:text-[#6A7CFF] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-[#212121]/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-base font-medium hover:text-[#6A7CFF] transition-colors w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 text-base font-medium hover:text-[#6A7CFF] transition-colors w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-base font-medium hover:text-[#6A7CFF] transition-colors w-full text-left"
            >
              About
            </button>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium hover:text-[#6A7CFF] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;