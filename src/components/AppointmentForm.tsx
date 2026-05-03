import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../types';

export default function AppointmentForm({ 
  selectedService, 
  onSubmit, 
  onBack 
}: { 
  selectedService: string | null;
  onSubmit: (data: any) => void;
  onBack: () => void;
}) {
  const service = SERVICES.find(s => s.id === selectedService) || SERVICES[0];
  
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    location: '',
    timeSlot: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="max-w-2xl mx-auto w-full pt-4 pb-12">
      <div className="mb-8">
        <h2 className="text-2xl font-[800] tracking-[-1px] text-[#0F172A] mb-2">Patient Details</h2>
        <p className="text-[#64748B] text-sm">You selected <strong className="text-primary-700 font-semibold">{service.title}</strong>. Please provide your details.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(13,148,136,0.05)] border border-white/50">
        <div className="space-y-6">
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-[13px] font-bold text-slate-700 uppercase tracking-wide">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all outline-none text-[14px]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="whatsappNumber" className="block text-[13px] font-bold text-slate-700 uppercase tracking-wide">WhatsApp Number</label>
              <input
                type="tel"
                id="whatsappNumber"
                name="whatsappNumber"
                required
                placeholder="+92 3XX XXXXXXX"
                value={formData.whatsappNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all outline-none text-[14px]"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="location" className="block text-[13px] font-bold text-slate-700 uppercase tracking-wide">Area / Location</label>
              <input
                type="text"
                id="location"
                name="location"
                required
                placeholder="e.g. Bahria Town, Rawalpindi"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all outline-none text-[14px]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="timeSlot" className="block text-[13px] font-bold text-slate-700 uppercase tracking-wide">Preferred Time</label>
              <select
                id="timeSlot"
                name="timeSlot"
                required
                value={formData.timeSlot}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all outline-none appearance-none text-[14px]"
              >
                <option value="" disabled>Select a slot...</option>
                <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-[13px] font-bold text-slate-700 uppercase tracking-wide">Optional Message</label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Describe your problem or specific requirements..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all outline-none resize-none text-[14px]"
            />
          </div>

        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-[0_4px_14px_rgba(13,148,136,0.3)] text-lg font-bold text-white bg-primary-600 hover:bg-primary-700 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all"
          >
            Confirm Appointment Now
          </button>
          <p className="text-[11px] text-center text-[#94A3B8] mt-3">* Instant booking via WhatsApp API integration</p>
          <button
            type="button"
            onClick={onBack}
            className="w-full mt-4 flex justify-center py-3 px-4 rounded-xl text-sm font-bold text-slate-400 hover:text-slate-700 hover:bg-white/50 transition-colors"
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
}
