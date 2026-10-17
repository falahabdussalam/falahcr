import React, { useState } from 'react';
import { Briefcase, Calendar, Building, MapPin, Laptop, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const [filter, setFilter] = useState('all');

  const experiences = [
    {
      id: 'ziqx',
      company: 'Ziqx Creative Clique LLP',
      role: 'Frontend Developer',
      type: 'On-Site',
      location: 'DBI Skill Park, Markaz Knowledge City, Kaithappoyil, Calicut',
      period: '2026 Sep 07 – Present',
      isCurrent: true,
      category: 'frontend',
      highlights: [
        'Architecting and implementing modular, high-performance web user interfaces using modern frontend frameworks and responsive CSS.',
        'Collaborating cross-functionally with design, product, and engineering teams within DBI Skill Park at Markaz Knowledge City.',
        'Translating complex UX wireframes and creative brand visions into pixel-perfect, accessible, and responsive production web applications.',
        'Ensuring lightning-fast load times, SEO optimization, and smooth micro-animations for client and internal digital platforms.'
      ],
      skills: ['Frontend Development', 'React', 'Tailwind CSS', 'JavaScript (ES6+)', 'UI Architecture', 'Responsive Design', 'Git']
    },
    {
      id: 'bekachi-web',
      company: 'Bekachi Group',
      role: 'Web Developer',
      type: 'Remote',
      location: 'Remote Work',
      period: 'Feb 2025 – Present',
      isCurrent: true,
      category: 'frontend',
      highlights: [
        'Developing and maintaining versatile web applications, corporate websites, and interactive client landing pages.',
        'Implementing clean code practices, cross-browser compatibility, and mobile-first responsive interfaces.',
        'Integrating frontend components with backend APIs and client communication workflows.',
        'Delivering robust website builds on time, driving measurable user engagement and seamless user experiences.'
      ],
      skills: ['Web Development', 'HTML5 / CSS3', 'JavaScript', 'Responsive Frameworks', 'Client Solutions', 'Performance']
    },
    {
      id: 'bekachi-design',
      company: 'Bekachi Group',
      role: 'Graphic Designer',
      type: 'Contract / Project',
      location: 'Bekachi Creative Division',
      period: 'Apr 2025 – Jun 2026',
      isCurrent: false,
      category: 'design',
      highlights: [
        'Led end-to-end graphic design initiatives including brand identity systems, logo design, and brand guideline documentation.',
        'Designed marketing collateral, digital advertising campaigns, social media assets, and promotional print layouts.',
        'Created cohesive visual storytelling systems that boosted brand recall and client conversion rates.',
        'Worked closely with marketing and web teams to harmonize digital brand aesthetics across online and offline touchpoints.'
      ],
      skills: ['Brand Identity', 'Logo Design', 'Marketing Collateral', 'Photoshop', 'Illustrator', 'Visual Typography', 'Ad Assets']
    }
  ];

  const filtered = filter === 'all' 
    ? experiences 
    : experiences.filter((exp) => exp.category === filter);

  return (
    <section id="experience" className="py-24 relative bg-cream-100 border-t border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-cream-300">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-cream-300 text-xs font-mono font-bold text-maroon-800 uppercase tracking-widest mb-3">
              <span>CAREER HISTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-maroon-950 tracking-tight leading-tight">
              Experience &amp; Work History
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: `All Roles (${experiences.length})` },
              { id: 'frontend', label: 'Frontend & Web' },
              { id: 'design', label: 'Graphic Design' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold rounded-xl transition-all border ${
                  filter === f.id
                    ? 'bg-maroon-800 text-cream-100 border-maroon-800 shadow-sm'
                    : 'bg-cream-50 text-maroon-950 border-cream-300 hover:border-maroon-800/40'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 bg-cream-50 border border-cream-300 hover:border-maroon-800/40 transition-all rounded-2xl shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-cream-300">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <span className="text-xs font-mono font-bold text-maroon-700">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-maroon-950">
                      {item.role}
                    </h3>
                    {item.isCurrent && (
                      <span className="px-2.5 py-0.5 bg-maroon-100 text-maroon-800 border border-maroon-800/20 rounded-full text-xs font-mono uppercase font-bold tracking-wider">
                        Current Role
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-cream-muted font-mono">
                    <span className="font-bold text-maroon-900">{item.company}</span>
                    <span>&bull;</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-maroon-800 bg-cream-200 px-4 py-2 rounded-xl border border-cream-300">
                  <Calendar className="w-3.5 h-3.5 text-maroon-700" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="py-6 space-y-2.5">
                {item.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 font-normal">
                    <CheckCircle2 className="w-4 h-4 text-maroon-800 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-cream-300 flex flex-wrap gap-2">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 bg-cream-200/80 text-maroon-950 text-xs font-mono font-medium rounded-lg border border-cream-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
