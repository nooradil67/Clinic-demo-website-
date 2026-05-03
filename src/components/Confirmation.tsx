import { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MessageCircle, MapPin, CalendarClock, PhoneCall } from 'lucide-react';
import { FunnelState, SERVICES } from '../types';

export default function Confirmation({ data, clinicInfo }: { data: FunnelState; clinicInfo: any }) {
  const service = SERVICES.find(s => s.id === data.selectedService) || SERVICES[0];

  useEffect(() => {
    // In a real app, this would trigger an API call to a CRM/Backend.
    // For this simulation, we simulate the workflow:
    console.log("LEAD CAPTURED:", data.formData);
  }, [data]);

  const whatsappMessage = encodeURIComponent(
    `New Appointment Request:\n` +
    `Name: ${data.formData.fullName}\n` +
    `Service: ${service.title}\n` +
    `Time Slot: ${data.formData.timeSlot}\n` +
    `Location: ${data.formData.location}\n` +
    (data.formData.message ? `Notes: ${data.formData.message}` : '')
  );

  const whatsappUrl = `https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col items-center justify-center max-w-2xl mx-auto w-full pt-8 pb-12 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-500"
      >
        <CheckCircle2 className="w-12 h-12" />
      </motion.div>

      <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h2>
      <p className="text-slate-600 text-lg mb-8 max-w-md">
        Thank you, {data.formData.fullName.split(' ')[0]}. Your appointment request for {service.title} has been received. 
        Our front desk will contact you shortly to confirm the exact time.
      </p>

      <div className="bg-white p-6 rounded-2xl w-full border border-slate-100 shadow-sm text-left mb-8 space-y-4">
        <h3 className="font-semibold text-slate-800 border-b border-slate-100 pb-2 mb-4 text-sm uppercase tracking-wider">Next Steps Simulation</h3>
        
        <div className="flex items-start gap-4">
          <div className="mt-1 p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium text-slate-800">1. Instant WhatsApp Confirmation</p>
            <p className="text-sm text-slate-500 mt-1">Our system sends this immediately so you have a record.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="mt-1 p-2 bg-purple-50 text-purple-600 rounded-lg shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium text-slate-800">2. Location Pin Auto-Send</p>
            <p className="text-sm text-slate-500 mt-1">We send you the Google Maps location so you easily find us.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="mt-1 p-2 bg-orange-50 text-orange-600 rounded-lg shrink-0">
            <CalendarClock className="w-5 h-5" />
          </div>
          <div>
            <p className="font-medium text-slate-800">3. Same-day Reminder</p>
            <p className="text-sm text-slate-500 mt-1">An automated check-in message before your appointment.</p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row gap-4">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <MessageCircle className="w-5 h-5" />
          Message us on WhatsApp
        </a>
        <a 
          href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, '')}`}
          className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        >
          <PhoneCall className="w-5 h-5" />
          Call Clinic Directly
        </a>
      </div>
    </div>
  );
}
