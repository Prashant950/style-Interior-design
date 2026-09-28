import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { EnquiryLead } from '../types';

interface EnquirySectionProps {
  onSubmitLead: (lead: Omit<EnquiryLead, 'id' | 'createdAt' | 'status'>) => void;
  prefilledType?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  onSubmitLead,
  prefilledType = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: prefilledType || 'Home Interior',
    propertyType: '3BHK Apartment',
    location: 'Lucknow',
    approxBudget: '₹10–20 Lakh',
    preferredContact: 'WhatsApp' as 'Phone' | 'WhatsApp' | 'Email',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    setLoading(true);
    setTimeout(() => {
      onSubmitLead({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || 'Not provided',
        projectType: formData.projectType,
        propertyType: formData.propertyType,
        location: formData.location.trim() || 'Lucknow',
        approxBudget: formData.approxBudget,
        preferredContact: formData.preferredContact,
        message: formData.message.trim() || 'Inquired through web form.'
      });
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="consultation" className="py-12 sm:py-16 md:py-20 bg-[#0b0c0e] relative border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c5a059] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Begin Your Transformation</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-tight">
              Get a Free <br />
              <span className="italic text-[#c5a059]">Design Consultation</span>
            </h2>

            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              Speak directly with our senior interior designers. We provide an initial spatial assessment, 
              budget breakdown, and design roadmap tailored to your Lucknow property.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs text-neutral-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-none border border-[#c5a059] flex items-center justify-center text-[#c5a059]">
                  01
                </div>
                <span>Free on-site or telephonic consultation in Lucknow</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-none border border-[#c5a059] flex items-center justify-center text-[#c5a059]">
                  02
                </div>
                <span>Transparent estimate with itemized material specifications</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-none border border-[#c5a059] flex items-center justify-center text-[#c5a059]">
                  03
                </div>
                <span>3D photorealistic preview before site mobilization</span>
              </div>
            </div>

            <div className="p-4 bg-[#121418] border border-white/10 text-xs">
              <p className="text-neutral-400">Prefer direct communication?</p>
              <div className="mt-2 flex items-center gap-4">
                <a
                  href="tel:09807277025"
                  className="flex items-center gap-1.5 text-white hover:text-[#c5a059] font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>098072 77025</span>
                </a>
                <span className="text-neutral-600">·</span>
                <a
                  href={`https://wa.me/919807277025?text=${encodeURIComponent(
                    'Hello Style Well DYD, I want to discuss my interior design project.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-400 hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Lead Form */}
          <div className="lg:col-span-7 bg-[#121418] border border-white/10 p-8 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 border-2 border-[#c5a059] text-[#c5a059] mx-auto flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-white">Consultation Request Received</h3>
                <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#c5a059]">{formData.name}</strong>. Our senior interior team at Style Well DYD 
                  will contact you via <strong className="text-white">{formData.preferredContact}</strong> within a few hours to discuss your project.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      projectType: 'Home Interior',
                      propertyType: '3BHK Apartment',
                      location: 'Lucknow',
                      approxBudget: '₹10–20 Lakh',
                      preferredContact: 'WhatsApp',
                      message: ''
                    });
                  }}
                  className="mt-6 px-6 py-2.5 bg-white/10 text-white text-xs uppercase tracking-wider hover:bg-white/20"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#181a20] border border-white/15 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 098072 77025"
                      className="w-full bg-[#181a20] border border-white/15 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@example.com"
                      className="w-full bg-[#181a20] border border-white/15 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                      Location in Lucknow
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Gomti Nagar, Aliganj, IIM Rd"
                      className="w-full bg-[#181a20] border border-white/15 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#181a20] border border-white/15 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                    >
                      <option value="Home Interior">Home Interior</option>
                      <option value="Modular Kitchen">Modular Kitchen</option>
                      <option value="Bedroom">Bedroom</option>
                      <option value="Living Room">Living Room</option>
                      <option value="Office">Office Interior</option>
                      <option value="Shop">Shop / Retail</option>
                      <option value="Renovation">Turnkey Renovation</option>
                      <option value="Other">Other Space</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-[#181a20] border border-white/15 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                    >
                      <option value="2BHK Apartment">2BHK Apartment</option>
                      <option value="3BHK Apartment">3BHK Apartment</option>
                      <option value="4BHK / Penthouse">4BHK / Penthouse</option>
                      <option value="Independent Villa">Independent Villa</option>
                      <option value="Commercial Space">Commercial Space</option>
                      <option value="Kothi / Bungalow">Kothi / Bungalow</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.approxBudget}
                      onChange={(e) => setFormData({ ...formData, approxBudget: e.target.value })}
                      className="w-full bg-[#181a20] border border-white/15 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                    >
                      <option value="Below ₹1 Lakh">Below ₹1 Lakh</option>
                      <option value="₹1–3 Lakh">₹1–3 Lakh</option>
                      <option value="₹3–5 Lakh">₹3–5 Lakh</option>
                      <option value="₹5–10 Lakh">₹5–10 Lakh</option>
                      <option value="₹10–20 Lakh">₹10–20 Lakh</option>
                      <option value="₹20 Lakh+">₹20 Lakh+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['WhatsApp', 'Phone', 'Email'] as const).map((method) => (
                      <button
                        type="button"
                        key={method}
                        onClick={() => setFormData({ ...formData, preferredContact: method })}
                        className={`py-2 text-xs font-medium uppercase tracking-wider border cursor-pointer ${
                          formData.preferredContact === method
                            ? 'bg-[#c5a059] text-black border-[#c5a059]'
                            : 'bg-[#181a20] text-neutral-400 border-white/10 hover:text-white'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                    Project Requirements or Specific Ideas
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your room dimensions, move-in target date, design ideas, or specific material preferences..."
                    className="w-full bg-[#181a20] border border-white/15 p-3 text-xs text-white focus:outline-none focus:border-[#c5a059]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#c5a059] hover:bg-[#d8b46d] text-black font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xl disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Your Request...</span>
                  ) : (
                    <>
                      <span>Submit Free Consultation Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
