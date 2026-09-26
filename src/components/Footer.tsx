import React from 'react';
import { Building, Phone, MapPin, Clock, Star, MessageSquare, ArrowUp, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09121f] text-[#f7f5f0] border-t border-[#c5a059]/30 relative z-30">
      
      {/* Top Banner with Reassurance */}
      <div className="border-b border-white/10 bg-[#0e1b2e]/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[6px] bg-[#16253b] border border-[#c5a059]/50 flex items-center justify-center text-[#c5a059]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-serif-heading font-bold text-sm text-[#f7f5f0]">
                Continuous Presence in Gulshan-e-Iqbal Since 2002
              </div>
              <div className="text-xs text-[#8c8273]">
                Physical office at Seacon Apartment • Direct consultation with senior agent
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="btn-brass-underline inline-flex items-center gap-2 px-4 py-2 rounded-[6px] bg-[#16253b] text-[#f7f5f0] text-xs font-medium border border-[#c5a059]"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[6px] bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-medium border border-emerald-500/30 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Urdu Identity (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[6px] bg-[#16253b] border border-[#c5a059]/60 flex items-center justify-center text-[#c5a059]">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-heading text-xl font-bold tracking-tight text-[#f7f5f0]">
                  Tauheed Estate Agency
                </h3>
                <div className="text-xs text-[#c5a059] font-medium tracking-wide">
                  Established Real Estate Consultancy
                </div>
              </div>
            </div>

            <p className="text-xs text-[#dfd7c8] leading-relaxed max-w-sm">
              Established property consultancy providing sound guidance, thorough title verification, and transparent representation for residential and commercial assets in Gulshan-e-Iqbal, Karachi.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#dfd7c8]">
              <div className="flex items-center text-[#c5a059]">
                <Star className="w-3.5 h-3.5 fill-[#c5a059]" />
                <span className="font-bold ml-1 text-[#f7f5f0]">4.1 / 5.0</span>
              </div>
              <span className="text-[#8c8273]">•</span>
              <span className="text-[#8c8273]">68 Google Reviews</span>
            </div>
          </div>

          {/* Quick Navigation (Col 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
              Agency Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#dfd7c8]">
              <li>
                <a href="#legacy" className="hover:text-[#f7f5f0] link-brass">Our Legacy & Senior Agent</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f7f5f0] link-brass">Buying, Selling & Renting</a>
              </li>
              <li>
                <a href="#listings" className="hover:text-[#f7f5f0] link-brass">Featured Gulshan Listings</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#f7f5f0] link-brass">Why Choose Tauheed Estate</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#f7f5f0] link-brass">Client Experiences</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#f7f5f0] link-brass">FAQ & Legal Procedures</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#f7f5f0] link-brass">Office Location & Map</a>
              </li>
            </ul>
          </div>

          {/* Business Details (Col 8-12) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
              Office & Contact Information
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#dfd7c8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>
                  ST.15, Seacon Apartment, Shop# 3, ZC-1, Block 4-A, Gulshan-e-Iqbal, Karachi, Pakistan
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#c5a059] font-medium">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>Open daily, closes 8:00 PM (PKT)</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={BUSINESS_INFO.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#c5a059] hover:underline"
              >
                <span>View Google Maps Pin</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 space-y-4">
          <p className="text-[11px] text-[#8c8273] leading-relaxed max-w-4xl">
            <strong>Advisory Notice:</strong> Property transactions in Karachi are governed by the Sindh Transfer of Property Act, KDA / SBCA regulations, and registered society bylaws. Tauheed Estate Agency facilitates honest inspection of title documents; final registration and mutation depend on official verification with the competent sub-registrar and land authorities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c8273]">
            <div>
              © {new Date().getFullYear()} Tauheed Estate Agency. All rights reserved.
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#dfd7c8] hover:text-[#c5a059] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
