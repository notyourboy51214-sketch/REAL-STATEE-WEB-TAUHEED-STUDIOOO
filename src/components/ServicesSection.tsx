import React from 'react';
import { Home, Key, Handshake, Shield, Compass, Check, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../data/content';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-[#c5a059]" };
    switch (iconName) {
      case 'house': return <Home {...props} strokeWidth={1.5} />;
      case 'key': return <Key {...props} strokeWidth={1.5} />;
      case 'handshake': return <Handshake {...props} strokeWidth={1.5} />;
      case 'shield': return <Shield {...props} strokeWidth={1.5} />;
      case 'compass': return <Compass {...props} strokeWidth={1.5} />;
      default: return <Home {...props} strokeWidth={1.5} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#eee9df]/50 text-[#16253b] relative border-b border-[#dfd7c8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#947129]">
            <span className="w-6 h-[1px] bg-[#c5a059]" />
            <span>Dedicated Representation</span>
            <span className="w-6 h-[1px] bg-[#c5a059]" />
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#0e1b2e]">
            Comprehensive Real Estate Services in Gulshan-e-Iqbal
          </h2>
          <p className="text-sm sm:text-base text-[#4a5568] max-w-2xl mx-auto">
            From single-bedroom apartment rentals to substantial commercial shop acquisitions and family estate partitions, each service is backed by legal scrutiny and local market realism.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-[8px] bg-white p-7 sm:p-8 border border-[#dfd7c8] hover:border-[#c5a059]/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Icon & English Subtitle */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-[6px] bg-[#f7f5f0] border border-[#c5a059]/40 flex items-center justify-center">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs text-[#947129] font-medium tracking-wide">
                    {service.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif-heading text-xl font-bold text-[#0e1b2e] mb-2.5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#4a5568] leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2 pt-4 border-t border-[#eee9df]">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#2d3748]">
                      <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="mt-6 pt-4 border-t border-[#f0ebe0]">
                <a
                  href="#contact"
                  className="link-brass inline-flex items-center gap-1.5 text-xs font-semibold text-[#0e1b2e] hover:text-[#947129] uppercase tracking-wider"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c5a059]" />
                </a>
              </div>
            </div>
          ))}

          {/* Quick Consultation Callout Box */}
          <div className="rounded-[8px] bg-[#0e1b2e] p-7 sm:p-8 border border-[#c5a059]/50 shadow-md flex flex-col justify-between text-[#f7f5f0]">
            <div>
              <div className="w-12 h-12 rounded-[6px] bg-[#16253b] border border-[#c5a059]/40 flex items-center justify-center mb-5">
                <Shield className="w-6 h-6 text-[#c5a059]" strokeWidth={1.5} />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold">
                Unsure Where to Begin?
              </span>
              <h3 className="font-serif-heading text-xl font-bold text-[#f7f5f0] mt-1 mb-3">
                Complimentary Initial Deed & Area Review
              </h3>
              <p className="text-xs sm:text-sm text-[#dfd7c8] leading-relaxed">
                Bring your draft agreement or allotment papers to our Seacon Apartment office. We provide an honest, obligation-free preliminary appraisal of document health and market positioning.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href="#contact"
                className="btn-brass-underline w-full inline-flex justify-center items-center py-2.5 px-4 rounded-[6px] bg-[#16253b] hover:bg-[#1f324d] text-xs font-medium text-[#f7f5f0] border border-[#c5a059]"
              >
                <span>Book Office Consultation</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
