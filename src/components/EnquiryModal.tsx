import React, { useState, useEffect, useRef } from 'react';
import { X, Send, CheckCircle2, Phone, MessageCircle, AlertCircle, Sparkles, MapPin, Mail, DollarSign, Home } from 'lucide-react';
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
    location: '',
    approxBudget: '₹10–20 Lakh',
    preferredContact: 'WhatsApp' as 'Phone' | 'WhatsApp' | 'Email',
    message: ''
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTouched({});
      setAttemptedSubmit(false);
      setSubmitted(false);
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
      setTouched({});
      setAttemptedSubmit(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (prefilledType) {
      setFormData((prev) => ({ ...prev, projectType: prefilledType }));
    }
  }, [prefilledType]);

  if (!isOpen) return null;

  // Comprehensive Field Validator
  const validateField = (field: string, value: string): string | undefined => {
    switch (field) {
      case 'name': {
        const trimmed = value.trim();
        if (!trimmed) return 'Full Name is required.';
        if (trimmed.length < 3) return 'Name must be at least 3 letters.';
        if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) return 'Name should contain alphabets only.';
        // Reject spam like "aaaa", "sssss", "sdsdsd"
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
        if (!value.trim()) return 'Please select your approximate budget.';
        return undefined;
      }

      default:
        return undefined;
    }
  };

  // Compute live errors for touched or attempted submission
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
    // Only accept letters, spaces, hyphens, and periods
    const val = e.target.value.replace(/[^a-zA-Z\s.'-]/g, '');
    setFormData((prev) => ({ ...prev, name: val }));
    setTouched((prev) => ({ ...prev, name: true }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only digits, strictly up to 10 digits max
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
        email: formData.email.trim() || 'Not specified',
        projectType: formData.projectType,
        propertyType: formData.propertyType,
        location: formData.location.trim(),
        approxBudget: formData.approxBudget,
        preferredContact: formData.preferredContact,
        message: formData.message.trim() || 'Direct modal inquiry.'
      });
      setLoading(false);
      setSubmitted(true);
    }, 350);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md overflow-y-auto overscroll-contain flex justify-center p-3 sm:p-6 animate-modalFadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-[#121418] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh] my-auto animate-modalScaleIn rounded-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#c5a059] text-neutral-300 hover:text-black border border-white/10 hover:border-[#c5a059] transition-all flex items-center justify-center cursor-pointer shadow-lg active:scale-90 absolute top-4 right-4"
          aria-label="Close modal"
          title="Close (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 border border-[#c5a059] text-[#c5a059] mx-auto flex items-center justify-center rounded-full bg-[#c5a059]/10 shadow-[0_0_20px_rgba(197,160,89,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-white">Consultation Request Received</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-md mx-auto">
              Thank you, <strong className="text-[#c5a059]">{formData.name}</strong>. Your enquiry has been registered and permanently saved to our database. Our interior studio manager will connect with you via <strong className="text-white">{formData.preferredContact}</strong> shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-7 py-2.5 bg-[#c5a059] text-black font-bold text-xs uppercase tracking-wider rounded cursor-pointer hover:bg-[#d8b46d] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#c5a059]/40 bg-[#181a20] text-[10px] uppercase font-mono tracking-wider text-[#c5a059] mb-2">
                <Sparkles className="w-3 h-3" />
                <span>Acme Interiors Studio Consultation</span>
              </div>
              <h2 className="text-2xl font-serif text-white">Book Free Consultation</h2>
              <p className="text-xs text-neutral-400 mt-1">
                Tell us about your space. We'll provide customized blueprints & honest estimates.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name & Phone Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Full Name */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 font-medium">
                      Your Name <span className="text-red-400">*</span>
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
                    placeholder="Full Name (e.g. Rahul Sharma)"
                    className={`w-full bg-[#181a20] border px-3 py-2.5 text-xs text-white rounded transition-colors focus:outline-none ${
                      nameError
                        ? 'border-red-500 bg-red-950/20 text-white focus:border-red-500 ring-1 ring-red-500/40'
                        : touched.name && formData.name.trim().length >= 3
                        ? 'border-emerald-500/60 focus:border-emerald-500'
                        : 'border-white/10 focus:border-[#c5a059]'
                    }`}
                  />
                  {nameError && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-fadeIn">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{nameError}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] uppercase tracking-wider text-neutral-300 font-medium">
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
                      placeholder="10-digit Mobile (e.g. 8601050054)"
                      className={`w-full bg-[#181a20] border px-3 py-2.5 text-xs text-white rounded transition-colors focus:outline-none font-mono ${
                        phoneError
                          ? 'border-red-500 bg-red-950/20 text-white focus:border-red-500 ring-1 ring-red-500/40'
                          : touched.phone && formData.phone.length === 10
                          ? 'border-emerald-500/60 focus:border-emerald-500'
                          : 'border-white/10 focus:border-[#c5a059]'
                      }`}
                    />
                    {touched.phone && !phoneError && formData.phone.length === 10 && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 absolute right-3 top-3 pointer-events-none" />
                    )}
                  </div>
                  {phoneError ? (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-fadeIn">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{phoneError}</span>
                    </p>
                  ) : (
                    <p className="text-[10px] text-neutral-500 mt-1">
                      Enter 10-digit number starting with 6, 7, 8, or 9
                    </p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[11px] uppercase tracking-wider text-neutral-300 font-medium">
                    Email Address{' '}
                    {formData.preferredContact === 'Email' ? (
                      <span className="text-red-400">* (Required for Email contact)</span>
                    ) : (
                      <span className="text-neutral-500 text-[10px]">(Optional)</span>
                    )}
                  </label>
                  {touched.email && !emailError && formData.email && (
                    <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3" /> Valid Email
                    </span>
                  )}
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleEmailChange}
                  onBlur={() => handleBlur('email')}
                  placeholder="name@example.com"
                  className={`w-full bg-[#181a20] border px-3 py-2.5 text-xs text-white rounded transition-colors focus:outline-none ${
                    emailError
                      ? 'border-red-500 bg-red-950/20 text-white focus:border-red-500 ring-1 ring-red-500/40'
                      : touched.email && formData.email && !emailError
                      ? 'border-emerald-500/60 focus:border-emerald-500'
                      : 'border-white/10 focus:border-[#c5a059]'
                  }`}
                />
                {emailError && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-fadeIn">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{emailError}</span>
                  </p>
                )}
              </div>

              {/* Project Type & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-300 font-medium mb-1">
                    Project Type <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => {
                      setFormData({ ...formData, projectType: e.target.value });
                      setTouched((prev) => ({ ...prev, projectType: true }));
                    }}
                    onBlur={() => handleBlur('projectType')}
                    className={`w-full bg-[#181a20] border px-3 py-2.5 text-xs text-white rounded focus:outline-none ${
                      projectTypeError
                        ? 'border-red-500 bg-red-950/20 focus:border-red-500 ring-1 ring-red-500/40'
                        : 'border-white/10 focus:border-[#c5a059]'
                    }`}
                  >
                    <option value="Home Interior">Home Interior</option>
                    <option value="Modular Kitchen">Modular Kitchen</option>
                    <option value="Wall Interior & Paneling">Wall Interior & Paneling</option>
                    <option value="False Ceiling & Lighting">False Ceiling & Lighting</option>
                    <option value="Commercial Grid Ceiling">Commercial Office Grid Ceiling</option>
                    <option value="Bedroom">Bedroom Interior</option>
                    <option value="Living Room">Living Room Interior</option>
                    <option value="Office">Office Space</option>
                    <option value="Renovation">Turnkey Renovation</option>
                  </select>
                  {projectTypeError && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-fadeIn">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{projectTypeError}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-300 font-medium mb-1">
                    Approximate Budget <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.approxBudget}
                    onChange={(e) => {
                      setFormData({ ...formData, approxBudget: e.target.value });
                      setTouched((prev) => ({ ...prev, approxBudget: true }));
                    }}
                    onBlur={() => handleBlur('approxBudget')}
                    className={`w-full bg-[#181a20] border px-3 py-2.5 text-xs text-white rounded focus:outline-none ${
                      budgetError
                        ? 'border-red-500 bg-red-950/20 focus:border-red-500 ring-1 ring-red-500/40'
                        : 'border-white/10 focus:border-[#c5a059]'
                    }`}
                  >
                    <option value="Below ₹3 Lakh">Below ₹3 Lakh</option>
                    <option value="₹3–5 Lakh">₹3–5 Lakh</option>
                    <option value="₹5–10 Lakh">₹5–10 Lakh</option>
                    <option value="₹10–20 Lakh">₹10–20 Lakh</option>
                    <option value="₹20 Lakh+">₹20 Lakh+</option>
                  </select>
                  {budgetError && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-fadeIn">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{budgetError}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Location in Lucknow */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-[11px] uppercase tracking-wider text-neutral-300 font-medium">
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
                  placeholder="e.g. Aliganj, Gomti Nagar, Indira Nagar, Purania"
                  className={`w-full bg-[#181a20] border px-3 py-2.5 text-xs text-white rounded transition-colors focus:outline-none ${
                    locationError
                      ? 'border-red-500 bg-red-950/20 text-white focus:border-red-500 ring-1 ring-red-500/40'
                      : touched.location && formData.location.trim().length >= 3
                      ? 'border-emerald-500/60 focus:border-emerald-500'
                      : 'border-white/10 focus:border-[#c5a059]'
                  }`}
                />
                {locationError && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 animate-fadeIn">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{locationError}</span>
                  </p>
                )}
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neutral-300 font-medium mb-1">
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
                      className={`py-2 text-xs uppercase tracking-wider border rounded cursor-pointer transition-colors ${
                        formData.preferredContact === method
                          ? 'bg-[#c5a059] text-black border-[#c5a059] font-bold shadow-sm'
                          : 'bg-[#181a20] text-neutral-400 border-white/10 hover:text-white'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brief Requirements / Message */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neutral-300 font-medium mb-1">
                  Brief Requirements / Message <span className="text-neutral-500 text-[10px]">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. 3BHK flat interior with TV paneling, modular kitchen, and false ceiling in Aliganj..."
                  className="w-full bg-[#181a20] border border-white/10 p-2.5 text-xs text-white rounded focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              {/* Submit Error Summary Banner */}
              {attemptedSubmit && hasAnyErrors && (
                <div className="p-3 bg-red-950/40 border border-red-500/60 rounded flex items-start gap-2 text-xs text-red-300">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Please correct the highlighted fields above before submitting.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-[#c5a059] to-[#d8b46d] hover:brightness-110 text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-all rounded shadow-lg shadow-[#c5a059]/20 active:scale-98 disabled:opacity-60"
              >
                {loading ? (
                  <span>Registering & Saving...</span>
                ) : (
                  <>
                    <span>Submit Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
