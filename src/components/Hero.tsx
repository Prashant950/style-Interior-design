import React from 'react';
import { ArrowRight, ChevronDown, MapPin, Clock, Phone, Sparkles } from 'lucide-react';
import { BusinessSettings } from '../types';

interface HeroProps {
  settings: BusinessSettings;
  onOpenEnquiry: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  settings,
  onOpenEnquiry,
  onExploreProjects
}) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background Architectural Image with subtle scale */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
          alt="Style Well DYD Luxury Interior Architecture in Lucknow"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim for WCAG contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/75 to-black/70" />
        <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Brand Kicker with Hindi Script */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-[#c5a059]/40 bg-[#121418]/80 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
          <span className="text-xs uppercase tracking-widest text-[#e0c58e] font-sans font-medium">
            {settings.hindiName} · Interior Studio Lucknow
          </span>
        </div>

        {/* Main Display Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.08] max-w-5xl mb-6 text-balance">
          Transforming Spaces. <br className="hidden sm:block" />
          <span className="italic font-normal text-[#e6dfd5]">Creating Experiences.</span>
        </h1>

        {/* Value Proposition */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed mb-10 text-balance">
          Bespoke residential interiors, modern modular kitchens, luxury bedrooms & commercial architecture in Lucknow crafted with turnkey precision.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto px-8 py-4 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#c5a059]/15 hover:shadow-[#c5a059]/30 active:scale-95 cursor-pointer"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreProjects}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium text-xs uppercase tracking-widest border border-white/20 hover:border-white/40 flex items-center justify-center gap-2 transition-all cursor-pointer backdrop-blur-sm"
          >
            <span>Explore Our Projects</span>
          </button>
        </div>

        {/* Trust & Location Strip */}
        <div className="w-full max-w-4xl pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <div className="flex items-start gap-3 p-2">
            <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-white uppercase tracking-wider">Studio Location</p>
              <p className="text-xs text-neutral-400 leading-snug">Ne IIM Rd, near S.M Hospital, Madiyanva, Lucknow</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2">
            <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-white uppercase tracking-wider">Studio Timings</p>
              <p className="text-xs text-neutral-400 leading-snug">Monday – Sunday: 9:30 AM – 9:30 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2">
            <Phone className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-white uppercase tracking-wider">Direct Consultation</p>
              <a href={`tel:${settings.phone.replace(/\s+/g, '')}`} className="text-xs font-mono text-[#c5a059] hover:underline">
                {settings.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1">Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 text-[#c5a059] animate-bounce" />
      </div>
    </section>
  );
};
