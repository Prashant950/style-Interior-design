import React, { useState, useEffect, useRef } from 'react';
import { X, Send, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { EnquiryLead } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitLead: (lead: Omit<EnquiryLead, 'id' | 'createdAt' | 'status'>) => void;
  prefilledType?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  onSubmitLead,
  prefilledType = 'Home Interior'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: prefilledType,
    propertyType: '3BHK Apartment',
    location: 'Lucknow',
    approxBudget: '₹10–20 Lakh',
    preferredContact: 'WhatsApp' as 'Phone' | 'WhatsApp' | 'Email',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (prefilledType) {
      setFormData((prev) => ({ ...prev, projectType: prefilledType }));
    }
  }, [prefilledType]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setLoading(true);
    setTimeout(() => {
      onSubmitLead({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || 'Not specified',
        projectType: formData.projectType,
        propertyType: formData.propertyType,
        location: formData.location.trim() || 'Lucknow',
        approxBudget: formData.approxBudget,
        preferredContact: formData.preferredContact,
        message: formData.message.trim() || 'Direct modal inquiry.'
      });
      setLoading(false);
      setSubmitted(true);
    }, 350);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="relative w-full max-w-xl bg-[#121418] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh] animate-fadeIn"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1.5 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 border border-[#c5a059] text-[#c5a059] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-serif text-white">We Have Received Your Request</h3>
            <p className="text-xs text-neutral-300 leading-relaxed max-w-md mx-auto">
              Thank you, <strong className="text-[#c5a059]">{formData.name}</strong>. Our senior interior team at Style Well DYD 
              will get in touch via {formData.preferredContact} promptly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 bg-[#c5a059] text-black font-semibold text-xs uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#c5a059]">
                STYLE WELL DYD · LUCKNOW
              </span>
              <h2 className="text-2xl font-serif text-white mt-1">Book Free Consultation</h2>
              <p className="text-xs text-neutral-400 mt-1">
                Tell us about your space. We'll provide customized blueprints & honest estimates.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full bg-[#181a20] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 95065 36127"
                    className="w-full bg-[#181a20] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a059] font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#181a20] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="Home Interior">Home Interior</option>
                    <option value="Modular Kitchen">Modular Kitchen</option>
                    <option value="Wall Interior & Paneling">Wall Interior & Paneling</option>
                    <option value="False Ceiling & Lighting">False Ceiling & Lighting</option>
                    <option value="Commercial Grid Ceiling">Commercial Office Grid Ceiling</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Living Room">Living Room</option>
                    <option value="Office">Office Space</option>
                    <option value="Renovation">Turnkey Renovation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                    Approximate Budget
                  </label>
                  <select
                    value={formData.approxBudget}
                    onChange={(e) => setFormData({ ...formData, approxBudget: e.target.value })}
                    className="w-full bg-[#181a20] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="Below ₹3 Lakh">Below ₹3 Lakh</option>
                    <option value="₹3–5 Lakh">₹3–5 Lakh</option>
                    <option value="₹5–10 Lakh">₹5–10 Lakh</option>
                    <option value="₹10–20 Lakh">₹10–20 Lakh</option>
                    <option value="₹20 Lakh+">₹20 Lakh+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                  Location in Lucknow
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Aliganj, Gomti Nagar, IIM Road"
                  className="w-full bg-[#181a20] border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                  Preferred Contact
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['WhatsApp', 'Phone', 'Email'] as const).map((method) => (
                    <button
                      type="button"
                      key={method}
                      onClick={() => setFormData({ ...formData, preferredContact: method })}
                      className={`py-1.5 text-xs uppercase tracking-wider border cursor-pointer ${
                        formData.preferredContact === method
                          ? 'bg-[#c5a059] text-black border-[#c5a059] font-semibold'
                          : 'bg-[#181a20] text-neutral-400 border-white/10'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                  Brief Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Looking for Italian marble flooring and modular kitchen..."
                  className="w-full bg-[#181a20] border border-white/10 p-2.5 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                {loading ? 'Submitting...' : 'Submit Consultation Request'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
