import React from 'react';
import { Layers, Box, Eye, CheckCircle2, ArrowRight } from 'lucide-react';

interface Visualization3DSectionProps {
  onOpenEnquiry: () => void;
}

export const Visualization3DSection: React.FC<Visualization3DSectionProps> = ({
  onOpenEnquiry
}) => {
  return (
    <section className="py-24 bg-[#0e1014] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden border border-white/10 shadow-2xl bg-[#121418]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
                alt="3D Photorealistic Interior Architectural Visualization in Lucknow"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 border border-[#c5a059]/40 text-xs font-mono uppercase tracking-wider text-[#c5a059] flex items-center gap-1.5">
                <Box className="w-3.5 h-3.5" />
                <span>3D CGI Architectural Walkthrough</span>
              </div>
            </div>

            {/* Sub-strip with concept boards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[16/9] border border-white/10 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80"
                  alt="Lighting and Texture Study"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 text-[10px] font-mono text-white">
                  Lighting & Shadow Modeling
                </div>
              </div>

              <div className="relative aspect-[16/9] border border-white/10 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
                  alt="Material Palette Board"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 text-[10px] font-mono text-white">
                  CAD Precision Dimensioning
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium">
              <Layers className="w-3.5 h-3.5" />
              <span>Zero-Surprise Execution</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif text-white leading-tight">
              See Your Space in 3D <br />
              <span className="italic text-[#c5a059]">Before We Build</span>
            </h2>

            <p className="text-neutral-300 text-sm leading-relaxed">
              Gone are the days of guesswork and costly on-site demolition. With Style Well DYD, you experience millimeter-accurate 
              3D photorealistic renderings of your Lucknow property.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Exact Lighting Simulation</h4>
                  <p className="text-xs text-neutral-400">See how warm cove LED strips, natural window light, and chandeliers illuminate every corner.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Real Material Textures</h4>
                  <p className="text-xs text-neutral-400">Accurate representation of marble veining, fluted wood profiles, fabric weaves, and paint sheens.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Ergonomic Spatial Clearance</h4>
                  <p className="text-xs text-neutral-400">Verify kitchen aisle clearances, wardrobe door swing radiuses, and seating comfort prior to carpentry.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-semibold text-xs uppercase tracking-widest inline-flex items-center gap-2 cursor-pointer transition-all"
              >
                <span>Request 3D Design Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
