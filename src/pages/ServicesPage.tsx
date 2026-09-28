import React from 'react';
import { Service, BusinessSettings } from '../types';
import { ServicesSection } from '../components/ServicesSection';
import { Visualization3DSection } from '../components/Visualization3DSection';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Layers, Wrench, Clock, FileCheck } from 'lucide-react';

interface ServicesPageProps {
  services: Service[];
  settings: BusinessSettings;
  onOpenEnquiry: (serviceTitle?: string) => void;
  onNavigate: (pageId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  services,
  settings,
  onOpenEnquiry,
  onNavigate
}) => {
  return (
    <div className="pt-20 sm:pt-24 space-y-0 animate-fadeIn">
      {/* Page Header Banner */}
      <section className="relative py-14 sm:py-20 bg-[#090a0d] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-[#c5a059]/30 bg-[#121418] text-xs font-mono text-[#c5a059] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-tight max-w-4xl mx-auto mb-4">
            Interior Design & Architecture Services
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            From single room transformations to multi-floor luxury villas & corporate offices in Lucknow, explore our comprehensive end-to-end capabilities.
          </p>
        </div>
      </section>

      {/* Main Full Services Grid */}
      <ServicesSection
        services={services}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 3D CGI Visualization Walkthrough Process */}
      <Visualization3DSection
        onOpenEnquiry={() => onOpenEnquiry('3D Visualization Consultation')}
      />

      {/* Turnkey Scope & Deliverables Table */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0b0c0e] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Turnkey Scope</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight mb-3">
              What Is Included In Our Turnkey Package
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-light">
              Clear accountability with zero hidden costs. Here is everything we manage from concept to handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 bg-[#121418] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold font-serif text-white border-b border-white/10 pb-3">
                <FileCheck className="w-4 h-4 text-[#c5a059]" />
                <span>Phase 01: Concept & 3D Plans</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" /> Precise millimeter on-site measurements</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" /> 2D Furniture & Spatial Layout options</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" /> Photorealistic 3D CGI views of all rooms</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" /> Itemized BOQ & material specification list</li>
              </ul>
            </div>

            <div className="p-6 bg-[#121418] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold font-serif text-white border-b border-white/10 pb-3">
                <Wrench className="w-4 h-4 text-[#c5a059]" />
                <span>Phase 02: On-Site Execution</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" /> Civil dismantling & false ceiling framing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" /> Electrical rewiring & plumbing alignment</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" /> Custom modular carpentry with German fittings</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" /> Italian stone polishing & PU/Duco paint finishes</li>
              </ul>
            </div>

            <div className="p-6 bg-[#121418] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold font-serif text-white border-b border-white/10 pb-3">
                <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                <span>Phase 03: Styling & Handover</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" /> Soft furnishings, curtains & custom rugs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" /> Chandelier & accent lighting installation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" /> Complete multi-stage deep cleaning</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059] shrink-0" /> Formal warranty certificates & key handover</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
