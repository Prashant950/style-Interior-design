import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, ChevronRight } from 'lucide-react';
import { Service } from '../types';

interface ServicesSectionProps {
  services: Service[];
  onOpenEnquiry: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onOpenEnquiry
}) => {
  const [selectedService, setSelectedService] = useState<Service>(services[0] || null);

  const activeServices = services.filter((s) => s.active);

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-[#0b0c0e] relative border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 sm:pb-6 border-b border-white/10 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-2 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
              Bespoke Interior Services
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md font-light">
            Comprehensive turnkey interior architecture & styling solutions for homes, kitchens, and offices across Lucknow.
          </p>
        </div>

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#121418] border border-white/5 hover:border-[#c5a059]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Service Cover Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent opacity-80" />
              </div>

              {/* Service Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif text-white mb-2 group-hover:text-[#c5a059] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => onOpenEnquiry(service.title)}
                    className="text-xs font-semibold text-[#c5a059] group-hover:text-white uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <span className="text-[10px] font-mono text-neutral-500">
                    0{service.order}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Turnkey Guarantee Banner */}
        <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-[#181a20] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-serif text-white mb-1">Looking for a customized turnkey package in Lucknow?</h4>
            <p className="text-xs text-neutral-400">
              We provide fixed transparent estimation, 3D visualization, and dedicated on-site project management.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry('Turnkey Interior Package')}
            className="px-6 py-3 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-semibold text-xs uppercase tracking-widest shrink-0 transition-all cursor-pointer"
          >
            Get Custom Estimate
          </button>
        </div>
      </div>
    </section>
  );
};
