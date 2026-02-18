'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/process', label: 'Process' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Urgency Banner - Slides up and out when scrolled */}
      <div 
        className={`bg-navy text-white text-center text-sm px-4 transition-all duration-300 ease-out ${
          isScrolled 
            ? 'h-0 py-0 opacity-0 -translate-y-full pointer-events-none' 
            : 'h-auto py-2 opacity-100 translate-y-0'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="hidden sm:inline">Currently accepting new instructions</span>
            <span className="sm:hidden">Accepting instructions</span>
          </span>
          <span className="text-white/60">•</span>
          <span className="text-teal-light font-medium">Next slot: 3 days</span>
        </div>
      </div>
      
      {/* Main Header - Apple-style frosted glass */}
      <div
        className={`transition-all duration-300 ease-out ${
          isScrolled || isMobileMenuOpen
            ? 'bg-white/70 backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_3px_rgba(0,0,0,0.08)] py-2 sm:py-3 border-b border-white/20'
            : 'bg-white/90 backdrop-blur-md py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative z-50">
            <div className="flex items-baseline">
              <span className="text-xl sm:text-2xl font-bold text-navy tracking-tight">
                EXPERT
              </span>
              <span className="text-xl sm:text-2xl font-medium text-navy tracking-tight">
                Reports
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors relative group py-2 ${
                  isActive(link.href) ? 'text-teal' : 'text-navy/80 hover:text-navy'
                }`}
              >
                {link.label}
                <span 
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-teal transition-all duration-300 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} 
                />
              </Link>
            ))}
            
            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="btn btn-primary ml-2"
            >
              <span className="hidden xl:inline">Request a Report</span>
              <span className="xl:hidden">Get Quote</span>
            </Link>
          </div>

          {/* Mobile: Phone + Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick call button - always visible */}
            <a
              href="tel:+35316123456"
              className="w-11 h-11 flex items-center justify-center rounded-lg bg-teal/10 text-teal hover:bg-teal hover:text-white transition-colors"
              aria-label="Call us"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>

            {/* Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-lg text-navy hover:bg-grey-light transition-colors relative z-50"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
        </div>
      </div>

      {/* Mobile Menu - Full screen overlay - OUTSIDE the header layout containers */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-xl"
          style={{ top: isScrolled ? '52px' : '88px', zIndex: 9999 }}
        >
          {/* Menu content */}
          <div className="h-full pt-4 pb-8 px-6 overflow-y-auto">
            {/* Nav links */}
            <nav className="space-y-1 mb-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-4 text-xl font-medium border-b border-grey transition-colors ${
                    isActive(link.href) 
                      ? 'text-teal' 
                      : 'text-navy hover:text-teal'
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: 'fadeInUp 0.3s ease-out forwards'
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile CTAs */}
            <div className="space-y-3 mb-8">
              <Link
                href="/contact"
                className="btn btn-primary btn-lg btn-block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request a Report
              </Link>
              <a
                href="tel:+35316123456"
                className="btn btn-secondary btn-lg btn-block"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +353 1 612 3456
              </a>
            </div>

            {/* Trust signals */}
            <div className="pt-6 border-t border-grey">
              <div className="flex items-center gap-2 text-sm text-navy/60 mb-4">
                <span className="live-indicator-dot" />
                <span>Currently accepting new instructions</span>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-navy/50">
                <span>✓ PSI Registered</span>
                <span>✓ 21-day Turnaround</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
