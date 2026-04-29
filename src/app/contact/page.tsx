'use client';

import { useState, useEffect } from 'react';
import type { FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  organisation: string;
  role: string;
  caseType: string;
  urgency: string;
  message: string;
}

const caseTypes = [
  { value: 'criminal', label: 'Criminal Court Assessment' },
  { value: 'family', label: 'Family Law Report' },
  { value: 'medicolegal', label: 'Medico-Legal Report' },
  { value: 'risk', label: 'Forensic Risk Assessment' },
  { value: 'parenting', label: 'Parenting Capacity Assessment' },
  { value: 'employment', label: 'Workplace/Employment' },
  { value: 'other', label: 'Other / Not Sure' },
];

const urgencyOptions = [
  { value: 'standard', label: 'Standard (28 days)', badge: null },
  { value: 'priority', label: 'Priority (21 days)', badge: 'Most popular' },
  { value: 'urgent', label: 'Urgent (discuss timeline)', badge: null },
  { value: 'undecided', label: 'Not yet determined', badge: null },
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    role: '',
    caseType: '',
    urgency: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Mark form as started for exit intent logic
  useEffect(() => {
    if (formData.name || formData.email) {
      sessionStorage.setItem('formStarted', 'true');
    }
  }, [formData.name, formData.email]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<FormData> = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
    }

    if (currentStep === 2) {
      if (!formData.caseType) newErrors.caseType = 'Please select an assessment type';
    }

    if (currentStep === 3) {
      if (!formData.message.trim()) newErrors.message = 'Please describe your case briefly';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateStep(3)) return;
    
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to send enquiry');
      }

      setIsSubmitted(true);
      sessionStorage.removeItem('formStarted');
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Something went wrong. Please try again or email info@expertreports.ie directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-grey-light flex items-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-navy mb-4">Enquiry Received!</h1>
          <p className="text-navy/60 text-base sm:text-lg mb-6">
            Thank you, {formData.name.split(' ')[0]}. We&apos;ll review your enquiry and 
            respond within <strong className="text-navy">24 hours</strong>.
          </p>
          
          {/* What happens next */}
          <div className="bg-white rounded-xl p-6 mb-8 text-left border border-grey">
            <h2 className="font-semibold text-navy mb-4">What happens next?</h2>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center flex-shrink-0 text-xs font-medium">1</div>
                <p className="text-navy/70">We&apos;ll review your case details and requirements</p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center flex-shrink-0 text-xs font-medium">2</div>
                <p className="text-navy/70">A senior psychologist will call to discuss your needs</p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center flex-shrink-0 text-xs font-medium">3</div>
                <p className="text-navy/70">You&apos;ll receive a formal quote and timeline</p>
              </div>
            </div>
          </div>

          <a
            href="/"
            className="btn btn-primary"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 bg-gradient-to-br from-grey-light via-white to-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="live-indicator-dot" />
              <span className="text-sm font-medium text-navy/70">Responding within 24 hours</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4 text-balance">
              Get Your Free Consultation
            </h1>
            <p className="text-navy/60 text-base sm:text-lg md:text-xl leading-relaxed">
              Tell us about your case and we&apos;ll recommend the right forensic assessment approach.
              Legal Aid &amp; private clients welcome. No obligation, completely confidential.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-8 md:py-12 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Multi-step Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border border-grey">
                {/* Progress Steps */}
                <div className="progress-steps mb-8">
                  {[1, 2, 3].map((s, i) => (
                    <div 
                      key={s}
                      className={`progress-step ${step === s ? 'progress-step-active' : ''} ${step > s ? 'progress-step-complete' : ''}`}
                    >
                      {i > 0 && <div className="progress-step-line mr-2" />}
                      <div className="progress-step-circle">
                        {step > s ? (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          s
                        )}
                      </div>
                      {i < 2 && <div className="progress-step-line ml-2" />}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Contact Details */}
                  {step === 1 && (
                    <div className="animate-fade-in">
                      <h2 className="text-xl font-bold text-navy mb-2">Your Details</h2>
                      <p className="text-navy/60 text-sm mb-6">We&apos;ll use these to get back to you</p>
                      
                      <div className="space-y-5">
                        <div className="form-group">
                          <label htmlFor="name" className="form-label form-label-required">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`form-input ${errors.name ? 'form-input-error' : ''} ${formData.name && !errors.name ? 'form-input-success' : ''}`}
                            placeholder="Your name"
                            autoFocus
                          />
                          {errors.name && <p className="form-error">{errors.name}</p>}
                        </div>
                        
                        <div className="form-group">
                          <label htmlFor="email" className="form-label form-label-required">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-input ${errors.email ? 'form-input-error' : ''} ${formData.email && !errors.email ? 'form-input-success' : ''}`}
                            placeholder="you@example.com"
                          />
                          {errors.email && <p className="form-error">{errors.email}</p>}
                          <p className="form-helper">We&apos;ll send confirmation and updates here</p>
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="form-group">
                            <label htmlFor="phone" className="form-label">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="form-input"
                              placeholder="+353 1 234 5678"
                            />
                          </div>
                          
                          <div className="form-group">
                            <label htmlFor="organisation" className="form-label">
                              Organisation/Firm
                            </label>
                            <input
                              type="text"
                              id="organisation"
                              name="organisation"
                              value={formData.organisation}
                              onChange={handleChange}
                              className="form-input"
                              placeholder="Law firm or organisation"
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="role" className="form-label">
                            Your Role
                          </label>
                          <input
                            type="text"
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="e.g. Solicitor, Barrister, Social Worker"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Assessment Type */}
                  {step === 2 && (
                    <div className="animate-fade-in">
                      <h2 className="text-xl font-bold text-navy mb-2">Assessment Type</h2>
                      <p className="text-navy/60 text-sm mb-6">Select the type of assessment you need</p>
                      
                      <div className="form-group">
                        <div className="grid gap-3">
                          {caseTypes.map((type) => (
                            <label
                              key={type.value}
                              className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                formData.caseType === type.value
                                  ? 'border-teal bg-teal/5'
                                  : 'border-grey hover:border-grey-dark'
                              }`}
                            >
                              <input
                                type="radio"
                                name="caseType"
                                value={type.value}
                                checked={formData.caseType === type.value}
                                onChange={handleChange}
                                className="w-5 h-5 text-teal focus:ring-teal"
                              />
                              <span className="font-medium text-navy">{type.label}</span>
                              {formData.caseType === type.value && (
                                <svg className="w-5 h-5 text-teal ml-auto" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              )}
                            </label>
                          ))}
                        </div>
                        {errors.caseType && <p className="form-error mt-2">{errors.caseType}</p>}
                      </div>

                      <div className="form-group mt-6">
                        <label className="form-label">Timeline Preference</label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {urgencyOptions.map((option) => (
                            <label
                              key={option.value}
                              className={`relative flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                formData.urgency === option.value
                                  ? 'border-teal bg-teal/5'
                                  : 'border-grey hover:border-grey-dark'
                              }`}
                            >
                              <input
                                type="radio"
                                name="urgency"
                                value={option.value}
                                checked={formData.urgency === option.value}
                                onChange={handleChange}
                                className="w-4 h-4 text-teal focus:ring-teal"
                              />
                              <span className="text-sm font-medium text-navy">{option.label}</span>
                              {option.badge && (
                                <span className="absolute -top-2 right-3 text-[10px] font-medium bg-teal text-white px-2 py-0.5 rounded-full">
                                  {option.badge}
                                </span>
                              )}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Case Details */}
                  {step === 3 && (
                    <div className="animate-fade-in">
                      <h2 className="text-xl font-bold text-navy mb-2">Case Details</h2>
                      <p className="text-navy/60 text-sm mb-6">Brief overview helps us prepare for your call</p>
                      
                      <div className="form-group">
                        <label htmlFor="message" className="form-label form-label-required">
                          Tell us about your case
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className={`form-input resize-none ${errors.message ? 'form-input-error' : ''}`}
                          placeholder="Please provide a brief overview of the case and any specific questions you need addressed..."
                        />
                        {errors.message && <p className="form-error">{errors.message}</p>}
                        <p className="form-helper">This helps us prepare for your consultation</p>
                      </div>

                      {/* Summary */}
                      <div className="mt-6 p-4 bg-grey-light rounded-xl">
                        <h3 className="text-sm font-semibold text-navy mb-3">Your enquiry summary</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-navy/60">Name</span>
                            <span className="font-medium text-navy">{formData.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-navy/60">Email</span>
                            <span className="font-medium text-navy">{formData.email}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-navy/60">Assessment</span>
                            <span className="font-medium text-navy">
                              {caseTypes.find(t => t.value === formData.caseType)?.label || '-'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-navy/60">Timeline</span>
                            <span className="font-medium text-navy">
                              {urgencyOptions.find(o => o.value === formData.urgency)?.label || 'Not specified'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex flex-col-reverse sm:flex-row gap-3 mt-8 pt-6 border-t border-grey">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn btn-secondary flex-1"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                      </button>
                    )}
                    
                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn btn-primary flex-1"
                      >
                        Continue
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary btn-lg flex-1"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit My Enquiry
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Trust signals below form */}
                  <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-4 text-xs text-navy/50">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span>Secure & encrypted</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>No spam, ever</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Response in 24hrs</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Direct Contact - More prominent */}
              <div className="bg-white rounded-2xl p-6 border border-grey">
                <h3 className="text-lg font-bold text-navy mb-5">Prefer to Call?</h3>
                <a 
                  href="tel:+353894227939"
                  className="flex items-center gap-4 p-4 rounded-xl bg-navy text-white hover:bg-navy-light transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">+353 89 422 7939</div>
                    <div className="text-sm text-white/70">Mon-Fri, 9:00-17:30</div>
                  </div>
                </a>

                <a 
                  href="mailto:info@expertreports.ie"
                  className="flex items-center gap-4 p-4 mt-3 rounded-xl border border-grey hover:bg-grey-light transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-grey-light flex items-center justify-center">
                    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-navy">info@expertreports.ie</div>
                    <div className="text-sm text-navy/60">Email us anytime</div>
                  </div>
                </a>
              </div>
              
              {/* Availability */}
              <div className="bg-teal text-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  <span className="font-semibold">Currently Available</span>
                </div>
                <p className="text-white/80 text-sm mb-4">
                  We&apos;re accepting new instructions. Next available assessment slot 
                  is within 3 business days.
                </p>
                <div className="text-sm text-white/60">
                  Average response time: <strong className="text-white">4 hours</strong>
                </div>
              </div>

              {/* Trust signals */}
              <div className="bg-white rounded-2xl p-6 border border-grey">
                <h3 className="text-sm font-semibold text-navy mb-4">Your enquiry is confidential</h3>
                <div className="space-y-3 text-sm text-navy/60">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Information used solely to respond to your enquiry</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>GDPR compliant data handling</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Never shared with third parties</span>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-white rounded-2xl p-6 border border-grey">
                <h3 className="text-sm font-semibold text-navy mb-4">What to expect</h3>
                <div className="space-y-3 text-sm text-navy/60">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Clear quote with no hidden fees</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Realistic timeline for your case</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Advice on the right assessment type</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
