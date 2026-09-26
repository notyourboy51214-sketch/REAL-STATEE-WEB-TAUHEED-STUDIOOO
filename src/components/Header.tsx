import React, { useState } from 'react';
import { Phone, MapPin, Clock, Menu, X, Building, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if agency is currently open (Karachi is UTC+5)
  const isCurrentlyOpen = () => {
    const now = new Date();
    // Convert to PKT (UTC+5)
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const pktTime = new Date(utc + (3600000 * 5));
    const hour = pktTime.getHours();
    return hour >= BUSINESS_INFO.openingHour && hour < BUSINESS_INFO.closingHour;
  };

  const navItems = [
    { label: 'Legacy & Agent', href: '#legacy' },
    { label: 'Services', href: '#services' },
    { label: 'Listings', href: '#listings' },
    { label: 'Why Tauheed', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Location & Map', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0e1b2e] text-[#f7f5f0] border-b border-[#c5a059]/25 shadow-md">
      {/* Top Utility Strip */}
      <div className="bg-[#09121f] text-xs text-[#dfd7c8] py-2 border-b border-[#1f2f45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-y-1.5">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-[#dfd7c8]">
              <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="hidden sm:inline">ST.15, Seacon Apartment, Block 4-A,</span> Gulshan-e-Iqbal, Karachi
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-[#dfd7c8]">
              <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Open daily, closes 8 PM</span>
              {isCurrentlyOpen() ? (
                <span className="inline-flex items-center px-1.5 py-0.2 text-[10px] font-medium bg-emerald-900/60 text-emerald-300 rounded border border-emerald-500/30 ml-1">
                  Open Now
                </span>
              ) : (
                <span className="inline-flex items-center px-1.5 py-0.2 text-[10px] font-medium bg-amber-900/40 text-amber-300 rounded border border-amber-500/30 ml-1">
                  Closes 8 PM
                </span>
              )}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-1.5 text-[#f7f5f0] hover:text-[#c5a059] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="font-medium tracking-wide">{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <span className="text-white/30">•</span>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-xs transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Urdu Identity */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-[6px] bg-[#16253b] border border-[#c5a059]/60 flex items-center justify-center text-[#c5a059] group-hover:border-[#c5a059] transition-colors shadow-inner">
              <Building className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-serif-heading text-xl sm:text-2xl font-bold tracking-tight text-[#f7f5f0]">
                  Tauheed
                </span>
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium font-sans">
                  Estate Agency
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#dfd7c8] font-normal tracking-wide">
                  Gulshan-e-Iqbal, Karachi
                </span>
                <span className="text-[10px] text-[#8c8273] hidden sm:inline">
                  • Est. {BUSINESS_INFO.establishedYear}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#dfd7c8] hover:text-[#f7f5f0] link-brass transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="btn-brass-underline inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-[#16253b] hover:bg-[#1e324f] text-[#f7f5f0] text-sm font-medium border border-[#c5a059]/60 shadow-sm"
            >
              <span>Speak With an Agent</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-[6px] text-[#dfd7c8] hover:text-white hover:bg-[#16253b] border border-[#c5a059]/30"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1b2e] border-b border-[#c5a059]/30 px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-[#dfd7c8]">
            <span className="text-xs font-medium text-[#c5a059]">Gulshan-e-Iqbal, Block 4-A</span>
            <span>4.1★ (68 Google Reviews)</span>
          </div>
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded text-base font-medium text-[#dfd7c8] hover:text-[#c5a059] hover:bg-[#16253b]/80"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-[6px] bg-[#c5a059] text-[#0e1b2e] font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-[6px] bg-emerald-700/80 text-white font-medium text-sm border border-emerald-500/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
