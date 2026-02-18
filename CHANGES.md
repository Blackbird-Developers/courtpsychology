# Expert Reports Website Changes Log

## 2026-02-05 - Domain Migration: courtpsychology.ie → expertreports.ie

### Domain & Branding
- **Domain**: Migrated from `courtpsychology.ie` to `expertreports.ie`
- **Brand name**: "CourtPsychology" → "Expert Reports" across all pages
- **Email**: `info@courtpsychology.ie` → `info@expertreports.ie` across all pages
- **Company name**: "CourtPsychology Limited" → "Expert Reports Limited" in legal pages
- **Header/Footer logos**: "COURT Psychology" → "EXPERT Reports"
- **OpenGraph/Twitter metadata**: Updated URL, site name, titles
- **Page titles**: Updated across all pages (layout, about, services, process, privacy, terms)
- **cloudbuild.yaml**: Image/service name changed from `courtpsychology-web` to `expertreports-web`
- **CSS comment**: Updated design system name

### Infrastructure
- Google Cloud Run domain mapping created for `expertreports.ie`
- DNS A records configured: `216.239.32.21`, `216.239.34.21`, `216.239.36.21`, `216.239.38.21`
- www CNAME → `ghs.googlehosted.com`
- SSL certificate provisioning in progress

---

## 2026-02-05 - Solicitor-Focused Messaging & Remove Unverified Claims

### Major Changes

#### Messaging & Positioning - Target Solicitors
- **Hero headline**: Changed from "Don't Risk Your Case on Weak Evidence" to "Court-Ready Reports, Fast & Reliable"
- **Subheadline**: Now emphasizes speed, reliability, and ease for solicitors: "21-day turnaround on independent psychological assessments. Standard formats judges expect. Legal Aid compatible. Hassle-free process from instruction to delivery."
- **All CTAs updated** to solicitor-focused language:
  - "Get My Free Consultation" → "Request a Report for Your Client" / "Request a Report"
  - "Get Free Consultation" → "Request a Report" / "Get Quote"
- **Key benefits bullets**: Changed from "21-day turnaround / Free consultation" to "Legal Aid compatible / PSI registered clinicians"

