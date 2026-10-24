import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, MapPin, Check, ArrowRight, Layers, Palette, ChevronLeft, ChevronRight, Calendar, DollarSign, Sparkles } from 'lucide-react';
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const allImages = project
    ? [project.coverImage, ...(project.galleryImages || [])].filter(Boolean)
    : [];

  // Reset active image index whenever the opened project changes
  useEffect(() => {
    setActiveImageIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [project?.id]);

  // Lock body scroll cleanly while modal is open
  useEffect(() => {
    if (project) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [project]);

  // Next / Previous Image Navigation Handlers
  const handleNextImage = useCallback(() => {
    if (allImages.length <= 1) return;
    setActiveImageIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
  }, [allImages.length]);

  const handlePrevImage = useCallback(() => {
    if (allImages.length <= 1) return;
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
  }, [allImages.length]);

  // Desktop keyboard controls: Escape to close, Left/Right arrows to flip images
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, handleNextImage, handlePrevImage, onClose]);

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 45; // px threshold

    if (diff > minSwipeDistance) {
      // Swiped Left -> Next
      handleNextImage();
    } else if (diff < -minSwipeDistance) {
      // Swiped Right -> Prev
      handlePrevImage();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Close when clicking directly on the backdrop overlay
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!project) return null;

  const currentImage = allImages[activeImageIndex] || project.coverImage;

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md overflow-y-auto overscroll-contain flex justify-center p-2 sm:p-4 md:p-6 animate-modalFadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Modal Dialog Card (my-auto ensures centered on large screens and no clipping on small screens) */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#121418] border border-white/15 shadow-2xl rounded-2xl flex flex-col my-auto max-h-[94vh] sm:max-h-[90vh] overflow-hidden animate-modalScaleIn"
      >
        {/* Sticky Header Bar - Close button is ALWAYS visible & reachable on laptop and mobile */}
        <div className="sticky top-0 z-30 bg-[#121418]/95 backdrop-blur-md border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-3 shrink-0">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-[#c5a059] mb-0.5">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span className="truncate">{project.location}</span>
              </span>
              <span>·</span>
              <span className="truncate">{project.category}</span>
              {project.style && (
                <>
                  <span>·</span>
                  <span className="truncate">{project.style}</span>
                </>
              )}
            </div>
            <h2
              id="modal-project-title"
              className="text-base sm:text-2xl font-serif text-white tracking-tight leading-snug truncate"
              title={project.title}
            >
              {project.title}
            </h2>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => {
                onClose();
                onOpenEnquiry(project.title);
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer shadow-md active:scale-95"
            >
              <span>Inquire This Look</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* High-visibility Close Button (44x44px touch target) */}
            <button
              onClick={onClose}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-[#c5a059] text-white hover:text-black border border-white/15 hover:border-[#c5a059] transition-all flex items-center justify-center cursor-pointer shadow-lg active:scale-90"
              aria-label="Close Project Modal"
              title="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content Body */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto overscroll-contain divide-y divide-white/5"
        >
          {/* Main Cinematic Image Stage with Touch & Navigation Controls */}
          <div
            className="relative aspect-[16/10] sm:aspect-[21/9] bg-neutral-950 overflow-hidden select-none group"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              key={currentImage}
              src={currentImage}
              alt={`${project.title} - view ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300 animate-fadeIn"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Active Image Indicator Pill */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[10px] sm:text-xs font-mono tracking-wider text-white bg-black/75 backdrop-blur-md px-2.5 py-1 rounded border border-white/15 shadow">
              Photo {activeImageIndex + 1} of {allImages.length}
            </div>

            {/* Previous & Next Image Arrow Buttons */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[#c5a059] text-white hover:text-black border border-white/20 hover:border-[#c5a059] flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-xl active:scale-90 sm:opacity-80 sm:group-hover:opacity-100"
                  aria-label="Previous photo"
                  title="Previous photo (Left arrow)"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  onClick={handleNextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-[#c5a059] text-white hover:text-black border border-white/20 hover:border-[#c5a059] flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm shadow-xl active:scale-90 sm:opacity-80 sm:group-hover:opacity-100"
                  aria-label="Next photo"
                  title="Next photo (Right arrow)"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}

            {/* Mobile Swipe Hint */}
            {allImages.length > 1 && (
              <div className="sm:hidden absolute bottom-2.5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-neutral-300 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10 pointer-events-none">
                Swipe or tap arrows to view photos
              </div>
            )}
          </div>

          {/* Thumbnail Gallery Strip */}
          {allImages.length > 1 && (
            <div className="p-3 bg-[#0c0d11] border-b border-white/10">
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 sm:w-20 h-11 sm:h-14 shrink-0 rounded overflow-hidden border-2 cursor-pointer transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#c5a059] ring-2 ring-[#c5a059]/40 scale-95 opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Details & Architecture Specifications Section */}
          <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
            {/* Overview & Concept */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#c5a059]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Architectural Overview</span>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed font-light">
                  {project.description}
                </p>
                {project.concept && (
                  <div className="p-4 bg-[#181a20] rounded border-l-2 border-[#c5a059] text-xs text-neutral-200 italic leading-relaxed">
                    "{project.concept}"
                  </div>
                )}
              </div>

              {/* Project Parameters Card */}
              <div className="md:col-span-5 bg-[#161820] p-4 sm:p-5 rounded-xl border border-white/10 space-y-3">
                <h4 className="text-xs uppercase font-mono tracking-wider text-white font-semibold">
                  Project Parameters
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-white/5 text-neutral-400">
                    <span>Category</span>
                    <span className="text-white font-medium">{project.category}</span>
                  </div>
                  {project.style && (
                    <div className="flex justify-between py-1 border-b border-white/5 text-neutral-400">
                      <span>Design Style</span>
                      <span className="text-white font-medium">{project.style}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-1 border-b border-white/5 text-neutral-400">
                    <span>Location</span>
                    <span className="text-white font-medium">{project.location}</span>
                  </div>
                  {project.budgetRange && (
                    <div className="flex justify-between py-1 border-b border-white/5 text-neutral-400">
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-[#c5a059]" />
                        <span>Budget Scope</span>
                      </span>
                      <span className="text-[#c5a059] font-mono font-semibold">{project.budgetRange}</span>
                    </div>
                  )}
                  {project.completionDate && (
                    <div className="flex justify-between py-1 text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#c5a059]" />
                        <span>Completion</span>
                      </span>
                      <span className="text-white font-mono">{project.completionDate}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Materials & Spec Sheet */}
            {project.materials && project.materials.length > 0 && (
              <div className="pt-5 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-[#c5a059] mb-3">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Materials & Specifications</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  {project.materials.map((mat, i) => (
                    <div
                      key={i}
                      className="p-3 bg-[#181a20] rounded border border-white/5 text-xs text-neutral-300 font-light flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] shrink-0" />
                      <span className="truncate">{mat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            

            {/* Key Highlights */}
            {project.features && project.features.length > 0 && (
              <div className="pt-5 border-t border-white/10">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#c5a059] mb-3 flex items-center gap-2">
                  <Check className="w-3.5 h-3.5" />
                  <span>Key Project Highlights</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  {project.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#181a20]/60 p-2.5 rounded border border-white/5">
                      <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Action Bar (Guarantees easy closing & consultation request on mobile and laptop) */}
        <div className="sticky bottom-0 z-20 bg-[#121418]/95 backdrop-blur-md border-t border-white/10 p-3 sm:p-4 px-4 sm:px-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-2.5 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/15 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
          >
            <X className="w-3.5 h-3.5" />
            <span>Close Modal</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenEnquiry(project.title);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded bg-[#c5a059] hover:bg-[#d8b46d] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#c5a059]/20 active:scale-95"
          >
            <span>Inquire</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
