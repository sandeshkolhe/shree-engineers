import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, CheckCircle } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceCategory: 'AutoCAD 2D & 3D Design',
    projectScope: '',
    timeline: 'Immediate (Within 1-2 weeks)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceCategory: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*New Inquiry - Shree Engineers*%0A*Name:* ${formData.name || 'Visitor'}%0A*Service:* ${formData.serviceCategory}%0A*Phone:* ${formData.phone || 'N/A'}%0A*Timeline:* ${formData.timeline}%0A*Details:* ${formData.notes || 'Interested in quotation'}`;
    window.open(`https://wa.me/918976600537?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">Quotation Request Received!</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Thank you, <strong className="text-sky-700">{formData.name || 'Valued Client'}</strong>. Our engineering and digital solution leads will review your specifications and contact you within 24 hours.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Also send via WhatsApp for priority
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                Request a Custom Quote
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                Let's Build or Design Your Project
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill out the specifications below or reach out instantly via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Phone / WhatsApp Number *
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
                    Expected Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-colors"
                  >
                    <option>Immediate (Within 1-2 weeks)</option>
                    <option>Standard (1-2 months)</option>
                    <option>Long-term project (3+ months)</option>
                    <option>Training batch enrollment</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Select Primary Service / Vertical
                </label>
                <select
                  value={formData.serviceCategory}
                  onChange={e => setFormData({ ...formData, serviceCategory: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-colors"
                >
                  <optgroup label="Heavy Engineering & CAD">
                    <option>AutoCAD 2D & 3D Design</option>
                    <option>Pressure Vessel Design (ASME Sec VIII)</option>
                    <option>Heat Exchanger [Shell & Tube - TEMA]</option>
                    <option>Storage Tank (API 650 / 620)</option>
                    <option>Mechanical Machine & Component Design</option>
                    <option>Civil & Structural Design (AISC / IS 800)</option>
                    <option>Piping Design & AVEVA E3D Plant Works</option>
                  </optgroup>
                  <optgroup label="Software & Digital Solutions">
                    <option>Web Applications & Business Portals</option>
                    <option>Admin Panels & CRM Systems</option>
                    <option>ERP & Business Management Software</option>
                    <option>Android & iOS Mobile Applications (Flutter)</option>
                    <option>E-commerce Websites & Online Platforms</option>
                    <option>Interactive Dashboards & Analytics</option>
                    <option>REST APIs & System Integration</option>
                    <option>Database Design & Cloud Deployment</option>
                  </optgroup>
                  <optgroup label="Training Programmes">
                    <option>Piping Design & E3D Industrial Training</option>
                    <option>Pressure Vessel & Heat Exchanger Course</option>
                    <option>Full-Stack Web & Mobile Bootcamp</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Project Scope or Requirements Details
                </label>
                <textarea
                  rows="3"
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Provide any details like design code, operating pressure, volume, features needed, or software functionality..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-sky-600 focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 hover:from-sky-700 hover:to-indigo-800 shadow-md shadow-sky-600/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Quotation Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs text-emerald-800 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
