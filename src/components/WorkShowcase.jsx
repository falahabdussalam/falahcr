import React, { useState } from 'react';
import { 
  ExternalLink, 
  Eye, 
  X, 
  ArrowRight, 
  Code2, 
  Palette, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  MessageSquare 
} from 'lucide-react';

export default function WorkShowcase({ onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'ziqx-ecosystem',
      title: 'Ziqx Creative Web Ecosystem',
      subtitle: 'Modern UI Architecture & Client Platforms',
      category: 'web',
      categoryLabel: 'Frontend Engineering',
      icon: Code2,
      period: '2026',
      client: 'Ziqx Creative Clique LLP',
      description: 'Production frontend development delivering modular component libraries, responsive web experiences, and optimized digital interfaces at DBI Skill Park, Markaz Knowledge City.',
      extendedBio: 'Engineered high-performance web applications with lightning-fast load times, semantic HTML5, and accessible Tailwind CSS architectures. Built to translate complex multi-viewport UX wireframes into seamless interactive web products.',
      technologies: ['React 18', 'Tailwind CSS', 'JavaScript (ES6+)', 'Vite', 'UI Component Architecture', 'Git'],
      metrics: '99+ PageSpeed Score • Sub-second Load • 100% Responsive',
      accentColor: 'maroon',
      featured: true
    },
    {
      id: 'bekachi-web-platform',
      title: 'Bekachi Corporate Web Platform',
      subtitle: 'High-Converting Business Presence',
      category: 'web',
      categoryLabel: 'Web Development',
      icon: Code2,
      period: '2025 – Present',
      client: 'Bekachi Group',
      description: 'Custom corporate web portal engineered with mobile-first responsiveness, integrated inquiry funnels, and enterprise-grade cross-browser compatibility.',
      extendedBio: 'Architected and deployed responsive corporate web properties for Bekachi Group. Focused on clean semantic markup, fluid layouts across all devices, and direct customer communication channels via instant messaging APIs.',
      technologies: ['Frontend Development', 'HTML5 / CSS3', 'JavaScript', 'Responsive Frameworks', 'API Integration'],
      metrics: '35% Higher Engagement • Full Mobile Adaptation • SEO Optimized',
      accentColor: 'maroon',
      featured: true
    },
    {
      id: 'bekachi-brand-identity',
      title: 'Bekachi Brand Identity & System',
      subtitle: 'Complete Visual Storytelling & Collateral',
      category: 'design',
      categoryLabel: 'Graphic Design',
      icon: Palette,
      period: '2025 – 2026',
      client: 'Bekachi Group',
      description: 'End-to-end visual branding suite including logo systems, corporate stationery, marketing collateral, promotional print assets, and brand guidelines.',
      extendedBio: 'Spearheaded comprehensive brand identity creation across all customer touchpoints. Developed bespoke color palettes, typographic hierarchies, digital banners, and packaging standards ensuring brand recognition and market trust.',
      technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Brand Guidelines', 'Typography Hierarchy', 'Print & Digital Prep'],
      metrics: 'Full Identity Suite • 50+ Brand Collaterals • Commercial Standard',
      accentColor: 'maroon',
      featured: true
    },
    {
      id: 'dubai-1m-prompt-suite',
      title: 'Dubai 1M AI Prompt Architecture',
      subtitle: 'Enterprise AI Prompt Workflows & Pipeline',
      category: 'ai',
      categoryLabel: 'AI & Prompt Engineering',
      icon: Sparkles,
      period: 'Certified 2025',
      client: 'Generative Intelligence Suite',
      description: 'Certified prompt engineering framework developed under the Dubai 1 Million Prompters initiative to systematically generate brand copy and digital assets.',
      extendedBio: 'Formulated multi-turn prompt structures, role-framing methodologies, and context-window optimization to accelerate web prototyping and graphic design asset creation by up to 5x.',
      technologies: ['Dubai 1M Framework', 'Context Engineering', 'Few-Shot Prompting', 'Generative Workflows', 'Creative Automation'],
      metrics: '5x Faster Prototyping • Certified Accreditation • Scalable Prompt Library',
      accentColor: 'maroon',
      featured: true
    },
    {
      id: 'bespoke-ecommerce',
      title: 'Bespoke E-Commerce & Retail Store',
      subtitle: 'Seamless Product Catalog & Smooth Cart Flow',
      category: 'web',
      categoryLabel: 'Full-Scale Web Dev',
      icon: Code2,
      period: '2025',
      client: 'Commercial Client Project',
      description: 'High-performance online shopping storefront featuring dynamic product filtering, instant cart calculations, and responsive mobile layouts.',
      extendedBio: 'Engineered an intuitive e-commerce experience prioritizing quick customer conversion, smooth transitions, mobile checkout optimization, and automated WhatsApp order routing.',
      technologies: ['React', 'Tailwind CSS', 'State Management', 'WhatsApp Commerce', 'Payment Flow'],
      metrics: 'Mobile-first Conversion • Instant Checkout • Frictionless UI',
      accentColor: 'maroon',
      featured: false
    },
    {
      id: 'promotional-ad-campaign',
      title: 'Multi-Channel Marketing Campaign',
      subtitle: 'Digital Advertising & High-Impact Visuals',
      category: 'design',
      categoryLabel: 'Graphic Design',
      icon: Palette,
      period: '2025',
      client: 'Creative Campaign',
      description: 'Full suite of digital advertisement creatives for Meta and Google Ads, paired with event roll-up banners, flyers, and promotional merchandise.',
      extendedBio: 'Produced a cohesive visual marketing campaign that paired strong typographic contrast with intentional color psychology to maximize click-through rates across both digital and physical channels.',
      technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Social Media Creatives', 'Digital Ad Standards', 'Vector Graphics'],
      metrics: 'High CTR Ad Creatives • Print Ready • Commercial Typography',
      accentColor: 'maroon',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const handleDiscussProject = (project) => {
    setSelectedProject(null);
    if (onSelectService) {
      if (project.category === 'web') onSelectService('Full-Scale Website Development');
      else if (project.category === 'design') onSelectService('Professional Graphic Design');
      else if (project.category === 'ai') onSelectService('AI Prompt Engineering & Consulting');
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-24 relative bg-cream-150 border-t border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-cream-300">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-cream-300 text-xs font-mono font-bold text-maroon-800 uppercase tracking-widest mb-3">
              <span>SELECTED PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-maroon-950 tracking-tight leading-tight">
              Featured Work &amp; Projects
            </h2>
            <p className="text-base sm:text-lg text-cream-muted mt-2 max-w-2xl">
              A curated selection of web engineering platforms, brand identity design systems, and generative AI initiatives executed with precision.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: `All Projects (${projects.length})` },
              { id: 'web', label: 'Frontend & Web' },
              { id: 'design', label: 'Graphic Design' },
              { id: 'ai', label: 'AI & Prompting' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold rounded-xl transition-all border ${
                  activeFilter === f.id
                    ? 'bg-maroon-800 text-cream-100 border-maroon-800 shadow-sm'
                    : 'bg-cream-50 text-maroon-950 border-cream-300 hover:border-maroon-800/40'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="rounded-3xl bg-cream-50 border border-cream-300 overflow-hidden shadow-cream-card hover:border-maroon-800/40 transition-all flex flex-col justify-between group"
              >
                {/* Project Header Bar / Banner Preview */}
                <div className="p-6 bg-cream-100 border-b border-cream-300 relative">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-maroon-100 text-maroon-800 border border-maroon-800/10">
                      <Icon className="w-3.5 h-3.5" />
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-mono text-cream-muted font-bold">
                      {project.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-maroon-950 group-hover:text-maroon-800 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cream-muted mt-1">
                    Client / Scope: {project.client}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal mb-5">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cream-200 text-maroon-950 border border-cream-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-cream-100 text-cream-muted">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Metrics & Action Button */}
                  <div className="pt-4 border-t border-cream-300/80">
                    <div className="text-[11px] font-mono text-maroon-800 font-semibold mb-3">
                      {project.metrics}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-maroon-800 hover:bg-maroon-900 text-cream-100 transition-colors shadow-sm"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>

                      <a
                        href={`https://wa.me/918105326568?text=${encodeURIComponent(`Hi Falah, I saw your project "${project.title}" on your portfolio and would like to discuss something similar.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-cream-200 hover:bg-cream-300 text-maroon-900 border border-cream-300 transition-colors"
                        title="Chat on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-700" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-maroon-950/60 backdrop-blur-sm animate-fadeIn">
            <div 
              className="relative w-full max-w-2xl bg-cream-50 rounded-3xl border border-cream-300 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-cream-200 text-maroon-900 hover:bg-cream-300 border border-cream-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-maroon-100 text-maroon-800 border border-maroon-800/10">
                    {selectedProject.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-cream-muted">
                    {selectedProject.period}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-maroon-950">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-mono text-maroon-800 mt-1">
                  Client / Context: {selectedProject.client}
                </p>
              </div>

              {/* Overview & Detailed Content */}
              <div className="space-y-4 text-sm text-zinc-700 leading-relaxed font-normal mb-6">
                <p>{selectedProject.description}</p>
                <p>{selectedProject.extendedBio}</p>
              </div>

              {/* Key Deliverables & Metric Strip */}
              <div className="p-4 rounded-xl bg-cream-100 border border-cream-300 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-maroon-800 font-bold block mb-1">
                  Key Impact &amp; Standards
                </span>
                <p className="text-xs font-mono text-maroon-950 font-bold">
                  {selectedProject.metrics}
                </p>
              </div>

              {/* Technologies / Tools Used */}
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-cream-muted font-bold block mb-2.5">
                  Technologies, Tools &amp; Methodologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-cream-200 text-maroon-950 border border-cream-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-cream-300">
                <button
                  onClick={() => handleDiscussProject(selectedProject)}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold bg-maroon-800 hover:bg-maroon-900 text-cream-100 flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <span>Request Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`https://wa.me/918105326568?text=${encodeURIComponent(`Hi Falah, I am inquiring about a project similar to: "${selectedProject.title}".`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold bg-cream-200 hover:bg-cream-300 text-maroon-950 border border-cream-300 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>Discuss via WhatsApp</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
