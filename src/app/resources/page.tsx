import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources for Solicitors | Forms & Legal Aid Guide | Expert Reports',
  description: 'Download EW1 and LA5 forms for Legal Aid expert witness applications. Step-by-step Legal Aid process guide for solicitors instructing forensic psychological assessments.',
};

export default function ResourcesPage() {
  const legalAidSteps = [
    {
      number: '01',
      title: 'Request a Quotation',
      description: 'Send us a case summary and the report type needed. We provide a quote same day, assuming we have capacity.',
      details: [
        'Brief case summary required',
        'Include the report type needed',
        'No formal instruction needed at this stage',
        'Quote provided same day',
        'Legal Aid & private fee structures available',
      ],
    },
    {
      number: '02',
      title: 'Apply for Sanction (EW1 Form)',
      description: 'Use our quotation to submit your EW1 Form (Application for Sanction for an Expert Witness) to the Legal Aid Board. Processing typically takes 48 hours to 1 week — we use that time to provisionally clear a slot with our lead psychologist.',
      details: [
        'Download the EW1 Form from this page',
        'Attach our quotation to your application',
        'Submit to the Legal Aid Board',
        'We provisionally reserve an assessment slot during processing',
      ],
    },
    {
      number: '03',
      title: 'Instruction & SEW Number',
      description: 'Once you receive your SEW Number (Sanction for Expert Witness) from the DOJ, send it to us along with the Book of Evidence and your Letter of Instruction. We will then begin the assessment process.',
      details: [
        'SEW Number confirms DOJ approval and guarantees payment',
        'Provide the Book of Evidence',
        'Include your Letter of Instruction with specific questions',
        'Assessment is scheduled immediately upon receipt',
      ],
    },
    {
      number: '04',
      title: 'Clinical Assessment & Delivery',
      description: 'We handle all logistics from here — including booking professional prison visits, arranging video prison links, or scheduling community clinic appointments. Whether your client is on bail or in custody, we manage the entire process and provide regular updates on progress.',
      details: [
        'Typically 2 x 2-hour assessment sessions (clinical interview & psychometric testing)',
        'Collateral interviews with relevant third parties where required',
        'Prison visits booked directly by our team',
        'Video prison links arranged where appropriate',
        'Community clinic appointments for defendants on bail',
        'Regular progress updates provided to you',
      ],
    },
    {
      number: '05',
      title: 'Completion & Direct Payment (LA5 Form)',
      description: 'Once the psychologist completes the evaluation, the 10\u201320 page report is sent back to you along with the LA5 Claim Form (Legal Aid Claim for Expert Witness). Once you sign and return it to us, we handle the submission to the Department of Justice to trigger payment.',
      details: [
        'Final report delivered securely',
        'LA5 Form provided with the report',
        'You sign and return the LA5 to us',
        'We submit directly to the DOJ for payment',
        'No invoice to your firm — the DOJ pays us directly',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-grey-light via-white to-grey-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-4 block">
              Resources for Solicitors
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 text-balance">
              Forms, Guides & Practical Information
            </h1>
            <p className="text-navy/60 text-lg md:text-xl leading-relaxed">
              Everything you need to instruct an expert witness under Legal Aid or privately.
              Download the required forms and follow our step-by-step guide.
            </p>
          </div>

          {/* Quick nav */}
          <div className="flex flex-wrap gap-3 mt-10">
            <a href="#forms" className="text-sm font-medium text-navy/70 bg-white border border-grey px-4 py-2 rounded-full hover:border-teal hover:text-teal transition-colors">
              Downloadable Forms
            </a>
            <a href="#legal-aid-process" className="text-sm font-medium text-navy/70 bg-white border border-grey px-4 py-2 rounded-full hover:border-teal hover:text-teal transition-colors">
              Legal Aid Process
            </a>
            <a href="#logistics" className="text-sm font-medium text-navy/70 bg-white border border-grey px-4 py-2 rounded-full hover:border-teal hover:text-teal transition-colors">
              Logistics & Locations
            </a>
          </div>
        </div>
      </section>

      {/* Downloadable Forms Section */}
      <section id="forms" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-4 block">
              Required Forms
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Downloadable Forms
            </h2>
            <p className="text-navy/60 text-lg">
              The two key forms required for Legal Aid expert witness instructions.
              Download, complete, and submit as part of the process outlined below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* EW1 Form Card */}
            <div className="bg-grey-light rounded-xl p-8 border border-grey">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">EW1 Form</h3>
              <p className="text-teal font-medium text-sm mb-4">
                Application for Sanction for an Expert Witness
              </p>
              <p className="text-navy/60 text-sm leading-relaxed mb-6">
                The solicitor completes this form to apply to the Legal Aid Board for
                sanction to engage an expert witness. Our quotation should be attached to this
                application. This is used at <strong>Step 2</strong> of the Legal Aid process below.
              </p>
              <a
                href="/forms/EW1-Form.pdf"
                download
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download EW1 Form
              </a>
            </div>

            {/* LA5 Form Card */}
            <div className="bg-grey-light rounded-xl p-8 border border-grey">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">LA5 Form</h3>
              <p className="text-teal font-medium text-sm mb-4">
                Legal Aid Claim for Expert Witness
              </p>
              <p className="text-navy/60 text-sm leading-relaxed mb-6">
                This is the final claim form signed by the solicitor and the psychologist after
                the report is delivered. It triggers the Department of Justice to issue direct
                payment. This is used at <strong>Step 5</strong> of the Legal Aid process below.
              </p>
              <a
                href="/forms/LA5-Form.pdf"
                download
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download LA5 Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Aid Process Section */}
      <section id="legal-aid-process" className="py-20 md:py-28 bg-grey-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-4 block">
              For Solicitors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Legal Aid Process: Step by Step
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed">
              Here is what needs to happen before we get your court-ready report.
              This guide covers the administrative and funding workflow from your first
              enquiry through to payment by the Department of Justice.
            </p>
          </div>

          <div className="space-y-0">
            {legalAidSteps.map((step, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-12 gap-8 py-12 border-b border-grey last:border-b-0"
              >
                {/* Step number */}
                <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                  <div className="text-5xl md:text-6xl font-bold text-navy/10">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-5">
                  <h3 className="text-2xl font-bold text-navy mb-3">{step.title}</h3>
                  <p className="text-navy/60 leading-relaxed">{step.description}</p>

                  {/* Inline download links for Steps 2 and 5 */}
                  {step.number === '02' && (
                    <a
                      href="/forms/EW1-Form.pdf"
                      download
                      className="inline-flex items-center gap-2 text-teal font-semibold text-sm mt-4 hover:text-teal-dark transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download EW1 Form
                    </a>
                  )}
                  {step.number === '05' && (
                    <a
                      href="/forms/LA5-Form.pdf"
                      download
                      className="inline-flex items-center gap-2 text-teal font-semibold text-sm mt-4 hover:text-teal-dark transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download LA5 Form
                    </a>
                  )}
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

          {/* DOJ submission note */}
          <div className="mt-12 bg-white rounded-xl p-6 border border-grey">
            <p className="text-navy/60 text-sm leading-relaxed">
              <strong className="text-navy">Legal Aid Board — EW1 Submissions:</strong>{' '}
              Submit your completed EW1 Form along with the expert&apos;s quotation to the Legal Aid Board.
              Contact the Legal Aid Board directly for the current submission email address and any updated guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Logistics & Assessment Locations Section */}
      <section id="logistics" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-4 block">
                Logistics Handled
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                We Manage All Assessment Logistics
              </h2>
              <p className="text-navy/60 text-lg mb-8">
                Whether your client is on bail or in custody, our team handles the entire
                scheduling and logistics process — minimising your administrative burden.
              </p>

              <div className="space-y-6">
                <div className="bg-grey-light rounded-xl p-6 border border-grey">
                  <h3 className="font-semibold text-navy mb-2">Prison Visits</h3>
                  <p className="text-navy/60 text-sm">
                    We book professional prison visits directly with prison authorities,
                    including scheduling around court dates, legal visits, and other commitments.
                    Our psychologists attend in person for comprehensive face-to-face assessments.
                  </p>
                </div>

                <div className="bg-grey-light rounded-xl p-6 border border-grey">
                  <h3 className="font-semibold text-navy mb-2">Video Prison Links</h3>
                  <p className="text-navy/60 text-sm">
                    Where appropriate, we arrange secure video links with prison facilities
                    for assessments that can be conducted remotely. We manage all technical
                    coordination and scheduling with the prison, so you don&apos;t have to.
                  </p>
                </div>

                <div className="bg-grey-light rounded-xl p-6 border border-grey">
                  <h3 className="font-semibold text-navy mb-2">Bail & Community Assessments</h3>
                  <p className="text-navy/60 text-sm">
                    Defendants on bail are seen at our community clinic locations. We handle
                    all appointment scheduling, reminders, and follow-ups to ensure assessments
                    proceed without delay.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-navy rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-white">
                  What We Handle
                </h3>
                <p className="text-white/70 text-sm mb-6">
                  Whether your client is in custody or on bail, our team manages all
                  logistics so you can focus on your case:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-white/80">
                    <svg className="w-5 h-5 text-teal-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Prison visit scheduling
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <svg className="w-5 h-5 text-teal-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Video prison link coordination
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <svg className="w-5 h-5 text-teal-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Community clinic appointment booking
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <svg className="w-5 h-5 text-teal-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Organising times for defendants & psychologists
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <svg className="w-5 h-5 text-teal-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Proactive progress updates to solicitor
                  </li>
                  <li className="flex items-center gap-3 text-white/80">
                    <svg className="w-5 h-5 text-teal-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Rescheduling if needed
                  </li>
                </ul>

                <Link
                  href="/contact"
                  className="block w-full bg-teal text-white text-center py-3 rounded-lg font-semibold hover:bg-teal-light transition-colors"
                >
                  Discuss Your Case
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-white">
            Ready to Instruct an Expert?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Contact us to request a quotation or discuss your Legal Aid case.
            We respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-teal text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-light transition-all duration-200"
            >
              Request a Quotation
            </Link>
            <Link
              href="/process"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              View Our Process
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
