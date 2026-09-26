import React, { useState } from 'react';
import { Send, CheckCircle, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'buying',
    propertyType: 'apartment',
    budgetOrDetails: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const getWhatsAppPrefilledUrl = () => {
    const text = `Assalam o Alaikum, my name is ${formData.name || 'Client'}.
I am contacting Tauheed Estate Agency regarding: ${formData.service.toUpperCase()} for a ${formData.propertyType}.
Budget/Details: ${formData.budgetOrDetails || 'As discussed'}
Message: ${formData.message || 'Please connect me with the senior consultant.'}
Contact: ${formData.phone}`;
    return `https://wa.me/923212855323?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="rounded-[8px] bg-white border border-[#dfd7c8] p-7 sm:p-8 shadow-md">
      <div className="mb-6 space-y-1">
        <h3 className="font-serif-heading text-2xl font-bold text-[#0e1b2e]">
          Send an Inquiry to the Agency
        </h3>
        <p className="text-xs sm:text-sm text-[#4a5568]">
          Our senior consultant reviews all inquiries personally. We respond promptly during office hours (10 AM – 8 PM).
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-[6px] bg-[#f7f5f0] border border-[#c5a059] text-center space-y-4 animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <CheckCircle className="w-7 h-7" />
          </div>
          <div>
            <h4 className="font-serif-heading text-xl font-bold text-[#0e1b2e]">
              Inquiry Received Successfully
            </h4>
            <p className="text-xs sm:text-sm text-[#4a5568] mt-1">
              Thank you, <strong>{formData.name}</strong>. Our senior agent will contact you at <strong>{formData.phone}</strong> shortly.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={getWhatsAppPrefilledUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-[6px] bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Forward Directly via WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  phone: '',
                  service: 'buying',
                  propertyType: 'apartment',
                  budgetOrDetails: '',
                  message: '',
                });
              }}
              className="inline-flex justify-center items-center px-4 py-2.5 rounded-[6px] bg-[#eee9df] text-[#0e1b2e] text-xs font-medium hover:bg-[#dfd7c8]"
            >
              Send Another Note
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-[#0e1b2e] mb-1">
                Your Full Name <span className="text-amber-800">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Tariq Hashmi"
                className="w-full px-3.5 py-2.5 rounded-[6px] bg-[#faf9f5] border border-[#dfd7c8] text-sm text-[#0e1b2e] focus:border-[#c5a059] focus:outline-hidden transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#0e1b2e] mb-1">
                Phone Number (WhatsApp) <span className="text-amber-800">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 0300 1234567"
                className="w-full px-3.5 py-2.5 rounded-[6px] bg-[#faf9f5] border border-[#dfd7c8] text-sm text-[#0e1b2e] focus:border-[#c5a059] focus:outline-hidden transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-[#0e1b2e] mb-1">
                Service Required
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-[6px] bg-[#faf9f5] border border-[#dfd7c8] text-sm text-[#0e1b2e] focus:border-[#c5a059] focus:outline-hidden transition-colors"
              >
                <option value="buying">Buying a Property</option>
                <option value="selling">Selling a Property</option>
                <option value="renting">Renting / Tenancy</option>
                <option value="consultation">Document / Title Consultation</option>
                <option value="inheritance">Inheritance / Transfer Guidance</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#0e1b2e] mb-1">
                Property Category
              </label>
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-[6px] bg-[#faf9f5] border border-[#dfd7c8] text-sm text-[#0e1b2e] focus:border-[#c5a059] focus:outline-hidden transition-colors"
              >
                <option value="apartment">Apartment / Flat</option>
                <option value="house">Bungalow / Portion</option>
                <option value="commercial">Commercial Shop / Office</option>
                <option value="plot">Plot / Residential Land</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-[#0e1b2e] mb-1">
              Budget or Preferred Location in Gulshan
            </label>
            <input
              type="text"
              value={formData.budgetOrDetails}
              onChange={(e) => setFormData({ ...formData, budgetOrDetails: e.target.value })}
              placeholder="e.g. Block 4-A / Budget ~1.5 Crore"
              className="w-full px-3.5 py-2.5 rounded-[6px] bg-[#faf9f5] border border-[#dfd7c8] text-sm text-[#0e1b2e] focus:border-[#c5a059] focus:outline-hidden transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-[#0e1b2e] mb-1">
              Additional Details or Question
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us what you are looking for or describe the property file you wish to discuss..."
              className="w-full px-3.5 py-2.5 rounded-[6px] bg-[#faf9f5] border border-[#dfd7c8] text-sm text-[#0e1b2e] focus:border-[#c5a059] focus:outline-hidden transition-colors resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="btn-brass-underline w-full sm:w-auto inline-flex justify-center items-center gap-2 px-7 py-3 rounded-[6px] bg-[#16253b] hover:bg-[#1e324f] text-[#f7f5f0] text-sm font-semibold border border-[#c5a059] transition-all"
            >
              <span>{loading ? 'Submitting...' : 'Submit Inquiry'}</span>
              <Send className="w-4 h-4 text-[#c5a059]" />
            </button>

            <span className="text-xs text-[#718096]">
              Or call directly at <strong className="text-[#0e1b2e]">{BUSINESS_INFO.phoneDisplay}</strong>
            </span>
          </div>
        </form>
      )}
    </div>
  );
};
