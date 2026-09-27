import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Instagram, Menu, X, Shield, ArrowRight } from 'lucide-react';
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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'before-after', label: 'Transformations' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0c0e]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group"
          >
            {/* Minimal Architectural Logo Symbol */}
            <div className="w-10 h-10 border border-[#c5a059] flex items-center justify-center relative overflow-hidden bg-[#121418] transition-colors group-hover:border-[#e0c58e]">
              <div className="absolute inset-1 border border-white/20"></div>
              <span className="font-serif font-bold text-sm tracking-wider text-[#c5a059]">
                SWD
              </span>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold tracking-wider font-serif text-white flex items-center gap-1.5">
                STYLE WELL DYD
              </div>
              <p className="text-[10px] tracking-widest text-[#c5a059] uppercase font-sans">
                {settings.hindiName} · Lucknow
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-[#c5a059] relative py-1 ${
                  activeSection === link.id ? 'text-[#c5a059]' : 'text-neutral-300'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c5a059]" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action Icons & Primary CTA */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Instagram Link */}
            <a
              href={settings.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-[#c5a059] transition-colors p-2"
              title="Follow us on Instagram"
              aria-label="Instagram profile"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Direct Call */}
            <a
              href={`tel:${settings.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white px-2.5 py-1.5 rounded border border-white/10 hover:border-white/25 transition-colors"
              title="Call Style Well DYD"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="font-mono tracking-tight text-[11px]">{settings.phone}</span>
            </a>

            {/* Admin Portal Shortcut */}
            <button
              onClick={onOpenAdmin}
              className="text-neutral-400 hover:text-white p-2 rounded transition-colors"
              title="Admin Console"
              aria-label="Admin Console"
            >
              <Shield className="w-4 h-4" />
            </button>

            {/* Primary Consultation CTA */}
            <button
              onClick={() => onOpenEnquiry()}
              className="relative px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#d8b46d] transition-all rounded-none shadow-lg shadow-[#c5a059]/10 active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={`tel:${settings.phone.replace(/\s+/g, '')}`}
              className="p-2 text-[#c5a059] bg-[#181a20] border border-white/10"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white bg-[#181a20] border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0e1014] border-b border-white/10 px-6 py-6 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left text-sm tracking-widest uppercase font-medium py-2 border-b border-white/5 ${
                  activeSection === link.id ? 'text-[#c5a059]' : 'text-neutral-300'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 bg-[#c5a059] text-black text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${settings.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-[#181a20] border border-white/10 text-xs text-neutral-200"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${settings.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                    'Hello Style Well DYD, I am interested in interior design services in Lucknow.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-[#181a20] border border-white/10 text-xs text-emerald-400"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-between pt-3 text-xs text-neutral-400">
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#c5a059]"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>@stylewelldyd</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="flex items-center gap-1 hover:text-white"
                >
                  <Shield className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Admin Login</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
