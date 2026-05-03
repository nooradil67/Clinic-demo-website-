/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FunnelState } from './types';
import LandingPage from './components/LandingPage';
import ServiceSelection from './components/ServiceSelection';
import AppointmentForm from './components/AppointmentForm';
import Confirmation from './components/Confirmation';
import WhatsAppButton from './components/WhatsAppButton';
import Header from './components/Header';
import SEOContent from './components/SEOContent';

const CLINIC_INFO = {
  name: 'SmileCare Dental Clinic',
  location: 'Rawalpindi, Pakistan',
  phone: '+92 3147470764',
  whatsapp: '+92 3147470764',
  rating: 4.8,
  patients: '200+',
};

export default function App() {
  const [funnelState, setFunnelState] = useState<FunnelState>({
    step: 1,
    selectedService: null,
    formData: {
      fullName: '',
      whatsappNumber: '',
      location: '',
      timeSlot: '',
      message: '',
    },
  });

  const nextStep = () => setFunnelState(prev => ({ ...prev, step: Math.min(4, prev.step + 1) as 1 | 2 | 3 | 4 }));
  const prevStep = () => setFunnelState(prev => ({ ...prev, step: Math.max(1, prev.step - 1) as 1 | 2 | 3 | 4 }));
  
  const handleServiceSelect = (serviceId: string) => {
    setFunnelState(prev => ({ ...prev, selectedService: serviceId, step: 3 }));
  };

  const handleFormSubmit = (data: FunnelState['formData']) => {
    setFunnelState(prev => ({ ...prev, formData: data, step: 4 }));
  };

  const currentStepVariant = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.3, ease: 'easeOut' }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-[#1A365D] bg-[#F0F7FF] selection:bg-primary-100 selection:text-primary-700">
      <Header clinicInfo={CLINIC_INFO} step={funnelState.step} onBack={prevStep} />
      
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={funnelState.step}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={currentStepVariant}
            className="flex-1 flex flex-col h-full w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          >
            {funnelState.step === 1 && <LandingPage onNext={nextStep} clinicInfo={CLINIC_INFO} />}
            {funnelState.step === 2 && <ServiceSelection onSelect={handleServiceSelect} />}
            {funnelState.step === 3 && <AppointmentForm selectedService={funnelState.selectedService} onSubmit={handleFormSubmit} onBack={prevStep} />}
            {funnelState.step === 4 && <Confirmation data={funnelState} clinicInfo={CLINIC_INFO} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <WhatsAppButton phone={CLINIC_INFO.whatsapp} />
      
      {funnelState.step === 1 && (
        <SEOContent clinicInfo={CLINIC_INFO} />
      )}
    </div>
  );
}
