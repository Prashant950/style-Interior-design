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
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85',
    title: 'Luxury Living Sanctuaries',
    tag: 'Living & Dining Hall'
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2000&q=85',
    title: 'German Modular Kitchens',
    tag: 'Blum Hardware & Quartz'
  },
  {
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85',
    title: 'Master Bedroom Suites',
    tag: 'Acoustic Fluted Paneling'
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

  return (
    <section className="relative min-h-[90vh] lg:min-h-[94vh] flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 pb-8 sm:pb-12 bg-[#090a0d]">
      {/* Dynamic Background Image Layers with Smooth Cross-fade */}
      <div className="absolute inset-0 z-0">
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-black/20 to-black/35" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

        {/* Soft Warm Ambient Gold Glow Center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-[#c5a059]/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Hero Center Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center my-auto pt-4 sm:pt-8 drop-shadow-[0_2px_15px_rgba(0,0,0,0.85)]">
        {/* Top Status & Brand Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 mb-3 sm:mb-6 rounded-full border border-[#c5a059]/30 bg-[#121418]/90 backdrop-blur-md shadow-lg shadow-black/40 animate-fadeIn">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#e0c58e] font-sans font-semibold">
            Lucknow Turnkey Interior Studio
          </span>
        </div>

        {/* Display Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.12] max-w-4xl mb-3 sm:mb-5 text-balance drop-shadow-md">
          Transforming Spaces.{' '}
          <br className="hidden sm:inline" />
          <span className="italic font-normal bg-gradient-to-r from-[#ffffff] via-[#e6dfd5] to-[#c5a059] bg-clip-text text-transparent">
            Creating Experiences.
          </span>
        </h1>

        {/* Narrative Subtitle */}
        <p className="text-xs sm:text-base md:text-lg text-neutral-200 max-w-2xl font-light leading-relaxed mb-5 sm:mb-8 text-balance">
          Bespoke residences, modern modular kitchens, luxury bedrooms & commercial architecture in Lucknow crafted with turnkey precision.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 w-full sm:w-auto mb-5 sm:mb-8">
          <button
            onClick={() => onOpenEnquiry('Home Interior')}
            className="w-full sm:w-auto px-6 sm:px-9 py-3 sm:py-4 bg-gradient-to-r from-[#c5a059] to-[#d8b46d] hover:brightness-110 text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#c5a059]/25 hover:shadow-[#c5a059]/40 active:scale-95 cursor-pointer rounded-sm"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          <button
            onClick={onExploreProjects}
            className="w-full sm:w-auto px-6 sm:px-9 py-2.5 sm:py-4 bg-[#14161c]/80 hover:bg-[#1a1d24] text-white font-semibold text-xs uppercase tracking-widest border border-white/20 hover:border-[#c5a059]/60 flex items-center justify-center gap-2 transition-all cursor-pointer backdrop-blur-md active:scale-95 shadow-lg rounded-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Explore Portfolio</span>
          </button>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center gap-2">
          {heroSlides.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                currentSlide === idx
                  ? 'w-7 sm:w-8 bg-[#c5a059] shadow-[0_0_8px_#c5a059]'
                  : 'w-2 bg-white/25 hover:bg-white/50'
              }`}
              title={slide.title}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Floating Glassmorphic Trust Metric Strip */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-3 sm:mt-6 mb-2 sm:mb-0">
        <div className="bg-[#121418]/85 backdrop-blur-xl border border-white/10 p-2.5 sm:p-5 shadow-2xl rounded-lg grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6 divide-y-0 sm:divide-x divide-white/10">
          {/* Stat 1 */}
          <div className="flex items-center gap-2.5 sm:gap-3 p-1">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0">
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c5a059]" />
            </div>
            <div className="text-left">
              <div className="text-xs sm:text-base font-bold font-mono text-white leading-tight">250+</div>
              <p className="text-[9px] sm:text-[11px] text-neutral-400 font-medium">Delivered Spaces</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-2.5 sm:gap-3 p-1 sm:pl-4">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c5a059]" />
            </div>
            <div className="text-left">
              <div className="text-xs sm:text-base font-bold font-mono text-white leading-tight">100%</div>
              <p className="text-[9px] sm:text-[11px] text-neutral-400 font-medium">3D Walkthroughs</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-2.5 sm:gap-3 p-1 sm:pl-4">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c5a059]" />
            </div>
            <div className="text-left">
              <div className="text-xs sm:text-base font-bold font-mono text-white leading-tight">10-Year</div>
              <p className="text-[9px] sm:text-[11px] text-neutral-400 font-medium">Hardware Warranty</p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-2.5 sm:gap-3 p-1 sm:pl-4">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c5a059] fill-[#c5a059]" />
            </div>
            <div className="text-left">
              <div className="text-xs sm:text-base font-bold font-mono text-white leading-tight">4.9 ★</div>
              <p className="text-[9px] sm:text-[11px] text-neutral-400 font-medium">Lucknow Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
