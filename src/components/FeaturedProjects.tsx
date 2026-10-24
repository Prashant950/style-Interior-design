import React, { useState } from 'react';
import { ArrowRight, Eye, MapPin, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface FeaturedProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenEnquiry: (projectTitle?: string) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects,
  onSelectProject,
  onOpenEnquiry
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Residential',
    'Modular Kitchen',
    'Living Room',
    'Bedroom',
    'Commercial',
    'Renovation'
  ];

  const publishedProjects = projects.filter((p) => p.status === 'published');

  const filteredProjects =
    selectedCategory === 'All'
      ? publishedProjects
      : publishedProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-[#0e1014] relative border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-2 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
              Featured Works in Lucknow
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light">
            Every project is an exploration of light, refined materials, ergonomic flow, and timeless spatial beauty.
          </p>
        </div>

        {/* Interactive Filter Tabs (Buttons with counts) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 scrollbar-none">
          {categories.map((cat) => {
            const count = cat === 'All'
              ? publishedProjects.length
              : publishedProjects.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all border cursor-pointer flex items-center gap-2 ${
                  selectedCategory === cat
                    ? 'bg-[#c5a059] text-black border-[#c5a059] shadow-lg shadow-[#c5a059]/20 font-bold'
                    : 'bg-[#14161c] text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  selectedCategory === cat ? 'bg-black/25 text-black' : 'bg-white/10 text-neutral-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Architectural Grid - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#121418] border border-white/10 hover:border-[#c5a059]/60 transition-all duration-300 rounded-xl overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Image Container with zoom */}
              <div 
                onClick={() => onSelectProject(project)}
                className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-neutral-900 cursor-pointer"
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  loading="lazy"
                  decoding="async"
                />
                {/* Dark Hover Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Floating Category tag */}
                <div className="absolute top-3 left-3 text-[10px] font-mono tracking-wider text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                  {project.category} · {project.style}
                </div>

                {project.budgetRange && (
                  <div className="absolute top-3 right-3 text-[10px] font-mono tracking-wider text-[#e0c58e] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-[#c5a059]/30">
                    {project.budgetRange}
                  </div>
                )}

                {/* View Project Pill on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="px-4 py-2 bg-[#c5a059] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-2xl rounded-sm">
                    <Eye className="w-4 h-4" />
                    <span>Inspect 3D Views</span>
                  </span>
                </div>
              </div>

              {/* Project Card Metadata */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[11px] text-[#c5a059] mb-1.5 font-mono">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>

                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="text-base sm:text-lg font-serif text-white hover:text-[#c5a059] transition-colors line-clamp-1 mb-2 cursor-pointer"
                    title={project.title}
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {project.features && project.features.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.features.slice(0, 2).map((feat, i) => (
                        <span key={i} className="text-[10px] bg-white/5 text-neutral-300 border border-white/5 px-2 py-0.5 rounded font-sans">
                          {feat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Dual Touch Actions for Mobile & Web */}
                <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="py-2 px-2.5 bg-[#c5a059]/15 hover:bg-[#c5a059] text-[#c5a059] hover:text-black border border-[#c5a059]/40 hover:border-[#c5a059] rounded text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
                  >
                    <Eye className="w-3.5 h-3.5 shrink-0" />
                    <span>View Photos</span>
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(project.title)}
                    className="py-2 px-2.5 bg-[#1a1c24] hover:bg-[#252834] text-white hover:text-[#c5a059] border border-white/10 hover:border-[#c5a059]/40 rounded text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if category has no projects */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-white/5 bg-[#121418] p-8">
            <p className="text-neutral-400 text-sm mb-4">No projects listed under "{selectedCategory}" currently.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="px-4 py-2 bg-white/10 text-white text-xs uppercase tracking-wider hover:bg-white/20"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
