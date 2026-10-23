import React, { useState } from 'react';
import { Layers, Compass, Code2, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { portfolioProjects } from '../data/servicesData';

export default function PortfolioGallery({ onOpenQuote }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="portfolio" className="py-24 relative bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold mb-3 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-700">Project Highlights</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Explore our engineering design packages and enterprise software applications delivered for industrial clients.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2.5 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filter === 'all'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
            }`}
          >
            All Projects ({portfolioProjects.length})
          </button>
          <button
            onClick={() => setFilter('engineering')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filter === 'engineering'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>CAD & Engineering</span>
          </button>
          <button
            onClick={() => setFilter('software')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filter === 'software'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Software & Portals</span>
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, idx) => {
            const isEng = project.category === 'Engineering';
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 hover:border-sky-400 p-5 flex flex-col justify-between transition-all duration-200 group hover:-translate-y-1 shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                      isEng 
                        ? 'bg-sky-50 text-sky-800 border-sky-200' 
                        : 'bg-amber-50 text-amber-800 border-amber-200'
                    }`}>
                      {project.tag}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 font-medium">{project.category}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-mono text-emerald-700 font-bold flex items-center gap-1.5 mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.metrics}</span>
                  </div>
                  
                  <button
                    onClick={() => onOpenQuote(project.title)}
                    className="w-full py-2 rounded-lg text-xs font-bold text-slate-700 hover:text-sky-700 bg-slate-100 hover:bg-sky-50 border border-slate-200 flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Request Similar Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
