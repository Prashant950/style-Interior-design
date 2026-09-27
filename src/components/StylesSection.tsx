import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { designStyles } from '../data/mockData';

interface StylesSectionProps {
  onOpenEnquiry: (styleName?: string) => void;
}

export const StylesSection: React.FC<StylesSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-24 bg-[#0b0c0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Aesthetic Expressions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              Curated Design Styles
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light">
            Whether your sanctuary demands warm minimalist serenity or opulent neoclassical brass detailing, we translate your aesthetic dreams into physical reality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {designStyles.map((style) => (
            <div
              key={style.name}
              className="group bg-[#121418] border border-white/5 hover:border-[#c5a059]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif text-white mb-2 group-hover:text-[#c5a059] transition-colors">
                    {style.name}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {style.desc}
                  </p>
                </div>

                <button
                  onClick={() => onOpenEnquiry(style.name)}
                  className="pt-3 border-t border-white/5 text-xs text-[#c5a059] hover:underline flex items-center justify-between uppercase tracking-wider font-semibold cursor-pointer"
                >
                  <span>Inquire This Style</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
