import React, { useEffect, useRef, useState } from 'react';
import { Star, Clock, Calendar, MessageSquare, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const TrustBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animated counters
  const [ratingCount, setRatingCount] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1200; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setRatingCount(parseFloat((ease * 4.1).toFixed(1)));
      setReviewsCount(Math.round(ease * BUSINESS_INFO.totalReviews));
      setYearsCount(Math.round(ease * BUSINESS_INFO.yearsInBusiness));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <div 
      ref={containerRef}
      className="bg-[#16253b] text-[#f7f5f0] border-y border-[#c5a059]/30 relative z-20 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          
          {/* Stat 1: Google Rating */}
          <div className="flex flex-col items-center text-center px-3 pt-3 sm:pt-0">
            <div className="flex items-center gap-1.5 text-[#c5a059] mb-1">
              <Star className="w-5 h-5 fill-[#c5a059]" />
              <span className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#f7f5f0]">
                {ratingCount.toFixed(1)}
              </span>
              <span className="text-xs text-[#8c8273]">/ 5.0</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#dfd7c8]">
              Verified Google Rating
            </div>
            <div className="text-[11px] text-[#8c8273] mt-0.5">
              Reflecting honest, dependable service
            </div>
          </div>

          {/* Stat 2: Google Reviews */}
          <div className="flex flex-col items-center text-center px-3 pt-3 sm:pt-0">
            <div className="flex items-center gap-1 text-[#c5a059] mb-1">
              <MessageSquare className="w-5 h-5" />
              <span className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#f7f5f0]">
                {reviewsCount}
              </span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#dfd7c8]">
              Client Google Reviews
            </div>
            <div className="text-[11px] text-[#8c8273] mt-0.5">
              Families & local shop owners
            </div>
          </div>

          {/* Stat 3: Years in Business */}
          <div className="flex flex-col items-center text-center px-3 pt-3 sm:pt-0">
            <div className="flex items-center gap-1 text-[#c5a059] mb-1">
              <Calendar className="w-5 h-5" />
              <span className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#f7f5f0]">
                {yearsCount}+
              </span>
              <span className="text-xs text-[#8c8273]">Years</span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#dfd7c8]">
              Established in Gulshan (2002)
            </div>
            <div className="text-[11px] text-[#8c8273] mt-0.5">
              Decades in the same physical office
            </div>
          </div>

          {/* Stat 4: Office Hours */}
          <div className="flex flex-col items-center text-center px-3 pt-3 sm:pt-0">
            <div className="flex items-center gap-1.5 text-[#c5a059] mb-1">
              <Clock className="w-5 h-5" />
              <span className="font-serif-heading text-xl sm:text-2xl font-bold text-[#f7f5f0]">
                Open Daily
              </span>
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#dfd7c8]">
              Closes 8:00 PM
            </div>
            <div className="text-[11px] text-[#8c8273] mt-0.5">
              Appointments & walk-ins welcome
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
