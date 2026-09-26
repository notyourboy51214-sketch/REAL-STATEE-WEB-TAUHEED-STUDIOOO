import React, { useState } from 'react';
import { Building, MapPin, Maximize, Bed, Bath, ArrowUpRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { FEATURED_LISTINGS } from '../data/listings';
import { PropertyListing } from '../types';
import { ListingModal } from './ListingModal';

export const ListingsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPurpose, setSelectedPurpose] = useState<string>('all');
  const [activeModalListing, setActiveModalListing] = useState<PropertyListing | null>(null);

  const categories = [
    { id: 'all', label: 'All Properties' },
    { id: 'apartment', label: 'Apartments' },
    { id: 'house', label: 'Houses & Portions' },
    { id: 'commercial', label: 'Commercial Shops' },
    { id: 'plot', label: 'Plots & Land' },
  ];

  const filteredListings = FEATURED_LISTINGS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesPurpose = selectedPurpose === 'all' || item.purpose === selectedPurpose;
    return matchesCategory && matchesPurpose;
  });

  return (
    <section id="listings" className="py-20 bg-[#f7f5f0] text-[#16253b] relative border-b border-[#dfd7c8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#947129]">
              <span className="w-6 h-[1px] bg-[#c5a059]" />
              <span>Current Opportunities</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#0e1b2e]">
              Selected Gulshan-e-Iqbal Property Listings
            </h2>
            <p className="text-sm text-[#4a5568]">
              Each listing has been pre-inspected for title clarity, lease validity, and realistic market valuation by our senior agent.
            </p>
          </div>

          {/* Sale / Rent Toggle */}
          <div className="inline-flex rounded-[6px] p-1 bg-[#eee9df] border border-[#dfd7c8] self-start md:self-auto">
            <button
              onClick={() => setSelectedPurpose('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-[4px] transition-colors ${
                selectedPurpose === 'all'
                  ? 'bg-[#0e1b2e] text-[#f7f5f0]'
                  : 'text-[#4a5568] hover:text-[#0e1b2e]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedPurpose('sale')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-[4px] transition-colors ${
                selectedPurpose === 'sale'
                  ? 'bg-[#0e1b2e] text-[#f7f5f0]'
                  : 'text-[#4a5568] hover:text-[#0e1b2e]'
              }`}
            >
              For Sale
            </button>
            <button
              onClick={() => setSelectedPurpose('rent')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-[4px] transition-colors ${
                selectedPurpose === 'rent'
                  ? 'bg-[#0e1b2e] text-[#f7f5f0]'
                  : 'text-[#4a5568] hover:text-[#0e1b2e]'
              }`}
            >
              For Rent
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-[6px] text-xs font-medium border transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#16253b] text-[#f7f5f0] border-[#c5a059]'
                  : 'bg-white text-[#4a5568] border-[#dfd7c8] hover:border-[#c5a059]/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredListings.map((listing) => (
            <div
              key={listing.id}
              className="group rounded-[8px] bg-white border border-[#dfd7c8] hover:border-[#c5a059] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 ease-out hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-[#0e1b2e]">
                  <img
                    src={listing.imageUrl}
                    alt={listing.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-[4px] bg-[#0e1b2e]/90 text-[#f7f5f0] text-[11px] font-semibold border border-[#c5a059]/50 uppercase tracking-wide">
                      {listing.purpose === 'sale' ? 'For Sale' : 'For Rent'}
                    </span>

                    {listing.isFeatured && (
                      <span className="px-2.5 py-1 rounded-[4px] bg-[#c5a059] text-[#0e1b2e] text-[11px] font-bold uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Price Tag pinned to bottom left of photo */}
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="font-serif-heading text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                      {listing.pricePkr}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <div className="flex items-center gap-1.5 text-xs text-[#8c8273]">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                    <span>{listing.block}</span>
                  </div>

                  <h3 className="font-serif-heading text-lg font-bold text-[#0e1b2e] group-hover:text-[#947129] transition-colors line-clamp-2 leading-snug">
                    {listing.title}
                  </h3>

                  {/* Specs Strip */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#eee9df] text-xs text-[#4a5568]">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#8c8273] uppercase">Area</span>
                      <span className="font-semibold text-[#0e1b2e]">{listing.specs.area}</span>
                    </div>

                    {listing.specs.bedrooms ? (
                      <div className="flex flex-col">
                        <span className="text-[10px] text-[#8c8273] uppercase">Bed / Bath</span>
                        <span className="font-semibold text-[#0e1b2e]">{listing.specs.bedrooms}B / {listing.specs.bathrooms}B</span>
                      </div>
                    ) : (
                      <div className="flex flex-col">
                        <span className="text-[10px] text-[#8c8273] uppercase">Floor</span>
                        <span className="font-semibold text-[#0e1b2e]">{listing.specs.floor || 'Ground'}</span>
                      </div>
                    )}

                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#8c8273] uppercase">Status</span>
                      <span className="font-semibold text-[#0e1b2e] truncate" title={listing.specs.leaseStatus}>
                        {listing.specs.leaseStatus.split(' ')[0]} Lease
                      </span>
                    </div>
                  </div>

                  {/* Verification Micro-Tag */}
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Physical Office Paper Clearance</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => setActiveModalListing(listing)}
                  className="btn-brass-underline w-full inline-flex justify-center items-center gap-2 py-2.5 px-4 rounded-[6px] bg-[#16253b] hover:bg-[#1e324f] text-[#f7f5f0] text-xs font-medium border border-[#c5a059]/60 transition-all"
                >
                  <span>View Details & Verification</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Property Request Banner */}
        <div className="mt-14 rounded-[8px] bg-[#eee9df] border border-[#dfd7c8] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif-heading text-xl font-bold text-[#0e1b2e]">
              Looking for a Specific Block, Budget, or Plot Size?
            </h4>
            <p className="text-xs sm:text-sm text-[#4a5568]">
              Not all client properties are published online to protect family privacy. Contact our senior agent directly for unadvertised inventory.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-brass-underline shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-[6px] bg-[#0e1b2e] text-[#f7f5f0] text-xs font-semibold border border-[#c5a059]"
          >
            <span>Inquire for Custom Requirements</span>
          </a>
        </div>

      </div>

      {/* Listing Inspection Modal */}
      <ListingModal
        listing={activeModalListing}
        onClose={() => setActiveModalListing(null)}
      />
    </section>
  );
};
