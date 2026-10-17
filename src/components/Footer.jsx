import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Heart, MessageSquare, Award, GraduationCap } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About Falah', href: '#about' },
    { name: 'Work Experience', href: '#experience' },
    { name: 'Skills & Certifications', href: '#skills' },
    { name: 'Services Offered', href: '#services' },
    { name: 'Featured Portfolio', href: '#work' },
    { name: 'Contact & WhatsApp', href: '#contact' },
  ];

  return (
    <footer className="bg-maroon-950 text-cream-100 pt-20 pb-12 border-t border-maroon-900 relative overflow-hidden">
      
      {/* Subtle luxury glow in dark maroon background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-maroon-850/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-maroon-900/80">
          
          {/* Column 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-champagne-500 shadow-md flex items-center justify-center bg-cream-50 flex-shrink-0">
                <img
                  src="/falah-logo.png"
                  alt="Falah Abdussalam Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-display font-extrabold text-cream-100 tracking-tight">
                  Falah Abdussalam
                </h3>
                <p className="text-xs font-mono text-champagne-500">
                  Frontend Developer &bull; Freelance Graphic Designer
                </p>
              </div>
            </div>

            <p className="text-sm text-cream-250/80 leading-relaxed font-normal max-w-md">
              Bridging the gap between clean code and aesthetic visual storytelling. Crafting high-converting web applications, bespoke brand identities, and AI-accelerated digital solutions.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon-900 border border-maroon-800 text-[11px] font-mono text-champagne-500">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>BCA &bull; Kodagu University</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon-900 border border-maroon-800 text-[11px] font-mono text-champagne-500">
                <Award className="w-3.5 h-3.5" />
                <span>Dubai 1M Prompters Certified</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-champagne-500 font-bold block">
              Quick Navigation
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-250/70 hover:text-cream-50 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Inquiries & Base (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-champagne-500 font-bold block">
              Direct Inquiries
            </span>
            
            <div className="space-y-3 text-xs sm:text-sm text-cream-250/80">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-champagne-500 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:falahkodagu@gmail.com"
                  className="hover:text-cream-50 transition-colors font-mono"
                >
                  falahkodagu@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/918105326568"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream-50 transition-colors font-mono font-bold text-cream-100"
                >
                  +91 8105326568 (WhatsApp)
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-champagne-500 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  DBI Skill Park, Markaz Knowledge City, Kaithappoyil, Calicut, Kerala
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/918105326568?text=Hello%20Falah,%20I'd%20like%20to%20discuss%20a%20project%20with%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Chat</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-cream-300/70">
          <div>
            &copy; {new Date().getFullYear()} Falah Abdussalam. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Frontend Developer &bull; Graphic Designer</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-maroon-900 hover:bg-maroon-800 text-cream-100 border border-maroon-800 transition-colors flex items-center gap-1.5"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-bold">TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
