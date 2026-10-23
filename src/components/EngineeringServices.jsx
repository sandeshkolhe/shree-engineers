import React, { useState } from 'react';
import { 
  DraftingCompass, 
  Boxes, 
  Cpu, 
  Building2, 
  GitBranch, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  ArrowRight
} from 'lucide-react';
import { engineeringServices } from '../data/servicesData';

const iconMap = {
  DraftingCompass,
  Boxes,
  Cpu,
  Building2,
  GitBranch
};

export default function EngineeringServices({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState(engineeringServices[0].id);
  const selectedService = engineeringServices.find(s => s.id === activeTab) || engineeringServices[0];
  const IconComponent = iconMap[selectedService.icon] || Boxes;

  return (
    <section id="engineering-services" className="py-24 relative bg-slate-50 blueprint-pattern-light border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold mb-3 shadow-sm">
            <DraftingCompass className="w-3.5 h-3.5 text-sky-600" />
            <span>Industrial Engineering & Design Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">Engineering & CAD</span> Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            From precision 2D drafting and 3D plant layouts to heavy static equipment design in strict compliance with <strong>ASME</strong>, <strong>TEMA</strong>, and <strong>API 650</strong> international standards.
          </p>
        </div>

        {/* Navigation Tabs for Services */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {engineeringServices.map((service) => {
            const TabIcon = iconMap[service.icon] || Boxes;
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-600 to-blue-700 text-white shadow-md shadow-sky-600/25 border border-sky-600 scale-[1.02]'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-sky-600'}`} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          {/* Subtle blueprint grid overlay */}
          <div className="absolute inset-0 blueprint-grid-dense-light opacity-40 pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 cols: In-depth Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200 text-sky-700 shadow-sm">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-sky-800 uppercase tracking-wider bg-sky-100 px-2.5 py-0.5 rounded border border-sky-200">
                    {selectedService.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {selectedService.fullDesc}
              </p>

              {/* Subcategories (like Pressure Vessel, Heat Exchanger, Storage Tank) */}
              {selectedService.subcategories && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-800 flex items-center gap-1.5">
                    <Boxes className="w-3.5 h-3.5 text-sky-600" />
                    Specialized Equipment Verticals
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {selectedService.subcategories.map((sub, sIdx) => (
                      <div key={sIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 hover:bg-sky-50/50 transition-all">
                        <div className="text-sm font-bold text-slate-900 mb-1">{sub.name}</div>
                        <div className="text-[10px] font-mono font-bold text-amber-700 mb-1.5">{sub.code}</div>
                        <div className="text-xs text-slate-600 leading-snug">{sub.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Capabilities */}
              <div className="space-y-3 pt-1">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  Key Highlights & Scope of Work
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {selectedService.keyHighlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <span className="text-sky-600 font-bold mt-0.5">▸</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Standards, Deliverables & Call to Action */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <div className="space-y-5">
                {/* Codes & Standards */}
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Compliance & Codes Followed
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedService.standards.map((std, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-white border border-slate-200 text-sky-800 shadow-xs">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-sky-600" />
                    Engineering Deliverables
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {selectedService.deliverables.map((del, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Direct Inquiry CTA */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="text-xs text-slate-600 font-medium">
                  Ready to calculate, draft, or model your next mechanical asset?
                </div>
                <button
                  onClick={() => onOpenQuote(selectedService.title)}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 shadow-md shadow-sky-600/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Inquire for {selectedService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
