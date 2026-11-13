import React from 'react';
import { GraduationCap, Clock, Award, CheckCircle2, ArrowRight, BookOpen, FileText } from 'lucide-react';
import { trainingProgrammes } from '../data/servicesData';

export default function TrainingSection({ onOpenQuote }) {
  return (
    <section id="training" className="py-24 relative bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold mb-3 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
            <span>Industry-Oriented Skill Development</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700">Training Programmes</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Bridge the gap between academic theory and real-world industrial practice. Learn directly from practicing piping engineers, ASME equipment designers, and senior software architects.
          </p>
        </div>

        {/* 3 Training Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {trainingProgrammes.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-3xl border border-slate-200 hover:border-sky-400 p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-xl hover:-translate-y-1 group"
            >
              <div>
                {/* Header Badge & Title */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-sky-800 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200">
                    {course.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-amber-700 font-mono font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-sky-700 transition-colors mb-3">
                  {course.title}
                </h3>

                <div className="text-xs text-slate-600 mb-6 flex items-center gap-2 font-mono font-medium">
                  <BookOpen className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>{course.mode}</span>
                </div>

                {/* Curriculum Highlights */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                    Curriculum Highlights:
                  </div>
                  {course.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <div className="text-[11px] text-slate-500 font-medium">
                  <strong className="text-slate-800">Target Audience:</strong> {course.audience}
                </div>

                {course.brochure && (
                  <a
                    href={course.brochure}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-300 shadow-2xs flex items-center justify-center gap-2 transition-colors"
                    title={`Open ${course.title} Syllabus / Brochure PDF`}
                  >
                    <FileText className="w-3.5 h-3.5 text-sky-600" />
                    <span>View Course Brochure (PDF)</span>
                  </a>
                )}

                <button
                  onClick={() => onOpenQuote(`Training: ${course.title}`)}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 shadow-md shadow-sky-600/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Enroll or Inquire</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Training Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-sky-50/80 border border-sky-200 flex flex-wrap items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-600 text-white shadow-xs">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Course Completion Certificate & Placement Guidance</div>
              <div className="text-xs text-slate-600">Work on live industrial drawings, calculation sheets, and real production repos.</div>
            </div>
          </div>
          <a
            href="https://wa.me/918976600537?text=Hello,%20I%20am%20interested%20in%20Shree%20Engineers%20training%20programmes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-sky-700 hover:text-sky-800 underline underline-offset-4"
          >
            Ask for Training Syllabus on WhatsApp →
          </a>
        </div>

      </div>
    </section>
  );
}
