import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { href: '/services#criminal', label: 'Criminal Court Assessments' },
    { href: '/services#family', label: 'Family Law Reports' },
    { href: '/services#medicolegal', label: 'Medico-Legal Reports' },
    { href: '/services#risk', label: 'Forensic Risk Assessments' },
    { href: '/services#parenting', label: 'Parenting Capacity' },
  ];

  const company = [
    { href: '/about', label: 'About Us' },
    { href: '/process', label: 'Our Process' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-baseline mb-4">
              <span className="text-2xl font-bold tracking-tight">EXPERT</span>
              <span className="text-2xl font-medium tracking-tight">Reports</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Independent forensic psychological assessments for Irish courts.
              Rigorous, evidence-based forensic evaluations accepted nationwide.
            </p>
            <p className="text-teal-light font-medium text-sm">
              Insight That Stands in Court.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-teal-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Dublin, Ireland<br />Nationwide service available</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-teal-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@expertreports.ie" className="hover:text-white transition-colors">
                  info@expertreports.ie
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-teal-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+35316123456" className="hover:text-white transition-colors">
                  +353 1 612 3456
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} Expert Reports. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
