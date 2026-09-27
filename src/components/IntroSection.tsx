import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Ruler, Sparkles } from 'lucide-react';
import { BusinessSettings } from '../types';

interface IntroSectionProps {
  settings: BusinessSettings;
  onOpenEnquiry: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({
  settings,
  onOpenEnquiry
}) => {
  return (
    <section id="about" className="py-24 bg-[#0e1014] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story & Editorial Prose */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium">
              <span className="w-6 h-px bg-[#c5a059]"></span>
              <span>Our Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight text-balance">
              Designing Spaces That <br />
              <span className="italic text-[#c5a059]">Feel Like Home</span>
            </h2>

            <p className="text-neutral-300 text-base leading-relaxed font-light">
              At <strong className="font-semibold text-white">Style Well DYD ({settings.hindiName})</strong>, 
              we believe interior design is not merely decoration—it is the art of curating spaces that reflect your personality, 
              amplify comfort, and enhance how you live, work, and host.
            </p>

            <p className="text-neutral-400 text-sm leading-relaxed">
              Based in Lucknow along Ne IIM Road, our dedicated interior studio specializes in bespoke residential residences, 
              ergonomic modular kitchens, luxurious master suites, and modern office interiors. From initial 3D visualization 
              to complete turnkey on-site execution, we manage every detail with transparent craftsmanship and premium materials.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white font-medium text-sm">
                  <Compass className="w-4 h-4 text-[#c5a059]" />
                  <span>Thoughtful Design</span>
                </div>
                <p className="text-xs text-neutral-400">Tailored spatial layouts matching your daily habits.</p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white font-medium text-sm">
                  <Ruler className="w-4 h-4 text-[#c5a059]" />
                  <span>Precision Execution</span>
                </div>
                <p className="text-xs text-neutral-400">German fittings, calibrated alignment, and meticulous finishes.</p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white font-medium text-sm">
                  <Sparkles className="w-4 h-4 text-[#c5a059]" />
                  <span>Quality Materials</span>
                </div>
                <p className="text-xs text-neutral-400">Authentic veneers, BWR waterproof ply, and Italian stone.</p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-white font-medium text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                  <span>Turnkey Assurance</span>
                </div>
                <p className="text-xs text-neutral-400">Single point of accountability from blueprint to handover.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-semibold text-xs uppercase tracking-widest inline-flex items-center gap-2.5 transition-all cursor-pointer"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative aspect-[4/3] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                  alt="Style Well DYD Interior Architectural Excellence"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-xs font-mono text-[#c5a059] uppercase tracking-wider">Turnkey Interior Atelier</p>
                  <p className="text-sm font-serif text-white">Lucknow · Uttar Pradesh</p>
                </div>
              </div>

              {/* Offset Accent Card */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 bg-[#181a20] border border-[#c5a059]/30 p-5 shadow-2xl max-w-xs">
                <p className="text-xs font-serif italic text-neutral-300">
                  "Every room tells a story. We ensure yours speaks of timeless comfort and refined elegance."
                </p>
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-wider text-white">STYLE WELL DYD</span>
                  <span className="text-[10px] text-[#c5a059]">ESTD. LUCKNOW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
