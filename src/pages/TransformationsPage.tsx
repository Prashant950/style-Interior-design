import React from 'react';
import { BeforeAfterSection } from '../components/BeforeAfterSection';
import { Sparkles, ArrowRight, CheckCircle2, RefreshCw, Layers, ShieldCheck } from 'lucide-react';
import { BusinessSettings } from '../types';

interface TransformationsPageProps {
  settings: BusinessSettings;
  onOpenEnquiry: (type?: string) => void;
  onNavigate: (pageId: string) => void;
}

export const TransformationsPage: React.FC<TransformationsPageProps> = ({
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
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Before & After Evidence</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-tight max-w-4xl mx-auto mb-4">
            Transformations & Site Makeovers
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            Witness how Style Well DYD reimagines bare concrete structures and dated layouts into architectural masterpieces across Lucknow.
          </p>
        </div>
      </section>

      {/* Main Full Before/After Slider Section */}
      <BeforeAfterSection />

      {/* Renovation Method & Standards */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0e1014] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Turnkey Renovation Approach</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight mb-3">
              How We Execute Turnkey Renovations
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-light">
              Renovating an existing property in Lucknow requires surgical precision, zero structural compromise, and adherence to timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 bg-[#121418] border border-white/10 space-y-3">
              <div className="text-2xl font-serif font-bold text-[#c5a059]">01</div>
              <h3 className="text-base font-serif text-white">Structural & MEP Audit</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We inspect wall load points, electrical loads, plumbing dampness, and conduit channels before initiating any dismantling.
              </p>
            </div>

            <div className="p-6 bg-[#121418] border border-white/10 space-y-3">
              <div className="text-2xl font-serif font-bold text-[#c5a059]">02</div>
              <h3 className="text-base font-serif text-white">Dust-Controlled Demolition</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Systematic debris removal, protective floor shielding for retained areas, and safe disposal without inconveniencing neighbors.
              </p>
            </div>

            <div className="p-6 bg-[#121418] border border-white/10 space-y-3">
              <div className="text-2xl font-serif font-bold text-[#c5a059]">03</div>
              <h3 className="text-base font-serif text-white">Precision Joinery & Handover</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Factory-cut modular components installed with laser leveling, anti-termite treatment, and rigorous QC inspection before handover.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenEnquiry('Renovation Consultation')}
              className="px-8 py-3.5 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-semibold text-xs uppercase tracking-widest inline-flex items-center gap-2 cursor-pointer transition-all shadow-xl active:scale-95"
            >
              <span>Book Renovation Site Inspection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
