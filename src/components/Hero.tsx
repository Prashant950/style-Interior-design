import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Award, 
  Star, 
  Phone, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown,
  Play
} from 'lucide-react';
import { BusinessSettings } from '../types';

interface HeroProps {
  settings: BusinessSettings;
  onOpenEnquiry: (projectType?: string) => void;
  onExploreProjects: () => void;
}

const heroSlides = [
  {
    image: '/images/acme/tv-unit-paneling.png',
    title: 'Biophilic TV Media Walls & Fluted Louvers',
    tag: 'Purania, Sector K, Aliganj'
  },
  {
    image: '/images/acme/designer-false-ceiling.png',
    title: 'Designer Terracotta & POP False Ceilings',
    tag: 'Warm Cove Profile Lighting'
  },
  {
    image: '/images/acme/office-studio-interior.png',
    title: 'Executive Workspaces & Studio Fit-outs',
    tag: 'Opp. Dilkash Plaza, Lucknow'
  },
  {
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85',
    title: 'Luxury Villa & Penthouse Sanctuaries',
    tag: 'Turnkey Architecture Lucknow'
  }
];

export const Hero: React.FC<HeroProps> = ({
  settings,
  onOpenEnquiry,
  onExploreProjects
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const cleanPhone = settings.phone.replace(/[^0-9]/g, '');
  const formattedPhone = cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone;

  const scrollToStats = () => {
    const element = document.getElementById('trust-metrics');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Full-Screen Visual Hero Stage (100% Full Viewport on Mobile & Laptop) */}
      <section className="relative min-h-[100svh] h-[100svh] sm:min-h-screen sm:h-screen flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 pb-4 sm:pb-8 bg-[#090a0d]">
        {/* Dynamic Background Image Layers with Smooth Cross-fade */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
              style={{ transitionProperty: 'opacity, transform' }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}

          {/* Subtle Light Scrim for crystal-clear background image visibility across full screen */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-black/35 to-black/50" />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

          {/* Soft Warm Ambient Gold Glow Center */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[550px] h-80 sm:h-[550px] bg-[#c5a059]/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        {/* Main Hero Center Content (Spacious, Well-Proportioned & Visually Rich) */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-1 flex flex-col items-center justify-center pt-8 sm:pt-4 pb-4 sm:pb-8 drop-shadow-[0_2px_15px_rgba(0,0,0,0.85)]">
          {/* Top Status & Brand Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 mb-3 sm:mb-5 rounded-full border border-[#c5a059]/40 bg-[#121418]/90 backdrop-blur-md shadow-lg shadow-black/40 animate-fadeIn">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#e0c58e] font-sans font-semibold">
              5.0 ★ Rated · Interior Designer in Aliganj, Lucknow
            </span>
          </div>

          {/* Display Headline */}
          <h1 className="text-[27px] sm:text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.2] sm:leading-[1.12] max-w-4xl mb-3 sm:mb-5 text-balance drop-shadow-md">
            {settings.businessName}{' '}
            <br className="hidden sm:inline" />
            <span className="italic font-normal bg-gradient-to-r from-[#ffffff] via-[#e6dfd5] to-[#c5a059] bg-clip-text text-transparent">
              {settings.tagline}
            </span>
          </h1>

          {/* Narrative Subtitle - Sized up so the screen looks rich, complete, and attractive */}
          <p className="text-[15.5px] sm:text-lg md:text-xl text-neutral-100/95 max-w-2xl font-normal sm:font-light leading-relaxed mb-6 sm:mb-8 text-balance">
            Lucknow's 5.0★ interior design studio. Turnkey luxury living rooms, biophilic vertical garden walls, designer false ceilings, and modular kitchens opposite Dilkash Plaza, Aliganj.
          </p>

          {/* Action CTAs - Shifted lower with ample breathing room to perfectly balance the screen */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto mt-4 sm:mt-7 mb-4 sm:mb-6">
            <button
              onClick={() => onOpenEnquiry('Home Interior')}
              className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#c5a059] to-[#d8b46d] hover:brightness-110 text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#c5a059]/25 hover:shadow-[#c5a059]/40 active:scale-95 cursor-pointer rounded-sm"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <button
              onClick={onExploreProjects}
              className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 bg-[#14161c]/85 hover:bg-[#1a1d24] text-white font-semibold text-xs uppercase tracking-widest border border-white/20 hover:border-[#c5a059]/60 flex items-center justify-center gap-2 transition-all cursor-pointer backdrop-blur-md active:scale-95 shadow-lg rounded-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Explore Portfolio</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Dedicated 250+ Trust & Authority Section (Below Screen Fold on Mobile & Laptop) */}
      <section id="trust-metrics" className="relative z-20 bg-gradient-to-b from-[#0b0c0e] via-[#101217] to-[#0b0c0e] border-y border-white/10 py-10 sm:py-16 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Micro Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Track Record in Lucknow</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-serif text-white tracking-tight">
              Crafting Luxury Living Spaces with Trust & Precision
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-light mt-1.5">
              Turnkey interior architecture delivered opposite Dilkash Plaza, Aliganj and prestigious Lucknow addresses.
            </p>
          </div>

          {/* 4 Distinct High-Authority Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {/* Stat 1 */}
            <div className="bg-[#14161c]/90 hover:bg-[#181b22] border border-white/10 hover:border-[#c5a059]/60 p-4 sm:p-6 rounded-xl transition-all duration-300 group shadow-lg flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#c5a059]/20 to-[#c5a059]/5 border border-[#c5a059]/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(197,160,89,0.2)] group-hover:scale-105 transition-transform">
                  <Layers className="w-5 h-5 text-[#c5a059]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/20">
                  Delivered
                </span>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono text-white tracking-tight group-hover:text-[#c5a059] transition-colors">
                  250+
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-neutral-200 mt-1">
                  Delivered Spaces
                </h4>
                <p className="text-[11px] text-neutral-400 mt-1 font-light leading-relaxed hidden sm:block">
                  Turnkey residences, luxury villas, and corporate studios across Lucknow.
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-[#14161c]/90 hover:bg-[#181b22] border border-white/10 hover:border-[#c5a059]/60 p-4 sm:p-6 rounded-xl transition-all duration-300 group shadow-lg flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#c5a059]/20 to-[#c5a059]/5 border border-[#c5a059]/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(197,160,89,0.2)] group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5 text-[#c5a059]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/20">
                  Preview
                </span>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono text-white tracking-tight group-hover:text-[#c5a059] transition-colors">
                  100%
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-neutral-200 mt-1">
                  3D Walkthroughs
                </h4>
                <p className="text-[11px] text-neutral-400 mt-1 font-light leading-relaxed hidden sm:block">
                  Photorealistic renders before civil and carpentry work begins.
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-[#14161c]/90 hover:bg-[#181b22] border border-white/10 hover:border-[#c5a059]/60 p-4 sm:p-6 rounded-xl transition-all duration-300 group shadow-lg flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#c5a059]/20 to-[#c5a059]/5 border border-[#c5a059]/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(197,160,89,0.2)] group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5 text-[#c5a059]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded border border-[#c5a059]/20">
                  Warranty
                </span>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono text-white tracking-tight group-hover:text-[#c5a059] transition-colors">
                  10-Year
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-neutral-200 mt-1">
                  Hardware Warranty
                </h4>
                <p className="text-[11px] text-neutral-400 mt-1 font-light leading-relaxed hidden sm:block">
                  Backed with authentic European soft-close hinges and hydraulic fittings.
                </p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-[#14161c]/90 hover:bg-[#181b22] border border-white/10 hover:border-[#c5a059]/60 p-4 sm:p-6 rounded-xl transition-all duration-300 group shadow-lg flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#c5a059]/20 to-[#c5a059]/5 border border-[#c5a059]/40 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(197,160,89,0.2)] group-hover:scale-105 transition-transform">
                  <Star className="w-5 h-5 text-[#c5a059] fill-[#c5a059]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  Google 5.0
                </span>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono text-white tracking-tight group-hover:text-[#c5a059] transition-colors">
                  5.0 ★
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-neutral-200 mt-1">
                  5 Google Reviews
                </h4>
                <p className="text-[11px] text-neutral-400 mt-1 font-light leading-relaxed hidden sm:block">
                  100% 5-star customer ratings recorded on Google Maps in Aliganj.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
