import React from 'react';
import { Phone, MapPin, Clock, Instagram, Shield, Download, ArrowUp } from 'lucide-react';
import { BusinessSettings } from '../types';

interface FooterProps {
  settings: BusinessSettings;
  onNavigate: (sectionId: string) => void;
  onOpenAdmin: () => void;
  onDownloadZip: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  settings,
  onNavigate,
  onOpenAdmin,
  onDownloadZip
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cleanPhone = settings.phone.replace(/[^0-9]/g, '');
  const formattedPhone = cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone;

  return (
    <footer className="bg-[#08090b] border-t border-white/10 text-neutral-400 text-xs">
      {/* Top Banner Call to Action */}
      <div className="border-b border-white/5 py-10 sm:py-12 bg-gradient-to-b from-[#101216]/60 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#c5a059] block mb-1">
              {settings.hindiName} · Lucknow Architecture Studio
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-white">
              Ready to create something extraordinary?
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full md:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="flex-1 sm:flex-none px-6 py-3 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-semibold uppercase tracking-wider text-xs transition-all shadow-lg shadow-[#c5a059]/15 text-center cursor-pointer active:scale-95"
            >
              Get Free Consultation
            </button>
            <button
              onClick={onDownloadZip}
              className="flex-1 sm:flex-none px-4 py-3 bg-[#121418] hover:bg-[#1c1e24] border border-white/10 text-white font-medium uppercase tracking-wider text-xs inline-flex items-center justify-center gap-2 transition-colors cursor-pointer active:scale-95"
              title="Download Full Project ZIP package"
            >
              <Download className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Project ZIP</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#c5a059] flex items-center justify-center bg-[#121418]">
                <span className="font-serif font-bold text-xs text-[#c5a059]">SWD</span>
              </div>
              <div>
                <span className="font-serif font-bold text-sm sm:text-base tracking-wider text-white block">
                  STYLE WELL DYD
                </span>
                <span className="text-[10px] text-[#c5a059] uppercase tracking-wider block font-medium">
                  {settings.hindiName}
                </span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Lucknow's bespoke interior decoration and architecture studio. We create spaces of refined elegance, 
              enduring durability, and thoughtful ergonomics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Studio' },
                { id: 'services', label: 'Our Services' },
                { id: 'projects', label: 'Featured Projects' },
                { id: 'before-after', label: 'Transformations' },
                { id: 'gallery', label: 'Inspiration Gallery' },
                { id: 'contact', label: 'Contact Us' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-[#c5a059] transition-colors text-left cursor-pointer flex items-center gap-1.5"
                  >
                    <span className="text-neutral-600">›</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white border-b border-white/10 pb-2">
              Our Specialties
            </h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li className="flex items-center gap-1.5"><span className="text-[#c5a059]">▪</span> Residential Interior Design</li>
              <li className="flex items-center gap-1.5"><span className="text-[#c5a059]">▪</span> Modular Kitchen Systems</li>
              <li className="flex items-center gap-1.5"><span className="text-[#c5a059]">▪</span> Master Suites & Wardrobes</li>
              <li className="flex items-center gap-1.5"><span className="text-[#c5a059]">▪</span> Corporate Offices & Retail</li>
              <li className="flex items-center gap-1.5"><span className="text-[#c5a059]">▪</span> 3D Visualization & Walkthroughs</li>
              <li className="flex items-center gap-1.5"><span className="text-[#c5a059]">▪</span> Turnkey Execution</li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white border-b border-white/10 pb-2">
              Studio Location & Info
            </h4>
            <div className="space-y-3">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span className="leading-snug">{settings.address}</span>
              </p>

              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={`tel:${settings.phone.replace(/\s+/g, '')}`} className="font-mono text-white hover:text-[#c5a059]">
                  {settings.phone}
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>9:30 AM – 9:30 PM (Mon – Sun)</span>
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#14161b] hover:bg-[#1a1d24] border border-white/10 text-white rounded transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Instagram</span>
                </a>

                <a
                  href={`https://wa.me/${formattedPhone}?text=${encodeURIComponent(
                    'Hello Style Well DYD, I want to discuss an interior project in Lucknow.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] rounded transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Controls */}
      <div className="border-t border-white/5 py-6 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 text-center sm:text-left">
          <p>© 2026 Style Well DYD (स्टाइल वेल डाइड). All Rights Reserved. Lucknow, UP.</p>

          <div className="flex items-center gap-5">
            <button
              onClick={onOpenAdmin}
              className="hover:text-[#c5a059] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Shield className="w-3 h-3 text-[#c5a059]" />
              <span>Admin Console</span>
            </button>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer px-2.5 py-1 bg-white/5 rounded border border-white/10"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 text-[#c5a059]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
