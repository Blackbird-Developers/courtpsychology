import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Expert Reports',
  description: 'Terms and conditions for engaging Expert Reports expert witness and forensic psychology services in Ireland.',
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 bg-gradient-to-br from-grey-light via-white to-grey-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            Terms of Service
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
            
            {/* 1. About Us */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">1. About Us</h2>
              <p className="text-navy/70 leading-relaxed mb-4">
                We are Expert Reports Limited, a company registered in Ireland with the Companies Registration Office (CRO) under company number: [Company Registration Number]. Our registered office is at: [Registered Address], Dublin, Ireland.
              </p>
              <p className="text-navy/70 leading-relaxed">
                Our VAT number is: IE[VAT Number]. By engaging us for expert witness and forensic psychology services, you agree to be bound by these terms and conditions.
              </p>
            </div>

            {/* 2. Contact */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">2. How to Contact Us</h2>
              <p className="text-navy/70 leading-relaxed">
                You can contact us by sending an email to{' '}
                <a href="mailto:info@expertreports.ie" className="text-teal hover:underline">
                  info@expertreports.ie
                </a>{' '}
                or calling us on{' '}
                <a href="tel:+353860419300" className="text-teal hover:underline">
                  +353 86 041 9300
                </a>.
              </p>
            </div>

            {/* 3. These Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">3. These Terms</h2>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">3.1</strong> These terms apply to any instructions provided to us for the provision of services relating to expert witness and forensic psychology services. Please read these terms carefully before you instruct us, as they set out important information about your and our rights and obligations. You must agree to these terms before instructing us.
                </p>
                <p>
                  <strong className="text-navy">3.2</strong> For the purposes of these terms, you are a &apos;consumer&apos; if you are instructing us as an individual for purposes wholly or mainly outside of your trade, business, craft or profession. You are a &apos;business customer&apos; if you are instructing us for purposes relating to your trade, business, craft or profession (e.g., a solicitor instructing us on behalf of a client). Some terms only apply to consumers and other terms only apply to business customers, so please read these terms carefully.
                </p>
                <p>
                  <strong className="text-navy">3.3</strong> Any reference to &apos;we&apos;, &apos;us&apos; or &apos;our&apos; in these terms is to Expert Reports Limited, and any reference to &apos;you&apos; or &apos;your&apos; is to the person instructing us for the provision of services.
                </p>
                <p>
                  <strong className="text-navy">3.4</strong> You must be at least 18 years old and a resident of Ireland or another EU/EEA member state to instruct us. If you are a business customer placing instructions on behalf of a business, you confirm that you have authority to place such instructions for and on behalf of that business.
                </p>
                <p>
                  <strong className="text-navy">3.5</strong> We may make changes to these terms at any time. However, the terms which apply to your instructions will be those in force at the time you submitted your instructions to us.
                </p>
                <p>
                  <strong className="text-navy">3.6</strong> Please print out or save a copy of these terms and any emails from us for your records, as we will not save or file a copy for you. These terms are available in English only.
                </p>
                <p>
                  <strong className="text-navy">3.7</strong> Your use of our website is governed by our{' '}
                  <Link href="/privacy" className="text-teal hover:underline">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </div>

            {/* 4. Instructions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">4. Instructions</h2>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">4.1</strong> Please check your instructions carefully and correct any errors before you submit them to us.
                </p>
                <p>
                  <strong className="text-navy">4.2</strong> Upon receiving a request from you for expert witness services, we will provide you with a written fee estimate or quotation based on the scope of work, the complexity of the case, and any other relevant factors. The fee estimate or quotation will outline the services to be provided and any charges, including any expenses such as travel or accommodation, which may be incurred during the instruction. Provision of the fee estimate or quotation does not mean that your instructions have been accepted by us.
                </p>
                <p>
                  <strong className="text-navy">4.3</strong> Acceptance of our services takes place when you send to us your agreement of the estimate or quotation, at which point a legally binding contract is formed between you and us on these terms.
                </p>
                <p>
                  <strong className="text-navy">4.4</strong> If we do not accept your instructions, for example because we are unable to take payment, the instructions are unacceptable to us, you are under 18, there is a conflict of interest, or there has been a mistake regarding the pricing or description of the services, we will email you using the details you provided when you placed your instructions. We reserve the right to reject any instructions for any reason.
                </p>
              </div>
            </div>

            {/* 5. Availability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">5. Availability</h2>
              <p className="text-navy/70 leading-relaxed">
                All instructions are subject to availability and suitability of the experts and specialists. We cannot guarantee that any service will be available at any given time. In certain circumstances beyond our reasonable control, for example where there has been a change in law or professional guidelines, we may need to stop providing certain services. If this happens and it affects your instructions, we will notify you by email, cancel your instructions and provide you with a refund of any advance payments made by you for any services that have not yet been provided.
              </p>
            </div>

            {/* 6. Making Changes */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">6. Making Changes to Your Instructions</h2>
              <p className="text-navy/70 leading-relaxed">
                If you would like to make any changes to your instructions after you have submitted them, please contact us in writing as soon as possible and we will let you know if it is possible to change your instructions. Changes may affect the quoted fee and timeline.
              </p>
            </div>

            {/* 7. Providing Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">7. Providing Services</h2>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">7.1</strong> Descriptions of our services are set out on our website.
                </p>
                <p>
                  <strong className="text-navy">7.2</strong> We will provide the services at the location(s), time(s) and date(s) as indicated within our acceptance of your instructions. If there are any changes to the services, we shall contact you in writing at the earliest opportunity, and attempt to reschedule the service on an alternative time and/or date. We are not liable to you for any losses you incur as a result of any delay caused by circumstances beyond our reasonable control (for example, severe weather, accidents, illness, or unpredictable travel delays).
                </p>
                <p>
                  <strong className="text-navy">7.3</strong> For services provided over a period of time, any completion dates stated during the instructions process, or in your acknowledgment or confirmation emails, are estimates only.
                </p>
                <p>
                  <strong className="text-navy">7.4</strong> Certain services may be available online via video conferencing. Where this is the case, it is specified on our website or in our quotation. Online services will be provided via secure, accessible video platforms.
                </p>
                <p>
                  <strong className="text-navy">7.5</strong> We will do all that we reasonably can to provide the services at the location(s), time(s) and date(s) or within the period agreed with you. If there might be a delay before we can start or restart the services, we will email you to let you know as soon as reasonably possible. However, we are not liable to you for any losses you incur as a result of any delay caused by circumstances beyond our reasonable control.
                </p>
                <p>
                  <strong className="text-navy">7.6</strong> Where a delay is caused by circumstances beyond our reasonable control, we will usually try to start or restart the services as soon as the issue causing the delay has been resolved. We will contact you in writing to let you know and offer you the option to either continue waiting until the issue has been resolved (if possible) or to cancel your instructions and get a refund of any advance payments made by you for any services that have not yet been provided.
                </p>
                <p>
                  <strong className="text-navy">7.7</strong> We are not liable to you for any losses you incur where the services are delayed or cannot be performed if you have prevented or restricted the appointment for whatever reason (including, but not limited to: you have failed to make the assessment room available, you have failed to provide documentation as requested including adequate instructions or information to allow us to perform the services, you have failed to attend the appointment(s) as agreed with you, you have refused to engage in the assessment, you have abandoned the assessment). There may be a charge for each occurrence when you do not attend the appointment(s) unless we are notified at least 3 working days in advance and we confirm that no charge shall be made for your non-attendance.
                </p>
                <p>
                  <strong className="text-navy">7.8</strong> Where an Expert is instructed to attend court, tribunal, conference, or hearing (whether in person or remotely), any date(s) reserved or held in the Expert&apos;s diary at your request (&quot;Held Dates&quot;) shall be deemed chargeable.
                </p>
                <p className="ml-6">
                  If a Held Date is vacated, adjourned, or cancelled for any reason (including but not limited to settlement, adjournment, or withdrawal of instruction), the following shall apply unless otherwise agreed in writing:
                </p>
                <ul className="list-disc ml-12 space-y-2">
                  <li>More than 5 working days&apos; notice: no charge or a reduced charge may apply, at our discretion.</li>
                  <li>5 working days or fewer notice: up to 100% of the agreed court attendance fee may be charged.</li>
                  <li>Non-attendance or same-day cancellation: the full court attendance fee shall be payable.</li>
                </ul>
                <p className="ml-6">
                  Where a hearing is listed as &quot;to be held&quot; and the Expert has made themselves available and restricted their diary accordingly, the Held Date shall be treated as a confirmed attendance for fee purposes. Any preparation time, travel time, waiting time, or work undertaken in anticipation of a hearing shall remain chargeable irrespective of whether the hearing proceeds.
                </p>
                <p>
                  <strong className="text-navy">7.9</strong> If you are a consumer, the services are provided to you for your domestic and personal use only. You must not use our services for commercial or business purposes.
                </p>
                <p>
                  <strong className="text-navy">7.10</strong> If you are a business customer, you confirm that you are contracting with us for the provision of services for the purposes of your named business, and your business shall remain liable to us under these terms unless both we and you agree in writing to vary these terms.
                </p>
              </div>
            </div>

            {/* 8. Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">8. Your Privacy and Personal Information</h2>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">8.1</strong> Any personal information that you provide to us will be dealt with in line with our{' '}
                  <Link href="/privacy" className="text-teal hover:underline">
                    Privacy Policy
                  </Link>, which explains what information we collect and hold about you, and how we collect, store, use and share such information.
                </p>
                <p>
                  <strong className="text-navy">8.2</strong> Your privacy and personal information are important to us. We process personal data in accordance with the General Data Protection Regulation (EU) 2016/679 (&quot;GDPR&quot;) and the Irish Data Protection Acts 1988 to 2018. Our Privacy Policy explains what personal information we collect from you, how and why we collect, store, use and share such information, your rights in relation to your personal information, and how to contact us and the Data Protection Commission if you have a query or complaint about the use of your personal information.
                </p>
              </div>
            </div>

            {/* 9. Prices */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">9. Prices</h2>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">9.1</strong> Prices for our services are provided on request and set out in our quotations. All prices are in Euro (€) and exclude VAT which is chargeable at the applicable rate (currently 23% for most services).
                </p>
                <p>
                  <strong className="text-navy">9.2</strong> Prices for our services may change at any time. Except as set out in clause 9.3 below, such changes will not affect existing instructions that have been accepted.
                </p>
                <p>
                  <strong className="text-navy">9.3</strong> If there has been an error in our quotation regarding the pricing of any of our services and this affects your instructions, we will try to contact you using the contact details you provided when you placed your instructions. We will give you the option to re-confirm your instructions at the correct price or to cancel your instructions. If we are unable to contact you, we will treat the instructions as cancelled and notify you by email.
                </p>
                <p>
                  <strong className="text-navy">9.4</strong> Further or clarification questions to experts or specialists instructed within the scope of your instructions will be considered as an additional instruction of work, and a quote will be sent to you for agreement before that work is undertaken. Factual amendments to expert or specialist reports that were made during the course of the examination or instruction which have been omitted from the report in error shall incur no additional charge.
                </p>
                <p>
                  <strong className="text-navy">9.5</strong> If factual amendments to a report are requested by you, such request must be made by you to us in writing within 14 days from the date of the report being provided to you. If a request for factual amendments to a report is received after the period of 14 days from the date the report is provided to you, your request shall be relayed to the expert who prepared the report for consideration. If the expert considers that additional fees shall become payable due to the late submission of your request for the amendments, we shall relay those fees to you for acceptance.
                </p>
              </div>
            </div>

            {/* 10. Payment */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">10. Payment</h2>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">10.1</strong> We accept payment by bank transfer, cheque, or any other payment method agreed upon by you and us.
                </p>
                <p>
                  <strong className="text-navy">10.2</strong> It is normal practice to ask consumers and business customers who fail our due-diligence checks to make payments on account of anticipated charges and expenses. VAT is payable on our charges and on certain expenses. An invoice will be raised at the point of instruction and due for payment upon receipt. We may decline to act further for you whilst any bill or request for payment on account remains outstanding. It is helpful if clients meet requests for payments on account promptly in order to avoid delay in progressing their work.
                </p>
                <p>
                  <strong className="text-navy">10.3</strong> Business customers who are afforded credit with our company will be invoiced for the total amount after we have completed the services. Your invoice will be sent to the email address you provided when you placed your instructions and must be paid by you within 30 days of the deemed date of receipt.
                </p>
                <p>
                  <strong className="text-navy">10.4</strong> If your payment is not received by us when due, we may charge interest on any balance outstanding at the rate of 8 percent per year above the European Central Bank main refinancing rate.
                </p>
                <p>
                  <strong className="text-navy">10.5</strong> We may consider requests for deferred payment on a case-by-case basis. If you wish to request a deferred payment arrangement, you must submit a written request to us outlining the reasons for the request and proposing a reasonable payment schedule. Upon receipt of such a request and payment schedule, we shall review your proposal within a reasonable timeframe of 14 days, taking into account the specific circumstances of the case, your financial situation, and the potential impact on our operations. We reserve the right to accept, negotiate, or decline any deferred payment request at our sole discretion.
                </p>
                <p>
                  <strong className="text-navy">10.6</strong> If we agree to a deferred payment arrangement, you must adhere to the payment schedule as agreed between you and us. Failure to comply with the payment schedule may result in termination of the deferred payment agreement immediately upon written notice to you, and we may pursue the outstanding amount in accordance with these terms.
                </p>
                <p>
                  <strong className="text-navy">10.7</strong> Until a deferred payment arrangement has been agreed between you and us, you remain liable to pay our fees in accordance with these terms.
                </p>
                <p>
                  <strong className="text-navy">10.8</strong> Our consideration of a deferred payment request is not a guarantee that it shall be accepted, and acceptance or otherwise remains at our sole discretion.
                </p>
                <p>
                  <strong className="text-navy">10.9</strong> <strong>Expert Witness Reports: Ownership and Use Restrictions.</strong> You acknowledge that any Expert Witness Report provided by Expert Reports Limited remains the property of Expert Reports Limited until full payment for the report and any associated fees is received. You shall not use, disclose, or rely upon the report, including in any legal, regulatory, or court proceedings, unless:
                </p>
                <ul className="list-disc ml-12 space-y-2">
                  <li>payment in full is made within 30 days of the invoice date; or</li>
                  <li>your actions demonstrate a clear and genuine intention to comply with the agreed 30-day payment term, as reasonably determined by Expert Reports Limited.</li>
                </ul>
                <p className="ml-6">
                  If you fail to meet the payment terms or are deemed not to be acting in good faith, Expert Reports Limited reserves the right to withdraw permission to use or rely upon the report and may take any necessary steps to enforce its rights, including notifying relevant parties that the report is not to be admitted into proceedings.
                </p>
              </div>
            </div>

            {/* 11. Legal Aid */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">11. Legal Aid</h2>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">11.1</strong> For publicly funded cases using the Legal Aid Board (Ireland), we understand that payment may not be available until the Legal Aid Board has disbursed funds. We would ask that the disbursement of funds is applied for at the earliest opportunity by you. In such instances, we may agree to extend the payment terms accordingly. However, as our instructing party, you must agree to maintain prompt and regular communication with us to keep us informed of case progression and the expected date of payment.
                </p>
                <p>
                  <strong className="text-navy">11.2</strong> You must inform us at the earliest possibility if you intend to fund our services under these terms by using Legal Aid.
                </p>
                <p>
                  <strong className="text-navy">11.3</strong> We must see the Legal Aid Certificate before commencing work on publicly funded cases. If you do not provide us with a copy of the funding certificate, we require written confirmation from you that Legal Aid funding has been agreed. By providing us with this confirmation, you acknowledge and agree that you shall be liable for our fees if the Legal Aid Certificate is later varied or withdrawn by the Legal Aid Board.
                </p>
                <p>
                  <strong className="text-navy">11.4</strong> You are responsible for keeping us informed of any changes to the Legal Aid funding status throughout your engagement of our services.
                </p>
                <p>
                  <strong className="text-navy">11.5</strong> If an interim payment from the Legal Aid Board is available to you, we require that such payment is applied for by you at the point of our invoice being raised. For the avoidance of doubt, unless we have agreed with you otherwise, we shall require you to comply with these terms in respect of the due date of payment of invoices, and it is your duty to make enquiries as to the earliest opportunity to obtain funds from the Legal Aid Board for payment of expert witness services.
                </p>
                <p>
                  <strong className="text-navy">11.6</strong> As part of our due-diligence when accepting instruction from business customers, we may use a credit check service, and you are reminded of our{' '}
                  <Link href="/privacy" className="text-teal hover:underline">
                    Privacy Policy
                  </Link>.
                </p>
                <p>
                  <strong className="text-navy">11.7</strong> If we do not accept your instructions based on application of Legal Aid, we will email you using the details you provided when you placed your instructions.
                </p>
              </div>
            </div>

            {/* 12. Debt Recovery */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">12. Debt Recovery</h2>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">12.1</strong> In circumstances where you have instructed us to carry out services which has resulted in invoice(s) being rendered and not paid in accordance with these terms, we reserve the right to instruct debt collection agencies to recover the principal debt and any interest that has accrued thereon, as well as the reasonable costs and expenses incurred by the debt collection agency in the recovery of the debt for which we may become liable in those instances. For the avoidance of doubt, in such circumstances, you agree to fully indemnify us against the reasonable costs and expenses incurred in the recovery of the outstanding principal debt and interest accrued thereon.
                </p>
                <p>
                  <strong className="text-navy">12.2</strong> In circumstances where you have instructed us to carry out services which has resulted in invoice(s) being rendered and the invoice(s) are paid after the period when it is due under these terms of business without our need to instruct debt collection agencies, you agree that in addition to the interest which has accrued you shall be liable to pay administration charges as below:
                </p>
                <ul className="list-disc ml-12 space-y-2">
                  <li>€40 per invoice, for invoices up to €999.99</li>
                  <li>€70 per invoice, for invoices between €1,000 and €9,999.99</li>
                  <li>€100 per invoice, for invoices over €10,000.00</li>
                </ul>
                <p>
                  <strong className="text-navy">12.3</strong> If you instruct us with the assistance of Legal Aid funding, you must maintain regular communication with us regarding the case progression and expected payment dates, as outlined in these terms. If you fail to do so, and we are compelled to instruct a debt collection agency, you will be liable for the costs and expenses associated with the debt collection agency and any action that is required to recover the outstanding debt.
                </p>
              </div>
            </div>

            {/* 13. Consumer Cancellation Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">13. Consumer Cancellation Rights</h2>
              <p className="text-navy/60 italic mb-4">This clause 13 only applies to you if you are a consumer.</p>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">13.1</strong> Under the Consumer Rights Act 2022 and the European Union (Consumer Information, Cancellation and Other Rights) Regulations 2013, you have 14 days from the date of your instructions confirmation email to change your mind and cancel your instructions. Cancellation of instructions must be done so in writing by contacting us at{' '}
                  <a href="mailto:info@expertreports.ie" className="text-teal hover:underline">
                    info@expertreports.ie
                  </a>.
                </p>
                <p>
                  <strong className="text-navy">13.2</strong> We will not provide any services during the 14-day cancellation period unless you expressly request for us to do so. If you wish services to begin during the cancellation period, you must provide us with express written consent. We are under no obligation to accept your request.
                </p>
                <p>
                  <strong className="text-navy">13.3</strong> If you request for us to start providing services during the 14-day cancellation period and we agree to do so, this will impact your cancellation rights as follows:
                </p>
                <ul className="list-disc ml-12 space-y-2">
                  <li><strong className="text-navy">13.3.1</strong> you lose your right to cancel once the services are fully performed and will not be entitled to a refund even if the cancellation period has not expired;</li>
                  <li><strong className="text-navy">13.3.2</strong> if the services have not been fully performed, you will be required to pay for the services provided up to the time that you told us that you want to cancel.</li>
                </ul>
                <p>
                  <strong className="text-navy">13.4</strong> To cancel your instructions, please email us at{' '}
                  <a href="mailto:info@expertreports.ie" className="text-teal hover:underline">
                    info@expertreports.ie
                  </a>{' '}
                  or call us on{' '}
                  <a href="tel:+353860419300" className="text-teal hover:underline">
                    +353 86 041 9300
                  </a>. To help us process your cancellation more quickly, please have your reference number ready or include it in the email you send to us.
                </p>
                <p>
                  <strong className="text-navy">13.5</strong> We will provide you with a refund as soon as possible and no later than 14 days after the day on which you told us that you want to cancel. If services have been provided during the cancellation period at your request, we will make deductions from any refund due to you as explained in clause 13.3 above.
                </p>
                <p>
                  <strong className="text-navy">13.6</strong> If your instructions are cancelled, we will issue your refund to the same payment method you used when you placed your instructions.
                </p>
              </div>
            </div>

            {/* 14. Faulty Services - Consumers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">14. Faulty Services (Consumers)</h2>
              <p className="text-navy/60 italic mb-4">This clause 14 only applies to you if you are a consumer.</p>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">14.1</strong> Under the Consumer Rights Act 2022, we must provide the services to you with reasonable care and skill.
                </p>
                <p>
                  <strong className="text-navy">14.2</strong> If a service is not carried out with reasonable care and skill, you can ask us to repeat the service or to fix it, or get some money back if we cannot fix it.
                </p>
                <p>
                  <strong className="text-navy">14.3</strong> This is a summary of some of your key rights. They are in addition to your cancellation rights set out in clause 13. For more detailed information on your rights, visit the Competition and Consumer Protection Commission (CCPC) website at{' '}
                  <a href="https://www.ccpc.ie" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                    www.ccpc.ie
                  </a>{' '}
                  or call their helpline on 01 402 5555.
                </p>
                <p>
                  <strong className="text-navy">14.4</strong> If there is a problem with a service we have provided to you, please contact us as soon as reasonably possible.
                </p>
              </div>
            </div>

            {/* 15. Faulty Services - Business Customers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">15. Faulty Services (Business Customers)</h2>
              <p className="text-navy/60 italic mb-4">This clause 15 only applies to you if you are a business customer.</p>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">15.1</strong> We warrant that the services will be:
                </p>
                <ul className="list-disc ml-12 space-y-2">
                  <li><strong className="text-navy">15.1.1</strong> performed with reasonable care and skill; and</li>
                  <li><strong className="text-navy">15.1.2</strong> free from material defects at the time the services are provided.</li>
                </ul>
                <p>
                  <strong className="text-navy">15.2</strong> As your sole and exclusive remedy, we will (at our option) remedy, re-perform or refund any services that do not comply with clause 15.1, provided that:
                </p>
                <ul className="list-disc ml-12 space-y-2">
                  <li><strong className="text-navy">15.2.1</strong> you notify us by email to{' '}
                    <a href="mailto:info@expertreports.ie" className="text-teal hover:underline">
                      info@expertreports.ie
                    </a>{' '}
                    within 7 calendar days from the date that the services are completed; and</li>
                  <li><strong className="text-navy">15.2.2</strong> you provide us with sufficient information as to the nature and extent of the defects.</li>
                </ul>
                <p>
                  <strong className="text-navy">15.3</strong> Except as set out in this clause 15, we give no warranties and make no representations in relation to the services, and all warranties and conditions (including any implied terms relating to the ability to achieve a particular result), whether express or implied by statute, common law or otherwise are excluded to the extent permitted by law.
                </p>
              </div>
            </div>

            {/* 16. Events Beyond Our Control */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">16. Events Beyond Our Control</h2>
              <p className="text-navy/70 leading-relaxed">
                We are not liable to you if we fail to comply with these terms because of circumstances beyond our reasonable control, including but not limited to: acts of God, natural disasters, pandemic, epidemic, war, terrorism, civil unrest, government actions, strikes, lockouts, labour disputes, fire, flood, severe weather, power outages, telecommunications failures, or any other event outside our reasonable control.
              </p>
            </div>

            {/* 17. Our Liability - Consumers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">17. Our Liability to Consumers</h2>
              <p className="text-navy/60 italic mb-4">This clause 17 only applies to you if you are a consumer.</p>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">17.1</strong> If we breach these terms or are negligent, we are liable to you for foreseeable loss or damage that you suffer as a result. By &apos;foreseeable&apos; we mean that, at the time the contract was made, it was either clear that such loss or damage would occur or you and we both knew that it might reasonably occur, as a result of something we did (or failed to do).
                </p>
                <p>
                  <strong className="text-navy">17.2</strong> We are not liable to you for any loss or damage that was not foreseeable, any loss or damage not caused by our breach or negligence, or any business loss or damage.
                </p>
                <p>
                  <strong className="text-navy">17.3</strong> Nothing in these terms excludes or limits our liability for any death or personal injury caused by our negligence, liability for fraud or fraudulent misrepresentation, or any other liability that the law does not allow us to exclude or limit.
                </p>
              </div>
            </div>

            {/* 18. Our Liability - Business Customers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">18. Our Liability to Business Customers</h2>
              <p className="text-navy/60 italic mb-4">This clause 18 only applies to you if you are a business customer.</p>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">18.1</strong> Subject to the below, our liability under or in connection with these terms (regardless of whether such liability arises in tort, contract or in any other way and whether or not caused by negligence or misrepresentation) will not exceed the total price paid for the services.
                </p>
                <p>
                  <strong className="text-navy">18.2</strong> We will not be liable to you under or in connection with these terms (regardless of whether such liability arises in tort, contract or in any other way and whether or not caused by negligence or misrepresentation) for:
                </p>
                <ul className="list-disc ml-12 space-y-2">
                  <li><strong className="text-navy">18.2.1</strong> consequential, indirect or special losses; or</li>
                  <li><strong className="text-navy">18.2.2</strong> any of the following (whether direct or indirect):
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>loss of profit;</li>
                      <li>loss of opportunity;</li>
                      <li>loss of savings, discount or rebate (whether actual or anticipated); or</li>
                      <li>harm to reputation or loss of goodwill.</li>
                    </ul>
                  </li>
                </ul>
                <p>
                  <strong className="text-navy">18.3</strong> Nothing in these terms will limit or exclude our liability for:
                </p>
                <ul className="list-disc ml-12 space-y-2">
                  <li><strong className="text-navy">18.3.1</strong> death or personal injury caused by negligence;</li>
                  <li><strong className="text-navy">18.3.2</strong> fraud or fraudulent misrepresentation; or</li>
                  <li><strong className="text-navy">18.3.3</strong> any other losses which cannot be excluded or limited by law.</li>
                </ul>
              </div>
            </div>

            {/* 19. No Third Party Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">19. No Third Party Rights</h2>
              <p className="text-navy/70 leading-relaxed">
                No one other than us or you has any right to enforce any of these terms.
              </p>
            </div>

            {/* 20. Complaints */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">20. Complaints</h2>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">20.1</strong> If you are unhappy with us or the services we have provided to you, please contact us at{' '}
                  <a href="mailto:info@expertreports.ie" className="text-teal hover:underline">
                    info@expertreports.ie
                  </a>.
                </p>
                <p>
                  <strong className="text-navy">20.2</strong> We will acknowledge your complaint within 5 working days and aim to resolve it within 30 days. If we cannot resolve your complaint within this timeframe, we will explain why and provide an estimated resolution date.
                </p>
                <p>
                  <strong className="text-navy">20.3</strong> If your complaint cannot be resolved or you are unhappy with the outcome, you may wish to use alternative dispute resolution (ADR). For consumer disputes, you may contact the Competition and Consumer Protection Commission (CCPC) for guidance. You may also use the European Commission&apos;s Online Dispute Resolution (ODR) platform at{' '}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">
                    https://ec.europa.eu/consumers/odr
                  </a>. ADR is a process for resolving disputes that does not involve going to court. If you do not wish to use ADR or are unhappy with the outcome of ADR, you can still bring court proceedings.
                </p>
              </div>
            </div>

            {/* 21. Governing Law and Jurisdiction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">21. Governing Law and Jurisdiction</h2>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">21.1</strong> If you are a consumer, the laws of Ireland apply to these terms, although if you are resident elsewhere in the EU/EEA you will retain the benefit of any mandatory protections given to you by the laws of that country. Any disputes will be subject to the non-exclusive jurisdiction of the courts of Ireland.
                </p>
                <p>
                  <strong className="text-navy">21.2</strong> If you are a business customer, these terms and any dispute or claim arising out of, or in connection with, the terms, their subject matter or formation (including non-contractual disputes or claims) will be governed by, and construed in accordance with, the laws of Ireland. You and us both irrevocably agree that the courts of Ireland will have exclusive jurisdiction to settle any dispute or claim arising out of, or in connection with, these terms, their subject matter or formation (including non-contractual disputes or claims).
                </p>
              </div>
            </div>

            {/* 22. General Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">22. General Terms</h2>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">22.1</strong> You are not allowed to transfer, sub-contract, encumber or assign your rights under these terms (in whole or part) to anyone without our prior written consent. We may transfer our rights under these terms to another business without your consent, but we will notify you of the transfer and make sure that your rights are not adversely affected as a result.
                </p>
                <p>
                  <strong className="text-navy">22.2</strong> Nothing in this Agreement constitutes, or shall be deemed to constitute, a partnership between the parties nor make any party the agent of another party.
                </p>
                <p>
                  <strong className="text-navy">22.3</strong> If any provision of these terms (or part of any provision) is or becomes illegal, invalid or unenforceable, the legality, validity and enforceability of any other provision of these terms will not be affected.
                </p>
                <p>
                  <strong className="text-navy">22.4</strong> If you breach these terms and we take no action, we will still be entitled to use our rights and remedies in any other situation where you breach these terms. No failure, delay or omission by us to exercise any right, power or remedy shall be considered as a waiver of those rights, powers or remedies, nor shall any partial exercise preclude any future exercise of the same, or of some other right, power or remedy.
                </p>
                <p>
                  <strong className="text-navy">22.5</strong> If you are a business customer, you warrant and undertake to us that you have full right, power and entitlement to enter into these terms without reference to any other person. Further, you warrant to us that your signatory or signatories to our terms have full right, power and entitlement to execute them on behalf of your business.
                </p>
                <p>
                  <strong className="text-navy">22.6</strong> If you are a business customer, any variation to these terms will not be binding unless expressly agreed in writing between you and us.
                </p>
                <p>
                  <strong className="text-navy">22.7</strong> If you are a business customer, you and we both agree that these terms constitute the entire agreement between you and us in relation to your instructions. You acknowledge that you have not entered into these terms in reliance on any representation or warranty that is not expressly set out in these terms and that you will have no claim for innocent or negligent misrepresentation on the basis of any statement in these terms.
                </p>
                <p>
                  <strong className="text-navy">22.8</strong> Ownership of all reports, documents, and materials created by Expert Reports Limited remains vested in the company until all sums due under these terms have been paid in full, as set out in clause 10.9.
                </p>
              </div>
            </div>

            {/* 23. Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">23. Intellectual Property</h2>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">23.1</strong> Unless otherwise stated, Expert Reports Limited and/or its licensors own the intellectual property rights for all material on our website and in our reports. All intellectual property rights are reserved.
                </p>
                <p>
                  <strong className="text-navy">23.2</strong> You may access our website for your own personal use subject to these terms. You must not:
                </p>
                <ul className="list-disc ml-12 space-y-2">
                  <li>Republish material from our website without permission;</li>
                  <li>Use the materials for any commercial purpose beyond the specific purpose for which they were instructed;</li>
                  <li>Reproduce, copy or duplicate material from our website;</li>
                  <li>Remove any copyright or proprietary notices from our materials.</li>
                </ul>
              </div>
            </div>

            {/* 24. Cookies and Website Use */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy mb-4">24. Cookies and Website Use</h2>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  <strong className="text-navy">24.1</strong> Our website uses cookies in accordance with our{' '}
                  <Link href="/privacy" className="text-teal hover:underline">
                    Privacy Policy
                  </Link>. By using our website, you consent to our use of cookies as described therein.
                </p>
                <p>
                  <strong className="text-navy">24.2</strong> Our website may contain links to third-party websites or services that are not owned or controlled by Expert Reports Limited. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
                </p>
              </div>
            </div>

            {/* Contact Info Box */}
            <div className="bg-grey-light rounded-xl p-6 mt-12">
              <h3 className="text-lg font-bold text-navy mb-4">Questions About These Terms?</h3>
              <p className="text-navy/70 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-navy/70">
                <p>
                  <strong className="text-navy">Email:</strong>{' '}
                  <a href="mailto:info@expertreports.ie" className="text-teal hover:underline">
                    info@expertreports.ie
                  </a>
                </p>
                <p>
                  <strong className="text-navy">Phone:</strong>{' '}
                  <a href="tel:+353860419300" className="text-teal hover:underline">
                    +353 86 041 9300
                  </a>
                </p>
                <p>
                  <strong className="text-navy">Address:</strong> Dublin, Ireland
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
