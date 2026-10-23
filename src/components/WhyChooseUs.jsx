import React from 'react';
import { 
  Sliders, 
  Layout, 
  TrendingUp, 
  Lock, 
  LifeBuoy, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles,
  Zap
} from 'lucide-react';
import { whyChooseUs } from '../data/servicesData';

const iconMap = {
  Sliders,
  Layout,
  TrendingUp,
  Lock,
  LifeBuoy
};

export default function WhyChooseUs({ onOpenQuote }) {
  return (
    <section id="why-us" className="py-24 relative bg-slate-50 blueprint-pattern-light border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Unmatched Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-700">Shree Engineers</span>?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            We provide a unique convergence of heavy industrial design engineering rigor and cutting-edge software development capability under one roof.
          </p>
        </div>

        {/* 5 Value Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Zap;
            return (
              <div 
                key={idx}
                className={`p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-sky-400 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1 shadow-sm hover:shadow-lg ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 mb-5 group-hover:scale-105 group-hover:bg-sky-100 transition-all shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Pillar #0{idx + 1}</span>
                  <span className="text-sky-700 font-bold">100% Guaranteed</span>
                </div>
              </div>
            );
          })}

          {/* Special CTA Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-sky-50 via-white to-blue-50 border border-sky-200 flex flex-col justify-between shadow-md">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800 mb-5 shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                Have a Complex or Hybrid Requirement?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you need ASME design calculations or custom ERP automation, our dual-specialized team delivers with speed and precision.
              </p>
            </div>
            
            <button
              onClick={() => onOpenQuote('General Inquiry')}
              className="mt-6 w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 shadow-md shadow-sky-600/20 transition-all transform hover:-translate-y-0.5"
            >
              Get in Touch Today
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
