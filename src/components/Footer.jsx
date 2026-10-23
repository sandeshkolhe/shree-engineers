import React from 'react';
import { Compass, ShieldCheck, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 via-blue-600 to-amber-500 p-0.5 shadow-md shadow-sky-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-sky-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                SHREE <span className="text-sky-400">ENGINEERS</span>
              </span>
            </a>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Shree Engineers is a premier multidisciplinary firm specializing in precision CAD drafting, ASME/API process equipment design, AVEVA E3D piping layouts, enterprise software architectures, and industrial professional training.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-[11px] font-mono text-sky-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                ASME • API • TEMA • ISO
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-[11px] font-mono text-amber-300">
                React • Spring • Flutter
              </span>
            </div>
          </div>

          {/* Col 3: Engineering Verticals */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Engineering Design
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#engineering-services" className="hover:text-sky-400 transition-colors">AutoCAD 2D & 3D Drafting</a></li>
              <li><a href="#engineering-services" className="hover:text-sky-400 transition-colors">Pressure Vessels (ASME Sec VIII)</a></li>
              <li><a href="#engineering-services" className="hover:text-sky-400 transition-colors">Heat Exchangers (TEMA / ASME)</a></li>
              <li><a href="#engineering-services" className="hover:text-sky-400 transition-colors">Storage Tanks (API 650 / 620)</a></li>
              <li><a href="#engineering-services" className="hover:text-sky-400 transition-colors">Machine & Component Design</a></li>
              <li><a href="#engineering-services" className="hover:text-sky-400 transition-colors">Civil & Structural Design</a></li>
              <li><a href="#engineering-services" className="hover:text-sky-400 transition-colors">Piping Works & AVEVA E3D</a></li>
            </ul>
          </div>

          {/* Col 4: Digital Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Software & Digital
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#software-services" className="hover:text-amber-400 transition-colors">Web Applications & Portals</a></li>
              <li><a href="#software-services" className="hover:text-amber-400 transition-colors">Admin Panels & CRM</a></li>
              <li><a href="#software-services" className="hover:text-amber-400 transition-colors">ERP & Business Management</a></li>
              <li><a href="#software-services" className="hover:text-amber-400 transition-colors">Flutter Mobile Apps (iOS/Android)</a></li>
              <li><a href="#software-services" className="hover:text-amber-400 transition-colors">Secure RBAC & Cloud Ops</a></li>
              <li><a href="#software-services" className="hover:text-amber-400 transition-colors">E-Commerce & Marketplaces</a></li>
              <li><a href="#training" className="hover:text-amber-400 transition-colors">Industrial Training Academy</a></li>
            </ul>
          </div>

          {/* Col 5: Quick Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Inquiries & RFQs
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>info@shreeengineers.com</span>
              </div>
              <div className="flex items-start gap-2 text-slate-400 text-[11px] pt-1">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>Industrial Complex, Phase II, Pune / Navi Mumbai, MH</span>
              </div>
            </div>

            <button
              onClick={() => onOpenQuote()}
              className="mt-3 w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 shadow-sm"
            >
              Request Quick Quote
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Shree Engineers. All Rights Reserved. Engineered for Precision.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-sky-400 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
