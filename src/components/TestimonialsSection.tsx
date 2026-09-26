import React from 'react';
import { Star, Quote, CheckCircle, MessageSquare } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#f7f5f0] text-[#16253b] relative border-b border-[#dfd7c8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#947129]">
              <span className="w-6 h-[1px] bg-[#c5a059]" />
              <span>Real Client Experiences</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#0e1b2e]">
              Voices from Gulshan Residents & Clients
            </h2>
            <p className="text-sm text-[#4a5568]">
              Paraphrased feedback from 68 Google reviews, reflecting our long-standing presence, senior counsel, and document integrity.
            </p>
          </div>

          {/* Rating Badge */}
          <div className="p-4 rounded-[6px] bg-[#eee9df] border border-[#dfd7c8] flex items-center gap-3.5 self-start md:self-auto shadow-xs">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#c5a059]">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c5a059]" />
                ))}
                <Star className="w-4 h-4 fill-[#c5a059]/40 text-[#c5a059]" />
                <span className="font-serif-heading font-bold text-base text-[#0e1b2e] ml-1">4.1</span>
              </div>
              <span className="text-[11px] text-[#718096] mt-0.5">Based on 68 Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {TESTIMONIALS.map((review, index) => (
            <div
              key={review.id}
              className="rounded-[8px] bg-white border border-[#dfd7c8] p-7 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group hover:border-[#c5a059]/60"
              style={{ transitionDelay: `${index * 110}ms` }}
            >
              <div className="space-y-4">
                {/* Rating & Context */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#c5a059]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#c5a059]" />
                    ))}
                    {review.rating < 5 && (
                      <Star className="w-3.5 h-3.5 text-[#c5a059]" />
                    )}
                  </div>
                  <span className="text-[11px] font-medium text-[#8c8273]">
                    {review.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-[#2d3748] leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="mt-6 pt-4 border-t border-[#eee9df] flex items-center justify-between">
                <div>
                  <h4 className="font-serif-heading font-bold text-sm text-[#0e1b2e]">
                    {review.author}
                  </h4>
                  <div className="text-xs text-[#718096]">{review.role}</div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[4px] bg-[#f7f5f0] border border-[#dfd7c8] text-[10px] font-medium text-[#947129]">
                    <CheckCircle className="w-3 h-3 text-[#c5a059]" />
                    <span>{review.propertyContext}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Google Reviews */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#718096] max-w-xl mx-auto">
            Reviews reflect genuine feedback left by clients who have completed transactions through our office at ST.15, Seacon Apartment, Block 4-A.
          </p>
        </div>

      </div>
    </section>
  );
};
