import React from 'react';
import { GalleryItem, BusinessSettings } from '../types';
import { GallerySection } from '../components/GallerySection';
import { StylesSection } from '../components/StylesSection';
import { Visualization3DSection } from '../components/Visualization3DSection';
import { Sparkles, Images, ArrowRight } from 'lucide-react';

interface GalleryPageProps {
  gallery: GalleryItem[];
  settings: BusinessSettings;
  onOpenEnquiry: (type?: string) => void;
  onNavigate: (pageId: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  gallery,
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
            <Images className="w-3.5 h-3.5" />
            <span>Visual Inspiration Atelier</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-tight max-w-4xl mx-auto mb-4">
            Inspiration Gallery & Moments
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            A curated visual archive of bespoke joinery, Statuario marble veining, cove lighting, and luxury finishes crafted in Lucknow.
          </p>
        </div>
      </section>

      {/* Main Categorized Photo Masonry Gallery with Lightbox */}
      <GallerySection gallery={gallery} />

      {/* Curated Aesthetic Styles Section */}
      <StylesSection
        onOpenEnquiry={(style) => onOpenEnquiry(style || 'Design Style Consultation')}
      />

      {/* 3D CGI Walkthrough Previews */}
      <Visualization3DSection
        onOpenEnquiry={() => onOpenEnquiry('3D Walkthrough Consultation')}
      />
    </div>
  );
};
