'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show after scrolling past first section
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.8;
      setIsVisible(scrollY > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render on contact page
  if (pathname === '/contact') {
    return null;
  }

  return (
    <>
      {/* Desktop FAB with expansion */}
      <div 
        className={`hidden lg:block fixed bottom-8 right-8 z-40 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        {/* Expanded menu */}
        {isExpanded && (
          <div className="absolute bottom-full right-0 mb-4 bg-white rounded-xl shadow-2xl border border-grey p-4 min-w-64 animate-scale-in">
            <div className="text-sm font-semibold text-navy mb-3">Quick Actions</div>
            
            <Link
              href="/contact"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-grey-light transition-colors group"
              onClick={() => setIsExpanded(false)}
            >
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-navy">Request Assessment</div>
                <div className="text-xs text-navy/60">Free consultation</div>
              </div>
            </Link>

            <a
              href="tel:+353860419300"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-grey-light transition-colors group"
              onClick={() => setIsExpanded(false)}
            >
              <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center group-hover:bg-navy/15 transition-colors">
                <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-navy">Call Directly</div>
                <div className="text-xs text-navy/60">+353 86 041 9300</div>
              </div>
            </a>

            <div className="mt-3 pt-3 border-t border-grey">
              <div className="flex items-center gap-2 text-xs text-navy/60">
                <span className="live-indicator-dot" />
                <span>Responding within 24 hours</span>
              </div>
            </div>
          </div>
        )}

        {/* FAB button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`fab ${isExpanded ? 'bg-navy' : 'bg-teal'}`}
          aria-label={isExpanded ? 'Close menu' : 'Get help'}
          aria-expanded={isExpanded}
        >
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isExpanded ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            )}
          </svg>
        </button>
      </div>

      {/* Overlay for closing */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-30"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
}
