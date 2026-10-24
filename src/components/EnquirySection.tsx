import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, MessageCircle, Sparkles, AlertCircle } from 'lucide-react';
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
    location: '',
    approxBudget: '₹10–20 Lakh',
    preferredContact: 'WhatsApp' as 'Phone' | 'WhatsApp' | 'Email',
    message: ''
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Comprehensive Field Validator
  const validateField = (field: string, value: string): string | undefined => {
    switch (field) {
      case 'name': {
        const trimmed = value.trim();
        if (!trimmed) return 'Full Name is required.';
        if (trimmed.length < 3) return 'Name must be at least 3 letters.';
        if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) return 'Name should contain alphabets only.';
        if (/^(.)\1{3,}$/i.test(trimmed)) return 'Please enter a genuine name.';
        return undefined;
      }

      case 'phone': {
        const digits = value.replace(/\D/g, '');
        if (!digits) return 'Mobile phone number is required.';
        if (digits.length > 0 && !/^[6-9]/.test(digits)) {
          return 'Indian mobile numbers must start with 6, 7, 8, or 9.';
        }
        if (digits.length !== 10) {
          return `Please enter full 10-digit mobile number (${digits.length}/10 entered).`;
        }
        return undefined;
      }

      case 'email': {
        const trimmed = value.trim();
        if (formData.preferredContact === 'Email' && !trimmed) {
          return 'Email is required when preferred contact is Email.';
        }
        if (trimmed && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimmed)) {
          return 'Please enter a valid email address (e.g. name@domain.com).';
        }
        return undefined;
      }

      case 'location': {
        const trimmed = value.trim();
        if (!trimmed) return 'Location/Area in Lucknow is required.';
        if (trimmed.length < 3) return 'Location must be at least 3 characters.';
        return undefined;
      }

      case 'projectType': {
        if (!value.trim()) return 'Please select a project type.';
        return undefined;
      }

      case 'approxBudget': {
        if (!value.trim()) return 'Please select your estimated budget.';
        return undefined;
      }

      default:
        return undefined;
    }
  };

  const nameError = (touched.name || attemptedSubmit) ? validateField('name', formData.name) : undefined;
  const phoneError = (touched.phone || attemptedSubmit) ? validateField('phone', formData.phone) : undefined;
  const emailError = (touched.email || attemptedSubmit) ? validateField('email', formData.email) : undefined;
  const locationError = (touched.location || attemptedSubmit) ? validateField('location', formData.location) : undefined;
  const projectTypeError = (touched.projectType || attemptedSubmit) ? validateField('projectType', formData.projectType) : undefined;
  const budgetError = (touched.approxBudget || attemptedSubmit) ? validateField('approxBudget', formData.approxBudget) : undefined;

  const hasAnyErrors = Boolean(
    validateField('name', formData.name) ||
    validateField('phone', formData.phone) ||
    validateField('email', formData.email) ||
    validateField('location', formData.location) ||
    validateField('projectType', formData.projectType) ||
    validateField('approxBudget', formData.approxBudget)
  );

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^a-zA-Z\s.'-]/g, '');
    setFormData((prev) => ({ ...prev, name: val }));
    setTouched((prev) => ({ ...prev, name: true }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: numericOnly }));
    setTouched((prev) => ({ ...prev, phone: true }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, email: e.target.value }));
    setTouched((prev) => ({ ...prev, email: true }));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, location: e.target.value }));
    setTouched((prev) => ({ ...prev, location: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    setTouched({
      name: true,
      phone: true,
      email: true,
      location: true,
      projectType: true,
      approxBudget: true
    });

    if (hasAnyErrors) {
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
        location: formData.location.trim(),
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
                  href="tel:08601050054"
                  className="flex items-center gap-1.5 text-white hover:text-[#c5a059] font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>086010 50054</span>
                </a>
                <span className="text-neutral-600">·</span>
                <a
                  href={`https://wa.me/918601050054?text=${encodeURIComponent(
                    'Hello Acme Interiors, I want to discuss my interior design project in Lucknow.'
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
                  Thank you, <strong className="text-[#c5a059]">{formData.name}</strong>. Our senior interior team at Acme Interiors 
                  will contact you via <strong className="text-white">{formData.preferredContact}</strong> within a few hours to discuss your project.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setAttemptedSubmit(false);
                    setTouched({});
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      projectType: 'Home Interior',
                      propertyType: '3BHK Apartment',
                      location: '',
                      approxBudget: '₹10–20 Lakh',
                      preferredContact: 'WhatsApp',
                      message: ''
                    });
                  }}
                  className="mt-6 px-6 py-2.5 bg-white/10 text-white text-xs uppercase tracking-wider hover:bg-white/20 cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs uppercase tracking-wider text-neutral-300 font-medium">
                        Your Full Name <span className="text-red-400">*</span>
                      </label>
                      {touched.name && !nameError && formData.name.trim().length >= 3 && (
                        <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                          <CheckCircle2 className="w-3 h-3" /> Valid
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={handleNameChange}
                      onBlur={() => handleBlur('name')}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full bg-[#181a20] border px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors rounded ${
                        nameError
                          ? 'border-red-500 bg-red-950/20 text-white focus:border-red-500 ring-1 ring-red-500/40'
                          : touched.name && formData.name.trim().length >= 3
                          ? 'border-emerald-500/60 focus:border-emerald-500'
                          : 'border-white/15 focus:border-[#c5a059]'
                      }`}
                    />
                    {nameError && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-fadeIn">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{nameError}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs uppercase tracking-wider text-neutral-300 font-medium">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <span className="text-[10px] font-mono text-neutral-400">
                        {formData.phone.length}/10 digits
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        onBlur={() => handleBlur('phone')}
                        placeholder="e.g. 086010 50054"
                        className={`w-full bg-[#181a20] border px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors font-mono rounded ${
                          phoneError
                            ? 'border-red-500 bg-red-950/20 text-white focus:border-red-500 ring-1 ring-red-500/40'
                            : touched.phone && formData.phone.length === 10
                            ? 'border-emerald-500/60 focus:border-emerald-500'
                            : 'border-white/15 focus:border-[#c5a059]'
                        }`}
                      />
                      {touched.phone && !phoneError && formData.phone.length === 10 && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 absolute right-3 top-3 pointer-events-none" />
                      )}
                    </div>
                    {phoneError ? (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-fadeIn">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{phoneError}</span>
                      </p>
                    ) : (
                      <p className="text-[10px] text-neutral-500 mt-1">
                        Enter 10-digit number starting with 6, 7, 8, or 9
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs uppercase tracking-wider text-neutral-300 font-medium">
                        Email Address{' '}
                        {formData.preferredContact === 'Email' ? (
                          <span className="text-red-400">*</span>
                        ) : (
                          <span className="text-neutral-500 text-[10px]">(Optional)</span>
                        )}
                      </label>
                      {touched.email && !emailError && formData.email && (
                        <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                          <CheckCircle2 className="w-3 h-3" /> Valid
                        </span>
                      )}
                    </div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={handleEmailChange}
                      onBlur={() => handleBlur('email')}
                      placeholder="rahul@example.com"
                      className={`w-full bg-[#181a20] border px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors rounded ${
                        emailError
                          ? 'border-red-500 bg-red-950/20 text-white focus:border-red-500 ring-1 ring-red-500/40'
                          : touched.email && formData.email && !emailError
                          ? 'border-emerald-500/60 focus:border-emerald-500'
                          : 'border-white/15 focus:border-[#c5a059]'
                      }`}
                    />
                    {emailError && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-fadeIn">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{emailError}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs uppercase tracking-wider text-neutral-300 font-medium">
                        Location in Lucknow <span className="text-red-400">*</span>
                      </label>
                      {touched.location && !locationError && formData.location.trim().length >= 3 && (
                        <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                          <CheckCircle2 className="w-3 h-3" /> Valid
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={handleLocationChange}
                      onBlur={() => handleBlur('location')}
                      placeholder="e.g. Gomti Nagar, Aliganj, IIM Rd"
                      className={`w-full bg-[#181a20] border px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors rounded ${
                        locationError
                          ? 'border-red-500 bg-red-950/20 text-white focus:border-red-500 ring-1 ring-red-500/40'
                          : touched.location && formData.location.trim().length >= 3
                          ? 'border-emerald-500/60 focus:border-emerald-500'
                          : 'border-white/15 focus:border-[#c5a059]'
                      }`}
                    />
                    {locationError && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-fadeIn">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{locationError}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Project Type, Property Type & Estimated Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                      Project Type <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => {
                        setFormData({ ...formData, projectType: e.target.value });
                        setTouched((prev) => ({ ...prev, projectType: true }));
                      }}
                      onBlur={() => handleBlur('projectType')}
                      className={`w-full bg-[#181a20] border px-3 py-2.5 text-xs text-white focus:outline-none rounded ${
                        projectTypeError
                          ? 'border-red-500 bg-red-950/20 focus:border-red-500 ring-1 ring-red-500/40'
                          : 'border-white/15 focus:border-[#c5a059]'
                      }`}
                    >
                      <option value="Home Interior">Home Interior</option>
                      <option value="Modular Kitchen">Modular Kitchen</option>
                      <option value="Wall Interior & Paneling">Wall Interior & Paneling</option>
                      <option value="False Ceiling & Lighting">False Ceiling & Lighting</option>
                      <option value="Commercial Grid Ceiling">Commercial Office Grid Ceiling</option>
                      <option value="Bedroom">Bedroom</option>
                      <option value="Living Room">Living Room</option>
                      <option value="Office">Office / Commercial</option>
                      <option value="Shop">Shop / Retail</option>
                      <option value="Renovation">Turnkey Renovation</option>
                      <option value="Other">Other Space</option>
                    </select>
                    {projectTypeError && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-fadeIn">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{projectTypeError}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                      Property Type <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-[#181a20] border border-white/15 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#c5a059] rounded"
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
                      Estimated Budget <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={formData.approxBudget}
                      onChange={(e) => {
                        setFormData({ ...formData, approxBudget: e.target.value });
                        setTouched((prev) => ({ ...prev, approxBudget: true }));
                      }}
                      onBlur={() => handleBlur('approxBudget')}
                      className={`w-full bg-[#181a20] border px-3 py-2.5 text-xs text-white focus:outline-none rounded ${
                        budgetError
                          ? 'border-red-500 bg-red-950/20 focus:border-red-500 ring-1 ring-red-500/40'
                          : 'border-white/15 focus:border-[#c5a059]'
                      }`}
                    >
                      <option value="Below ₹1 Lakh">Below ₹1 Lakh</option>
                      <option value="₹1–3 Lakh">₹1–3 Lakh</option>
                      <option value="₹3–5 Lakh">₹3–5 Lakh</option>
                      <option value="₹5–10 Lakh">₹5–10 Lakh</option>
                      <option value="₹10–20 Lakh">₹10–20 Lakh</option>
                      <option value="₹20 Lakh+">₹20 Lakh+</option>
                    </select>
                    {budgetError && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-fadeIn">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{budgetError}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['WhatsApp', 'Phone', 'Email'] as const).map((method) => (
                      <button
                        type="button"
                        key={method}
                        onClick={() => {
                          setFormData({ ...formData, preferredContact: method });
                          if (method === 'Email') {
                            setTouched((prev) => ({ ...prev, email: true }));
                          }
                        }}
                        className={`py-2 text-xs font-medium uppercase tracking-wider border cursor-pointer transition-colors ${
                          formData.preferredContact === method
                            ? 'bg-[#c5a059] text-black border-[#c5a059] font-bold'
                            : 'bg-[#181a20] text-neutral-400 border-white/10 hover:text-white'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Requirements / Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-medium">
                    Project Requirements or Specific Ideas <span className="text-neutral-500 text-[10px]">(Optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your room dimensions, move-in target date, design ideas, or specific material preferences..."
                    className="w-full bg-[#181a20] border border-white/15 p-3 text-xs text-white focus:outline-none focus:border-[#c5a059] rounded"
                  ></textarea>
                </div>

                {/* Submit Error Summary Banner */}
                {attemptedSubmit && hasAnyErrors && (
                  <div className="p-3 bg-red-950/40 border border-red-500/60 rounded flex items-start gap-2 text-xs text-red-300">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Please correct the highlighted fields above before submitting.</span>
                  </div>
                )}

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
