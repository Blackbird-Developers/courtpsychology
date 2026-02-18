'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.6; // Show after 60% of viewport

      // Show when scrolled past hero, hide when scrolling up quickly
      if (currentScrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`sticky-cta lg:hidden ${isVisible ? 'sticky-cta-visible' : ''}`}
      role="complementary"
      aria-label="Request assessment"
    >
      <div className="flex items-center gap-3">
        {/* Availability indicator */}
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          <span className="live-indicator-dot" />
          <span className="text-xs font-medium text-navy/70">Available now</span>
        </div>
        
        {/* Primary CTA */}
        <Link
          href="/contact"
          className="btn btn-primary btn-block flex-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Request a Report
        </Link>

        {/* Phone shortcut */}
        <a
          href="tel:+35316123456"
          className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-lg border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors"
          aria-label="Call us"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
