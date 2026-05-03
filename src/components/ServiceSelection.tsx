import { motion } from 'motion/react';
import { SERVICES } from '../types';
import * as Icons from 'lucide-react';
import { ArrowLeft } from 'lucide-react';

export default function ServiceSelection({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div className="max-w-3xl mx-auto w-full pt-4 pb-12">
      <div className="text-center mb-10 animate-fade-in-up">
        <h2 className="text-3xl font-[800] tracking-[-1px] text-[#0F172A] mb-3">What do you need help with?</h2>
        <p className="text-[#64748B]">Select a service to see available time slots.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {SERVICES.map((service, index) => {
          const Icon = (Icons as any)[service.icon] || Icons.CheckCircle;
          return (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onSelect(service.id)}
              className="group flex items-start gap-4 p-5 bg-white rounded-2xl border-[1.5px] border-[#F1F5F9] shadow-none hover:border-primary-600 hover:-translate-y-0.5 transition-all text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-[#1A365D] group-hover:text-primary-700 transition-colors">{service.title}</h3>
                <p className="text-[13px] text-[#64748B] mt-1">{service.benefit}</p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
