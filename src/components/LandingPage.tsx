import { motion } from 'motion/react';
import { Star, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { SERVICES } from '../types';
import * as Icons from 'lucide-react';

export default function LandingPage({ onNext, clinicInfo }: { onNext: () => void; clinicInfo: any }) {
  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto w-full pt-8 sm:pt-16 pb-8">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 text-primary-600 text-xs font-bold uppercase tracking-wider mb-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
          </span>
          Accepting new patients
        </div>
        
        <h1 className="text-[36px] sm:text-5xl lg:text-[48px] font-[800] tracking-[-1px] text-[#0F172A] leading-[1.1]">
          Book Your Dental Appointment<br className="hidden sm:block" />
          <span className="text-primary-600">
            in Seconds
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-[#64748B] max-w-2xl mx-auto font-normal leading-relaxed">
          Trusted dental care in {clinicInfo.location.split(',')[0]} with instant booking. 
          Experience painless, premium treatments.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-10 w-full flex flex-col items-center"
      >
        <button 
          onClick={onNext}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 shadow-[0_4px_14px_rgba(13,148,136,0.3)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <span className="relative z-10">Start Appointment Booking</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </button>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-[13px] text-[#475569] font-medium">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{clinicInfo.rating} Rating • {clinicInfo.patients} Happy Patients</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary-500" />
            <span>Same day appointments</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Certified Specialists</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full mt-24"
      >
        <div className="text-center mb-10">
          <h2 className="text-sm uppercase tracking-[1px] font-semibold text-[#64748B] mb-2">Our Capabilities</h2>
          <p className="text-2xl font-semibold text-[#0F172A]">Premium Treatments</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {SERVICES.map((service, i) => {
            const Icon = (Icons as any)[service.icon] || Icons.HelpCircle;
            return (
              <div 
                key={service.id}
                onClick={onNext}
                className="group cursor-pointer bg-white rounded-2xl p-4 border-[1.5px] border-[#F1F5F9] shadow-none hover:border-primary-600 hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center text-center gap-3 relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-[#1A365D] leading-tight">{service.title}</h3>
                
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-primary-50 py-1.5">
                  <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Book Now</span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

    </div>
  );
}
