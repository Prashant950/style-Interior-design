import React, { useState, useEffect } from 'react';
import { Phone, Instagram, Menu, X, Shield, ArrowRight, Home, Sparkles, LayoutGrid, Layers, Images, Mail, Compass } from 'lucide-react';
import { BusinessSettings } from '../types';

interface NavbarProps {
  settings: BusinessSettings;
  onOpenEnquiry: (projectType?: string) => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  settings,
  onOpenEnquiry,
  onNavigate,
  activeSection,
  onOpenAdmin
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Compass },
    { id: 'services', label: 'Services', icon: Sparkles },
    { id: 'projects', label: 'Projects', icon: LayoutGrid },
    { id: 'before-after', label: 'Transformations', icon: Layers },
    { id: 'gallery', label: 'Gallery', icon: Images },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const cleanPhone = settings.phone.replace(/[^0-9]/g, '');
  const formattedPhone = cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-[#0b0c0e]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
            : 'bg-gradient-to-b from-black/85 via-black/50 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
            >
              {/* Minimal Architectural Logo Symbol */}
              <div className="w-10 h-10 border border-[#c5a059] flex items-center justify-center relative overflow-hidden bg-[#121418] transition-all group-hover:border-[#e0c58e] group-hover:shadow-[0_0_15px_rgba(197,160,89,0.3)] shrink-0">
                <div className="absolute inset-0.5 border border-white/15"></div>
                <span className="font-serif font-bold text-sm tracking-wider text-[#c5a059]">
                  SWD
                </span>
              </div>
              <div className="hidden sm:block">
                <div className="text-base sm:text-lg lg:text-xl font-bold tracking-wider font-serif text-white flex items-center gap-1.5 leading-tight">
                  STYLE WELL DYD
                </div>
                <p className="text-[9px] sm:text-[10px] tracking-widest text-[#c5a059] uppercase font-sans font-medium">
                  {settings.hindiName} · Lucknow
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-xs uppercase tracking-widest font-medium transition-all hover:text-[#c5a059] relative py-1 cursor-pointer ${
                    activeSection === link.id ? 'text-[#c5a059]' : 'text-neutral-300'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c5a059] shadow-[0_0_8px_#c5a059]" />
                  )}
                </button>
              ))}
            </nav>

            {/* Right Action Icons & Primary CTA (Desktop) */}
            <div className="hidden sm:flex items-center gap-3 lg:gap-4">
              {/* Instagram Link */}
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-[#c5a059] transition-colors p-2 rounded-full hover:bg-white/5"
                title="Follow us on Instagram"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Admin Portal Shortcut */}
              <button
                onClick={onOpenAdmin}
                className="text-neutral-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                title="Admin Console"
                aria-label="Admin Console"
              >
                <Shield className="w-4 h-4" />
              </button>

              {/* Primary Consultation CTA */}
              <button
                onClick={() => onOpenEnquiry()}
                className="relative px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#d8b46d] transition-all shadow-lg shadow-[#c5a059]/15 hover:shadow-[#c5a059]/30 active:scale-95 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Actions: Call + Hamburger */}
            <div className="flex items-center gap-2.5 sm:hidden">
              <a
                href={`tel:${settings.phone.replace(/\s+/g, '')}`}
                className="p-2.5 text-[#c5a059] bg-[#181a20] border border-white/10 active:scale-95 rounded flex items-center justify-center"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-white bg-[#181a20] border border-white/15 active:scale-95 rounded flex items-center justify-center cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#c5a059]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Overlay with backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 sm:hidden flex flex-col pt-16 bg-[#0b0c0e]/98 backdrop-blur-xl animate-fadeIn overflow-y-auto">
          <div className="px-5 py-6 flex flex-col justify-between min-h-[calc(100vh-4rem)]">
            {/* Nav list */}
            <div className="space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2 px-3">
                Menu Navigation
              </div>

              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium tracking-wider uppercase transition-all text-left ${
                      isActive
                        ? 'bg-[#c5a059]/15 text-[#c5a059] border border-[#c5a059]/30 font-semibold'
                        : 'text-neutral-200 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#c5a059]' : 'text-neutral-400'}`} />
                      <span>{link.label}</span>
                    </div>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />}
                  </button>
                );
              })}
            </div>

            {/* Bottom Quick Contact Cards inside Mobile Menu */}
            <div className="pt-6 mt-4 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-[#c5a059] to-[#d8b46d] text-black text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#c5a059]/20 active:scale-98"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${settings.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 py-3 bg-[#181a20] border border-white/10 active:scale-95 rounded text-xs font-medium text-white shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span>Call Direct</span>
                </a>

                <a
                  href={`https://wa.me/${formattedPhone}?text=${encodeURIComponent(
                    'Hello Style Well DYD, I am interested in interior design services in Lucknow.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-[#25D366]/15 border border-[#25D366]/30 active:scale-95 rounded text-xs font-semibold text-[#25D366] shadow-sm"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-between pt-2 px-1 text-xs text-neutral-400">
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#c5a059] py-1"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>@stylewelldyd</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="flex items-center gap-1 hover:text-white py-1 cursor-pointer"
                >
                  <Shield className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Admin Panel</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
