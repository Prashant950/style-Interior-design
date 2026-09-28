import React from 'react';
import { BusinessSettings } from '../types';
import { IntroSection } from '../components/IntroSection';
import { DesignProcessSection } from '../components/DesignProcessSection';
import { Sparkles, ShieldCheck, Ruler, Compass, Award, CheckCircle2, ArrowRight, MapPin } from 'lucide-react';

interface AboutPageProps {
  settings: BusinessSettings;
  onOpenEnquiry: (type?: string) => void;
  onNavigate: (pageId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
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
            <span>Studio Heritage & Philosophy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-tight max-w-4xl mx-auto mb-4">
            About Style Well DYD
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            {settings.hindiName} — Lucknow's premier turnkey interior architecture studio along Ne IIM Road, specializing in bespoke residential & commercial transformations.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Brand Story */}
      <IntroSection
        settings={settings}
        onOpenEnquiry={() => onOpenEnquiry('About Studio Consultation')}
      />

      {/* 7-Step Design Execution Journey */}
      <DesignProcessSection
        onOpenEnquiry={() => onOpenEnquiry('7-Step Consultation')}
      />

      {/* Quality & Craftsmanship Pillars */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0b0c0e] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Uncompromised Quality</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight mb-3">
              Why Lucknow Chooses Style Well DYD
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-light">
              We bridge the gap between visionary architectural concepts and on-site millimeter-level carpentry precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 bg-[#121418] border border-white/5 hover:border-[#c5a059]/40 transition-all">
              <div className="w-12 h-12 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center mb-5 text-[#c5a059]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-white mb-2">Turnkey Accountability</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                From initial 3D design to civil work, electricals, plumbing, custom carpentry, and final deep cleaning, you have one point of contact.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-[#121418] border border-white/5 hover:border-[#c5a059]/40 transition-all">
              <div className="w-12 h-12 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center mb-5 text-[#c5a059]">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-white mb-2">German & Italian Fittings</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                We exclusively specify Blum, Hettich, Hafele hardware, BWR waterproof plywood, and authentic Italian Statuario stone with verified warranties.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-[#121418] border border-white/5 hover:border-[#c5a059]/40 transition-all">
              <div className="w-12 h-12 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center mb-5 text-[#c5a059]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-white mb-2">Photorealistic 3D CGI</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Experience your home before a single nail is hammered. Accurate lighting studies, texture simulations, and layout walkthroughs.
              </p>
            </div>
          </div>

          {/* Bottom Banner CTA */}
          <div className="mt-12 p-8 bg-[#181a20] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-serif text-white mb-1">Ready to discuss your Lucknow residence?</h4>
              <p className="text-xs text-neutral-400">Our senior designers are ready to blueprint your spatial transformation.</p>
            </div>
            <button
              onClick={() => onOpenEnquiry('About Page Consultation')}
              className="px-6 py-3 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-semibold text-xs uppercase tracking-widest shrink-0 transition-all cursor-pointer shadow-lg"
            >
              Book Free Site Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
