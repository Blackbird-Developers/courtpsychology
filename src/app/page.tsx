import Link from 'next/link';
import { ServiceCard } from '@/components/ServiceCard';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Optimized for conversion */}
      <section className="relative min-h-[90vh] flex items-center pt-28 md:pt-32 pb-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-grey-light via-white to-grey-light" />
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230b2b57' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="stagger">
              {/* Trust badge */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="trust-badge">
                  <svg className="trust-badge-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>PSI Registered</span>
                </div>
              </div>
              
              {/* Tagline */}
              <p className="text-teal font-semibold text-sm sm:text-base tracking-wider uppercase mb-4">
                We coordinate with the expert witness on your behalf, while you remain the instructing solicitor.
              </p>

              {/* Headline - Solicitor-focused */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-navy leading-[1.1] mb-5 text-balance">
                Court-Ready Forensic Psychological Reports,{' '}
                <span className="relative">
                  <span className="relative z-10">Fast &amp; Reliable</span>
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-teal/20 -z-0" />
                </span>
              </h1>

              {/* Subheadline - Speed, reliability, ease for solicitors */}
              <p className="text-base sm:text-lg md:text-xl text-navy/70 leading-relaxed mb-6 max-w-xl">
                Independent forensic psychological assessments.{' '}
                Standard formats judges expect. Legal Aid &amp; private clients catered for. Hassle-free process from instruction to delivery.
              </p>

              {/* Key benefits - scannable, solicitor-focused */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2 text-navy/80">
                  <svg className="w-5 h-5 text-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Quick Turnaround</strong></span>
                </div>
                <div className="flex items-center gap-2 text-navy/80">
                  <svg className="w-5 h-5 text-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Minimal Involvement</strong> from solicitor</span>
                </div>
                <div className="flex items-center gap-2 text-navy/80">
                  <svg className="w-5 h-5 text-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Legal Aid</strong> &amp; private clients</span>
                </div>
                <div className="flex items-center gap-2 text-navy/80">
                  <svg className="w-5 h-5 text-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Nationwide</strong> service</span>
                </div>
              </div>
              
              {/* CTAs - Solicitor-focused */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
                <Link
                  href="/contact"
                  className="btn btn-primary btn-lg group"
                >
                  <span>Request a Quotation</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+353894227939"
                  className="btn btn-secondary"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call: +353 89 422 7939</span>
                </a>
              </div>
            </div>
            
            {/* Hero Visual - Shows credibility */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main card - Assessment preview */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border border-grey animate-float">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-navy text-sm">Assessment Complete</div>
                        <div className="text-xs text-navy/60">Forensic Court Report</div>
                      </div>
                    </div>
                    <span className="availability-badge">
                      <span className="live-indicator-dot" />
                      Delivered
                    </span>
                  </div>
                  
                  {/* Report preview lines */}
                  <div className="space-y-3 mb-6">
                    <div className="h-2.5 bg-grey rounded-full w-full" />
                    <div className="h-2.5 bg-grey rounded-full w-11/12" />
                    <div className="h-2.5 bg-grey rounded-full w-4/5" />
                    <div className="h-2.5 bg-grey rounded-full w-9/12" />
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-grey">
                    <div className="text-center">
                      <div className="text-lg font-bold text-navy">18</div>
                      <div className="text-[10px] text-navy/60 uppercase tracking-wider">Days</div>
                    </div>
                    <div className="text-center border-x border-grey">
                      <div className="text-lg font-bold text-teal">Sanction</div>
                      <div className="text-[10px] text-navy/60 uppercase tracking-wider">Requested</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-navy">32</div>
                      <div className="text-[10px] text-navy/60 uppercase tracking-wider">Pages</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-3 -right-3 bg-navy text-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium animate-fade-in">
                  ✓ Court-Ready Format
                </div>
                
                <div className="absolute -bottom-3 -left-3 bg-white px-4 py-3 rounded-lg shadow-xl border border-grey animate-slide-in-left">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-medium text-navy">Supports Criminal Legal Aid Process</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Agitate */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-balance text-white">
            Reports That Fail Court Standards Jeopardise Your Case
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Irish courts can reject forensic expert evidence that lacks independence or methodological rigour.
            Poorly prepared reports lead to adjournments, mounting costs, and avoidable delays.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                label: 'Inadequate forensic reports lead to mounting costs when family cases face multiple adjournments',
                icon: (
                  <svg className="w-10 h-10 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                ),
              },
              {
                label: 'Poorly prepared reports cause significant trial delays, particularly where psychiatric evidence is required',
                icon: (
                  <svg className="w-10 h-10 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                label: 'Courts may refuse even uncontested expert reports that lack rigour',
                icon: (
                  <svg className="w-10 h-10 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur rounded-xl p-6">
                <div className="mb-3 flex justify-center">{item.icon}</div>
                <div className="text-sm text-white/70 leading-relaxed">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-3 block">
              Forensic Assessment Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">
              Comprehensive Forensic Reports for Every Court Context
            </h2>
            <p className="text-navy/60 text-base md:text-lg">
              Evidence-based forensic assessments using validated instruments. Each report addresses
              the specific questions posed by legal proceedings.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <ServiceCard
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              }
              title="Criminal Court"
              description="Pre-sentencing reports, fitness to plead, mental state assessments"
              href="/services#criminal"
              features={['Pre-sentencing reports', 'Fitness to plead', 'Mental state at offence', 'Quick turnaround', 'Legal Aid & private clients', 'Nationwide']}
            />
            
            <ServiceCard
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="Family Law"
              description="Section 32/47 reports, custody evaluations, access arrangements"
              href="/services#family"
              features={['Section 32/47 reports', 'Custody evaluations', 'Voice of the Child', 'Quick turnaround', 'Nationwide']}
            />
            
            <ServiceCard
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
              title="Medico-Legal"
              description="Psychological injury, PTSD assessment, prognosis reports"
              href="/services#medicolegal"
              features={['Personal injury', 'PTSD assessment', 'Prognosis reports']}
            />
            
            <ServiceCard
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Forensic Risk Assessment"
              description="Violence risk, sexual offence risk, self-harm evaluation. Difficult to find clinicians who are qualified to do these reports — we have the specialists."
              href="/services#risk"
              features={['Violence risk', 'Sexual offence risk', 'Self-harm assessment']}
            />
            
            <ServiceCard
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
              title="Parenting Capacity"
              description="PAMS assessments, capacity evaluations, and support recommendations for child protection and family welfare proceedings."
              href="/services#parenting"
              features={['PAMS assessments', 'Capacity evaluation', 'Kinship assessments', 'Quick turnaround', 'Nationwide']}
            />
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all"
            >
              View all services & pricing
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Benefits with proof */}
      <section className="py-16 md:py-24 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-3 block">
                Why Forensic Expert Reports
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-6 text-balance">
                Forensic Reports That Stand Up to Cross-Examination
              </h2>
              <p className="text-navy/60 text-base md:text-lg mb-8">
                Our forensic assessments are built on rigorous methodology, validated instruments,
                and extensive court experience. When challenged, they hold.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'Evidence-Based Methodology',
                    description: 'Validated psychometric instruments and structured professional judgement tools.',
                    stat: '40+ validated tools'
                  },
                  {
                    title: 'Court-Ready Documentation',
                    description: 'Clear, well-structured forensic reports prepared in a court-ready format to assist solicitors and the court.',
                    stat: 'Court-ready format'
                  },
                  {
                    title: 'Rapid Turnaround',
                    description: 'We prioritise efficiency and aim to deliver your forensic report as quickly as possible. Expedited service available for urgent matters.',
                    stat: 'Fast delivery'
                  },
                  {
                    title: 'Expert Witness Support',
                    description: 'Available for cross-examination and case conferences when required.',
                    stat: '150+ appearances'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 bg-white rounded-xl border border-grey card-hover">
                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                        <h3 className="font-semibold text-navy">{item.title}</h3>
                        <span className="text-xs font-medium text-teal bg-teal/10 px-2 py-1 rounded-full whitespace-nowrap self-start">
                          {item.stat}
                        </span>
                      </div>
                      <p className="text-navy/60 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Credentials card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-grey">
              <h3 className="text-xl font-bold text-navy mb-6">Professional Credentials</h3>
              
              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    ),
                    title: 'Psychological Society of Ireland',
                    description: 'Registered members with specialist forensic credentials'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    ),
                    title: 'Extensive Court Experience',
                    description: 'Evidence provided in District, Circuit, High, and Central Criminal Courts'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                    title: 'Professional Indemnity',
                    description: 'Full professional indemnity insurance coverage'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 pb-5 border-b border-grey last:border-0 last:pb-0">
                    <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">{item.title}</h4>
                      <p className="text-navy/60 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA in credentials */}
              <div className="mt-6 pt-6 border-t border-grey">
                <Link
                  href="/about"
                  className="flex items-center justify-between p-3 rounded-lg bg-grey-light hover:bg-grey transition-colors group"
                >
                  <span className="font-medium text-navy">Learn more about our team</span>
                  <svg className="w-5 h-5 text-navy/60 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section - For Solicitors */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-3 block">
              Built for Solicitors
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">
              Forensic Reports That Make Your Job Easier
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                step: '1',
                text: 'We assist in identifying and coordinating with a suitable expert, who is instructed by the solicitor.',
              },
              {
                step: '2',
                text: 'We support communication between your office, the expert, and your client to keep the assessment moving.',
              },
              {
                step: '3',
                text: 'We will arrange your client\u2019s consultations with the expert.',
              },
              {
                step: '4',
                text: 'We provide the expert\u2019s quotation/invoice information and supporting documentation to assist your office with Legal Aid sanction and claim submission.',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-5 bg-grey-light rounded-xl border border-grey card-hover">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-teal font-bold text-lg">{item.step}</span>
                </div>
                <p className="text-navy font-medium text-base md:text-lg leading-relaxed pt-1.5">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-teal-light font-semibold text-sm tracking-wider uppercase mb-3 block">
              Simple Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-balance text-white">
              Solicitor Forensic Expert Reports
            </h2>
            <p className="text-white/70 text-base md:text-lg">
              A straightforward process designed to minimise your involvement.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: '01',
                title: 'Contact Us',
                description: 'Provide us with the book of evidence and other relevant materials. We will provide a detailed quotation for the proposed expert witness work to assist your application for prior Legal Aid sanction.',
              },
              {
                step: '02',
                title: 'Awaiting Sanction',
                description: 'Once you have received & provided us with sanction, we will commence.',
              },
              {
                step: '03',
                title: 'Report Delivered',
                description: 'Once the forensic report is completed, we will send you a copy together with documentation to support your Legal Aid claim.',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-teal/20 mb-3">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-white/60 text-sm mb-3">{item.description}</p>

                {/* Connector line on larger screens */}
                {index < 2 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-white/10" style={{ width: 'calc(100% - 2rem)', left: '80%' }} />
                )}
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="text-center mt-10 max-w-2xl mx-auto">
            <p className="text-white/50 text-xs italic">
              (Note: It is responsibility of solicitor to instruct legal aid and claims to recover medical report fees from client)
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-teal-light font-semibold hover:gap-3 transition-all"
            >
              View detailed process
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Strong close */}
      <section className="py-16 md:py-24 bg-grey-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Risk reversal */}
          <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Free consultation • No obligation • Confidential
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">
            Need to Arrange an Expert Assessment?
          </h2>
          <p className="text-navy/60 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Tell us about your case and we&apos;ll help coordinate the right forensic assessment with an
            independent clinician. Quick consultation, clear quotation, no obligation to proceed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="btn btn-primary btn-lg"
            >
              Submit a Referral
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+353894227939"
              className="btn btn-secondary"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +353 89 422 7939
            </a>
          </div>

          {/* Final trust signal */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-navy/50">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>28-day standard turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Legal Aid &amp; private clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Role disclaimer */}
      <section className="py-10 md:py-12 bg-white border-t border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-navy/60 text-sm leading-relaxed text-center">
            Expert Reports provides coordination and administrative support to solicitors arranging
            expert assessments and reports. The instructing solicitor remains responsible for
            instructing the expert witness, seeking any required sanction, and submitting claims.
            All reports are prepared independently by qualified clinicians.
          </p>
        </div>
      </section>
    </>
  );
}
