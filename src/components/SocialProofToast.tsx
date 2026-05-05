'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

interface ProofItem {
  message: string;
  detail: string;
}

const proofItems: ProofItem[] = [
  { message: 'Assessment slot available', detail: 'Next available: within 3 business days' },
  { message: 'Report turnaround', detail: 'Standard delivery: 21 days from assessment' },
  { message: 'Supports Criminal Legal Aid', detail: 'Documentation provided for sanction applications and claims' },
  { message: 'PSI registered clinicians', detail: 'Qualified forensic psychologists' },
  { message: 'Expedited service available', detail: '14-day turnaround for urgent matters' },
];

export function SocialProofToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasShown, setHasShown] = useState(false);
  const pathname = usePathname();

  const showToast = useCallback(() => {
    setIsVisible(true);
    // Hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
      // Move to next item
      setCurrentIndex((prev) => (prev + 1) % proofItems.length);
    }, 5000);
  }, []);

  useEffect(() => {
    // Don't show on contact page (they're already converting)
    if (pathname === '/contact') {
      return;
    }

    // First show after 8 seconds
    const initialTimer = setTimeout(() => {
      if (!hasShown) {
        showToast();
        setHasShown(true);
      }
    }, 8000);

    // Then show every 45 seconds
    const interval = setInterval(() => {
      if (pathname !== '/contact') {
        showToast();
      }
    }, 45000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [showToast, hasShown, pathname]);

  const currentProof = proofItems[currentIndex];

  const handleClose = () => {
    setIsVisible(false);
  };

  // Don't render on contact page
  if (pathname === '/contact') {
    return null;
  }

  return (
    <div 
      className={`toast ${isVisible ? 'toast-visible' : ''}`}
      role="status"
      aria-live="polite"
    >
      <div className="toast-icon">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <div className="toast-content">
        <div className="toast-title">
          {currentProof.message}
        </div>
        <div className="toast-message">
          {currentProof.detail}
        </div>
      </div>

      <button 
        onClick={handleClose}
        className="toast-close"
        aria-label="Dismiss notification"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
