import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({ phone }: { phone: string }) {
  const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 px-5 h-12 bg-[#25D366] text-white rounded-full font-bold shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:-translate-y-1 hover:bg-[#20ba59] transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
