
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-6 shadow-sm border-b border-black/5' : 'bg-transparent py-10'}`}>
      <div className="max-w-[1800px] mx-auto px-8 flex justify-between items-center">
        {/* Left Side Brand */}
        <a href="/" className={`text-2xl font-bold tracking-[0.4em] hover:opacity-60 transition-opacity uppercase font-serif-jp ${!isScrolled && !isMenuOpen ? 'text-white' : 'text-black'}`}>
          Kenshi Yonezu
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.path}
              className={`text-[9px] tracking-[0.5em] font-bold hover:opacity-50 transition-opacity uppercase ${!isScrolled && !isMenuOpen ? 'text-white' : 'text-black'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 z-50 transition-colors ${!isScrolled && !isMenuOpen ? 'text-white' : 'text-black'}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} strokeWidth={1} className="text-black" /> : <Menu size={32} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-700 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col space-y-10 text-center">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.path}
              className={`text-4xl tracking-[0.4em] font-serif-jp font-thin transition-all delay-[${i * 100}ms] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Menu Footer */}
        <div className="absolute bottom-16 text-center opacity-30">
          <p className="text-[10px] tracking-widest font-light">© REISSUE RECORDS INC.</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
