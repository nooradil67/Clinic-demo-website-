import { Star } from 'lucide-react';

export default function SEOContent({ clinicInfo }: { clinicInfo: any }) {
  return (
    <div className="mt-24 pb-12 px-4 max-w-4xl mx-auto">
      <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span>Trusted Dental Clinic near me in Rawalpindi</span>
          <div className="flex items-center gap-1.5 text-yellow-400 bg-yellow-50 px-3 py-1 rounded-full text-sm font-medium">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-yellow-700">{clinicInfo.rating} Rating</span>
          </div>
        </h2>
        
        <div className="prose prose-slate prose-sm max-w-none text-slate-600 space-y-4">
          <p>
            Welcome to SmileCare Dental Clinic, your trusted partner for premium dental care in Rawalpindi. 
            We specialize in providing painless, modern, and highly effective treatments.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Our Key Services</h3>
              <ul className="space-y-1">
                <li>Professional Teeth Cleaning & Polishing</li>
                <li>Braces & Clear Aligners in Rawalpindi</li>
                <li>Painless Root Canal Treatment</li>
                <li>Advanced Dental Implants</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Clinic Information</h3>
              <address className="not-italic text-sm space-y-1">
                <strong>{clinicInfo.name}</strong><br />
                {clinicInfo.location}<br />
                Phone: <a href={`tel:${clinicInfo.phone.replace(' ', '')}`} className="text-primary-600 hover:underline">{clinicInfo.phone}</a>
              </address>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-4 sm:p-2 shadow-sm border border-slate-100 overflow-hidden h-[300px] relative">
        {/* Placeholder for real Google Maps embed */}
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center p-6 text-center">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
             <p className="font-semibold text-slate-800">SmileCare Dental Clinic</p>
             <p className="text-sm text-slate-500 mt-1">{clinicInfo.location}</p>
             <p className="text-xs text-primary-600 mt-3 font-medium uppercase tracking-widest">Interactive Map Ready</p>
          </div>
        </div>
      </section>
    </div>
  );
}
