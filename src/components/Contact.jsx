import React, { useState, useEffect } from 'react';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

export default function Contact({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Full-Scale Website Development',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format clean WhatsApp message string
    const formattedMessage = 
`*New Inquiry from Portfolio Website*
━━━━━━━━━━━━━━━━━━━━
*Name:* ${formData.name.trim()}
*Email:* ${formData.email.trim()}
*Phone:* ${formData.phone.trim()}
*Service Needed:* ${formData.service}

*Project Message / Brief:*
${formData.message.trim()}
━━━━━━━━━━━━━━━━━━━━
Sent via Falah Abdussalam Portfolio`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/918105326568?text=${encodedMessage}`;

    // Mark as submitted
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Full-Scale Website Development',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 relative bg-cream-100 border-t border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-cream-300 text-xs font-mono font-bold text-maroon-800 uppercase tracking-widest mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-maroon-950 tracking-tight leading-tight">
            Let's Discuss Your Next Big Idea
          </h2>
          <p className="text-base sm:text-lg text-cream-muted mt-3 font-normal leading-relaxed">
            Fill out the form below to dispatch your project brief directly to my WhatsApp, or reach out using the direct contact channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Info Display */}
            <div className="p-8 rounded-3xl bg-cream-50 border border-cream-300 shadow-cream-card space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-maroon-800 uppercase tracking-wider block mb-1">
                  DIRECT CONTACT DETAILS
                </span>
                <h3 className="text-2xl font-display font-bold text-maroon-950">
                  Falah Abdussalam
                </h3>
                <p className="text-xs font-mono text-cream-muted">
                  Frontend Developer &bull; Graphic Designer
                </p>
              </div>

              {/* Direct Email Display */}
              <div className="p-4 rounded-2xl bg-cream-100 border border-cream-300 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-maroon-100 text-maroon-800 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-cream-muted uppercase font-bold block">
                      Email Address
                    </span>
                    <a 
                      href="mailto:falahkodagu@gmail.com"
                      className="text-sm sm:text-base font-bold text-maroon-950 hover:text-maroon-800 transition-colors truncate block"
                    >
                      falahkodagu@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('falahkodagu@gmail.com', 'email')}
                  className="p-2 rounded-xl bg-cream-200 hover:bg-cream-300 text-maroon-950 border border-cream-300 transition-colors flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Direct Phone / WhatsApp Display */}
              <div className="p-4 rounded-2xl bg-cream-100 border border-cream-300 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-cream-muted uppercase font-bold block">
                      Phone &amp; WhatsApp
                    </span>
                    <a 
                      href="tel:+918105326568"
                      className="text-sm sm:text-base font-bold text-maroon-950 hover:text-maroon-800 transition-colors block"
                    >
                      +91 8105326568
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('+918105326568', 'phone')}
                  className="p-2 rounded-xl bg-cream-200 hover:bg-cream-300 text-maroon-950 border border-cream-300 transition-colors flex-shrink-0"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Office Location */}
              <div className="p-4 rounded-2xl bg-cream-100 border border-cream-300 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-maroon-100 text-maroon-800 flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-cream-muted uppercase font-bold block">
                    Current Location &amp; Base
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-maroon-950 leading-relaxed">
                    DBI Skill Park, Markaz Knowledge City, Kaithappoyil, Calicut, Kerala
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Quick Chat CTA */}
              <a
                href="https://wa.me/918105326568?text=Hello%20Falah,%20I'd%20like%20to%20discuss%20a%20project%20with%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-sm font-bold bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Instant Chat on WhatsApp (+91 8105326568)</span>
              </a>

              {/* Availability Indicator */}
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-zinc-600">
                <Clock className="w-4 h-4 text-maroon-800" />
                <span>Typical response window: <strong>Within 2–4 hours</strong></span>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form with WhatsApp Integration */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-cream-50 border border-cream-300 shadow-cream-card">
              
              {submitted ? (
                <div className="text-center py-10 space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-extrabold text-maroon-950">
                      Inquiry Dispatched!
                    </h3>
                    <p className="text-sm text-cream-muted mt-2 max-w-md mx-auto">
                      Your inquiry has been formatted and opened directly in WhatsApp. If your chat did not open automatically, tap below:
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/918105326568?text=${encodeURIComponent(
                        `*New Inquiry from Portfolio Website*\n━━━━━━━━━━━━━━━━━━━━\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Message:*\n${formData.message}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center gap-2 shadow-sm transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open WhatsApp Now</span>
                    </a>

                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-cream-200 hover:bg-cream-300 text-maroon-950 border border-cream-300 transition-colors"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-maroon-800 uppercase tracking-wider block mb-1">
                      PROJECT INQUIRY FORM
                    </span>
                    <h3 className="text-2xl font-display font-bold text-maroon-950">
                      Send a Message via WhatsApp
                    </h3>
                    <p className="text-xs sm:text-sm text-cream-muted mt-1">
                      Submitting this form immediately prepares a structured message and redirects to WhatsApp.
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold text-maroon-950 uppercase tracking-wider mb-2">
                        Your Full Name <span className="text-maroon-700">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3.5 rounded-xl bg-cream-100 border border-cream-300 text-maroon-950 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-800 focus:bg-white transition-all placeholder:text-stone-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-maroon-950 uppercase tracking-wider mb-2">
                        Email Address <span className="text-maroon-700">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-cream-100 border border-cream-300 text-maroon-950 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-800 focus:bg-white transition-all placeholder:text-stone-400"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold text-maroon-950 uppercase tracking-wider mb-2">
                        Phone Number <span className="text-maroon-700">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 9876543210"
                        className="w-full px-4 py-3.5 rounded-xl bg-cream-100 border border-cream-300 text-maroon-950 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-800 focus:bg-white transition-all placeholder:text-stone-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-maroon-950 uppercase tracking-wider mb-2">
                        Service Needed <span className="text-maroon-700">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-cream-100 border border-cream-300 text-maroon-950 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-800 focus:bg-white transition-all"
                      >
                        <option value="Full-Scale Website Development">Full-Scale Website Development</option>
                        <option value="Professional Graphic Design">Professional Graphic Design</option>
                        <option value="AI Prompt Engineering & Consulting">AI Prompt Engineering & Consulting</option>
                        <option value="Brand Identity & Visual System">Brand Identity & Visual System</option>
                        <option value="UI/UX Prototyping & Layouts">UI/UX Prototyping & Layouts</option>
                        <option value="Other Custom Project">Other Custom Project</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-maroon-950 uppercase tracking-wider mb-2">
                      Project Details / Message <span className="text-maroon-700">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, timeline, deliverables, or any questions you have..."
                      className="w-full px-4 py-3.5 rounded-xl bg-cream-100 border border-cream-300 text-maroon-950 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-800 focus:bg-white transition-all placeholder:text-stone-400 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-sm font-bold bg-maroon-800 hover:bg-maroon-900 text-cream-100 shadow-maroon-hover hover:scale-[1.01] transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Opening WhatsApp...' : 'Submit / Send via WhatsApp'}</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs font-mono text-cream-muted text-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>Direct redirection to WhatsApp: +91 8105326568</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
