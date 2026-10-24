import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { Project, Service, BusinessSettings, Testimonial } from '../types';
import { ArrowRight, Sparkles, Check, Layers, Box, Eye, MapPin, Star, Quote } from 'lucide-react';
import { BeforeAfterSection } from '../components/BeforeAfterSection';

interface HomePageProps {
  settings: BusinessSettings;
  projects: Project[];
  services: Service[];
  testimonials: Testimonial[];
  onNavigate: (pageId: string) => void;
  onOpenEnquiry: (type?: string) => void;
  onSelectProject: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  settings,
  projects,
  services,
  testimonials,
  onNavigate,
  onOpenEnquiry,
  onSelectProject
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', 'Living Room', 'Commercial', 'Residential', 'Modular Kitchen'];
  const publishedProjects = projects.filter((p) => p.status === 'published');
  
  const displayedProjects = selectedCategory === 'All'
    ? publishedProjects
    : publishedProjects.filter((p) => p.category === selectedCategory || p.style?.toLowerCase().includes(selectedCategory.toLowerCase()));

  const featuredServices = services.filter((s) => s.active).slice(0, 3);
  const topReviews = testimonials.filter((t) => t.active).slice(0, 3);

  return (
    <div className="space-y-0 animate-fadeIn">
      {/* 1. Main Hero Stage */}
      <Hero
        settings={settings}
        onOpenEnquiry={onOpenEnquiry}
        onExploreProjects={() => onNavigate('projects')}
      />

      {/* 2. Studio Philosophy Teaser */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0e1014] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium">
                <span className="w-5 h-px bg-[#c5a059]"></span>
                <span>Studio Philosophy</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
                Designing Spaces That <br />
                <span className="italic text-[#c5a059]">Feel Like Home</span>
              </h2>
              <p className="text-neutral-300 text-sm leading-relaxed font-light">
                At <strong className="font-semibold text-white">{settings.businessName} ({settings.hindiName})</strong>, 
                we transform bare brickwork into timeless living sanctuaries. From initial 3D visualization 
                to turnkey site handover, we ensure flawless craftsmanship and transparent estimates in Lucknow.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-semibold text-xs uppercase tracking-widest inline-flex items-center gap-2 cursor-pointer transition-all active:scale-95 shadow-lg"
                >
                  <span>Read Full Studio Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenEnquiry('Consultation')}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs uppercase tracking-widest font-medium cursor-pointer transition-all active:scale-95"
                >
                  Book Free Consultation
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] border border-white/10 shadow-2xl overflow-hidden group">
                <img
                  src="/images/acme/tv-unit-paneling.png"
                  alt="Acme Interiors Architecture Studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="text-[#c5a059] font-mono uppercase tracking-wider">Turnkey Interior Atelier</span>
                  <span className="text-white font-serif">Aliganj · Lucknow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services Teaser */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0b0c0e] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 border-b border-white/10 gap-4 sm:gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tailored Capabilities</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
                Our Core Specialties
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-semibold text-[#c5a059] hover:underline uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer self-start md:self-auto"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-[#121418] border border-white/5 hover:border-[#c5a059]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-serif text-white mb-2 group-hover:text-[#c5a059] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry(service.title)}
                    className="pt-3 border-t border-white/5 text-xs text-[#c5a059] group-hover:text-white uppercase tracking-wider font-semibold inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Portfolio Highlights Teaser - High-End, User-Friendly & Fully Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0e1014] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Selected Architectural Works</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
                Featured Projects in Lucknow
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm max-w-xl font-light mt-1.5">
                Explore real completed spaces engineered by Acme Interiors opposite Dilkash Plaza, Aliganj and across Lucknow.
              </p>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="text-xs font-semibold text-[#c5a059] hover:underline uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer self-start md:self-auto px-3.5 py-2 rounded border border-[#c5a059]/30 hover:border-[#c5a059] hover:bg-[#c5a059]/10 transition-all"
            >
              <span>Explore All {publishedProjects.length} Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Category Filter Pills (User-Friendly & Touch-Optimized) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 scrollbar-none">
            {categories.map((cat) => {
              const count = cat === 'All'
                ? publishedProjects.length
                : publishedProjects.filter((p) => p.category === cat || p.style?.toLowerCase().includes(cat.toLowerCase())).length;
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

          {/* Fully Responsive Architectural Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-[#121418] border border-white/10 hover:border-[#c5a059]/60 transition-all duration-300 rounded-xl overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                {/* Image Container with Touch/Click to View */}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                  {/* Category & Style Badge */}
                  <div className="absolute top-3 left-3 text-[10px] font-mono tracking-wider text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    {project.category} · {project.style}
                  </div>

                  {/* Budget/Date Pill */}
                  {project.budgetRange && (
                    <div className="absolute top-3 right-3 text-[10px] font-mono tracking-wider text-[#e0c58e] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-[#c5a059]/30">
                      {project.budgetRange}
                    </div>
                  )}

                  {/* Visual Indicator: Tap to Inspect Gallery */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span className="px-4 py-2 bg-[#c5a059] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-2xl rounded-sm">
                      <Eye className="w-4 h-4" />
                      <span>Inspect 3D Views</span>
                    </span>
                  </div>
                </div>

                {/* Card Content & Metadata */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location Pin */}
                    <div className="flex items-center gap-1 text-[11px] text-[#c5a059] font-mono mb-1.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-base sm:text-lg font-serif text-white hover:text-[#c5a059] transition-colors line-clamp-1 mb-2 cursor-pointer"
                      title={project.title}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-3">
                      {project.description}
                    </p>

                    {/* Feature Chips */}
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

                  {/* User-Friendly Dual Touch Actions (Always visible on mobile & web) */}
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

          {/* Quick Consultation Ribbon */}
          <div className="mt-8 sm:mt-10 p-4 sm:p-5 bg-[#121418] border border-[#c5a059]/30 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base font-serif text-white font-bold">
                Planning an Interior Renovation or Fitout in Lucknow?
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Visit our design studio opposite Dilkash Plaza, Aliganj or get a free 3D design estimate.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
              <button
                onClick={() => onOpenEnquiry('Home Interior')}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-bold text-xs uppercase tracking-wider rounded transition-all cursor-pointer shadow-lg shadow-[#c5a059]/20"
              >
                Book Site Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Before & After Preview */}
      <BeforeAfterSection />

      {/* 6. Testimonials Strip */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0e1014] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Client Voices</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight mb-3">
              Trusted by Homeowners Across Lucknow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topReviews.map((item) => (
              <div
                key={item.id}
                className="p-6 bg-[#121418] border border-white/5 hover:border-[#c5a059]/40 transition-colors flex flex-col justify-between relative group"
              >
                <Quote className="w-7 h-7 text-[#c5a059]/20 absolute top-5 right-5" />
                <div>
                  <div className="flex items-center gap-1 mb-3 text-[#c5a059]">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#c5a059]" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed italic mb-4">
                    "{item.review}"
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 text-xs">
                  <h4 className="font-serif text-white font-medium">{item.clientName}</h4>
                  <span className="text-[#c5a059] font-mono text-[11px]">{item.location} · {item.projectType}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Quick Studio CTA Banner */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-[#0b0c0e] to-[#121418] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#181a20] border border-[#c5a059]/30 p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-[10px] font-mono text-[#c5a059] uppercase tracking-widest block mb-1">
                ACME INTERIORS · ALIGANJ, LUCKNOW
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-white">
                Ready to transform your home into luxury?
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Schedule a complimentary 3D spatial assessment with our senior interior architects.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenEnquiry('Home Page Consultation')}
                className="px-6 py-3.5 bg-gradient-to-r from-[#c5a059] to-[#d8b46d] text-black font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#c5a059]/20 hover:brightness-110 transition-all cursor-pointer active:scale-95"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
