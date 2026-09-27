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

  return (
    <footer className="bg-[#08090b] border-t border-white/10 text-neutral-400 text-xs">
      {/* Top Banner */}
      <div className="border-b border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#c5a059]">
              {settings.hindiName} · Lucknow
            </span>
            <h3 className="text-2xl font-serif text-white mt-1">Ready to create something extraordinary?</h3>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('consultation')}
              className="px-6 py-3 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-semibold uppercase tracking-wider text-xs transition-colors cursor-pointer"
            >
              Get Free Consultation
            </button>
            <button
              onClick={onDownloadZip}
              className="px-4 py-3 bg-[#121418] hover:bg-[#1c1e24] border border-white/10 text-white font-medium uppercase tracking-wider text-xs inline-flex items-center gap-2 transition-colors cursor-pointer"
              title="Download Full Project ZIP package"
            >
              <Download className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Download ZIP</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main 4-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#c5a059] flex items-center justify-center bg-[#121418]">
                <span className="font-serif font-bold text-xs text-[#c5a059]">SWD</span>
              </div>
              <span className="font-serif font-bold text-base tracking-wider text-white">
                STYLE WELL DYD
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Lucknow's bespoke interior decoration and architecture studio. We create spaces of refined elegance, 
              enduring durability, and thoughtful ergonomics.
            </p>
            <div className="pt-2">
              <p className="text-[11px] font-mono text-[#c5a059]">{settings.hindiName}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'projects', 'before-after', 'gallery', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className="hover:text-[#c5a059] transition-colors capitalize text-left cursor-pointer"
                  >
                    {id.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white">
              Specialties
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>Residential Interior Design</li>
              <li>Modular Kitchen Solutions</li>
              <li>Luxury Bedroom Suites</li>
              <li>Commercial & Office Fitouts</li>
              <li>Living Room & Décor Styling</li>
              <li>Turnkey Civil Renovation</li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-white">
              Studio Details
            </h4>
            <div className="space-y-2.5">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                <span>{settings.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                <a href={`tel:${settings.phone.replace(/\s+/g, '')}`} className="font-mono text-white hover:text-[#c5a059]">
                  {settings.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                <span>9:30 AM – 9:30 PM (Mon – Sun)</span>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-white hover:text-[#c5a059]"
                >
                  {settings.instagram}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2026 Style Well DYD. All Rights Reserved. Lucknow, Uttar Pradesh.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenAdmin}
              className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Shield className="w-3 h-3 text-[#c5a059]" />
              <span>Admin Management</span>
            </button>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
