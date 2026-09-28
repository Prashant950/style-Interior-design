import React from 'react';
import { Star, Sparkles, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const activeTestimonials = testimonials.filter((t) => t.active);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#0e1014] relative border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-2 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Client Voices</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
              Testimonials from Lucknow
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light">
            Real feedback from homeowners, professionals, and corporate leaders who entrusted their spaces to Style Well DYD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeTestimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 bg-[#121418] border border-white/5 hover:border-[#c5a059]/40 transition-colors flex flex-col justify-between relative group"
            >
              <Quote className="w-8 h-8 text-[#c5a059]/20 absolute top-6 right-6" />

              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 mb-4 text-[#c5a059]">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#c5a059]" />
                  ))}
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed italic mb-6">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-base font-serif text-white">{item.clientName}</h4>
                <div className="text-xs text-neutral-400 mt-0.5 flex items-center gap-1.5 font-mono">
                  <span>{item.location}</span>
                  <span>·</span>
                  <span className="text-[#c5a059]">{item.projectType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
