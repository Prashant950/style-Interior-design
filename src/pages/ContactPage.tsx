import React from 'react';
import { BusinessSettings, EnquiryLead } from '../types';
import { ContactSection } from '../components/ContactSection';
import { EnquirySection } from '../components/EnquirySection';
import { Sparkles, MapPin, Phone, MessageCircle, Clock, Mail, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  settings: BusinessSettings;
  onSubmitLead: (lead: Omit<EnquiryLead, 'id' | 'createdAt' | 'status'>) => void;
  onOpenEnquiry: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  settings,
  onSubmitLead,
  onOpenEnquiry
}) => {
  return (
    <div className="pt-20 sm:pt-24 space-y-0 animate-fadeIn">
      {/* Page Header Banner */}
      <section className="relative py-14 sm:py-20 bg-[#090a0d] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-[#c5a059]/30 bg-[#121418] text-xs font-mono text-[#c5a059] uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>Studio Headquarters</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-tight max-w-4xl mx-auto mb-4">
            Visit or Contact Our Studio
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            Drop by for a cup of tea and a detailed physical walkthrough of materials, hardware fittings, and 3D design blueprints along Ne IIM Road, Lucknow.
          </p>
        </div>
      </section>

      {/* Main Studio Location & Contacts Grid with Google Maps */}
      <ContactSection
        settings={settings}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* Full Dedicated Consultation Lead Booking Form */}
      <EnquirySection
        onSubmitLead={onSubmitLead}
        prefilledType="General Consultation"
      />
    </div>
  );
};
