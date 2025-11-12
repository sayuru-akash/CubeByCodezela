import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Box, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Box className="w-8 h-8 text-red-600" />
            <span className="text-xl">CUBE.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="hover:text-red-600 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('specs')} className="hover:text-red-600 transition-colors">
              Specifications
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-red-600 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-red-600 transition-colors">
              Pricing
            </button>
            <Button className="bg-red-600 hover:bg-red-700">Order Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-2 flex flex-col gap-4"
          >
            <button onClick={() => scrollToSection('features')} className="text-left hover:text-red-600 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('specs')} className="text-left hover:text-red-600 transition-colors">
              Specifications
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-left hover:text-red-600 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-left hover:text-red-600 transition-colors">
              Pricing
            </button>
            <Button className="bg-red-600 hover:bg-red-700 w-full">Order Now</Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
