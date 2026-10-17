import React from 'react';
import { ArrowRight, MessageSquare, Award, GraduationCap, CheckCircle } from 'lucide-react';
import DeveloperAnimation from './DeveloperAnimation';
import AiTextureBackground from './AiTextureBackground';

export default function Hero() {
  const domains = [
    'Frontend Engineering',
    'Responsive Web Design',
    'Brand Identity & Systems',
    'UI/UX Architecture',
    'Prompt Engineering',
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 sm:pt-36 pb-20 overflow-hidden bg-cream-100">
      
      {/* 3D AI Neural Topology Kinetic Background */}
      <AiTextureBackground />

      {/* Subtle luxury ambient glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-maroon-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cream-250/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Executive Headline & Narrative */}
          <div className="lg:col-span-7 space-y-8 z-10">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cream-200 border border-cream-300 text-xs font-mono font-medium text-maroon-900 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>AVAILABLE FOR FREELANCE &amp; CONTRACTS</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-maroon-950 leading-[1.12]">
                Hi, I'm <span className="text-maroon-800 font-serif italic font-bold">Falah Abdussalam</span>
                <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-maroon-900/90 font-display">
                  Frontend Developer &amp; Graphic Designer.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-cream-muted font-normal leading-relaxed pt-2 max-w-2xl">
                Crafting immersive digital experiences with{' '}
                <strong className="text-maroon-950 font-semibold">2 years of web development</strong> and{' '}
                <strong className="text-maroon-950 font-semibold">5 years of graphic design</strong> expertise.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              {/* CTA 1: Explore Work */}
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold bg-maroon-800 hover:bg-maroon-900 text-cream-100 shadow-maroon-hover hover:scale-[1.02] transition-all duration-200 group"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4 text-cream-100 transition-transform group-hover:translate-x-1" />
              </a>

              {/* CTA 2: Get in Touch */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold bg-cream-50 hover:bg-cream-200 text-maroon-900 border-2 border-maroon-800/30 hover:border-maroon-800 transition-all duration-200"
              >
                <span>Get in Touch</span>
                <MessageSquare className="w-4 h-4 text-maroon-800" />
              </a>

              {/* Quick WhatsApp Pill */}
              <a
                href="https://wa.me/918105326568?text=Hello%20Falah,%20I'm%20visiting%20your%20portfolio%20and%20would%20love%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-4 rounded-xl text-xs sm:text-sm font-mono font-bold text-maroon-950 bg-cream-200/80 hover:bg-cream-200 border border-cream-300 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>WhatsApp: +91 8105326568</span>
              </a>
            </div>

            {/* Core Domain Pills */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cream-muted block mb-2.5 font-bold">
                Specialized Disciplines
              </span>
              <div className="flex flex-wrap gap-2">
                {domains.map((dom, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-cream-50 text-maroon-950 border border-cream-300 shadow-sm"
                  >
                    {dom}
                  </span>
                ))}
              </div>
            </div>

            {/* Metric Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-cream-300">
              <div className="p-4 rounded-xl bg-cream-50 border border-cream-300 shadow-sm">
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-maroon-800">
                  2+ Yrs
                </span>
                <span className="text-xs font-mono text-cream-muted uppercase font-medium">Frontend Dev</span>
              </div>
              <div className="p-4 rounded-xl bg-cream-50 border border-cream-300 shadow-sm">
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-maroon-800">
                  5+ Yrs
                </span>
                <span className="text-xs font-mono text-cream-muted uppercase font-medium">Graphic Design</span>
              </div>
              <div className="p-4 rounded-xl bg-cream-50 border border-cream-300 shadow-sm">
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-maroon-800">
                  BCA
                </span>
                <span className="text-xs font-mono text-cream-muted uppercase font-medium">Kodagu Univ.</span>
              </div>
              <div className="p-4 rounded-xl bg-cream-50 border border-cream-300 shadow-sm">
                <span className="block font-display font-extrabold text-2xl sm:text-3xl text-maroon-800">
                  Dubai 1M
                </span>
                <span className="text-xs font-mono text-cream-muted uppercase font-medium">Certified AI</span>
              </div>
            </div>

          </div>

          {/* Right Column: Animated Software Developer Interactive Terminal & Cockpit */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <DeveloperAnimation />
          </div>

        </div>
      </div>
    </section>
  );
}
