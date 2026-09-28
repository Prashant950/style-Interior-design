import React, { useState, useEffect, useRef } from 'react';
import { X, MapPin, Sparkles, Check, ArrowRight, Layers, Palette } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenEnquiry: (projectTitle?: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenEnquiry
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      if (containerRef.current) {
        containerRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  const allImages = [project.coverImage, ...(project.galleryImages || [])];
  const currentImage = allImages[activeImageIndex] || project.coverImage;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div className="relative w-full max-w-5xl bg-[#121418] border border-white/15 shadow-2xl my-8 overflow-hidden animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-white bg-black/60 hover:bg-black/90 p-2 border border-white/20 transition-colors cursor-pointer"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Cinematic Image Stage */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-neutral-950 overflow-hidden">
          <img
            src={currentImage}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-black/40" />

          {/* Floating Category Info */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#c5a059] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{project.location}</span>
                <span>·</span>
                <span>{project.category}</span>
                <span>·</span>
                <span>{project.style}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenEnquiry(project.title);
              }}
              className="px-5 py-2.5 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Inquire This Look</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Thumbnail Navigation Bar */}
        {allImages.length > 1 && (
          <div className="flex items-center gap-2 p-3 bg-[#0b0c0e] border-b border-white/10 overflow-x-auto scrollbar-none">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-20 h-14 shrink-0 overflow-hidden border-2 cursor-pointer transition-all ${
                  activeImageIndex === idx ? 'border-[#c5a059] scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        )}

        {/* Details & Architecture Specifications */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[50vh] overflow-y-auto">
          {/* Overview & Concept */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-sm uppercase font-mono tracking-widest text-[#c5a059]">
                Architectural Concept
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {project.description}
              </p>
              {project.concept && (
                <div className="p-4 bg-[#181a20] border-l-2 border-[#c5a059] text-xs text-neutral-300 italic">
                  "{project.concept}"
                </div>
              )}
            </div>

            <div className="md:col-span-5 space-y-4 bg-[#181a20] p-5 border border-white/5">
              <h4 className="text-xs uppercase font-mono tracking-wider text-white">
                Project Parameters
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5 text-neutral-400">
                  <span>Category</span>
                  <span className="text-white font-medium">{project.category}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5 text-neutral-400">
                  <span>Design Style</span>
                  <span className="text-white font-medium">{project.style}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5 text-neutral-400">
                  <span>Location</span>
                  <span className="text-white font-medium">{project.location}</span>
                </div>
                {project.budgetRange && (
                  <div className="flex justify-between py-1 border-b border-white/5 text-neutral-400">
                    <span>Budget Scope</span>
                    <span className="text-[#c5a059] font-mono">{project.budgetRange}</span>
                  </div>
                )}
                {project.completionDate && (
                  <div className="flex justify-between py-1 text-neutral-400">
                    <span>Completion</span>
                    <span className="text-white font-mono">{project.completionDate}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Materials & Finishes */}
          {project.materials && project.materials.length > 0 && (
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#c5a059] mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>Materials & Spec Sheet</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.materials.map((mat, i) => (
                  <div key={i} className="p-3 bg-[#181a20] border border-white/5 text-xs text-neutral-300">
                    {mat}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Color Palette */}
          {project.colorPalette && project.colorPalette.length > 0 && (
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#c5a059] mb-3">
                <Palette className="w-3.5 h-3.5" />
                <span>Curation Color Swatches</span>
              </div>
              <div className="flex items-center gap-3">
                {project.colorPalette.map((col, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span
                      className="w-7 h-7 rounded border border-white/20 shadow-inner"
                      style={{ backgroundColor: col }}
                    />
                    <span className="text-[11px] font-mono text-neutral-400">{col}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#c5a059] mb-3">
                Key Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                {project.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
