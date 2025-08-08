"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Award, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', target: 'home', icon: <Home className="h-5 w-5" /> },
  { name: 'About', target: 'about', icon: <User className="h-5 w-5" /> },
  { name: 'Portfolio', target: 'portfolio', icon: <Briefcase className="h-5 w-5" /> },
  { name: 'Certs', target: 'certs', icon: <Award className="h-5 w-5" /> },
  { name: 'Contact', target: 'contact', icon: <Mail className="h-5 w-5" /> },
];

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Section highlighting
      const sections = navItems.map(item => document.getElementById(item.target));
      let currentSection = 'home';
      for (const section of sections) {
        if (section && section.offsetTop <= currentScrollY + 100) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const getLinkClassName = (target: string) => {
    const baseClasses = "cursor-pointer text-sm font-medium text-gray-300 hover:text-white transition-colors px-3 py-1 rounded-full flex items-center gap-2";
    const mobileBaseClasses = "cursor-pointer text-sm font-medium text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg flex items-center gap-3";
    const activeClasses = "bg-white/10 text-white";
    
    // This is for mobile view
    if(isMenuOpen) {
        return `${mobileBaseClasses} ${activeSection === target ? activeClasses : ''}`;
    }
    // This is for desktop view
    return `${baseClasses} ${activeSection === target ? activeClasses : ''}`;
  }

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="hidden md:flex items-center gap-2 backdrop-blur-lg bg-black/30 border border-white/20 rounded-full px-4 py-2 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.target}`}
              className={getLinkClassName(item.target)}
            >
              {item.icon}
              <span className="hidden lg:block">{item.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
            <Button
              size="icon"
              variant="outline"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="backdrop-blur-lg bg-black/30 border-white/20 rounded-full text-white"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
            <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-14 right-0 mt-2 w-48 backdrop-blur-lg bg-black/50 border border-white/20 rounded-xl p-2 shadow-lg flex flex-col gap-1"
                >
                    {navItems.map((item) => (
                        <a
                          key={item.name}
                          href={`#${item.target}`}
                          onClick={() => setIsMenuOpen(false)}
                          className={getLinkClassName(item.target)}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </a>
                    ))}
                </motion.div>
            )}
            </AnimatePresence>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
