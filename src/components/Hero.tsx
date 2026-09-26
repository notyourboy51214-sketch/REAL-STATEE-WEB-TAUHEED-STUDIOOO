import React from 'react';
import { ShieldCheck, Phone, ArrowRight, Award, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#0e1b2e] text-[#f7f5f0] overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#c5a059]/20">
      {/* Background Architectural Canvas with Warm Navy Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105 transform transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=80')`
        }}
      />
      {/* Navy gradient scrim for high readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0e1b2e] via-[#0e1b2e]/95 to-[#16253b]/85" />
      <div className="absolute inset-0 z-0 bg-navy-pattern opacity-40 pointer-events-none" />

      {/* Decorative brass accent lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Reassuring Agency Statement */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Subtle verification badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[6px] bg-[#16253b] border border-[#c5a059]/40 text-xs sm:text-sm text-[#dfd7c8] shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span>Gulshan-e-Iqbal Property Specialist • Over 20 Years at Seacon Apartment</span>
            </div>

            {/* Sub-tagline */}
            <div className="flex items-center gap-3">
              <span className="text-base sm:text-lg text-[#c5a059] font-medium tracking-wide">
                Tauheed Estate Agency — Integrity, Experience & Dependable Direction
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.18] font-bold text-[#f7f5f0] tracking-tight">
              Sound Property Guidance Rooted in Decades of Honest Local Experience.
            </h1>

            {/* Reassuring Subheadline */}
            <p className="text-base sm:text-lg text-[#dfd7c8] font-normal leading-relaxed max-w-2xl font-sans">
              Navigating Karachi real estate requires measured counsel, not hurried promises. For over two decades, Tauheed Estate Agency has helped families, business owners, and investors in Gulshan-e-Iqbal buy, sell, and rent with clear legal paperwork, verified titles, and realistic block values.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="btn-brass-underline inline-flex justify-center items-center gap-2.5 px-7 py-3.5 rounded-[6px] bg-[#16253b] hover:bg-[#1f3350] text-[#f7f5f0] font-medium text-base border border-[#c5a059] shadow-md group transition-all"
              >
                <span>Speak With an Agent</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#listings"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-[6px] bg-transparent hover:bg-white/5 text-[#dfd7c8] hover:text-[#f7f5f0] font-medium text-base border border-[#dfd7c8]/30 transition-colors"
              >
                <span>Browse Verified Listings</span>
              </a>
            </div>

            {/* Micro assurance credentials */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-[#8c8273]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
                <span className="text-[#dfd7c8]">Non-Encumbrance Title Verifications</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
                <span className="text-[#dfd7c8]">Strictly Zero Inflated Appraisals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
                <span className="text-[#dfd7c8]">KDA & Sub-Lease Expertise</span>
              </div>
            </div>

          </div>

          {/* Right Column: Established Firm Card & Office Highlight */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[8px] bg-[#16253b]/95 border border-[#c5a059]/40 p-6 sm:p-8 shadow-2xl backdrop-blur-sm space-y-6">
              
              {/* Header inside card */}
              <div className="flex items-start justify-between border-b border-white/10 pb-5">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium font-sans">
                    Physical Office & Consultation
                  </span>
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#f7f5f0] mt-1">
                    Seacon Apartment, Block 4-A
                  </h3>
                </div>
                <div className="p-2.5 rounded-[6px] bg-[#0e1b2e] border border-[#c5a059]/50 text-[#c5a059]">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              {/* Core Reassuring Statement */}
              <blockquote className="text-sm text-[#dfd7c8] italic leading-relaxed border-l-2 border-[#c5a059] pl-3.5">
                &ldquo;A property decision is often a family’s life savings. We would rather advise a client to walk away from an ambiguous deal than make a fast commission.&rdquo;
              </blockquote>

              {/* Quick details summary */}
              <div className="space-y-3.5 text-xs sm:text-sm text-[#dfd7c8]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <span>Shop# 3, ZC-1, ST.15, Seacon Apartment, Block 4-A, Gulshan-e-Iqbal</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#c5a059] underline underline-offset-2">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <span className="text-[#8c8273]">(Senior Consultant Direct)</span>
                </div>
              </div>

              {/* Quick Consultation Badge */}
              <div className="pt-2">
                <div className="p-3.5 rounded-[6px] bg-[#0e1b2e] border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#8c8273]">Working Hours</div>
                    <div className="text-sm font-medium text-[#f7f5f0]">Daily: 10:00 AM – 8:00 PM</div>
                  </div>
                  <a 
                    href="#location"
                    className="text-xs text-[#c5a059] hover:underline font-medium"
                  >
                    View on Map →
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
