export type FunnelState = {
  step: 1 | 2 | 3 | 4;
  selectedService: string | null;
  formData: {
    fullName: string;
    whatsappNumber: string;
    location: string;
    timeSlot: string;
    message: string;
  };
};

export const SERVICES = [
  { id: 'cleaning', title: 'Dental Cleaning', benefit: 'Sparkling clean & healthy teeth', icon: 'Sparkles' },
  { id: 'braces', title: 'Braces & Aligners', benefit: 'Perfectly straight smile', icon: 'Smile' },
  { id: 'root-canal', title: 'Root Canal Treatment', benefit: 'Painless tooth-saving care', icon: 'ShieldCheck' },
  { id: 'whitening', title: 'Teeth Whitening', benefit: 'Instantly brighter smile', icon: 'Sun' },
  { id: 'implants', title: 'Dental Implants', benefit: 'Permanent natural-looking teeth', icon: 'Zap' },
];
