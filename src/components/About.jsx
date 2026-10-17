import React from 'react';
import { GraduationCap, Code2, Palette, Cpu, HeartHandshake, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Code2,
      num: '01',
      title: 'Engineering Rigor',
      desc: 'Writing clean, semantic, and high-performance frontend code with modern JavaScript, React, and responsive architectures.',
    },
    {
      icon: Palette,
      num: '02',
      title: 'Aesthetic Storytelling',
      desc: '5 years of professional graphic and brand design, developing bespoke visual identities, typography systems, and promotional layouts.',
    },
    {
      icon: Cpu,
      num: '03',
      title: 'Prompt Engineering & AI',
      desc: 'Certified in the prestigious Dubai 1 Million Prompters program. Accelerating prototyping, asset prep, and smart workflows.',
    },
    {
      icon: HeartHandshake,
      num: '04',
      title: 'Human-Centered Empathy',
      desc: 'Harmonizing engineering logic with emotional visual aesthetics so users enjoy frictionless, high-converting digital journeys.',
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-cream-150 border-t border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-cream-300 text-xs font-mono font-bold text-maroon-800 uppercase tracking-widest mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-maroon-950 tracking-tight leading-tight">
            Bridging Clean Code &amp; Visual Storytelling
          </h2>
          <p className="text-base sm:text-lg text-cream-muted mt-3 font-normal leading-relaxed">
            Where technical precision meets creative design to build web applications that look breathtaking and perform flawlessly.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-zinc-800 leading-relaxed font-normal">
              <p>
                I am a professional, driven developer and designer with a{' '}
                <strong className="text-maroon-900 font-bold">Bachelor of Computer Applications (BCA)</strong> degree
                from <strong className="text-maroon-900 font-bold">Kodagu University</strong>. My core focus lies in{' '}
                <span className="text-maroon-800 font-semibold underline decoration-champagne-500 underline-offset-4">
                  bridging the gap between clean code and aesthetic visual storytelling
                </span>.
              </p>
              <p className="text-cream-muted text-base">
                Having <strong className="text-maroon-950">5 years of professional graphic design</strong> alongside{' '}
                <strong className="text-maroon-950">2 years of frontend engineering</strong> gives me a unique advantage: I don't just write functional React and CSS—I understand typographic balance, color harmony, visual weight, and user psychology.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.num}
                    className="p-5 rounded-2xl bg-cream-50 border border-cream-300 hover:border-maroon-800/40 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-maroon-100 text-maroon-800">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-maroon-700">
                        {pillar.num}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-maroon-950 mb-1.5">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-cream-muted leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Kodagu University Degree & Credentials Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Degree Card */}
            <div className="rounded-2xl bg-cream-50 border-2 border-maroon-800/20 p-6 sm:p-7 shadow-cream-card">
              <div className="flex items-center gap-3.5 pb-4 mb-5 border-b border-cream-300">
                <div className="p-3 rounded-xl bg-maroon-800 text-cream-100 shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-maroon-700 uppercase font-bold tracking-wider block">
                    Higher Education
                  </span>
                  <h4 className="text-lg font-bold text-maroon-950 leading-tight">
                    Bachelor of Computer Applications (BCA)
                  </h4>
                  <p className="text-xs text-cream-muted font-mono font-medium">Kodagu University</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal mb-5">
                Comprehensive degree curriculum encompassing software engineering, object-oriented programming, data structures, web application development, and interactive digital systems.
              </p>

              <div className="p-4 rounded-xl bg-cream-100 border border-cream-300 space-y-2 text-xs font-mono text-maroon-950">
                <div className="flex items-center justify-between">
                  <span className="text-cream-muted">Degree:</span>
                  <span className="font-bold">BCA (Computer Applications)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cream-muted">Institution:</span>
                  <span className="font-bold">Kodagu University</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cream-muted">Focus:</span>
                  <span className="font-bold">Software Architecture &amp; Web</span>
                </div>
              </div>
            </div>

            {/* Quick Contact CTA Banner */}
            <div className="p-6 rounded-2xl bg-maroon-900 text-cream-100 flex items-center justify-between shadow-maroon-dark">
              <div>
                <span className="text-xs font-mono uppercase text-champagne-500 font-bold block mb-1">
                  Have an ambitious project?
                </span>
                <h4 className="text-lg font-bold text-cream-100">Let's build together</h4>
              </div>
              <a
                href="#contact"
                className="w-10 h-10 rounded-xl bg-cream-100 text-maroon-900 flex items-center justify-center hover:bg-cream-200 transition-colors shadow-sm"
              >
                <ArrowUpRight className="w-5 h-5 text-maroon-950" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
