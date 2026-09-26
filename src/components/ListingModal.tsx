import React from 'react';
import { X, Check, MapPin, Phone, MessageSquare, Shield, Building, Layers, Maximize2 } from 'lucide-react';
import { PropertyListing } from '../types';
import { BUSINESS_INFO } from '../data/content';

interface ListingModalProps {
  listing: PropertyListing | null;
  onClose: () => void;
}

export const ListingModal: React.FC<ListingModalProps> = ({ listing, onClose }) => {
  if (!listing) return null;

  const whatsappInquiryUrl = `https://wa.me/923212855323?text=${encodeURIComponent(
    `Assalam o Alaikum, I am inquiring about the property: "${listing.title}" (${listing.pricePkr}) in ${listing.block}. Please share current availability and paper status.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-[#f7f5f0] text-[#16253b] rounded-[8px] border border-[#c5a059] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-[6px] bg-[#0e1b2e]/80 text-[#f7f5f0] hover:bg-[#0e1b2e] border border-white/20 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#0e1b2e]">
          <img
            src={listing.imageUrl}
            alt={listing.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b2e] via-transparent to-black/30" />
          
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3 text-white">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-[4px] bg-[#c5a059] text-[#0e1b2e] text-xs font-bold uppercase tracking-wider">
                  {listing.purpose === 'sale' ? 'For Sale' : 'For Rent'}
                </span>
                <span className="px-2.5 py-0.5 rounded-[4px] bg-[#16253b]/90 text-[#dfd7c8] text-xs font-medium border border-white/20 uppercase">
                  {listing.category}
                </span>
              </div>
              <div className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#f7f5f0]">
                {listing.pricePkr}
              </div>
            </div>
            
            <div className="text-right hidden sm:block">
              <span className="text-xs text-[#dfd7c8] flex items-center gap-1 justify-end">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                {listing.block}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Titles */}
          <div>
            <h2 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0e1b2e]">
              {listing.title}
            </h2>
            <p className="text-sm text-[#4a5568] flex items-center gap-1.5 mt-1.5">
              <MapPin className="w-4 h-4 text-[#c5a059]" />
              <span>{listing.location}, {listing.block}</span>
            </p>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-[6px] bg-[#eee9df] border border-[#dfd7c8]">
            <div>
              <span className="text-[11px] text-[#718096] uppercase block">Covered Area</span>
              <span className="font-semibold text-sm text-[#0e1b2e]">{listing.specs.area}</span>
            </div>
            {listing.specs.bedrooms && (
              <div>
                <span className="text-[11px] text-[#718096] uppercase block">Bedrooms</span>
                <span className="font-semibold text-sm text-[#0e1b2e]">{listing.specs.bedrooms} Bed</span>
              </div>
            )}
            {listing.specs.bathrooms && (
              <div>
                <span className="text-[11px] text-[#718096] uppercase block">Bathrooms</span>
                <span className="font-semibold text-sm text-[#0e1b2e]">{listing.specs.bathrooms} Bath</span>
              </div>
            )}
            <div>
              <span className="text-[11px] text-[#718096] uppercase block">Title & Lease</span>
              <span className="font-semibold text-xs text-[#0e1b2e] truncate block" title={listing.specs.leaseStatus}>
                {listing.specs.leaseStatus}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-serif-heading text-base font-bold text-[#0e1b2e] mb-1.5">
              Property Overview & Guidance
            </h3>
            <p className="text-sm text-[#2d3748] leading-relaxed">
              {listing.description}
            </p>
          </div>

          {/* Features list */}
          <div>
            <h3 className="font-serif-heading text-base font-bold text-[#0e1b2e] mb-2">
              Verified Salient Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {listing.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#2d3748]">
                  <Check className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Document Verification Guarantee */}
          <div className="p-4 rounded-[6px] bg-[#0e1b2e] text-[#f7f5f0] border border-[#c5a059]/40 flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
            <div className="text-xs text-[#dfd7c8] leading-relaxed">
              <strong className="text-[#f7f5f0] block mb-0.5">Tauheed Estate Due Diligence:</strong>
              Original allotment file and municipal records for this property are subject to preliminary inspection by our senior agent at our Seacon Apartment office before taking any token payment.
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 inline-flex justify-center items-center gap-2 py-3 px-4 rounded-[6px] bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-sm transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>
            
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:flex-1 btn-brass-underline inline-flex justify-center items-center gap-2 py-3 px-4 rounded-[6px] bg-[#16253b] hover:bg-[#1e324f] text-[#f7f5f0] font-medium text-sm border border-[#c5a059]"
            >
              <Phone className="w-4 h-4 text-[#c5a059]" />
              <span>Call Senior Consultant</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
