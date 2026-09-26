import React from 'react';
import { Award, CheckCircle, FileText, Users, Building2, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const LegacySection: React.FC = () => {
  return (
    <section id="legacy" className="py-20 bg-[#f7f5f0] text-[#16253b] relative border-b border-[#dfd7c8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#947129] mb-2">
            <span className="w-8 h-[1px] bg-[#c5a059]" />
            <span>Our Foundation & Approach</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0e1b2e] leading-tight">
            A Senior Consultant’s Perspective: Why Decades on Ground Matter in Karachi.
          </h2>
          <p className="text-sm sm:text-base text-[#947129] font-medium mt-2">
            A property decision demands lasting peace of mind and complete legal security, never rushed speculation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: The Story & Real Review Foundations */}
          <div className="lg:col-span-7 space-y-6 text-[#2d3a4d] leading-relaxed">
            <p className="text-base sm:text-lg">
              Karachi’s real estate market can be turbulent. Between conflicting ownership records, municipal zoning modifications, and fluctuating valuations across blocks, impulsive decisions carry real financial hazard.
            </p>
            
            <p className="text-base sm:text-base">
              At <strong className="text-[#0e1b2e] font-semibold">Tauheed Estate Agency</strong>, our standing is anchored in the continuous presence of our senior agent at <strong className="text-[#0e1b2e] font-semibold">Shop# 3, Seacon Apartment, Block 4-A</strong>. Clients who first visited us twenty years ago as young couples looking for their first two-bedroom apartment now return with their adult children to arrange family inheritance distributions or commercial investments.
            </p>

            {/* Quoted Senior Agent Philosophy */}
            <div className="my-6 p-6 rounded-[6px] bg-[#eee9df] border-l-4 border-[#c5a059] space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#947129]">
                The Senior Agent’s Guiding Rule
              </span>
              <p className="font-serif-heading text-lg sm:text-xl text-[#0e1b2e] italic">
                &ldquo;Our job is not to convince you to buy every property you view. It is to warn you about the subtle faults that the seller may not volunteer — whether it is irregular sub-lease paperwork, water supply intermittency, or legal encumbrances.&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#4a5568]">
              We do not market ourselves with bombastic claims of being the largest or flashiest agency in the metropolis. Our 4.1-star rating across 68 verified local reviews reflects our true reputation: steady, patient, and uncompromisingly thorough when protecting our clients’ interests.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-[6px] bg-white border border-[#dfd7c8] shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#0e1b2e]">Direct KDA Record Checks</div>
                  <div className="text-xs text-[#64748b]">Verifying allotment chains before any money moves.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-[6px] bg-white border border-[#dfd7c8] shadow-sm">
                <CheckCircle className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#0e1b2e]">Block 4-A Landmark Address</div>
                  <div className="text-xs text-[#64748b]">Accessible daily at Seacon Apartment, not working out of a car.</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Legacy Card */}
          <div className="lg:col-span-5">
            <div className="rounded-[8px] bg-[#0e1b2e] text-[#f7f5f0] border border-[#c5a059]/40 p-7 sm:p-9 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#c5a059]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 border-b border-white/10 pb-5 mb-6">
                <div className="p-3 rounded-[6px] bg-[#16253b] border border-[#c5a059]/60 text-[#c5a059]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#c5a059]">Office Heritage</div>
                  <div className="font-serif-heading text-xl font-bold text-[#f7f5f0]">Tauheed Estate Agency</div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#dfd7c8]">
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-[#8c8273]">Office Location:</span>
                  <span className="font-medium text-[#f7f5f0] text-right">Seacon Apartment, ST-15, Block 4-A</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-[#8c8273]">Senior Consultant:</span>
                  <span className="font-medium text-[#f7f5f0]">Senior Karachi Property Advisor</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-[#8c8273]">Primary Focus:</span>
                  <span className="font-medium text-[#f7f5f0]">Gulshan-e-Iqbal Blocks 1 to 19</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-[#8c8273]">Service Discipline:</span>
                  <span className="font-medium text-[#c5a059]">Clean Titles & Non-Rushed Guidance</span>
                </div>
              </div>

              <div className="mt-7 pt-5 border-t border-white/10">
                <a
                  href="#contact"
                  className="btn-brass-underline w-full inline-flex justify-center items-center gap-2 py-3 px-4 rounded-[6px] bg-[#16253b] hover:bg-[#1f324d] text-[#f7f5f0] font-medium text-sm border border-[#c5a059] transition-all"
                >
                  <span>Request a Confidential Consultation</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
