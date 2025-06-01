
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#why-us', label: 'Features' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#tech-stack', label: 'Tech Stack' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center group">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mr-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <span className="text-white font-orbitron font-bold text-xl">M</span>
              </div>
              <span className="font-orbitron font-bold text-xl text-white hidden sm:block">
                Molnar Solutions
              </span>
            </a>

            <nav className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-white/80 hover:text-white transition-all duration-300 font-medium group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <Button
              className="md:hidden text-white"
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="space-y-1">
                <div className={`w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass-effect mx-4 rounded-xl p-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
