import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Expert Reports',
  description: 'How Expert Reports collects, uses, and protects your personal data in accordance with GDPR and Irish data protection law.',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 bg-gradient-to-br from-grey-light via-white to-grey-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            Privacy Policy
          </h1>
          <p className="text-navy/60 text-base sm:text-lg">
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-navy max-w-none">

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">Introduction</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                Expert Reports Limited (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you use our website, engage our services, or otherwise interact with us.
              </p>
              <p className="text-navy/70 leading-relaxed mb-4">
                We process personal data in accordance with the General Data Protection Regulation (EU) 2016/679 (&quot;GDPR&quot;) and the Irish Data Protection Acts 1988 to 2018. For the purposes of data protection law, Expert Reports Limited is the data controller.
              </p>
              <p className="text-navy/70 leading-relaxed">
                Please read this Privacy Policy carefully. By using our website or services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>

            {/* 1. Data Controller */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">1. Data Controller</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                The data controller responsible for your personal data is:
              </p>
              <div className="bg-grey-light rounded-xl p-6 mb-4">
                <p className="text-navy font-semibold mb-2">Expert Reports Limited</p>
                <p className="text-navy/70 text-sm mb-1">[Registered Address]</p>
                <p className="text-navy/70 text-sm mb-1">Dublin, Ireland</p>
                <p className="text-navy/70 text-sm mb-1">
                  Email:{' '}
                  <a href="mailto:info@expertreports.ie" className="text-teal hover:underline">
                    info@expertreports.ie
                  </a>
                </p>
                <p className="text-navy/70 text-sm">
                  Phone:{' '}
                  <a href="tel:+353860419300" className="text-teal hover:underline">
                    +353 86 041 9300
                  </a>
                </p>
              </div>
              <p className="text-navy/70 leading-relaxed">
                Company Registration Number: [CRO Number]
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">2. Information We Collect</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                We may collect and process the following categories of personal data:
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">2.1 Information You Provide to Us</h3>
              <ul className="list-disc ml-6 space-y-2 text-navy/70">
                <li><strong className="text-navy">Identity Data:</strong> name, title, date of birth, gender</li>
                <li><strong className="text-navy">Contact Data:</strong> address, email address, telephone numbers</li>
                <li><strong className="text-navy">Professional Data:</strong> organisation, job title, professional qualifications (for instructing parties such as solicitors)</li>
                <li><strong className="text-navy">Case Data:</strong> information about legal proceedings, court details, case reference numbers</li>
                <li><strong className="text-navy">Assessment Data:</strong> information gathered during psychological assessments, clinical interviews, and psychometric testing</li>
                <li><strong className="text-navy">Communications:</strong> correspondence with us via email, phone, post, or our website contact forms</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">2.2 Special Category Data</h3>
              <p className="text-navy/70 leading-relaxed mb-4">
                Due to the nature of our forensic psychology services, we may process special category personal data (also known as sensitive personal data), including:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-navy/70">
                <li><strong className="text-navy">Health Data:</strong> mental health history, medical records, psychological assessment results, diagnoses, treatment history</li>
                <li><strong className="text-navy">Criminal Offence Data:</strong> information about criminal allegations, convictions, or proceedings</li>
                <li><strong className="text-navy">Racial or Ethnic Origin:</strong> where relevant to assessment or reporting</li>
                <li><strong className="text-navy">Sexual Orientation:</strong> where relevant to the assessment context</li>
              </ul>
              <p className="text-navy/70 leading-relaxed mt-4">
                We only process special category data where we have a lawful basis to do so, as set out in Section 4 below.
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">2.3 Information Collected Automatically</h3>
              <p className="text-navy/70 leading-relaxed mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-navy/70">
                <li><strong className="text-navy">Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types, operating system and platform</li>
                <li><strong className="text-navy">Usage Data:</strong> information about how you use our website, including pages visited, time spent on pages, navigation paths</li>
                <li><strong className="text-navy">Cookie Data:</strong> information collected through cookies and similar tracking technologies (see Section 10)</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">2.4 Information from Third Parties</h3>
              <p className="text-navy/70 leading-relaxed">
                We may receive personal data about you from third parties, including:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-navy/70 mt-4">
                <li>Solicitors and legal representatives instructing us on your behalf</li>
                <li>Courts and tribunals</li>
                <li>Healthcare providers (with appropriate consent or legal basis)</li>
                <li>Other professionals involved in your case (e.g., social workers, probation officers)</li>
                <li>Credit reference agencies (for business customers)</li>
              </ul>
            </div>

            {/* 3. How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">3. How We Use Your Information</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                We use your personal data for the following purposes:
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">3.1 Service Delivery</h3>
              <ul className="list-disc ml-6 space-y-2 text-navy/70">
                <li>Conducting psychological assessments and evaluations</li>
                <li>Preparing expert witness reports for court proceedings</li>
                <li>Providing expert testimony in court, tribunals, or hearings</li>
                <li>Communicating with you and your legal representatives about your case</li>
                <li>Managing appointments and scheduling</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">3.2 Business Operations</h3>
              <ul className="list-disc ml-6 space-y-2 text-navy/70">
                <li>Processing payments and invoicing</li>
                <li>Administering contracts with instructing parties</li>
                <li>Maintaining business records and accounts</li>
                <li>Credit checks and fraud prevention (for business customers)</li>
                <li>Responding to enquiries and providing customer service</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">3.3 Legal and Regulatory Compliance</h3>
              <ul className="list-disc ml-6 space-y-2 text-navy/70">
                <li>Complying with court orders and legal obligations</li>
                <li>Meeting professional regulatory requirements (e.g., Psychological Society of Ireland)</li>
                <li>Responding to requests from law enforcement or regulatory authorities</li>
                <li>Establishing, exercising, or defending legal claims</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">3.4 Website and Communications</h3>
              <ul className="list-disc ml-6 space-y-2 text-navy/70">
                <li>Operating and improving our website</li>
                <li>Analysing website usage to enhance user experience</li>
                <li>Sending service-related communications</li>
                <li>Marketing communications (only with your consent)</li>
              </ul>
            </div>

            {/* 4. Legal Basis for Processing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">4. Legal Basis for Processing</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                Under GDPR, we must have a lawful basis for processing your personal data. The legal bases we rely on include:
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">4.1 For General Personal Data</h3>
              <ul className="list-disc ml-6 space-y-3 text-navy/70">
                <li>
                  <strong className="text-navy">Contract:</strong> Processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract (Article 6(1)(b) GDPR)
                </li>
                <li>
                  <strong className="text-navy">Legal Obligation:</strong> Processing is necessary to comply with a legal obligation to which we are subject, including court orders and professional regulatory requirements (Article 6(1)(c) GDPR)
                </li>
                <li>
                  <strong className="text-navy">Legitimate Interests:</strong> Processing is necessary for our legitimate interests or those of a third party, except where such interests are overridden by your interests or fundamental rights. Our legitimate interests include operating our business, improving our services, and protecting our legal rights (Article 6(1)(f) GDPR)
                </li>
                <li>
                  <strong className="text-navy">Consent:</strong> You have given consent to the processing of your personal data for specific purposes, such as receiving marketing communications (Article 6(1)(a) GDPR)
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">4.2 For Special Category Data</h3>
              <p className="text-navy/70 leading-relaxed mb-4">
                Processing of special category data (including health data and criminal offence data) requires an additional legal basis under Article 9 GDPR. We rely on:
              </p>
              <ul className="list-disc ml-6 space-y-3 text-navy/70">
                <li>
                  <strong className="text-navy">Explicit Consent:</strong> Where you have given explicit consent to the processing of such data for specified purposes (Article 9(2)(a) GDPR)
                </li>
                <li>
                  <strong className="text-navy">Legal Claims:</strong> Processing is necessary for the establishment, exercise, or defence of legal claims (Article 9(2)(f) GDPR)
                </li>
                <li>
                  <strong className="text-navy">Substantial Public Interest:</strong> Processing is necessary for reasons of substantial public interest under Irish law, including the administration of justice (Article 9(2)(g) GDPR, read with Schedule 1, Part 2 of the Data Protection Act 2018)
                </li>
                <li>
                  <strong className="text-navy">Health or Social Care:</strong> Processing is necessary for the purposes of preventive or occupational medicine, assessment of working capacity, medical diagnosis, or provision of health or social care (Article 9(2)(h) GDPR)
                </li>
              </ul>
            </div>

            {/* 5. Who We Share Your Data With */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">5. Who We Share Your Data With</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                We may share your personal data with the following categories of recipients:
              </p>
              <ul className="list-disc ml-6 space-y-3 text-navy/70">
                <li>
                  <strong className="text-navy">Courts and Tribunals:</strong> Expert reports and testimony as required for legal proceedings
                </li>
                <li>
                  <strong className="text-navy">Legal Representatives:</strong> Solicitors, barristers, and legal advisors instructing us or representing parties in proceedings
                </li>
                <li>
                  <strong className="text-navy">Other Professionals:</strong> Healthcare providers, social workers, probation officers, and other experts involved in your case (where necessary and appropriate)
                </li>
                <li>
                  <strong className="text-navy">Service Providers:</strong> IT service providers, cloud storage providers, payment processors, and other third parties who provide services to us (under appropriate data processing agreements)
                </li>
                <li>
                  <strong className="text-navy">Professional Bodies:</strong> The Psychological Society of Ireland and other regulatory bodies as required for professional compliance
                </li>
                <li>
                  <strong className="text-navy">Law Enforcement and Regulators:</strong> Police, courts, and regulatory authorities where required by law or to protect our legal rights
                </li>
                <li>
                  <strong className="text-navy">Insurers:</strong> Our professional indemnity insurers where necessary for claims handling
                </li>
              </ul>
              <p className="text-navy/70 leading-relaxed mt-4">
                We do not sell your personal data to third parties. We require all third parties to respect the security of your personal data and to treat it in accordance with the law.
              </p>
            </div>

            {/* 6. International Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">6. International Transfers</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                Your personal data is primarily processed within Ireland and the European Economic Area (EEA). However, some of our service providers may be located outside the EEA.
              </p>
              <p className="text-navy/70 leading-relaxed mb-4">
                Where we transfer personal data outside the EEA, we ensure that appropriate safeguards are in place to protect your data, including:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-navy/70">
                <li>Transfers to countries that the European Commission has determined provide an adequate level of data protection</li>
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Other legally approved transfer mechanisms</li>
              </ul>
              <p className="text-navy/70 leading-relaxed mt-4">
                You may contact us to request further information about the safeguards we have in place for international transfers.
              </p>
            </div>

            {/* 7. Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">7. Data Retention</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy any legal, regulatory, accounting, or reporting requirements.
              </p>
              <p className="text-navy/70 leading-relaxed mb-4">
                The retention periods we apply depend on the nature of the data and the purposes for which it is processed:
              </p>
              <ul className="list-disc ml-6 space-y-3 text-navy/70">
                <li>
                  <strong className="text-navy">Expert Witness Reports and Assessment Records:</strong> We retain these for a minimum of 7 years after the conclusion of the matter, or longer if required for ongoing legal proceedings, appeals, or professional regulatory purposes. For cases involving minors, records are retained until the subject reaches the age of 25, or 7 years from the last contact (whichever is longer).
                </li>
                <li>
                  <strong className="text-navy">Financial Records:</strong> 7 years from the end of the financial year in which the transaction occurred (as required by Irish tax law)
                </li>
                <li>
                  <strong className="text-navy">Enquiry and Contact Data:</strong> 3 years from the date of the enquiry, unless a business relationship is established
                </li>
                <li>
                  <strong className="text-navy">Website Analytics Data:</strong> 26 months from the date of collection
                </li>
              </ul>
              <p className="text-navy/70 leading-relaxed mt-4">
                When personal data is no longer required, we will securely delete or anonymise it.
              </p>
            </div>

            {/* 8. Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">8. Your Rights</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                Under GDPR, you have the following rights in relation to your personal data:
              </p>
              <ul className="list-disc ml-6 space-y-3 text-navy/70">
                <li>
                  <strong className="text-navy">Right of Access:</strong> You have the right to request a copy of the personal data we hold about you (commonly known as a &quot;data subject access request&quot;)
                </li>
                <li>
                  <strong className="text-navy">Right to Rectification:</strong> You have the right to request that we correct any inaccurate or incomplete personal data we hold about you
                </li>
                <li>
                  <strong className="text-navy">Right to Erasure:</strong> You have the right to request that we delete your personal data in certain circumstances (also known as the &quot;right to be forgotten&quot;)
                </li>
                <li>
                  <strong className="text-navy">Right to Restriction:</strong> You have the right to request that we restrict the processing of your personal data in certain circumstances
                </li>
                <li>
                  <strong className="text-navy">Right to Data Portability:</strong> You have the right to receive your personal data in a structured, commonly used, machine-readable format and to transmit it to another controller
                </li>
                <li>
                  <strong className="text-navy">Right to Object:</strong> You have the right to object to processing based on legitimate interests or for direct marketing purposes
                </li>
                <li>
                  <strong className="text-navy">Right to Withdraw Consent:</strong> Where we rely on consent as the legal basis for processing, you have the right to withdraw your consent at any time
                </li>
                <li>
                  <strong className="text-navy">Rights Related to Automated Decision-Making:</strong> You have the right not to be subject to a decision based solely on automated processing, including profiling, that produces legal effects concerning you or similarly significantly affects you
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Exercising Your Rights</h3>
              <p className="text-navy/70 leading-relaxed mb-4">
                To exercise any of your rights, please contact us at{' '}
                <a href="mailto:info@expertreports.ie" className="text-teal hover:underline">
                  info@expertreports.ie
                </a>. We will respond to your request within one month. In complex cases, or where we receive a large number of requests, we may extend this period by a further two months, but we will notify you if this is the case.
              </p>
              <p className="text-navy/70 leading-relaxed mb-4">
                We may need to verify your identity before processing your request. There is no fee for exercising your rights, unless your request is manifestly unfounded or excessive.
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Limitations on Rights</h3>
              <p className="text-navy/70 leading-relaxed">
                Please note that certain rights may be limited in specific circumstances, for example where we are required to retain data for legal or regulatory purposes, where disclosure would adversely affect the rights of others, or where data is subject to legal privilege. We will explain any limitations when responding to your request.
              </p>
            </div>

            {/* 9. Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">9. Data Security</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                We have implemented appropriate technical and organisational measures to protect your personal data against unauthorised or unlawful processing, accidental loss, destruction, or damage. These measures include:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-navy/70">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure access controls and authentication</li>
                <li>Regular security assessments and updates</li>
                <li>Staff training on data protection and confidentiality</li>
                <li>Physical security measures for paper records</li>
                <li>Incident response procedures for data breaches</li>
              </ul>
              <p className="text-navy/70 leading-relaxed mt-4">
                While we take all reasonable steps to protect your personal data, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of data transmitted to our website.
              </p>
            </div>

            {/* 10. Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">10. Cookies and Tracking Technologies</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to distinguish you from other users, enhance your browsing experience, and analyse website usage.
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">What Are Cookies?</h3>
              <p className="text-navy/70 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Types of Cookies We Use</h3>
              <ul className="list-disc ml-6 space-y-3 text-navy/70">
                <li>
                  <strong className="text-navy">Strictly Necessary Cookies:</strong> Essential for the website to function properly. These cannot be disabled.
                </li>
                <li>
                  <strong className="text-navy">Performance/Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous information. We use this to improve our website.
                </li>
                <li>
                  <strong className="text-navy">Functionality Cookies:</strong> Allow our website to remember choices you make (such as your language preference) and provide enhanced features.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-navy mt-6 mb-3">Managing Cookies</h3>
              <p className="text-navy/70 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent. However, if you disable cookies, some parts of our website may not function properly.
              </p>
              <p className="text-navy/70 leading-relaxed">
                For more information about cookies and how to manage them, visit{' '}
                <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                  www.allaboutcookies.org
                </a>.
              </p>
            </div>

            {/* 11. Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">11. Third-Party Links</h2>
              <p className="text-navy/70 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to read the privacy policy of every website you visit. This Privacy Policy applies only to our website and services.
              </p>
            </div>

            {/* 12. Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">12. Children&apos;s Privacy</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                Our website is not directed at children, and we do not knowingly collect personal data from children through our website. However, in the course of providing our forensic psychology services, we may assess minors where instructed by courts, legal representatives, or other appropriate parties.
              </p>
              <p className="text-navy/70 leading-relaxed">
                Where we process personal data relating to children in connection with our professional services, we do so in accordance with applicable law, typically on the basis of legal claims, court orders, or with appropriate parental/guardian consent. We apply additional safeguards to protect the data of minors.
              </p>
            </div>

            {/* 13. Changes to This Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">13. Changes to This Privacy Policy</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post any changes on this page and update the &quot;Last updated&quot; date at the top.
              </p>
              <p className="text-navy/70 leading-relaxed">
                Where changes are significant, we will notify you by email (if we have your email address) or by posting a prominent notice on our website. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>

            {/* 14. Complaints */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">14. Complaints</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                If you have any concerns about how we handle your personal data, we encourage you to contact us first so that we can try to resolve the issue.
              </p>
              <p className="text-navy/70 leading-relaxed mb-4">
                You also have the right to lodge a complaint with the Data Protection Commission, the Irish supervisory authority for data protection issues:
              </p>
              <div className="bg-grey-light rounded-xl p-6">
                <p className="text-navy font-semibold mb-2">Data Protection Commission</p>
                <p className="text-navy/70 text-sm mb-1">21 Fitzwilliam Square South</p>
                <p className="text-navy/70 text-sm mb-1">Dublin 2, D02 RD28</p>
                <p className="text-navy/70 text-sm mb-1">Ireland</p>
                <p className="text-navy/70 text-sm mb-1">
                  Phone:{' '}
                  <a href="tel:+35317650100" className="text-teal hover:underline">
                    +353 1 765 0100 / 1800 437 737
                  </a>
                </p>
                <p className="text-navy/70 text-sm mb-1">
                  Email:{' '}
                  <a href="mailto:info@dataprotection.ie" className="text-teal hover:underline">
                    info@dataprotection.ie
                  </a>
                </p>
                <p className="text-navy/70 text-sm">
                  Website:{' '}
                  <a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                    www.dataprotection.ie
                  </a>
                </p>
              </div>
            </div>

            {/* 15. Contact Us */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">15. Contact Us</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, our data practices, or wish to exercise your data protection rights, please contact us:
              </p>
              <div className="bg-grey-light rounded-xl p-6">
                <p className="text-navy font-semibold mb-2">Expert Reports Limited</p>
                <p className="text-navy/70 text-sm mb-1">
                  Email:{' '}
                  <a href="mailto:info@expertreports.ie" className="text-teal hover:underline">
                    info@expertreports.ie
                  </a>
                </p>
                <p className="text-navy/70 text-sm mb-1">
                  Phone:{' '}
                  <a href="tel:+353860419300" className="text-teal hover:underline">
                    +353 86 041 9300
                  </a>
                </p>
                <p className="text-navy/70 text-sm">Address: Dublin, Ireland</p>
              </div>
              <p className="text-navy/70 leading-relaxed mt-4">
                For data protection enquiries, please include &quot;Data Protection&quot; in the subject line of your email.
              </p>
            </div>

            {/* Related Links */}
            <div className="bg-grey-light rounded-xl p-6 mt-12">
              <h3 className="text-lg font-bold text-navy mb-4">Related Policies</h3>
              <div className="space-y-2">
                <p>
                  <Link href="/terms" className="text-teal hover:underline">
                    Terms of Service
                  </Link>
                  {' '}- Our terms and conditions for engaging our services
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
