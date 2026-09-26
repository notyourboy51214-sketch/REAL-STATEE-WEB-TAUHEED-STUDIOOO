/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { LegacySection } from './components/LegacySection';
import { ServicesSection } from './components/ServicesSection';
import { ListingsSection } from './components/ListingsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';

export default function App() {
  const [quotaExceeded, setQuotaExceeded] = useState(false);

  useEffect(() => {
    const handleQuotaExceeded = () => {
      setQuotaExceeded(true);
    };

    window.addEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    return () => {
      window.removeEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#16253b] flex flex-col font-sans selection:bg-[#c5a059]/20 selection:text-[#0e1b2e]">
      
      {/* Google Maps Quota Warning Banner (if quota exceeded) */}
      {quotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      {/* Main Header / Navigation */}
      <Header />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Bar (Count-up Stats, Rating, Reviews, Hours) */}
        <TrustBar />

        {/* 3. Our Legacy (Senior Agent Counsel & History) */}
        <LegacySection />

        {/* 4. Services (Acquisition, Sale, Rental, Title Scrutiny, Local Insight) */}
        <ServicesSection />

        {/* 5. Featured Listings (Realistic Gulshan-e-Iqbal Properties) */}
        <ListingsSection />

        {/* 6. Why Choose Us (Authentic Non-Overclaiming Strengths) */}
        <WhyChooseUs />

        {/* 7. Testimonials (Paraphrased Real Reviews) */}
        <TestimonialsSection />

        {/* 8. FAQ (Process, Commissions, Title Verification) */}
        <FaqSection />

        {/* 9. Location & Contact (Interactive Google Map & Inquiry Form) */}
        <MapSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
