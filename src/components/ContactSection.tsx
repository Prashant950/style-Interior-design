import React from 'react';
import { MapPin, Phone, Clock, Instagram, MessageCircle, ExternalLink, Navigation, Mail } from 'lucide-react';
import { BusinessSettings } from '../types';

interface ContactSectionProps {
  settings: BusinessSettings;
  onOpenEnquiry: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  settings,
  onOpenEnquiry
}) => {
  return (
    <section id="contact" className="py-24 bg-[#0e1014] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Studio Location</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mb-4">
            Visit Our Lucknow Studio
          </h2>
          <p className="text-neutral-400 text-sm font-light">
            Drop by for a cup of tea and a detailed walkthrough of materials, hardware fittings, and 3D design portfolios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Business Details Card */}
          <div className="lg:col-span-5 bg-[#121418] border border-white/10 p-8 shadow-2xl space-y-6">
            <div>
              <div className="text-xl font-serif text-white font-bold flex items-center gap-2">
                <span>{settings.businessName}</span>
              </div>
              <p className="text-xs font-mono text-[#c5a059] uppercase tracking-wider mt-1">
                {settings.hindiName} · Interior Decorator
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3.5 pt-4 border-t border-white/5">
              <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-1" />
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-white mb-1">
                  Studio Address
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {settings.address}
                </p>
                <a
                  href={settings.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#c5a059] hover:underline"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3.5 pt-4 border-t border-white/5">
              <Phone className="w-4 h-4 text-[#c5a059] shrink-0 mt-1" />
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-white mb-1">
                  Phone Consultation
                </h4>
                <a
                  href={`tel:${settings.phone.replace(/\s+/g, '')}`}
                  className="text-sm font-mono text-white hover:text-[#c5a059] transition-colors"
                >
                  {settings.phone}
                </a>
                <p className="text-[11px] text-neutral-400 mt-0.5">Direct line to our interior studio manager</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3.5 pt-4 border-t border-white/5">
              <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-1" />
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-white mb-1">
                  Business Hours
                </h4>
                <p className="text-xs text-neutral-300">{settings.hours}</p>
                <p className="text-[11px] text-emerald-400 mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Open 7 Days a Week</span>
                </p>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-3.5 pt-4 border-t border-white/5">
              <Instagram className="w-4 h-4 text-[#c5a059] shrink-0 mt-1" />
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-white mb-1">
                  Official Instagram
                </h4>
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white hover:text-[#c5a059] inline-flex items-center gap-1.5 transition-colors font-mono"
                >
                  <span>{settings.instagram}</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
                <p className="text-[11px] text-neutral-400 mt-0.5">Daily on-site videos and finished project reels</p>
              </div>
            </div>

            {/* Direct CTAs */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-3">
              <a
                href={`tel:${settings.phone.replace(/\s+/g, '')}`}
                className="py-3 bg-[#181a20] hover:bg-[#202228] border border-white/10 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Call Studio</span>
              </a>

              <a
                href={`https://wa.me/${settings.whatsapp.replace('+', '')}?text=${encodeURIComponent(
                  'Hello Style Well DYD, I would like to book a site visit in Lucknow.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Preview / Location Box */}
          <div className="lg:col-span-7 bg-[#121418] border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[520px]">
            {/* Map Header */}
            <div className="p-4 bg-[#181a20] border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Ne IIM Rd, near S.M Hospital, Madiyanva, Lucknow 226020</span>
              </div>
              <a
                href={settings.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#c5a059] hover:underline flex items-center gap-1 font-mono"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Map View */}
            <div className="flex-1 w-full bg-neutral-900 relative">
              <iframe
                title="Style Well DYD Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.33120610368!2d80.8996!3d26.9048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399955d5b7a0f6a1%3A0x6a123456789abcde!2sIIM%20Rd%2C%20Madiyanva%2C%20Lucknow%2C%20Uttar%20Pradesh%20226020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md p-3 border border-white/15 max-w-xs pointer-events-none">
                <p className="text-xs font-serif font-bold text-white">STYLE WELL DYD</p>
                <p className="text-[10px] text-neutral-400 mt-0.5">
                  Ne IIM Rd, near S.M Hospital, Madiyanva, Lucknow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
