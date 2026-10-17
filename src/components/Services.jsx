import React from 'react';
import { 
  Globe, 
  Palette, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Laptop, 
  Layers, 
  Rocket, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

export default function Services({ onSelectService }) {
  const services = [
    {
      id: 'web-development',
      title: 'Full-Scale Website Development',
      badge: 'Engineering & Web',
      icon: Globe,
      description: 'End-to-end development of high-performance, responsive websites built with modern frameworks and clean code principles.',
      coverage: 'All types of websites: business, corporate, personal portfolios, e-commerce stores, and custom web applications.',
      features: [
        'Custom responsive architecture (mobile, tablet, desktop)',
        'Modern frontend frameworks (React, Vite, modern JavaScript)',
        'SEO optimization, semantic HTML, and lightning-fast loading speeds',
        'Cross-browser compatibility & clean maintainable codebases',
        'WhatsApp & inquiry forms integration for high conversion',
        'Ongoing technical maintenance and deployment assistance'
      ],
      deliverable: 'Production-ready, deployed website with full source code',
      serviceValue: 'Full-Scale Website Development'
    },
    {
      id: 'graphic-design',
      title: 'Professional Graphic Design',
      badge: 'Brand & Visual Strategy',
      icon: Palette,
      description: 'Comprehensive graphic and brand design solutions crafted to elevate your market presence and capture audience trust.',
      coverage: 'Branding, visual identity, UI/UX layouts, promotional campaigns, and digital advertising assets.',
      features: [
        'Complete brand identity systems (logos, color palettes, typography)',
        'Promotional marketing campaigns and social media collateral',
        'Digital advertising creative assets (Google Ads, Meta, LinkedIn)',
        'Modern UI/UX website and mobile app wireframe layouts',
        'Commercial print-ready files, brochures, banners, and stationery',
        'Brand guideline documentation for long-term consistency'
      ],
      deliverable: 'High-res vector/source files (AI, PSD, SVG, PNG, PDF)',
      serviceValue: 'Professional Graphic Design'
    },
    {
      id: 'ai-prompting',
      title: 'AI Prompt Solutions & Consulting',
      badge: 'Dubai 1M Certified',
      icon: Sparkles,
      description: 'Harness the power of generative AI with systematic prompt engineering tailored to accelerate your business operations.',
      coverage: 'Custom AI prompting systems, workflow automation, generative pipelines, and strategic AI consulting.',
      features: [
        'Certified expertise from the Dubai 1 Million Prompters program',
        'Custom prompt architectures for creative teams and marketers',
        'Rapid asset generation and creative concept development',
        'AI workflow integration to slash design and copywriting cycles',
        'Practical consulting on choosing and deploying current AI models',
        'Prompt documentation, templates, and best-practice workshops'
      ],
      deliverable: 'Custom prompt library, process playbook, and consulting sessions',
      serviceValue: 'AI Prompt Engineering & Consulting'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Discovery & Consultation',
      desc: 'Deep-dive into your objectives, brand values, target audience, and functional specifications.'
    },
    {
      step: '02',
      title: 'Design & Prototype',
      desc: 'Crafting aesthetic visual directions, typography hierarchy, and interactive interface wireframes.'
    },
    {
      step: '03',
      title: 'Development & Build',
      desc: 'Writing clean, high-performance code and building pixel-perfect responsive digital assets.'
    },
    {
      step: '04',
      title: 'Launch & Handoff',
      desc: 'Rigorous cross-device testing, deployment, and comprehensive documentation handover.'
    }
  ];

  const handleInquire = (serviceName) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative bg-cream-100 border-t border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-cream-300 text-xs font-mono font-bold text-maroon-800 uppercase tracking-widest mb-3">
            <span>SOLUTIONS &amp; OFFERINGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-maroon-950 tracking-tight leading-tight">
            Services Offered
          </h2>
          <p className="text-base sm:text-lg text-cream-muted mt-3 font-normal leading-relaxed">
            From modern responsive websites to comprehensive brand identities and AI prompt workflows, every solution is built with creative precision and commercial impact in mind.
          </p>
        </div>

        {/* 3 Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="rounded-3xl bg-cream-50 border border-cream-300 p-8 shadow-cream-card hover:border-maroon-800/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-maroon-800 text-cream-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-cream-200 text-maroon-800 border border-cream-300">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-display font-bold text-maroon-950 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-cream-muted leading-relaxed font-normal mb-4">
                    {service.description}
                  </p>

                  {/* Scope Box */}
                  <div className="p-3.5 rounded-xl bg-cream-100 border border-cream-300/80 mb-6 text-xs text-maroon-950 font-medium">
                    <strong className="text-maroon-800 font-bold block mb-1">Scope &amp; Coverage:</strong>
                    {service.coverage}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-maroon-800 font-bold block mb-2">
                      Key Inclusions
                    </span>
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-700">
                        <CheckCircle className="w-4 h-4 text-maroon-800 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="pt-6 border-t border-cream-300">
                  <div className="mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cream-muted block">Output:</span>
                    <span className="text-xs font-semibold text-maroon-950">{service.deliverable}</span>
                  </div>

                  <button
                    onClick={() => handleInquire(service.serviceValue)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-xs sm:text-sm font-bold bg-maroon-800 hover:bg-maroon-900 text-cream-100 shadow-sm transition-all group-hover:shadow-md"
                  >
                    <span>Inquire for this Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* 4-Step Standard Project Workflow */}
        <div className="p-8 sm:p-10 rounded-3xl bg-cream-50 border border-cream-300 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-cream-300">
            <div>
              <span className="text-xs font-mono font-bold text-maroon-800 uppercase tracking-widest block mb-1">
                EXECUTION FRAMEWORK
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-maroon-950">
                How We Bring Projects to Life
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-maroon-100 text-maroon-800 text-xs font-mono font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Standard &amp; Transparent Delivery</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((ws, wIdx) => (
              <div key={ws.step} className="relative">
                <span className="text-3xl font-display font-extrabold text-maroon-800/25 block mb-2 font-mono">
                  {ws.step}
                </span>
                <h4 className="text-base font-bold text-maroon-950 mb-2">
                  {ws.title}
                </h4>
                <p className="text-xs sm:text-sm text-cream-muted leading-relaxed font-normal">
                  {ws.desc}
                </p>
                {wIdx < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-4 right-0 w-8 h-[1px] bg-cream-300 translate-x-4" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
