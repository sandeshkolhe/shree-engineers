import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import EngineeringServices from './components/EngineeringServices';
import SoftwareServices from './components/SoftwareServices';
import TechStackMatrix from './components/TechStackMatrix';
import TrainingSection from './components/TrainingSection';
import WhyChooseUs from './components/WhyChooseUs';
import PortfolioGallery from './components/PortfolioGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('');

  const handleOpenQuote = (serviceName = '') => {
    setSelectedServiceForQuote(serviceName);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col relative selection:bg-sky-500 selection:text-white">
      {/* Top sticky navigation bar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* Industrial & Digital Metrics Banner */}
        <StatsBanner />

        {/* 1. Engineering Design Services (AutoCAD 2D/3D, Pressure Vessels, Heat Exchangers, Storage Tanks, Machine Design, Civil & Piping E3D) */}
        <EngineeringServices onOpenQuote={handleOpenQuote} />

        {/* 2. Software & Digital Solutions (Web Apps, ERP, CRM, Mobile Apps, RBAC, E-commerce, APIs, Cloud) */}
        <SoftwareServices onOpenQuote={handleOpenQuote} />

        {/* 3. Technologies We Work With (React, TypeScript, Java, Spring Boot, .NET, Flutter, SQL, Mongo, AutoCAD, E3D) */}
        <TechStackMatrix />

        {/* 4. Industrial Training Programmes (CAD, Piping E3D, ASME Vessels, Full-Stack Bootcamp) */}
        <TrainingSection onOpenQuote={handleOpenQuote} />

        {/* 5. Why Choose Shree Engineers? (5 Core Pillars) */}
        <WhyChooseUs onOpenQuote={handleOpenQuote} />

        {/* 6. Featured Project Highlights / Portfolio */}
        <PortfolioGallery onOpenQuote={handleOpenQuote} />

        {/* 7. Contact Us, FAQs & Direct Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive Quotation & Inquiries Modal */}
      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={handleCloseQuote} 
        initialService={selectedServiceForQuote} 
      />

      {/* Floating Action Button (WhatsApp Quick Inquiry) */}
      <aside aria-label="Floating WhatsApp Inquiry" className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/919876543210?text=Hello%20Shree%20Engineers,%20I%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl hover:shadow-emerald-600/40 hover:scale-105 transition-all flex items-center justify-center group"
          title="Chat with Shree Engineers on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold px-0 group-hover:px-2">
            WhatsApp Inquiry
          </span>
        </a>
      </aside>
    </div>
  );
}
