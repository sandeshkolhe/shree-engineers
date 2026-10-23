import React from 'react';
import { 
  Globe, 
  LayoutDashboard, 
  Network, 
  Smartphone, 
  ShieldCheck, 
  ShoppingCart, 
  BarChart3, 
  Webhook, 
  Cloud, 
  Database, 
  Cog,
  ArrowRight,
  Code2
} from 'lucide-react';
import { softwareServices } from '../data/servicesData';

const iconMap = {
  Globe,
  LayoutDashboard,
  Network,
  Smartphone,
  ShieldCheck,
  ShoppingCart,
  BarChart3,
  Webhook,
  Cloud,
  Database,
  Cog
};

export default function SoftwareServices({ onOpenQuote }) {
  return (
    <section id="software-services" className="py-24 relative bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold mb-3 shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Digital Transformation & Enterprise IT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-sky-700">Software & Digital</span> Solutions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            High-velocity Web Apps, ERPs, CRM systems, Flutter Mobile Apps, and Cloud Architectures tailored to optimize your business operations and automate mission-critical workflows.
          </p>
        </div>

        {/* 11 Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwareServices.map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <div 
                key={service.id}
                className="group relative rounded-2xl bg-slate-50/80 border border-slate-200 p-6 hover:border-amber-400 hover:bg-white transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-amber-100/70 border border-amber-200 text-amber-800 group-hover:scale-105 group-hover:bg-amber-100 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-white text-amber-800 border border-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium text-slate-500">Enterprise Ready</span>
                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 group-hover:translate-x-1 transition-all"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-50 via-sky-50 to-blue-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              Looking for a custom software solution or end-to-end ERP?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              We engineer secure, scalable, and tailored software architectures with round-the-clock maintenance.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote('Custom Software Solution')}
            className="whitespace-nowrap px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-amber-600 to-sky-600 hover:from-amber-700 hover:to-sky-700 shadow-md shadow-amber-600/20 transform hover:-translate-y-0.5 transition-all"
          >
            Schedule Software Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
