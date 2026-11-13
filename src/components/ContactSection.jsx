import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  HelpCircle,
  ChevronDown,
  Globe,
  FileText
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "What international design codes do you follow for mechanical equipment?",
      a: "For pressure vessels, we design in accordance with ASME Section VIII Division 1 & 2. For heat exchangers, we follow TEMA (Class R, C, B) and ASME. For atmospheric & low-pressure storage tanks, we engineer according to API 650 and API 620 standards."
    },
    {
      q: "Can you provide end-to-end software development including cloud hosting?",
      a: "Yes! We build web apps in React/TypeScript, backends in Java/Spring Boot and .NET/C#, and cross-platform mobile apps using Flutter. We also manage cloud deployments on AWS/Azure, set up automated CI/CD pipelines, and provide post-launch maintenance."
    },
    {
      q: "What are the deliverables for piping and E3D design projects?",
      a: "Our deliverables include complete intelligent 3D models in AVEVA E3D, equipment layouts, piping general arrangements (GA), isometric drawings with comprehensive Bills of Materials (BOM/MTO), and CAESAR II piping stress analysis reports."
    },
    {
      q: "Are the training programmes suitable for working professionals?",
      a: "Yes, we offer both weekday intensive tracks and flexible weekend batches for working engineers looking to master AVEVA E3D, ASME calculations, or modern Full-Stack development with real industrial projects."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50 blueprint-pattern-light border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold mb-3 shadow-sm">
            <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
            <span>Connect with Shree Engineers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-700">Engineering or Digital</span> Project
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Have a project in mind, need drawing verification, or want to discuss enterprise software development? We are ready to help.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left 5 Cols: Contact Information & Cards */}
          {/* Left 5 Cols: Contact Information */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 transition-all shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-xl bg-sky-50 text-sky-600 shrink-0 border border-sky-100">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Office Address</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  B/12, Prabhat CHSL, Senapati Bapat Marg,<br />
                  Dadar (West), Mumbai, Maharashtra 400028
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 transition-all shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0 border border-blue-100">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Phone / WhatsApp</h4>
                <p className="text-xs text-slate-600">
                  Direct Line: <a href="tel:+918976600537" className="text-sky-700 font-semibold hover:underline">+91 8976600537</a>
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 transition-all shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-50 text-amber-700 shrink-0 border border-amber-100">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Mail ID</h4>
                <p className="text-xs text-slate-600">
                  <a href="mailto:info@shreeengineerscom.org" className="text-amber-700 font-semibold hover:underline">info@shreeengineerscom.org</a>
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 transition-all shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-50 text-purple-700 shrink-0 border border-purple-100">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Official Website</h4>
                <p className="text-xs text-slate-600">
                  <a href="https://shreeengineerss.in" target="_blank" rel="noopener noreferrer" className="text-purple-700 font-semibold hover:underline">
                    shreeengineerss.in
                  </a>
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 transition-all shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 shrink-0 border border-emerald-100">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Instant WhatsApp Support</h4>
                <p className="text-xs text-slate-600 mb-2">
                  Immediate responses for drawing reviews, software demos, and training inquiries.
                </p>
                <a
                  href="https://wa.me/918976600537?text=Hello%20Shree%20Engineers,%20I%20have%20an%20inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                >
                  <span>Chat on WhatsApp Now (+91 8976600537)</span>
                  <span>→</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right 7 Cols: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center border border-emerald-200">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Sent Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you for reaching out. A senior representative from Shree Engineers will contact you promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 rounded-xl text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 hover:bg-sky-100"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-extrabold text-slate-900 mb-1">Send a Direct Message</h3>
                <p className="text-xs text-slate-500 mb-4">
                  Please outline your engineering or software requirements and our technical team will respond with a preliminary proposal.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Deshmukh"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="anand@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 8976600537"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Subject / Project Type
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. API 650 Storage Tank Calculation"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Project Message & Specifications *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your design parameters, drawings needed, or software functionality requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 hover:from-sky-700 hover:to-indigo-800 shadow-md shadow-sky-600/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto pt-6 border-t border-slate-200">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5 text-sky-600" />
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Common queries regarding our engineering deliverables, standards, and software engagements.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 hover:text-sky-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-sky-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