#### Removed Unverified Claims
- **"500+ solicitors trust us"** floating badge → Replaced with "Legal Aid Board Compatible" badge
- **Trust bar logos** (Law Library, FLAC, Legal Aid Board, DSBA, Bar Council) → Replaced with "Professional Standards Bar" showing PSI and Law Society of Ireland registrations (without "trusted by" wording)
- **Fake testimonials section** (Sarah Mitchell, Conor O'Brien, Emma Fitzgerald) → Replaced with "Built for Solicitors" value proposition section
- **"Join 500+ solicitors..."** text → Removed entirely
- **"500+ cases completed"** trust signal → Replaced with "21-day standard turnaround"
- **"98% court acceptance"** trust signal → Replaced with "Legal Aid compatible"
- **Layout metadata**: Removed "Trusted by 500+ solicitors nationwide" from OpenGraph description

#### Social Proof Toast Updates
- Changed from fake activity notifications ("Sarah M. from Dublin just requested...") to generic service information toasts:
  - "Assessment slot available - Next available: within 3 business days"
  - "Report turnaround - Standard delivery: 21 days from assessment"
  - "Legal Aid compatible - We handle the paperwork requirements"
  - "PSI registered clinicians - Qualified forensic psychologists"
  - "Expedited service available - 14-day turnaround for urgent matters"

#### Contact Page Updates
- Removed mini testimonial from sidebar → Replaced with "What to expect" info card

#### Files Modified
- `/src/app/page.tsx` - Hero, trust bar, testimonials, CTAs, final section
- `/src/app/layout.tsx` - Metadata descriptions
- `/src/app/contact/page.tsx` - Sidebar testimonial
- `/src/components/Header.tsx` - CTA button text
- `/src/components/SocialProofToast.tsx` - Toast messages
- `/src/components/StickyMobileCTA.tsx` - CTA text
- `/src/components/ExitIntentModal.tsx` - Headlines and CTA text
- `/src/components/FloatingCTA.tsx` - Already had appropriate text

### Rationale
User requested changes to:
1. Target solicitors as the primary audience (not end clients)
2. Remove fake testimonials and unverified claims (500+ solicitors, specific firm names)
3. Remove misleading logo associations (Bar Council, Law Library, etc.)
4. Keep social proof generic and not misleading about real volume
5. Add Law Society of Ireland reference without endorsement implication
6. Emphasize speed, reliability, Legal Aid compatibility

---

## 2026-01-23 - Harmful Sexual Behaviour Assessments Service

### Added
- New service section "Harmful Sexual Behaviour Assessments" to `/src/app/services/page.tsx`

### Service Details
- **Subtitle**: Child Protection & Family Welfare
- **Target**: Children and adolescents (under 18) displaying harmful sexual behaviours
- **Framework**: Children First guidelines, Tusla protocols, evidence-based frameworks

### Sub-services
1. **Comprehensive HSB Assessment** - Trauma-informed evaluation distinguishing harmful from age-appropriate sexual development
2. **Risk & Protective Factors Evaluation** - Structured assessment using AIM3, J-SOAP II, or equivalent tools
3. **Formulation & Intervention Planning** - Evidence-based formulation with therapeutic intervention recommendations
4. **Family & Systemic Assessment** - Caregiver interviews and family dynamics for multi-agency responses

### Deliverables
- Comprehensive written report
- Behaviour classification (Brook Traffic Light Tool)
- Risk formulation & scenarios
- Strengths-based protective factors
- Intervention & support recommendations
- Multi-agency guidance

### Turnaround
- 28-42 days standard

---

## 2026-01-15 - Privacy Policy Page

### Created
- `/src/app/privacy/page.tsx` - GDPR-compliant Privacy Policy for Ireland

### Irish/GDPR-Specific Features
- **Supervisory Authority**: Data Protection Commission (Ireland) with full contact details
- **Legal Framework**: GDPR (EU) 2016/679 + Irish Data Protection Acts 1988-2018
- **Lawful Bases**: All six Article 6 bases detailed, plus Article 9 special category bases
- **Special Category Data**: Explicit handling for health data, criminal offence data (critical for forensic psychology)
- **Data Subject Rights**: All 8 GDPR rights with exercise instructions
- **International Transfers**: SCCs and adequacy decision references

### Sections Included (15 total)
1. Data Controller identification
2. Information We Collect (identity, contact, professional, case, assessment, special category)
3. How We Use Your Information (service delivery, business ops, legal compliance, website)
4. Legal Basis for Processing (Article 6 + Article 9 bases)
5. Who We Share Data With (courts, legal reps, service providers, professional bodies)
6. International Transfers (EEA focus, safeguards)
7. Data Retention (7 years expert reports, longer for minors, financial records)
8. Your Rights (access, rectification, erasure, restriction, portability, objection, consent withdrawal, automated decisions)
9. Data Security (encryption, access controls, training, incident response)
10. Cookies and Tracking Technologies (types, management)
11. Third-Party Links
12. Children's Privacy (special handling for forensic assessments of minors)
13. Changes to Policy
14. Complaints (DPC contact details)
15. Contact Us

### Forensic Psychology-Specific Considerations
- Health data processing for psychological assessments
- Criminal offence data handling
- Court-mandated assessments of minors
- Expert witness report retention periods
- Legal professional privilege considerations

---

## 2026-01-15 - Terms of Service Page

### Created
- `/src/app/terms/page.tsx` - Full Terms of Service page adapted for Ireland

### Irish-Specific Adaptations (vs UK template)
- **Company registration**: CRO (Ireland) format, not Companies House (UK)
- **Consumer law**: Consumer Rights Act 2022 (Ireland) and EU Consumer Information Regulations 2013, not UK Consumer Rights Act 2015
- **Currency**: Euro (€) throughout, not GBP (£)
- **Jurisdiction**: Irish courts, governed by laws of Ireland
- **Legal Aid**: Legal Aid Board (Ireland), not Legal Aid Agency (UK)
- **Interest rate**: ECB main refinancing rate + 8%, not Bank of England rate
- **Data protection**: GDPR (direct EU applicability) + Irish Data Protection Acts 1988-2018
- **ADR**: CCPC (Competition and Consumer Protection Commission) and EU ODR platform
- **Residency**: Ireland/EU/EEA, not UK-only

### Sections Included
1. About Us (with placeholder for CRO number, VAT)
2. Contact information
3. Terms applicability (consumer vs business customer)
4. Instructions process
5. Availability
6. Making changes to instructions
7. Providing services (incl. court attendance cancellation policy)
8. Privacy and personal information
9. Prices (€, VAT at 23%)
10. Payment terms (30 days, interest, deferred payment)
11. Legal Aid (Legal Aid Board Ireland)
12. Debt recovery (admin charges in €)
13. Consumer cancellation rights (14-day cooling off)
14. Faulty services - consumers
15. Faulty services - business customers
16. Force majeure / events beyond control
17. Liability - consumers (foreseeable loss only)
18. Liability - business customers (capped at fees paid)
19. No third party rights
20. Complaints procedure (CCPC, EU ODR)
21. Governing law and jurisdiction (Ireland)
22. General terms (severability, entire agreement, etc.)
23. Intellectual property
24. Cookies and website use

### Footer Link
- `/terms` route now links from existing Footer component

---

## 2026-01-15 - Header Scroll Behavior & Frosted Glass Effect

### Issue
When scrolling, the urgency banner collapsed but left a gap; header didn't stick properly to viewport top.

### Fix
- **Banner animation**: Changed from `h-0 opacity-0` to `h-0 py-0 opacity-0 -translate-y-full` for cleaner exit
- **Header sticks to top**: No gap when banner is hidden
- **Apple-style frosted glass**: `bg-white/70 backdrop-blur-xl backdrop-saturate-150` when scrolled
- **Subtle shadow**: `shadow-[0_1px_3px_rgba(0,0,0,0.08)]` for depth without heaviness
- **Border accent**: `border-b border-white/20` for definition

### Result
Header transitions smoothly from solid white (unscrolled) to frosted glass (scrolled) with content visible but blurred behind.

---

## 2026-01-15 - Mobile Navigation Menu Fix

### Issue
Mobile menu was appearing behind page content due to z-index stacking context issues (menu was nested too deep in header structure).

### Fix
- Moved mobile menu outside nested containers to be direct child of header
- Changed from CSS visibility toggle to conditional React rendering (`{isMobileMenuOpen && ...}`)
- Set `zIndex: 9999` inline style for reliable stacking
- Added solid `bg-white` to menu container ensuring full coverage

### Also
- Removed "98% Court Acceptance" from mobile menu trust signals (aligns with previous unverified claims removal)

---

## 2026-01-15 - Removed Unverified Hero Claims

### Removed
- **"Fully Insured" trust badge** - unverified claim
- **"98% court acceptance rate"** key benefit bullet - unverified statistic
- **Social proof stats section** (500+ Reports, 98% Acceptance, 21 Days) - unverified numbers

### Rationale
These statistics had no verifiable source documentation. Keeping only defensible claims.

---

## 2026-01-15 - Problem Section Statistics Corrected

### Issue
Original statistics (47% rejection rate, €5K+ per adjournment, 6-month delay) had no verifiable Irish empirical sources.

### Fix
Replaced unsubstantiated claims with defensible statements backed by Irish sources:
- **€5K+ per-party costs**: Cited Irish family law costs guide on Circuit Court adjournments
- **6+ month delays**: Cited Irish Examiner reporting on criminal trial delays due to psychiatric report shortages
- **Courts may reject**: Cited Mason Hayes & Curran on Court of Appeal rulings re: expert evidence rejection

### Added
- Source references section below the stats cards with linked citations
- Changed headline from "Every Rejected Report Costs Your Client" to "Inadequate Reports Jeopardise Your Case" (more defensible framing)

### Sources
1. irishfather.com - Circuit Court costs guide
2. Irish Examiner - Psychiatric report delays article
3. MHC Insights - Expert evidence Court of Appeal ruling

---

## 2026-01-15 - Google Cloud Platform Deployment Setup

### Files Created
- `Dockerfile` - Multi-stage build optimized for Next.js standalone output
- `.dockerignore` - Excludes dev files from Docker context
- `cloudbuild.yaml` - CI/CD pipeline for Cloud Build → Cloud Run

### Config Changes
- `next.config.ts` - Added `output: "standalone"` for containerized deployment

### GCP Configuration
- **Project ID**: `courtpsychology`
- **Region**: `us-central1`
- **Service**: Cloud Run (serverless containers)
- **Live URL**: https://courtpsychology-web-347077676263.us-central1.run.app

### GitHub Integration
- **Repository**: `myceldigital/courtpsychology`
- **Trigger**: `courtpsychology-auto-deploy`
- **Branch**: `main`
- **Auto-deploy**: Enabled (push to main triggers build + deploy)

---

## 2026-01-15 - Text Visibility & Header Fixes

### Issues Fixed
- **Sticky header overlapping content**: Integrated urgency banner INTO the header component (collapses on scroll)
- **"Every Rejected Report" section**: Added `text-white` to h2 on navy background
- **Services "Report Includes"**: Added `text-white` to h3 in navy sidebar
- **About "Our Approach"**: Added `text-white` to h2 and all h3 titles
- **Process "Expedited Timeline"**: Added `text-white` to h3 in navy card
- **Homepage "Why CourtPsychology"**: Fixed mobile responsive layout with `flex-col sm:flex-row` for card contents

### CSS Fix
- Removed `color: var(--color-navy)` from global heading styles in `globals.css` - was overriding Tailwind `text-white` utility classes with higher specificity
- Now headings inherit color from parent or use explicit Tailwind classes

### Mobile Responsiveness Improvements
- Why CourtPsychology section cards now stack properly on mobile
- Stat badges wrap naturally on small screens
- Header urgency banner shortens on mobile ("Accepting instructions" vs full text)

---

## 2026-01-14 - CRO & Mobile Responsiveness Complete

### Final Testing Summary
- ✅ Homepage renders correctly with all CRO elements
- ✅ Mobile responsive layout verified at 375px and 390px widths  
- ✅ Sticky mobile CTA displays correctly at bottom of screen
- ✅ Social proof toasts appear with live activity indicators
- ✅ Multi-step contact form functioning with progress indicator
- ✅ Exit intent modal triggers on mouse leave (desktop)
- ✅ Floating action button with expandable menu on desktop
- ✅ All forms have proper touch targets (44px minimum)
- ✅ iOS safe area support for bottom sticky elements

### Contact Form Structure
- 3-step wizard: Your Details → Assessment Type → Case Details
- Progress indicator with visual checkmarks for completed steps
- Radio card selection for assessment types
- Timeline preference options with "Most popular" badge
- Summary preview before final submission

---

## 2026-01-14 - CRO Optimization Pass

### Major CRO Enhancements

#### Psychology & Persuasion (Cialdini's Principles)
- **Social Proof**: Live activity toasts ("Sarah M. from Dublin just requested..."), specific numbers (500+, 98%, 21), client avatars
- **Authority**: PSI badge, court experience stats, credentials card with verified signals
- **Urgency/Scarcity**: Availability banner ("Next available slot: 3 business days"), live indicator dots
- **Risk Reversal**: "Free consultation", "No obligation", "Confidential" badges throughout

#### Landing Page Optimization (LIFT Model)
- **Value Prop**: PAS framework headline ("Don't Risk Your Case on Weak Evidence")
- **Clarity**: Single primary CTA per section, scannable benefit bullets
- **Anxiety Reducers**: Trust badges above fold, security signals near form submit
- **Friction Reducers**: Multi-step form (3 steps), progress indicator, inline validation

### New Components Created
- `StickyMobileCTA.tsx` - Fixed bottom CTA on mobile after scroll, appears after 60vh
- `FloatingCTA.tsx` - Desktop FAB with expandable quick actions menu
- `SocialProofToast.tsx` - Rotating social proof notifications (every 45s)
- `ExitIntentModal.tsx` - Exit intent capture with value proposition + CTA

### Form Optimization
- Multi-step wizard (3 steps: Details → Assessment Type → Case Details)
- Visual progress indicator with checkmarks
- Radio button cards for assessment type selection
- Real-time validation with success/error states
- Summary preview before submit
- Trust signals below submit button

### Mobile-First Responsive System
- Touch targets minimum 44px throughout
- Sticky mobile CTA bar (hidden on desktop)
- Full-screen mobile menu with body scroll lock
- Safe area insets for iOS
- Input zoom prevention (font-size: 16px)

### CTA Copy (First-Person Language)
- "Get My Free Consultation" (not "Get Your")
- "Submit My Enquiry" (not "Submit")
- Benefit-focused button text throughout

### CSS Enhancements (`globals.css`)
- `.btn` system with variants (primary, secondary, urgent, lg, block)
- `.form-input` with validation states
- `.progress-steps` component
- `.trust-badge` component
- `.toast` notification system
- `.modal-overlay` with transitions
- `.fab` floating action button
- `.sticky-cta` with safe area support
- Animation utilities (fade-in-up, scale-in, slide-in)

### Conversion Flow Improvements
- Urgency banner at top of homepage
- Problem agitation section ("Every Rejected Report Costs Your Client")
- Trust bar with client logos
- Process preview with time estimates per step
- Final CTA section with all trust signals consolidated

### Header Improvements
- Quick-call button visible on mobile (teal/10 background)
- Active state for current page
- Improved mobile menu with trust signals
- Body scroll lock when menu open

---

## 2026-01-14 - Initial Website Creation

### Created
- **Project Setup**: Next.js 16 with App Router, Tailwind CSS v4, TypeScript
- **Design System**: Custom CSS theme with brand colors (Navy #0b2b57, Teal #3b7a8a), animations, typography per brand guidelines
- **Components**:
  - `Header.tsx` - Responsive nav with scroll-aware styling, mobile menu
  - `Footer.tsx` - Full footer with services, company links, contact info
  - `ServiceCard.tsx` - Reusable service listing card with features
  - `TestimonialCard.tsx` - Client testimonial display
- **Pages**:
  - Homepage (`page.tsx`) - Hero, services grid, trust signals, testimonials, process preview, CTA
  - Services (`/services`) - Detailed service listings (criminal, family, medico-legal, risk, parenting, employment)
  - About (`/about`) - Values, expertise, credentials, approach
  - Process (`/process`) - 8-step timeline, FAQ, expedited service info
  - Contact (`/contact`) - Full enquiry form with validation, contact sidebar

### Design Decisions
- **Color palette**: Navy primary (70%+), Teal accent (≤12%), Grey neutrals per brand guidelines
- **Typography**: System font stack with Neue Haas Grotesk fallback
- **Tone**: Barrister-level authority, no emotive language, evidence-led copy
- **UX**: Fast-loading, accessible, mobile-first responsive
- **Differentiators addressed**: Turnaround time (21 days), pricing transparency hints, solicitor-focused workflow

### Rationale
Built to position CourtPsychology as the definitive independent authority in forensic psychological assessments for Irish courts. Addresses competitive gaps identified in research: workflow clarity, turnaround messaging, service packaging detail.

### Verified
- ✅ Build passes without errors
- ✅ All pages render correctly
- ✅ Responsive design working
- ✅ Brand colors and typography consistent
- ✅ Form validation functional
- ✅ Navigation and routing working
