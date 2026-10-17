import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import SkillsCertifications from './components/SkillsCertifications';
import Services from './components/Services';
import WorkShowcase from './components/WorkShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState('Full-Scale Website Development');

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-cream-100 text-maroon-950 font-sans selection:bg-maroon-800 selection:text-cream-100 relative">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About / Bio Section */}
        <About />

        {/* 3. Experience & Work History */}
        <Experience />

        {/* 4. Skills & Certifications */}
        <SkillsCertifications />

        {/* 5. Services Offered */}
        <Services onSelectService={handleSelectService} />

        {/* 6. Featured Work Showcase */}
        <WorkShowcase onSelectService={handleSelectService} />

        {/* 7. Contact Form with WhatsApp Integration */}
        <Contact selectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Pill */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/918105326568?text=Hello%20Falah,%20I'm%20reaching%20out%20from%20your%20portfolio%20website!"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-4 py-3 rounded-2xl bg-maroon-950 hover:bg-maroon-900 text-cream-100 border border-maroon-800 shadow-maroon-dark transition-all duration-300 hover:scale-105"
          title="Direct WhatsApp Chat with Falah"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-sm">
              <MessageSquare className="w-4 h-4" />
            </div>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>

          <div className="text-left hidden sm:block">
            <span className="text-[10px] font-mono text-champagne-500 uppercase font-bold block leading-none mb-1">
              Quick Chat
            </span>
            <span className="text-xs font-bold text-cream-100 font-sans block leading-none">
              WhatsApp Falah
            </span>
          </div>
        </a>
      </aside>
    </div>
  );
}
