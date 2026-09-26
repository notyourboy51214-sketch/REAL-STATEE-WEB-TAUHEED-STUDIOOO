import React, { useState, useCallback } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useMap,
} from '@vis.gl/react-google-maps';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ExternalLink,
  ShieldCheck,
  Building,
  RotateCcw,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { ContactForm } from './ContactForm';

// Helper component for map controls (re-centering)
const MapControls: React.FC<{ defaultCenter: { lat: number; lng: number } }> = ({ defaultCenter }) => {
  const map = useMap();

  const handleRecenter = useCallback(() => {
    if (map) {
      map.panTo(defaultCenter);
      map.setZoom(16);
    }
  }, [map, defaultCenter]);

  return (
    <div className="absolute top-3 right-3 z-10 flex gap-2">
      <button
        onClick={handleRecenter}
        className="px-3 py-1.5 rounded-[6px] bg-[#0e1b2e] text-[#f7f5f0] text-xs font-medium border border-[#c5a059]/60 shadow-md hover:bg-[#16253b] transition-colors flex items-center gap-1.5 cursor-pointer"
        title="Recenter to Agency Location"
      >
        <RotateCcw className="w-3.5 h-3.5 text-[#c5a059]" />
        <span>Center Office</span>
      </button>
    </div>
  );
};

export const MapSection: React.FC = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
  const position = BUSINESS_INFO.coordinates;
  const [infoOpen, setInfoOpen] = useState(true);

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position.lat},${position.lng}`;

  return (
    <section id="location" className="py-20 bg-[#f7f5f0] text-[#16253b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#947129]">
            <span className="w-6 h-[1px] bg-[#c5a059]" />
            <span>Physical Office & Direct Access</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#0e1b2e]">
            Visit Tauheed Estate Agency in Gulshan-e-Iqbal
          </h2>
          <p className="text-sm sm:text-base text-[#4a5568]">
            We welcome clients for in-person consultations, file examinations, and property discussions at our long-standing office in Seacon Apartment.
          </p>
        </div>

        {/* Top Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Card 1: Address */}
          <div className="p-6 rounded-[8px] bg-white border border-[#dfd7c8] shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-[6px] bg-[#f7f5f0] border border-[#c5a059]/50 text-[#c5a059] shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#947129]">
                Agency Address
              </span>
              <h4 className="font-serif-heading text-base font-bold text-[#0e1b2e]">
                Seacon Apartment, Block 4-A
              </h4>
              <p className="text-xs text-[#4a5568] leading-relaxed">
                ST.15, Seacon Apartment, Shop# 3, ZC-1, Block 4-A, Gulshan-e-Iqbal, Karachi, Pakistan
              </p>
            </div>
          </div>

          {/* Card 2: Contact */}
          <div className="p-6 rounded-[8px] bg-white border border-[#dfd7c8] shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-[6px] bg-[#f7f5f0] border border-[#c5a059]/50 text-[#c5a059] shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#947129]">
                Direct Telephone
              </span>
              <h4 className="font-serif-heading text-base font-bold text-[#0e1b2e]">
                Senior Agent Helpline
              </h4>
              <div className="text-sm font-semibold text-[#0e1b2e]">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#947129] underline underline-offset-2">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <p className="text-xs text-[#718096]">
                WhatsApp inquiries active daily
              </p>
            </div>
          </div>

          {/* Card 3: Hours */}
          <div className="p-6 rounded-[8px] bg-white border border-[#dfd7c8] shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-[6px] bg-[#f7f5f0] border border-[#c5a059]/50 text-[#c5a059] shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#947129]">
                Consultation Hours
              </span>
              <h4 className="font-serif-heading text-base font-bold text-[#0e1b2e]">
                Open Daily
              </h4>
              <p className="text-xs text-[#4a5568]">
                10:00 AM — 8:00 PM (Pakistan Time)
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Walk-ins & Appointments Welcome
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Map & Form Grid */}
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Google Maps Container */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-[8px] overflow-hidden border border-[#c5a059]/50 shadow-lg bg-[#eee9df] relative h-[480px]">
              
              {apiKey ? (
                <APIProvider apiKey={apiKey}>
                  <Map
                    defaultCenter={position}
                    defaultZoom={16}
                    mapId="DEMO_MAP_ID"
                    internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                    style={{ width: '100%', height: '100%' }}
                    gestureHandling="cooperative"
                    options={{
                      disableDefaultUI: false,
                      zoomControl: true,
                      mapTypeControl: true,
                      streetViewControl: false,
                    }}
                  >
                    <MapControls defaultCenter={position} />

                    <AdvancedMarker
                      position={position}
                      onClick={() => setInfoOpen(true)}
                    >
                      <Pin
                        background="#0e1b2e"
                        borderColor="#c5a059"
                        glyphColor="#c5a059"
                        scale={1.25}
                      />
                    </AdvancedMarker>

                    {infoOpen && (
                      <InfoWindow
                        position={position}
                        onCloseClick={() => setInfoOpen(false)}
                      >
                        <div className="p-1 max-w-[260px] text-[#16253b] font-sans">
                          <div className="font-serif-heading font-bold text-sm text-[#0e1b2e]">
                            Tauheed Estate Agency
                          </div>
                          <div className="text-[11px] text-[#947129] font-medium tracking-wide">
                            Established Real Estate Firm • Est. 2002
                          </div>
                          <div className="text-[11px] text-[#4a5568] mt-1 leading-snug">
                            Shop# 3, ZC-1, ST.15, Seacon Apartment, Block 4-A, Gulshan-e-Iqbal, Karachi
                          </div>
                          <div className="text-[11px] text-[#0e1b2e] font-semibold mt-1">
                            {BUSINESS_INFO.phoneDisplay}
                          </div>
                          <div className="mt-2 pt-1 border-t border-gray-200 flex justify-between items-center">
                            <span className="text-[10px] text-[#718096]">Closes 8:00 PM</span>
                            <a
                              href={directionsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] text-[#c5a059] font-bold hover:underline flex items-center gap-0.5"
                            >
                              <span>Directions</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          </div>
                        </div>
                      </InfoWindow>
                    )}
                  </Map>
                </APIProvider>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#0e1b2e] text-[#f7f5f0]">
                  <Building className="w-12 h-12 text-[#c5a059] mb-3" />
                  <h4 className="font-serif-heading text-lg font-bold">Interactive Map of Gulshan-e-Iqbal</h4>
                  <p className="text-xs text-[#dfd7c8] max-w-sm mt-1">
                    ST.15, Seacon Apartment, Shop# 3, ZC-1, Block 4-A, Gulshan-e-Iqbal, Karachi, Pakistan
                  </p>
                </div>
              )}
            </div>

            {/* Map Action Links */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-1">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brass-underline inline-flex items-center gap-2 px-4 py-2.5 rounded-[6px] bg-[#16253b] text-[#f7f5f0] text-xs font-medium border border-[#c5a059]"
              >
                <Navigation className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Get Driving Directions to Seacon Apartment</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#0e1b2e] hover:text-[#947129] font-medium link-brass"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Practical Landmark Clues for Visitors */}
            <div className="p-4 rounded-[6px] bg-[#eee9df] border border-[#dfd7c8] text-xs text-[#4a5568] space-y-1">
              <span className="font-semibold text-[#0e1b2e] block">Landmark Guidance for Visitors:</span>
              <p>
                Situated on the ST-15 commercial artery in Block 4-A, right at the front commercial belt of Seacon Apartment. Easy vehicle parking directly in front of Shop #3.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
};
