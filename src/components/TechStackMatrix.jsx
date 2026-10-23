import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Smartphone, 
  Server, 
  Layers, 
  Check, 
  Terminal,
  Compass
} from 'lucide-react';
import { techStack } from '../data/servicesData';

export default function TechStackMatrix() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies & Tools', icon: Layers },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend & APIs', icon: Server },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'database', label: 'Databases', icon: Database },
    { id: 'engineeringTools', label: 'Engineering & CAD', icon: Compass }
  ];

  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return [
        ...techStack.frontend.map(item => ({ ...item, cat: 'Frontend' })),
        ...techStack.backend.map(item => ({ ...item, cat: 'Backend' })),
        ...techStack.mobile.map(item => ({ ...item, cat: 'Mobile' })),
        ...techStack.database.map(item => ({ ...item, cat: 'Database' })),
        ...techStack.engineeringTools.map(item => ({ ...item, cat: 'Engineering CAD' }))
      ];
    }
    return techStack[activeCategory].map(item => ({ 
      ...item, 
      cat: categories.find(c => c.id === activeCategory)?.label || 'Tech' 
    }));
  };

  const filteredList = getFilteredItems();

  return (
    <section id="technologies" className="py-24 relative bg-slate-50 blueprint-pattern-light border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold mb-3 shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-sky-600" />
            <span>Modern Technology Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technologies & Tools <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-700">We Work With</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            We combine high-performance enterprise software stacks with industry-standard engineering drafting and modeling platforms.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20 border border-sky-600'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredList.map((tech, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-sky-800 uppercase tracking-wider bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200">
                    {tech.cat}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-amber-700">
                    {tech.level}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors mb-1.5">
                  {tech.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {tech.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-mono font-semibold">
                <Check className="w-3.5 h-3.5" />
                <span>Production Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
