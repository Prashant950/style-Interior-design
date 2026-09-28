import React from 'react';
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
  const featuredProjects = projects.filter((p) => p.featured || p.status === 'published').slice(0, 3);
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
                At <strong className="font-semibold text-white">Style Well DYD ({settings.hindiName})</strong>, 
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
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                  alt="Style Well DYD Architecture Studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="text-[#c5a059] font-mono uppercase tracking-wider">Turnkey Interior Atelier</span>
                  <span className="text-white font-serif">Ne IIM Rd · Lucknow</span>
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

      {/* 4. Portfolio Highlights Teaser */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#0e1014] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Selected Works</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
                Featured Projects in Lucknow
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="text-xs font-semibold text-[#c5a059] hover:underline uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer self-start md:self-auto"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer bg-[#121418] border border-white/10 hover:border-[#c5a059]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />
                  <div className="absolute top-3 left-3 text-[10px] font-mono tracking-wider text-white bg-black/60 backdrop-blur-md px-2 py-0.5">
                    {project.category}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-4 py-2 bg-[#c5a059] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-2xl">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 text-[11px] text-[#c5a059] font-mono mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-base font-serif text-white group-hover:text-[#c5a059] transition-colors line-clamp-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
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
                STYLE WELL DYD · LUCKNOW
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
                Book Free Consultation
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer active:scale-95"
              >
                Contact Studio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
