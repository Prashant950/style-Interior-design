import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles } from 'lucide-react';

interface TransformationItem {
  id: string;
  title: string;
  location: string;
  scope: string;
  beforeImage: string;
  afterImage: string;
}

const transformations: TransformationItem[] = [
  {
    id: 'trans-1',
    title: 'The Aliganj Living Space',
    location: 'Aliganj, Lucknow',
    scope: 'Raw unplastered hall transformed into an Italian marble & walnut acoustic sanctuary',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'trans-2',
    title: 'Mahanagar Modular Kitchen Overhaul',
    location: 'Mahanagar, Lucknow',
    scope: 'Dated 1990s civil counter converted into German Blum soft-close acrylic & quartz island kitchen',
    beforeImage: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80'
  },
  {
    id: 'trans-3',
    title: 'Jankipuram Kothi Renovation',
    location: 'Jankipuram, Lucknow',
    scope: 'Dark partitioned rooms rebuilt into an open-plan contemporary living and dining hall',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80'
  }
];

export const BeforeAfterSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<TransformationItem>(transformations[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="before-after" className="py-24 bg-[#0b0c0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Visual Evidence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mb-4">
            Before & After Transformations
          </h2>
          <p className="text-neutral-400 text-sm font-light">
            Slide the divider to witness how Style Well DYD reimagines bare brickwork and dated layouts into luxury architectural spaces.
          </p>

          {/* Room Selector */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {transformations.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setActiveItem(t);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all border cursor-pointer ${
                  activeItem.id === t.id
                    ? 'bg-[#c5a059] text-black border-[#c5a059]'
                    : 'bg-[#121418] text-neutral-400 border-white/10 hover:text-white'
                }`}
              >
                {t.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/9] w-full overflow-hidden select-none cursor-ew-resize border border-white/15 shadow-2xl bg-neutral-900"
          >
            {/* AFTER Image (Full container background) */}
            <img
              src={activeItem.afterImage}
              alt={`${activeItem.title} After Transformation`}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* After Tag */}
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 border border-[#c5a059]/40 text-xs font-mono uppercase tracking-wider text-[#c5a059]">
              After · Style Well DYD
            </div>

            {/* BEFORE Image (Clipped container) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={activeItem.beforeImage}
                alt={`${activeItem.title} Before State`}
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                referrerPolicy="no-referrer"
              />
              {/* Before Tag */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 border border-white/20 text-xs font-mono uppercase tracking-wider text-neutral-300">
                Before · Initial Site State
              </div>
            </div>

            {/* Draggable Vertical Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-[#c5a059] border-2 border-white flex items-center justify-center shadow-2xl">
                <ArrowLeftRight className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>

          {/* Transformation Meta Info */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-400 gap-3 px-2">
            <div>
              <span className="font-semibold text-white">{activeItem.title}</span>
              <span className="mx-2">·</span>
              <span className="text-[#c5a059] font-mono">{activeItem.location}</span>
            </div>
            <p className="max-w-xl text-neutral-300 text-left sm:text-right">
              {activeItem.scope}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
