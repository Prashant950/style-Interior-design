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
    <section id="projects" className="py-24 bg-[#0e1014] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              Featured Works in Lucknow
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light">
            Every project is an exploration of light, refined materials, ergonomic flow, and timeless spatial beauty.
          </p>
        </div>

        {/* Interactive Filter Tabs (Buttons with click handlers per skill) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#c5a059] text-black border-[#c5a059]'
                  : 'bg-[#121418] text-neutral-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-[#121418] border border-white/10 hover:border-[#c5a059]/60 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Container with zoom */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                {/* Dark Hover Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                {/* Floating Category tag - clean unboxed per skill */}
                <div className="absolute top-4 left-4 text-[11px] font-mono tracking-wider text-white/90 bg-black/50 backdrop-blur-md px-2 py-1">
                  {project.category} · {project.style}
                </div>

                {/* View Project Pill on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-4 py-2 bg-[#c5a059] text-black font-semibold text-xs uppercase tracking-widest flex items-center gap-2 shadow-2xl">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </span>
                </div>
              </div>

              {/* Project Card Metadata */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-[#c5a059] mb-2 font-mono">
                  <MapPin className="w-3 h-3" />
                  <span>{project.location}</span>
                  {project.budgetRange && (
                    <>
                      <span>·</span>
                      <span>{project.budgetRange}</span>
                    </>
                  )}
                </div>

                <h3 className="text-lg font-serif text-white group-hover:text-[#c5a059] transition-colors line-clamp-1 mb-2">
                  {project.title}
                </h3>

                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-neutral-500 font-mono text-[11px]">
                    {project.completionDate || 'Recent'}
                  </span>
                  <span className="text-[#c5a059] group-hover:underline flex items-center gap-1">
                    <span>Inspect Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
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
