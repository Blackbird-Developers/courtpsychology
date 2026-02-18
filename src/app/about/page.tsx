import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Expert Reports',
  description: 'Learn about Expert Reports, Ireland\'s specialist forensic psychological assessment service. Our team provides independent, evidence-based evaluations for courts nationwide.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Objectivity',
      description: 'Reports are prepared impartially, irrespective of instructing party. Findings are presented without advocacy, allowing courts to draw their own conclusions.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      title: 'Rigour',
      description: 'All assessments employ validated psychometric instruments and structured methodologies. Opinion is clearly distinguished from evidence.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Clarity',
      description: 'Reports are written in clear, accessible language while maintaining technical accuracy. Jargon is avoided; where technical terms are necessary, they are explained.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Impartiality',
      description: 'The duty is to the court, not to instructing parties. Reports address questions posed honestly, even where findings may not favour the referrer.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      )
    }
  ];

  const credentials = [
    {
      title: 'Psychological Society of Ireland (PSI)',
      description: 'Full membership with Division of Forensic Psychology credentials',
      badge: 'PSI'
    },
    {
      title: 'CORU Registration',
      description: 'Registered with the Health and Social Care Professionals Council',
      badge: 'CORU'
    },
    {
      title: 'British Psychological Society (BPS)',
      description: 'Chartered status with forensic psychology specialisation',
      badge: 'CPsychol'
    },
    {
      title: 'Professional Indemnity',
      description: 'Full coverage for all assessment and expert witness activities',
      badge: 'Insured'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-grey-light via-white to-grey-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-4 block">
                About Expert Reports
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 text-balance">
                The Definitive Authority in Forensic Psychology
              </h1>
              <p className="text-navy/60 text-lg md:text-xl leading-relaxed mb-8">
                Expert Reports provides independent psychological assessments for 
                Irish courts. Our practice is built on a foundation of forensic 
                expertise, evidence-based methodology, and unwavering commitment 
                to impartiality.
              </p>
              <p className="text-navy/60 text-lg leading-relaxed">
                We serve solicitors, barristers, the Courts Service, Tusla, the HSE, 
                and private individuals requiring expert psychological opinion for 
                legal proceedings.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-grey">
              <blockquote className="text-xl md:text-2xl font-medium text-navy leading-relaxed mb-6 italic">
                &ldquo;Insight That Stands in Court.&rdquo;
              </blockquote>
              <p className="text-navy/60">
                Our tagline encapsulates our mission: to provide psychological 
                assessments of such quality that they withstand the rigours of 
                cross-examination and assist courts in reaching just decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-balance">
              Principles That Guide Every Assessment
            </h2>
            <p className="text-navy/60 text-lg">
              These four core values inform every aspect of our practice, from 
              initial instruction through to delivery of final report.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-grey-light rounded-xl p-8 border border-grey hover:border-teal/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-teal mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-navy/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 md:py-28 bg-grey-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Decades of Combined Forensic Experience
              </h2>
              <p className="text-navy/60 text-lg mb-6">
                Our team brings extensive experience across all levels of the Irish 
                court system, with particular expertise in:
              </p>
              
              <ul className="space-y-4">
                {[
                  'Criminal matters in District, Circuit, and Central Criminal Courts',
                  'Family law proceedings including Section 32 and Section 47 reports',
                  'Child protection assessments for Tusla and HSE',
                  'Personal injury litigation in Circuit and High Courts',
                  'Employment tribunal cases before the WRC',
                  'Forensic risk assessment using validated tools'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-navy/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {credentials.map((cred, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 border border-grey"
                >
                  <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold mb-4">
                    {cred.badge}
                  </div>
                  <h3 className="font-semibold text-navy mb-2 text-sm">{cred.title}</h3>
                  <p className="text-navy/60 text-xs">{cred.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-teal-light font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-white">
              Evidence-Based Practice, Court-Ready Reports
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Validated Instruments</h3>
              <p className="text-white/70">
                All assessments employ psychometric tests with established reliability, 
                validity, and normative data. We use only instruments appropriate for 
                forensic application.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Transparent Reasoning</h3>
              <p className="text-white/70">
                Reports clearly articulate the evidence base for all opinions. 
                Limitations are acknowledged, and the degree of confidence in 
                conclusions is stated.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Court-Ready</h3>
              <p className="text-white/70">
                Every report is prepared with the expectation of cross-examination. 
                We stand behind our findings and are available to provide oral 
                evidence when required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-grey-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-balance">
            Discuss Your Assessment Requirements
          </h2>
          <p className="text-navy/60 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for an initial consultation. We can advise on the most 
            appropriate assessment approach for your case requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-teal text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-dark transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="border-2 border-navy text-navy px-8 py-4 rounded-lg font-semibold hover:bg-navy hover:text-white transition-all duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
