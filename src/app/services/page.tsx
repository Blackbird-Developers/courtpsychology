import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forensic Assessment Services | Expert Reports',
  description: 'Comprehensive expert witness procurement and support for Irish courts including criminal, family law, actuarial services, risk assessments, and harmful sexual behaviour evaluations.',
};

interface ServiceSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  services: {
    name: string;
    description: string;
  }[];
  deliverables: string[];
  turnaround: string;
}

const serviceSections: ServiceSection[] = [
  {
    id: 'criminal',
    title: 'Criminal Court Assessments',
    subtitle: 'District, Circuit & Central Criminal Courts',
    description: 'Comprehensive psychological assessments to assist courts in criminal matters, from pre-trial evaluations to sentencing reports. All assessments follow BPS and PSI guidelines for forensic practice.',
    services: [
      {
        name: 'Pre-Sentencing Reports',
        description: 'Detailed psychological evaluation to inform sentencing decisions, including formulation of offending behaviour, relevant psychological factors, and risk assessment.'
      },
      {
        name: 'Fitness to Plead Assessments',
        description: 'Evaluation of cognitive and psychological capacity to participate meaningfully in trial proceedings.'
      },
      {
        name: 'Mental State at Time of Offence',
        description: 'Retrospective assessment of psychological state and relevant mental health factors at the time of alleged offending.'
      },
      {
        name: 'Mitigation Reports',
        description: 'Identification and documentation of relevant psychological factors that may be considered in mitigation of sentencing.'
      }
    ],
    deliverables: [
      'Comprehensive written report',
      'Full psychometric test results',
      'Risk formulation',
      'Treatment recommendations',
      'Court attendance available'
    ],
    turnaround: '21-28 days standard'
  },
  {
    id: 'family',
    title: 'Family Law Reports',
    subtitle: 'District & Circuit Family Courts',
    description: 'Specialist assessments for family law proceedings, prepared in accordance with Children First guidelines and with the best interests of the child as the paramount consideration.',
    services: [
      {
        name: 'Section 32 Reports (Voice of the Child)',
        description: 'Expert assessment capturing the child\'s views, wishes, and feelings for court consideration in custody and access matters.'
      },
      {
        name: 'Section 47 Reports',
        description: 'Court-directed comprehensive family assessments examining all relevant factors affecting children\'s welfare and best interests.'
      },
      {
        name: 'Custody & Access Evaluations',
        description: 'Detailed assessment of parental capacity, attachment relationships, and recommendations for living and contact arrangements.'
      },
      {
        name: 'Parental Alienation Assessment',
        description: 'Evaluation of family dynamics where alienating behaviours are alleged, with evidence-based recommendations.'
      }
    ],
    deliverables: [
      'Child-focused report',
      'Family observation records',
      'Attachment assessment',
      'Clear recommendations',
      'Case conference attendance'
    ],
    turnaround: '28-35 days standard'
  },
  {
    id: 'actuarial',
    title: 'Actuarial Services & Litigation Support',
    subtitle: 'Civil Litigation & Family Law',
    description: 'Independent actuarial assessments for civil litigation, providing detailed calculation of financial loss, pension value adjustments, and long-term future care costs. Clear, easy-to-follow reports.',
    services: [
      {
        name: 'Forensic Actuarial Reports',
        description: 'Independent actuarial assessments for civil litigation, providing detailed calculation of financial loss, pension value adjustments, and long-term future care costs. Clear, easy-to-follow reports.'
      },
      {
        name: 'Personal Injury & Fatal Accident Claims',
        description: 'Comprehensive evaluation of financial harm resulting from accident, trauma, or negligence, with full calculation of past and future loss of earnings.'
      },
      {
        name: 'Periodic Payment Orders (PPOs)',
        description: 'Specialist assessment and valuation of structured, ongoing payments for catastrophic injury cases, aligned with Irish High Court standards.'
      },
      {
        name: 'Pension Adjustment Orders (PAOs)',
        description: 'Evidence-based valuation of pension entitlements in family law, divorce, and separation cases, ensuring precise division of marital financial assets.'
      },
      {
        name: 'Financial Redress & Loss of Earnings',
        description: 'Detailed costing and capitalisation of financial damages resulting from unfair dismissal, breach of contract, or commercial disputes.'
      }
    ],
    deliverables: [
      'Detailed actuarial report',
      'Loss of earnings calculation',
      'Pension valuation',
      'Future care costings',
      'Clear, easy-to-follow presentation'
    ],
    turnaround: '14-21 days standard'
  },
  {
    id: 'risk',
    title: 'Forensic Risk Assessments',
    subtitle: 'Structured Professional Judgement',
    description: 'Systematic risk evaluations using internationally validated structured professional judgement tools, providing defensible opinions on risk of violence, sexual offending, and self-harm.',
    services: [
      {
        name: 'Violence Risk Assessment',
        description: 'Evaluation using HCR-20v3 and related instruments to assess risk of future violence and identify risk management strategies.'
      },
      {
        name: 'Sexual Offence Risk Assessment',
        description: 'Specialist assessment using SVR-20, RSVP, or other validated tools for individuals convicted of or alleged to have committed sexual offences.'
      },
      {
        name: 'Suicide & Self-Harm Risk',
        description: 'Comprehensive assessment of suicide risk factors, protective factors, and recommendations for risk management.'
      },
      {
        name: 'Stalking Risk Assessment',
        description: 'Evaluation of stalking behaviour risk using SAM or equivalent structured approaches.'
      }
    ],
    deliverables: [
      'Structured risk report',
      'Risk scenarios',
      'Management recommendations',
      'Monitoring indicators',
      'Review timeframes'
    ],
    turnaround: '21-28 days standard'
  },
  {
    id: 'hsb',
    title: 'Harmful Sexual Behaviour Assessments',
    subtitle: 'Child Protection & Family Welfare',
    description: 'Specialist psychological assessments for children and adolescents (under 18) displaying harmful sexual behaviours, conducted in line with Children First guidelines, Tusla protocols, and evidence-based frameworks to support safeguarding and welfare decisions.',
    services: [
      {
        name: 'Comprehensive HSB Assessment',
        description: 'Holistic, trauma-informed evaluation to understand the young person\'s behaviours, developmental context, and underlying factors, distinguishing harmful from age-appropriate sexual development.'
      },
      {
        name: 'Risk & Protective Factors Evaluation',
        description: 'Structured assessment using validated tools (e.g., AIM3, J-SOAP II, or equivalent) to identify risk scenarios, protective elements, and management strategies.'
      },
      {
        name: 'Formulation & Intervention Planning',
        description: 'Evidence-based formulation linking behaviours to history, with tailored recommendations for therapeutic interventions, family support, and safety planning.'
      },
      {
        name: 'Family & Systemic Assessment',
        description: 'Inclusion of caregiver interviews and family dynamics where appropriate to inform multi-agency responses and best-interest outcomes.'
      }
    ],
    deliverables: [
      'Comprehensive written report',
      'Behaviour classification (e.g., Brook Traffic Light Tool)',
      'Risk formulation & scenarios',
      'Strengths-based protective factors',
      'Detailed intervention & support recommendations',
      'Multi-agency guidance'
    ],
    turnaround: '28-42 days standard'
  },
  {
    id: 'employment',
    title: 'Workplace & Employment',
    subtitle: 'WRC & Employment Tribunal',
    description: 'Specialist psychological assessments for employment-related matters, including harassment claims, discrimination cases, and fitness to work evaluations.',
    services: [
      {
        name: 'Harassment Impact Assessment',
        description: 'Evaluation of psychological impact of workplace harassment or bullying, with causation opinion and treatment recommendations.'
      },
      {
        name: 'Discrimination Psychological Impact',
        description: 'Assessment of psychological harm resulting from alleged discrimination, with diagnosis and prognosis.'
      },
      {
        name: 'Fitness to Work Evaluation',
        description: 'Independent assessment of psychological fitness to continue in or return to employment role.'
      },
      {
        name: 'Reasonable Adjustments',
        description: 'Recommendations for workplace accommodations to support employees with psychological conditions.'
      }
    ],
    deliverables: [
      'Employment tribunal report',
      'Psychological diagnosis',
      'Causation analysis',
      'Prognosis & treatment',
      'Workplace recommendations'
    ],
    turnaround: '14-21 days standard'
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-grey-light via-white to-grey-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-teal font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 text-balance">
              Comprehensive Expert Witness Procurement and Admin
            </h1>
            <p className="text-navy/60 text-lg md:text-xl leading-relaxed">
              We coordinate the preparation of psychological reports by independent clinicians for criminal,
              family, and civil court proceedings. We support and coordinate the process from referral
              through to report delivery, while the solicitor retains full control of instruction and oversight.
            </p>
          </div>
          
          {/* Quick nav */}
          <div className="mt-10 flex flex-wrap gap-3">
            {serviceSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-navy/70 border border-grey hover:border-teal hover:text-teal transition-colors"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {serviceSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-grey-light'}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Content */}
              <div>
                <span className="text-teal font-medium text-sm mb-2 block">
                  {section.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                  {section.title}
                </h2>
                <p className="text-navy/60 text-lg mb-8">
                  {section.description}
                </p>
                
                <div className="space-y-6">
                  {section.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white rounded-xl p-6 border border-grey">
                      <h3 className="font-semibold text-navy mb-2">{service.name}</h3>
                      <p className="text-navy/60 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:pt-16">
                <div className="bg-navy rounded-2xl p-8 sticky top-32">
                  <h3 className="text-xl font-semibold mb-6 text-white">Report Includes</h3>
                  <ul className="space-y-3 mb-8">
                    {section.deliverables.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-teal-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-white/10 pt-6 mb-6">
                    <div className="text-sm text-white/60 mb-1">Standard Turnaround</div>
                    <div className="text-lg font-semibold text-teal-light">{section.turnaround}</div>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="block w-full bg-teal text-white text-center py-3 rounded-lg font-semibold hover:bg-teal-light transition-colors"
                  >
                    Request a Quotation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-white">
            Not Sure Which Assessment You Need?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Contact us to discuss your case. We provide initial consultations without 
            obligation to help determine the most appropriate assessment approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-teal text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-light transition-all duration-200"
            >
              Discuss Your Case
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
