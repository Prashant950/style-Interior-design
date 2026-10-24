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
    { id: 'gallery', label: 'Gallery', icon: Images },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      onNavigate(id);
    }, 50);
  };

  const cleanPhone = settings.phone.replace(/[^0-9]/g, '');
  const formattedPhone = cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-[#0b0c0e]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
            : 'bg-gradient-to-b from-black/85 via-black/50 to-transparent py-3.5 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer focus:outline-none"
            >
              {/* AI Generated Luxury Architectural Emblem Logo */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg border border-[#c5a059]/70 flex items-center justify-center overflow-hidden bg-black transition-all group-hover:border-[#e0c58e] group-hover:shadow-[0_0_20px_rgba(197,160,89,0.5)] shrink-0 shadow-md shadow-black/60 p-0.5">
                <img
                  src="/images/acme/brand-icon.jpg"
                  alt="Acme Interiors Architectural Emblem"
                  className="w-full h-full object-cover rounded-md filter brightness-105 contrast-110 group-hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-sm sm:text-base lg:text-lg font-bold tracking-wider font-serif text-white leading-tight group-hover:text-[#c5a059] transition-colors">
                  {settings.businessName}
                </div>
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

              {/* Primary Consultation CTA */}
              <button
                onClick={() => onOpenEnquiry()}
                className="relative px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#d8b46d] transition-all shadow-lg shadow-[#c5a059]/15 hover:shadow-[#c5a059]/30 active:scale-95 flex items-center gap-1.5 cursor-pointer rounded-sm"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Actions: Call + Hamburger */}
            <div className="flex items-center gap-2 sm:hidden">
              <a
                href={`tel:${settings.phone.replace(/\s+/g, '')}`}
                className="p-2.5 text-[#c5a059] bg-[#14161c] border border-white/10 active:scale-95 rounded-lg flex items-center justify-center shadow-md"
                aria-label="Call Acme Interiors"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-white bg-[#14161c] border border-white/15 active:scale-95 rounded-lg flex items-center justify-center cursor-pointer shadow-md"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#c5a059]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop for Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black/85 backdrop-blur-sm z-50 transition-opacity duration-300 ease-in-out sm:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Smooth Slide-In Drawer from Right to Left (Addresses Image 2 feedback) */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[88%] max-w-sm bg-[#0e1014] border-l border-[#c5a059]/30 z-50 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out sm:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#121418]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg border border-[#c5a059]/70 overflow-hidden bg-black shrink-0 p-0.5 shadow-[0_0_12px_rgba(197,160,89,0.3)]">
              <img
                src="/images/acme/brand-icon.jpg"
                alt="Acme Interiors Logo"
                className="w-full h-full object-cover rounded-md filter brightness-105"
              />
            </div>
            <div>
              <div className="font-serif font-bold text-sm tracking-wider text-white leading-tight">
                {settings.businessName}
              </div>
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg active:scale-95 transition-all cursor-pointer"
            aria-label="Close Navigation Menu"
          >
            <X className="w-5 h-5 text-[#c5a059]" />
          </button>
        </div>

        {/* Studio Trust Micro-Banner */}
        <div className="px-4 py-2 bg-[#161820] border-b border-white/5 flex items-center justify-between text-[11px] text-neutral-300">
          <div className="flex items-center gap-1.5 text-[#c5a059]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-semibold">5.0 ★ Google Rating</span>
          </div>
          <span className="text-neutral-400 font-mono text-[10px]">Aliganj, Lucknow</span>
        </div>

        {/* Navigation Links inside Drawer */}
        <div className="px-3.5 py-3 space-y-1 overflow-y-auto flex-1">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all text-left cursor-pointer ${
                  isActive
                    ? 'bg-[#c5a059]/15 text-[#c5a059] border border-[#c5a059]/40 shadow-sm'
                    : 'text-neutral-300 hover:text-white hover:bg-white/5 border border-transparent active:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#c5a059]' : 'text-[#c5a059]/70'}`} />
                  <span>{link.label}</span>
                </div>
                {isActive ? (
                  <span className="w-2 h-2 rounded-full bg-[#c5a059] shadow-[0_0_8px_#c5a059]" />
                ) : (
                  <ArrowRight className="w-3 h-3 text-neutral-600" />
                )}
              </button>
            );
          })}
        </div>

        {/* Quick Action Luxury Card (Eliminates empty void from Image 2) */}
        <div className="p-3.5 border-t border-white/10 space-y-2.5 bg-[#0b0c0f]">
          {/* Direct CTA Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setTimeout(() => onOpenEnquiry(), 60);
            }}
            className="w-full py-3 px-4 bg-gradient-to-r from-[#c5a059] to-[#d8b46d] text-black font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 shadow-lg shadow-[#c5a059]/20 active:scale-98 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Get Free 3D Consultation</span>
          </button>

          {/* Quick Call & WhatsApp Buttons Grid */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${settings.phone.replace(/\s+/g, '')}`}
              className="py-2.5 px-3 bg-[#181a20] hover:bg-[#20232a] text-white border border-white/10 rounded text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors active:scale-98"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Call Studio</span>
            </a>
            <a
              href={`https://wa.me/${formattedPhone}?text=${encodeURIComponent('Hello Acme Interiors, I would like to discuss an interior project in Lucknow.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 bg-[#181a20] hover:bg-[#20232a] text-emerald-400 border border-emerald-500/30 rounded text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors active:scale-98"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Studio Location & Instagram Line */}
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-neutral-400">
            <span className="truncate max-w-[170px]" title={settings.address}>
              Purania, Sector K, Aliganj
            </span>
            <div className="flex items-center gap-2">
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#c5a059]"
              >
                <Instagram className="w-3 h-3 text-[#c5a059]" />
                <span>Instagram</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setTimeout(() => onOpenAdmin(), 60);
                }}
                className="p-1 hover:text-[#c5a059] text-neutral-500 transition-colors"
                title="Admin Portal"
              >
                <Shield className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
