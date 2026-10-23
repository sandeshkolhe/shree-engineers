import React from 'react';
import { Factory, Globe2, Layers, Users } from 'lucide-react';

export default function StatsBanner() {
  const stats = [
    {
      label: "Engineering Drawings & Models",
      value: "2,500+",
      sub: "AutoCAD & E3D Deliverables",
      icon: Layers,
      color: "text-sky-600",
      bg: "bg-sky-50"
    },
    {
      label: "Process Vessels & Tanks Sized",
      value: "350+",
      sub: "ASME VIII & API 650 Compliant",
      icon: Factory,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      label: "Software & Mobile Deployments",
      value: "120+",
      sub: "Web Apps, ERPs & Flutter",
      icon: Globe2,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      label: "Engineers & Trainees Mentored",
      value: "1,800+",
      sub: "CAD & Full-Stack Bootcamps",
      icon: Users,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <div className="relative border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className={`p-2 rounded-xl ${stat.bg} ${stat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
                    {stat.value}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5 font-medium">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
