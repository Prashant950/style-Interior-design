import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatingProps {
  phone: string;
}

export const WhatsAppFloating: React.FC<WhatsAppFloatingProps> = ({ phone }) => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const formattedPhone = cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone;
  const message = encodeURIComponent(
    'Hello Style Well DYD,\nI am interested in interior design services in Lucknow.\nI would like to discuss my project.'
  );

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
      <a
        href={`https://wa.me/${formattedPhone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Style Well DYD on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/20"
      >
        <MessageCircle className="w-7 h-7" />

        {/* Floating tooltip */}
        <span className="absolute right-16 px-3 py-1.5 bg-[#121418] text-white text-xs font-medium tracking-wide whitespace-nowrap border border-white/10 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded">
          Chat on WhatsApp · 098072 77025
        </span>
      </a>
    </aside>
  );
};
