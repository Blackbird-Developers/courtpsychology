'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

export function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const showModal = useCallback(() => {
    if (hasShown) return;
    
    // Don't show on contact page
    if (typeof window !== 'undefined' && window.location.pathname === '/contact') return;
    
    // Check if user has seen this in last 24 hours
    const lastShown = localStorage.getItem('exitModalShown');
    if (lastShown) {
      const hoursSince = (Date.now() - parseInt(lastShown)) / (1000 * 60 * 60);
      if (hoursSince < 24) return;
    }

    setIsVisible(true);
    setHasShown(true);
    localStorage.setItem('exitModalShown', Date.now().toString());
  }, [hasShown]);

  useEffect(() => {
    // Desktop: Mouse leaving viewport at top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showModal();
      }
    };

    // Mobile: Back button or tab visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Store that they're leaving, show on return
        sessionStorage.setItem('wasLeaving', 'true');
      } else if (sessionStorage.getItem('wasLeaving')) {
        sessionStorage.removeItem('wasLeaving');
        showModal();
      }
    };

    // Timeout fallback: show after 45 seconds of no conversion
    const timeoutId = setTimeout(() => {
      // Only if user hasn't interacted with contact form
      if (!sessionStorage.getItem('formStarted')) {
        showModal();
      }
    }, 45000);

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(timeoutId);
    };
  }, [showModal]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`modal-overlay ${isVisible ? 'modal-overlay-visible' : ''}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-modal-title"
    >
      <div 
        className="modal relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="modal-close"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-header">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h2 id="exit-modal-title" className="text-2xl font-bold text-navy mb-2">
            Need a Report for Your Client?
          </h2>
          <p className="text-navy/60">
            Get a quick quote and discuss your case requirements before you go.
          </p>
        </div>

        <div className="modal-body">
          {/* Value proposition */}
          <div className="bg-grey-light rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-navy">Free 15-minute Consultation</div>
                <p className="text-sm text-navy/60 mt-1">
                  Discuss your case requirements and get expert guidance on the right assessment type.
                </p>
              </div>
            </div>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-navy/60">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No obligation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Confidential</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Expert advice</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            <Link
              href="/contact"
              className="btn btn-primary btn-block btn-lg"
              onClick={handleClose}
            >
              Request a Report
            </Link>
            <button
              onClick={handleClose}
              className="btn btn-secondary btn-block"
            >
              Maybe Later
            </button>
          </div>

          {/* Microcopy */}
          <p className="text-xs text-center text-navy/50 mt-4">
            We respond to all enquiries within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}
