import React from 'react';
import { Building, UserCheck, FileCheck, Scale, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-[#c5a059]" };
    switch (iconName) {
      case 'building': return <Building {...props} strokeWidth={1.5} />;
      case 'user-check': return <UserCheck {...props} strokeWidth={1.5} />;
      case 'file-check': return <FileCheck {...props} strokeWidth={1.5} />;
      case 'scale': return <Scale {...props} strokeWidth={1.5} />;
      default: return <Building {...props} strokeWidth={1.5} />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-[#0e1b2e] text-[#f7f5f0] relative border-b border-[#c5a059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
            <span className="w-6 h-[1px] bg-[#c5a059]" />
            <span>Honest Agency Standards</span>
            <span className="w-6 h-[1px] bg-[#c5a059]" />
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#f7f5f0]">
            Why Families & Property Owners Rely on Tauheed Estate
          </h2>
          <p className="text-sm sm:text-base text-[#dfd7c8] max-w-2xl mx-auto font-sans leading-relaxed">
            In an industry where exaggerated promises are common, our approach is defined by longevity, clear legal vetting, and quiet accountability.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="rounded-[8px] bg-[#16253b] border border-[#c5a059]/40 p-7 sm:p-8 space-y-4 hover:border-[#c5a059] transition-colors shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-[6px] bg-[#0e1b2e] border border-[#c5a059]/50 flex items-center justify-center shrink-0">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-[#f7f5f0]">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-[#dfd7c8] leading-relaxed pl-1">
                {item.description}
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-[#c5a059]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified in 68 Client Reviews on Google</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency Commitment Quote Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-[8px] bg-[#16253b]/80 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider text-[#c5a059] font-medium">
              Karachi Property Advisory Ethics
            </span>
            <p className="font-serif-heading text-lg sm:text-xl text-[#f7f5f0] italic">
              &ldquo;We confirm government taxes, transfer dues, and sub-lease status before you part with token money.&rdquo;
            </p>
          </div>
          <a
            href={`tel:+923212855323`}
            className="btn-brass-underline shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-[6px] bg-[#0e1b2e] text-[#f7f5f0] text-xs font-semibold border border-[#c5a059]"
          >
            <span>Call +92 321 2855323</span>
          </a>
        </div>

      </div>
    </section>
  );
};
