import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Code2, 
  ShieldCheck, 
  Sparkles,
  Compass,
  FileText
} from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 blueprint-pattern-light border-b border-slate-200">
      {/* Background ambient light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-200/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-amber-200/30 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Heavy Engineering Precision Meets Cutting-Edge Software</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              Engineering Design & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-700">
                Digital Enterprise Solutions
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              From <strong>ASME Pressure Vessels</strong>, <strong>Heat Exchangers</strong>, <strong>API 650 Storage Tanks</strong>, and <strong>E3D Piping Works</strong> to full-scale <strong>Enterprise ERPs</strong>, <strong>React/Spring Boot Portals</strong>, and <strong>Mobile Applications</strong>.
            </p>

            {/* Quick feature tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1 font-mono text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-sm flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" /> AutoCAD 2D/3D
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-sm flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" /> ASME Sec VIII & API 650
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-sm flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" /> Web Apps & ERP
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-sm flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" /> Flutter Android & iOS
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-600 via-blue-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 shadow-lg shadow-sky-600/25 hover:shadow-sky-600/40 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="/docs/shree-engineers-autocad-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-300 shadow-sm transition-all flex items-center justify-center gap-2 group"
                title="Open AutoCAD 2D & 3D Corporate Brochure (PDF)"
              >
                <FileText className="w-4 h-4 text-sky-600 group-hover:scale-110 transition-transform" />
                <span>View Brochure (PDF)</span>
              </a>

              <a
                href="#engineering-services"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-sky-500 shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-contrast Professional Live Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer card with clean shadow and gradient border */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-br from-sky-200 via-slate-200 to-amber-200 shadow-xl">
                <div className="bg-white rounded-[22px] p-6 space-y-5 border border-slate-100">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                      <span className="text-xs font-mono text-slate-500 ml-2">shree-engineers-hub.env</span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-50 text-sky-800 border border-sky-200 font-bold">
                      LIVE SPEC
                    </span>
                  </div>

                  {/* Division 1: Industrial CAD & Equipment */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 transition-all group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-sky-100 text-sky-700">
                          <Compass className="w-4 h-4" />
                        </div>
                        <h2 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                          Heavy Engineering & Plant CAD
                        </h2>
                      </div>
                      <span className="text-[10px] font-mono bg-sky-100 text-sky-800 px-2 py-0.5 rounded font-bold">
                        ASME / TEMA / API
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Pressure vessels, Shell & Tube heat exchangers, API 650 storage tanks, and AVEVA E3D 3D piping routing.
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-sky-700 font-mono border-t border-slate-200/80 pt-2 font-medium">
                      <span>✓ 2D/3D Clashing Check</span>
                      <span className="text-slate-500">0.00mm Clash Tol</span>
                    </div>
                  </div>

                  {/* Division 2: Software & Digital Engineering */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-amber-100 text-amber-800">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <h2 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                          Software, ERP & Cloud Portals
                        </h2>
                      </div>
                      <span className="text-[10px] font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">
                        Full-Stack & Mobile
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Custom ERPs, CRM systems, Flutter apps, secure authentication, live analytics, and REST API microservices.
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-amber-800 font-mono border-t border-slate-200/80 pt-2 font-medium">
                      <span>✓ React • Spring • .NET • Flutter</span>
                      <span className="text-slate-500">99.9% Uptime</span>
                    </div>
                  </div>

                  {/* Trust Footer */}
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                    <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Certified Industrial Quality</span>
                    </div>
                    <span className="font-mono text-[11px] text-slate-400 font-bold">ISO • ASME • API</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
