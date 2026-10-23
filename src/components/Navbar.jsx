import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Menu, 
  X, 
  ChevronDown, 
  PhoneCall, 
  MessageSquare, 
  Cpu, 
  Code2, 
  ArrowRight
} from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-sm' 
        : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-blue-600 to-amber-500 p-0.5 shadow-md shadow-sky-500/15 group-hover:shadow-sky-500/30 transition-all">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Compass className="w-5 h-5 text-sky-600 group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5 font-sans">
                SHREE <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">ENGINEERS</span>
              </div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-mono font-medium">
                CAD • Heavy Equip • Software
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <a href="#home" className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors">
              Home
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button 
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-sky-600' : 'text-slate-400'}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-[11px] font-bold text-sky-700 uppercase tracking-wider px-3 py-1 font-mono">
                    Engineering Design
                  </div>
                  <a 
                    href="#engineering-services" 
                    onClick={() => setServicesDropdown(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-sky-50 text-slate-700 hover:text-sky-800 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-sky-100/70 border border-sky-200 text-sky-700 group-hover:scale-105 transition-transform">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">CAD, Equipment & Piping</div>
                      <div className="text-xs text-slate-500">AutoCAD 2D/3D, Pressure Vessels, Tanks, E3D</div>
                    </div>
                  </a>

                  <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wider px-3 py-1 mt-2 font-mono border-t border-slate-100 pt-2">
                    Digital Solutions
                  </div>
                  <a 
                    href="#software-services" 
                    onClick={() => setServicesDropdown(false)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50 text-slate-700 hover:text-amber-800 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-amber-100/70 border border-amber-200 text-amber-700 group-hover:scale-105 transition-transform">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Web, ERP & Mobile Apps</div>
                      <div className="text-xs text-slate-500">Enterprise software, React, Spring Boot, Flutter</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a href="#technologies" className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors">
              Tech Stack
            </a>
            <a href="#training" className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors">
              Training
            </a>
            <a href="#why-us" className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors">
              Why Choose Us
            </a>
            <a href="#portfolio" className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Quick Actions & Quote CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="https://wa.me/919876543210?text=Hello%20Shree%20Engineers,%20I%20would%20like%20to%20inquire%20about%20your%20services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-all"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 shadow-md shadow-sky-600/20 transform hover:-translate-y-0.5 transition-all"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-sky-600 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-2">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-800 hover:bg-slate-100 text-sm font-semibold"
            >
              Home
            </a>
            <a 
              href="#engineering-services" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-800 hover:bg-sky-50 text-sm font-semibold flex items-center justify-between"
            >
              <span>Engineering & CAD Services</span>
              <span className="text-[10px] font-mono bg-sky-100 text-sky-800 px-2 py-0.5 rounded font-bold">Core</span>
            </a>
            <a 
              href="#software-services" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-800 hover:bg-amber-50 text-sm font-semibold flex items-center justify-between"
            >
              <span>Software & Digital Solutions</span>
              <span className="text-[10px] font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">Digital</span>
            </a>
            <a 
              href="#technologies" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-800 hover:bg-slate-100 text-sm font-semibold"
            >
              Tech Stack & Standards
            </a>
            <a 
              href="#training" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-800 hover:bg-slate-100 text-sm font-semibold"
            >
              Training Programmes
            </a>
            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-800 hover:bg-slate-100 text-sm font-semibold"
            >
              Why Choose Us
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-800 hover:bg-slate-100 text-sm font-semibold"
            >
              Featured Projects
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-800 hover:bg-slate-100 text-sm font-semibold"
            >
              Contact Us
            </a>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-xl text-center text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-blue-700 shadow-md shadow-sky-600/20"
              >
                Request a Quote
              </button>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-center text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp (+91 98765 43210)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
