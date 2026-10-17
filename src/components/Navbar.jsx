import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills & Certs', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-100/95 backdrop-blur-md border-b border-cream-300 py-3.5 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-maroon-800/80 group-hover:border-maroon-800 shadow-sm transition-all duration-300 flex items-center justify-center bg-cream-50 flex-shrink-0">
            <img
              src="/falah-logo.png"
              alt="Falah Abdussalam Logo"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-maroon-950 tracking-tight text-base sm:text-lg">
                Falah Abdussalam
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-maroon-100 text-maroon-800 border border-maroon-800/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Available
              </span>
            </div>
            <p className="text-[11px] text-cream-muted font-normal tracking-wide">
              Frontend Developer &bull; Graphic Designer
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-maroon-950/80 hover:text-maroon-800 hover:bg-cream-200/60 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/918105326568?text=Hello%20Falah,%20I'm%20interested%20in%20discussing%20a%20project%20with%20you!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-maroon-800 bg-cream-200/80 hover:bg-cream-200 border border-cream-300 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-700" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-maroon-800 hover:bg-maroon-900 text-cream-100 shadow-sm transition-all hover:scale-[1.02]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 text-cream-100" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-cream-200 text-maroon-900 border border-cream-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-100 border-b border-cream-300 px-6 py-6 space-y-4 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-maroon-950 hover:text-maroon-800 hover:bg-cream-200 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-cream-300 flex flex-col gap-2.5">
            <a
              href="https://wa.me/918105326568?text=Hello%20Falah,%20I'm%20interested%20in%20discussing%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono uppercase font-bold text-maroon-900 bg-cream-200 border border-cream-300"
            >
              <MessageSquare className="w-4 h-4 text-emerald-700" />
              <span>WhatsApp: +91 8105326568</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono uppercase font-bold bg-maroon-800 text-cream-100"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
