import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Forensic Assessment Process | Expert Reports',
  description: 'Learn about our structured forensic assessment process from initial instruction through to report delivery and court attendance.',
};

export default function ProcessPage() {
  const steps = [
    {
      number: '01',
      title: 'Initial Enquiry',
      duration: 'Day 1',
      description: 'Contact us with case details. We respond within 24 hours to discuss requirements, confirm suitability, and provide a fee estimate.',
      details: [
        'Brief case overview via phone or email',
        'Confirmation of assessment type required',
        'Discussion of timeline requirements',
        'Fee estimate provided',
        'Conflict of interest check completed'
      ]
    },
    {
      number: '02',
      title: 'Formal Instruction',
      duration: 'Day 2-3',
      description: 'Following acceptance, formal instruction is received along with relevant documentation and specific questions to be addressed.',
      details: [
        'Letter of instruction received',
        'Specific questions for opinion documented',
        'Relevant records provided (medical, legal, etc.)',
        'Fee agreement confirmed',
        'Assessment appointment scheduled'
      ]
    },
    {
      number: '03',
      title: 'Document Review',
      duration: 'Day 4-7',
      description: 'Prior to assessment, all provided documentation is reviewed to inform interview structure and identify areas requiring exploration.',
      details: [
        'Medical records reviewed',
        'Legal documentation analysed',
        'Previous psychological reports considered',
        'Interview schedule prepared',
        'Psychometric test battery selected'
      ]
    },
    {
      number: '04',
      title: 'Clinical Assessment',
      duration: 'Day 8-14',
      description: 'Comprehensive psychological assessment conducted, typically requiring 3-6 hours of direct client contact depending on complexity.',
      details: [
        'Detailed clinical interview',
        'Psychometric testing administered',
        'Behavioural observations recorded',
        'Third-party information gathered if required',
        'Assessment sessions may be split across days'
      ]
    },
    {
      number: '05',
      title: 'Analysis & Integration',
      duration: 'Day 15-18',
      description: 'Test results scored and interpreted, integrated with interview findings and documentary evidence to form coherent formulation.',
      details: [
        'Psychometric scoring completed',
        'Test results interpreted against norms',
        'Clinical data integrated',
        'Formulation developed',
        'Conclusions drafted'
      ]
    },
    {
      number: '06',
      title: 'Report Preparation',
      duration: 'Day 19-21',
      description: 'Detailed written report prepared addressing all questions posed, with clear conclusions and recommendations where appropriate.',
      details: [
        'Full report drafted',
        'Quality assurance review',
        'Report addresses all questions posed',
        'Recommendations included if requested',
        'Report finalised for delivery'
      ]
    },
    {
      number: '07',
      title: 'Report Delivery',
      duration: 'Day 21',
      description: 'Final report delivered to instructing party in secure PDF format. Available to discuss findings and clarify any aspects.',
      details: [
        'Secure electronic delivery',
        'Hard copies provided if required',
        'Clarification of findings available',
        'Supplementary questions addressed',
        'Invoice submitted'
      ]
    },
    {
      number: '08',
      title: 'Court Attendance',
      duration: 'As Scheduled',
      description: 'If required, attend court to provide oral evidence. Conference with legal team arranged in advance to prepare for testimony.',
      details: [
        'Pre-hearing conference with counsel',
        'Court attendance as expert witness',
        'Evidence given under oath',
        'Cross-examination addressed',
        'Court attendance fees apply'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-grey-light via-white to-grey-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 text-balance">
              From Instruction to Delivery
            </h1>
            <p className="text-navy/60 text-lg md:text-xl leading-relaxed">
              A structured, transparent process designed for the demands of legal practice. 
              Every step is documented, and you are kept informed throughout.
            </p>
          </div>
          
          {/* Timeline stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy">21</div>
              <div className="text-sm text-navy/60">Days standard turnaround</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy">Fast</div>
              <div className="text-sm text-navy/60">Expedited service available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy">24hr</div>
              <div className="text-sm text-navy/60">Initial response time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative grid md:grid-cols-12 gap-8 py-12 border-b border-grey last:border-b-0"
              >
                {/* Step number and line */}
                <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                  <div className="text-5xl md:text-6xl font-bold text-navy/10">
                    {step.number}
                  </div>
                  <div className="text-sm font-medium text-teal bg-teal/10 px-3 py-1 rounded-full">
                    {step.duration}
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:col-span-5">
                  <h2 className="text-2xl font-bold text-navy mb-3">{step.title}</h2>
                  <p className="text-navy/60 leading-relaxed">{step.description}</p>
                </div>
                
                {/* Details */}
                <div className="md:col-span-5">
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-navy/70">
                        <svg className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 md:py-28 bg-grey-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-4 block">
                What to Expect
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Information for Clients Attending Assessment
              </h2>
              <p className="text-navy/60 text-lg mb-8">
                If you have been referred for psychological assessment, you may 
                find it helpful to know what to expect during the process.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-grey">
                  <h3 className="font-semibold text-navy mb-2">Duration</h3>
                  <p className="text-navy/60 text-sm">
                    Assessments typically take between 3-6 hours, sometimes spread 
                    across two sessions. You will be informed of expected duration 
                    when booking.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-grey">
                  <h3 className="font-semibold text-navy mb-2">What to Bring</h3>
                  <p className="text-navy/60 text-sm">
                    Government-issued photo ID, any relevant medical records you 
                    have, and glasses or hearing aids if you use them.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-grey">
                  <h3 className="font-semibold text-navy mb-2">The Assessment</h3>
                  <p className="text-navy/60 text-sm">
                    You will be asked questions about your background, current 
                    situation, and the matters relevant to your case. You may 
                    also complete some standardised questionnaires or tests.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-grey">
                  <h3 className="font-semibold text-navy mb-2">Confidentiality</h3>
                  <p className="text-navy/60 text-sm">
                    Information gathered will be included in a report sent to the 
                    instructing party. The limits of confidentiality will be 
                    explained at the start of the assessment.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-4 block">
                Expedited Service
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Urgent Assessments Available
              </h2>
              <p className="text-navy/60 text-lg mb-8">
                We understand that legal deadlines do not always accommodate 
                standard turnaround times. Expedited service is available for 
                urgent matters.
              </p>
              
              <div className="bg-navy rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-white">Expedited Timeline</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-white/80">Assessment scheduled</span>
                    <span className="font-semibold text-teal-light">Within 5 days</span>
                  </li>
                  <li className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-white/80">Report delivered</span>
                    <span className="font-semibold text-teal-light">As fast as possible</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-white/80">Court attendance</span>
                    <span className="font-semibold text-teal-light">Priority scheduling</span>
                  </li>
                </ul>
                
                <p className="text-white/60 text-sm mb-6">
                  Expedited service is subject to availability and attracts 
                  additional fees. Contact us to discuss urgent requirements.
                </p>
                
                <Link
                  href="/contact"
                  className="block w-full bg-teal text-white text-center py-3 rounded-lg font-semibold hover:bg-teal-light transition-colors"
                >
                  Discuss Urgent Case
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-4 block">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: 'What documentation do you need to begin?',
                a: 'We require a formal letter of instruction setting out the specific questions to be addressed, along with relevant case documentation (medical records, previous reports, legal papers). The more context provided, the more comprehensive the assessment.'
              },
              {
                q: 'Can assessments be conducted remotely?',
                a: 'Some assessments can be conducted via secure video link where appropriate. However, many psychometric tests require in-person administration. We will advise on the most appropriate approach for your case.'
              },
              {
                q: 'What happens if additional sessions are needed?',
                a: 'Occasionally, complex cases require additional assessment time. We will inform you promptly if this becomes apparent, along with any additional fee implications, before proceeding.'
              },
              {
                q: 'How are fees structured?',
                a: 'Fees are quoted on a per-assessment basis and include all professional time from instruction through to report delivery. Court attendance is charged separately at a daily rate. Fee estimates are provided at the enquiry stage.'
              },
              {
                q: 'What is your cancellation policy?',
                a: 'Cancellations made more than 48 hours before a scheduled assessment incur no charge. Late cancellations may be subject to a fee. We understand that cases can settle unexpectedly and approach such situations reasonably.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-grey-light rounded-xl p-6">
                <h3 className="font-semibold text-navy mb-2">{item.q}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}

            {/* Legal Aid cross-reference */}
            <div className="mt-8 bg-teal/5 border border-teal/20 rounded-xl p-6 text-center">
              <h3 className="font-semibold text-navy mb-2">Working with Legal Aid?</h3>
              <p className="text-navy/60 text-sm mb-4">
                See our step-by-step Legal Aid guide for solicitors, including downloadable EW1 and LA5 forms.
              </p>
              <Link href="/resources#legal-aid-process" className="text-teal font-semibold text-sm hover:text-teal-dark transition-colors">
                View Legal Aid Guide &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-white">
            Ready to Begin?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Contact us to discuss your assessment requirements. Initial enquiries 
            are responded to within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-teal text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-light transition-all duration-200"
            >
              Start Your Enquiry
            </Link>
            <Link
              href="/services"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
