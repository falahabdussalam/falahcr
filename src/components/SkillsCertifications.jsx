import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  Sparkles, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  ExternalLink,
  Layers,
  Terminal,
  Cpu
} from 'lucide-react';

export default function SkillsCertifications() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillDomains = [
    {
      id: 'web',
      title: 'Web Development',
      experience: '2 Years Experience',
      badge: 'Frontend Engineering',
      icon: Code2,
      description: 'Building fast, responsive, and accessible client-facing web applications with modern architecture and clean code.',
      skills: [
        { name: 'Frontend Development', level: 'Advanced' },
        { name: 'Responsive Web Design', level: 'Expert' },
        { name: 'Modern Frameworks (React, Vite)', level: 'Advanced' },
        { name: 'Full Website Builds', level: 'Expert' },
        { name: 'HTML5 Semantic Structure', level: 'Expert' },
        { name: 'Tailwind CSS & Vanilla CSS3', level: 'Expert' },
        { name: 'JavaScript (ES6+ / DOM)', level: 'Advanced' },
        { name: 'Cross-Browser Performance & SEO', level: 'Advanced' },
        { name: 'Git & Version Control', level: 'Proficient' },
      ],
      deliverables: [
        'End-to-end responsive web applications',
        'Corporate websites & interactive landing pages',
        'Component libraries & reusable design systems'
      ]
    },
    {
      id: 'design',
      title: 'Graphic Design',
      experience: '5 Years Experience',
      badge: 'Visual Brand Strategy',
      icon: Palette,
      description: 'Creating comprehensive brand identities, promotional collateral, and high-converting visual communications.',
      skills: [
        { name: 'Brand Identity & Systems', level: 'Expert' },
        { name: 'Visual & Layout Design', level: 'Expert' },
        { name: 'Marketing Collateral', level: 'Expert' },
        { name: 'Promotional Campaigns', level: 'Expert' },
        { name: 'Adobe Photoshop & Illustrator', level: 'Expert' },
        { name: 'Typography & Color Theory', level: 'Expert' },
        { name: 'Digital Ad Assets & Banners', level: 'Expert' },
        { name: 'Print & Packaging Production', level: 'Advanced' },
        { name: 'UI/UX Visual Wireframing', level: 'Advanced' },
      ],
      deliverables: [
        'Complete brand stylebooks & logo systems',
        'Marketing assets for social and digital campaigns',
        'High-resolution print & promotional media'
      ]
    },
    {
      id: 'ai',
      title: 'AI & Prompt Engineering',
      experience: 'Certified Specialist',
      badge: 'Generative Intelligence',
      icon: Sparkles,
      description: 'Leveraging prompt engineering methodologies to supercharge design workflows, automate assets, and build smart interfaces.',
      skills: [
        { name: 'Advanced Prompt Engineering', level: 'Certified' },
        { name: 'Dubai 1M Prompters Certified', level: 'Official' },
        { name: 'Context Framing & Multi-turn Prompts', level: 'Advanced' },
        { name: 'Generative Visual Pipeline', level: 'Advanced' },
        { name: 'AI-Assisted Web Prototyping', level: 'Advanced' },
        { name: 'Workflow Automation & Efficiency', level: 'Advanced' },
        { name: 'LLM Fine-tuning Concepts', level: 'Proficient' },
      ],
      deliverables: [
        'Custom prompt systems for brand design and copy',
        'Rapid prototyping pipelines for web apps',
        'AI strategy and workflow integration consulting'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Dubai 1 Million Prompters Initiative',
      issuer: 'Dubai Future Foundation / UAE Government',
      type: 'AI & Prompt Engineering',
      description: 'Selected and certified in advanced generative AI prompting, problem framing, and real-world AI applications.',
      date: 'Certified',
      icon: Sparkles,
      verified: true,
      tag: 'Global Flagship Program'
    },
    {
      title: 'Bachelor of Computer Applications (BCA)',
      issuer: 'Kodagu University',
      type: 'Higher Education Degree',
      description: 'Graduated with core proficiency in software design, web technologies, object-oriented systems, and computer fundamentals.',
      date: 'Formal Degree',
      icon: GraduationCap,
      verified: true,
      tag: 'University Graduate'
    },
    {
      title: 'Modern Frontend Architecture & Web Systems',
      issuer: 'Professional Development Credential',
      type: 'Web Engineering',
      description: 'Proficiency in component-driven UI architecture, modern JavaScript (ES6+), responsive layout standards, and web performance.',
      date: 'Verified',
      icon: Code2,
      verified: true,
      tag: 'Engineering'
    },
    {
      title: 'Brand Identity & Visual Communications Mastery',
      issuer: 'Design Practice & Industry Projects',
      type: 'Graphic Design',
      description: '5+ years of verified industry execution designing marketing collateral, typography architectures, and commercial brand assets.',
      date: 'Verified',
      icon: Palette,
      verified: true,
      tag: 'Creative Design'
    }
  ];

  const filteredDomains = activeCategory === 'all' 
    ? skillDomains 
    : skillDomains.filter(d => d.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-cream-150 border-t border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-cream-300">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-cream-300 text-xs font-mono font-bold text-maroon-800 uppercase tracking-widest mb-3">
              <span>EXPERTISE &amp; CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-maroon-950 tracking-tight leading-tight">
              Skills &amp; Certifications
            </h2>
            <p className="text-base sm:text-lg text-cream-muted mt-2 max-w-2xl">
              Proven proficiency across code, design, and artificial intelligence, backed by university education and globally recognized certifications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Fields' },
              { id: 'web', label: 'Web Dev (2 Yrs)' },
              { id: 'design', label: 'Graphic Design (5 Yrs)' },
              { id: 'ai', label: 'AI & Prompting' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveCategory(f.id)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold rounded-xl transition-all border ${
                  activeCategory === f.id
                    ? 'bg-maroon-800 text-cream-100 border-maroon-800 shadow-sm'
                    : 'bg-cream-50 text-maroon-950 border-cream-300 hover:border-maroon-800/40'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Main Skill Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {filteredDomains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.id}
                className="rounded-3xl bg-cream-50 border border-cream-300 p-8 shadow-cream-card hover:border-maroon-800/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-maroon-800 text-cream-100 flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-maroon-100 text-maroon-800 border border-maroon-800/10">
                        {domain.experience}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-display font-extrabold text-maroon-950 mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-sm text-cream-muted leading-relaxed font-normal mb-6">
                    {domain.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="space-y-2.5 pt-4 border-t border-cream-300 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-maroon-800 font-bold block mb-2">
                      Core Competencies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {domain.skills.map((s, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-cream-100 text-maroon-950 border border-cream-300"
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Deliverables */}
                <div className="pt-5 border-t border-cream-300/80">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cream-muted font-bold block mb-2.5">
                    Signature Deliverables
                  </span>
                  <ul className="space-y-1.5">
                    {domain.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-zinc-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-maroon-700 flex-shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

        {/* Certifications & Formal Accreditations */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-cream-300">
            <div>
              <span className="text-xs font-mono font-bold text-maroon-800 uppercase tracking-widest block mb-1">
                ACCREDITATIONS &amp; EDUCATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-maroon-950">
                Official Certifications &amp; University Degree
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-cream-muted">
              <Award className="w-4 h-4 text-maroon-800" />
              <span>Verified Qualifications</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const CertIcon = cert.icon;
              return (
                <div
                  key={index}
                  className="p-6 sm:p-7 rounded-2xl bg-cream-50 border border-cream-300 hover:border-maroon-800/40 transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-maroon-100 text-maroon-800">
                          <CertIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cream-200 text-maroon-800 font-bold border border-cream-300">
                            {cert.tag}
                          </span>
                          <span className="text-xs font-mono text-cream-muted block mt-1">
                            {cert.issuer}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-maroon-700 px-2.5 py-1 rounded-md bg-cream-100 border border-cream-300">
                        {cert.date}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-maroon-950 mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-cream-muted leading-relaxed font-normal">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-cream-300/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-600 font-medium">Credential Status:</span>
                    <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
