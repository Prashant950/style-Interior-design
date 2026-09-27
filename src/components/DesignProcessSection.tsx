import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { designSteps } from '../data/mockData';

interface DesignProcessSectionProps {
  onOpenEnquiry: () => void;
}

export const DesignProcessSection: React.FC<DesignProcessSectionProps> = ({
  onOpenEnquiry
}) => {
  return (
    <section className="py-24 bg-[#0e1014] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Systematic Execution</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              Our 7-Step Design Journey
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light">
            Transparent milestones, photorealistic 3D previews, and white-glove site delivery without stress.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {designSteps.map((step, idx) => (
            <div
              key={step.number}
              className={`p-6 bg-[#121418] border border-white/5 hover:border-[#c5a059]/40 transition-colors flex flex-col justify-between relative group ${
                idx === 6 ? 'md:col-span-2 lg:col-span-1 xl:col-span-2 bg-[#16181f] border-[#c5a059]/30' : ''
              }`}
            >
              <div>
                {/* Step Number */}
                <div className="text-3xl font-serif font-bold text-[#c5a059] mb-4 opacity-75 group-hover:opacity-100 transition-opacity">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-base font-serif text-white mb-2 group-hover:text-[#c5a059] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Progress Notch */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                <span>Phase 0{idx + 1}</span>
                <span className="text-[#c5a059]">Milestone</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA prompt */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenEnquiry}
            className="px-8 py-3.5 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-semibold text-xs uppercase tracking-widest inline-flex items-center gap-2 cursor-pointer transition-all shadow-xl"
          >
            <span>Begin Step 01 With Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
