import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#eee9df]/60 text-[#16253b] relative border-b border-[#dfd7c8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#947129]">
            <span className="w-6 h-[1px] bg-[#c5a059]" />
            <span>Clear Process & Answers</span>
            <span className="w-6 h-[1px] bg-[#c5a059]" />
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#0e1b2e]">
            Frequently Asked Property Questions
          </h2>
          <p className="text-sm text-[#4a5568]">
            Direct answers on verification protocols, agency fees, viewing protocols, and legal paperwork in Karachi.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-[8px] bg-white border border-[#dfd7c8] overflow-hidden transition-all duration-300 shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4.5 px-6 sm:px-7 flex items-center justify-between text-left gap-4 hover:bg-[#faf9f5] transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-[#c5a059] uppercase tracking-wider shrink-0 hidden sm:inline">
                      {faq.category}
                    </span>
                    <span className="hidden sm:inline text-gray-300">•</span>
                    <h3 className="font-serif-heading text-base sm:text-lg font-bold text-[#0e1b2e]">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`p-1.5 rounded-[4px] bg-[#f7f5f0] text-[#947129] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#c5a059] text-[#0e1b2e]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm text-[#4a5568] leading-relaxed border-t border-[#f0ebe0] bg-[#faf9f5]/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unanswered Question Box */}
        <div className="mt-12 p-6 rounded-[8px] bg-[#0e1b2e] text-[#f7f5f0] border border-[#c5a059]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif-heading text-lg font-bold text-[#f7f5f0]">
              Have a specific question about your plot, lease, or flat file?
            </h4>
            <p className="text-xs text-[#dfd7c8]">
              Speak directly with our senior consultant for confidential guidance.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="btn-brass-underline shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-[#16253b] hover:bg-[#1f324d] text-xs font-medium text-[#f7f5f0] border border-[#c5a059]"
          >
            <PhoneCall className="w-4 h-4 text-[#c5a059]" />
            <span>Call Senior Agent</span>
          </a>
        </div>

      </div>
    </section>
  );
};
