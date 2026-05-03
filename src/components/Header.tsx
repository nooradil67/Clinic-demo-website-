import { ChevronLeft, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

type Props = {
  clinicInfo: { name: string; phone: string };
  step: number;
  onBack: () => void;
};

export default function Header({ clinicInfo, step, onBack }: Props) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-primary-600/10 py-3 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {step > 1 && step < 4 && (
            <button 
              onClick={onBack}
              className="p-1.5 -ml-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
              aria-label="Go back"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="font-extrabold text-2xl tracking-tight text-primary-600 leading-tight">
              SmileCare<span className="text-[#0EA5E9]">Dental</span>
            </span>
          </motion.div>
        </div>

        <a 
          href={`tel:${clinicInfo.phone.replace(/\s+/g, '')}`}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors text-sm font-medium"
        >
          <PhoneCall className="w-4 h-4" />
          <span className="hidden sm:inline">{clinicInfo.phone}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
      
      {/* Progress bar */}
      {step < 4 && (
        <div className="h-0.5 w-full bg-slate-100">
          <motion.div 
            className="h-full bg-primary-500"
            initial={{ width: '0%' }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      )}
    </header>
  );
}
