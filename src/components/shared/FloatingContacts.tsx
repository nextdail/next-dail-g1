'use client';

import { BUSINESS_INFO } from '@/lib/constants';
import { formatWhatsAppLink, formatPhoneLink } from '@/lib/utils';

export default function FloatingContacts() {
  return (
    <>
      {/* MOBILE: Bottom Bar (Perfect - Keep as is) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
        <div className="bg-white backdrop-blur-lg shadow-2xl border-t-4 border-red-500">
          
          {/* 60% OFF Banner */}
          <div className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 px-4 py-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
            <div className="relative flex items-center justify-center gap-2">
              <span className="text-yellow-300 text-lg animate-wiggle">🔥</span>
              <div className="text-center">
                <div className="text-white font-black text-sm tracking-tight">LIMITED OFFER: 60% OFF</div>
                <div className="text-yellow-200 text-[10px] font-bold">All Services - Book Now!</div>
              </div>
              <span className="text-yellow-300 text-lg animate-wiggle">🔥</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-0">
            {/* WhatsApp Button */}
            <a
              href={formatWhatsAppLink(BUSINESS_INFO.whatsapp, 'Hi, I want to discuss a project')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group relative bg-gradient-to-r from-[#25D366] to-[#22C55E] hover:from-[#22C55E] hover:to-[#25D366] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <div className="relative px-4 py-4 flex flex-col items-center gap-2">
                <div className="relative">
                  <svg className="w-10 h-10 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-white border-2 border-[#25D366] rounded-full animate-pulse" />
                </div>
                <div className="text-center">
                  <div className="text-white font-black text-sm">WhatsApp Chat</div>
                  <div className="text-white/90 text-[10px] font-semibold">Instant Response</div>
                </div>
              </div>
            </a>

            <div className="w-px bg-gray-200" />

            {/* Call Button */}
            <a
              href={formatPhoneLink(BUSINESS_INFO.phone)}
              className="flex-1 group relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-500 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <div className="relative px-4 py-4 flex flex-col items-center gap-2">
                <div className="relative">
                  <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-white border-2 border-red-500 rounded-full animate-pulse" />
                </div>
                <div className="text-center">
                  <div className="text-white font-black text-sm">Call Now</div>
                  <div className="text-white/90 text-[10px] font-semibold">Tap to Call</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* DESKTOP: Simple Bottom Right Buttons */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <div className="flex flex-col gap-3">
          
          {/* WhatsApp Button */}
          <a
            href={formatWhatsAppLink(BUSINESS_INFO.whatsapp, 'Hi, I want to discuss a project')}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-5 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="relative">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-[#25D366] animate-pulse" />
            </div>
            <div className="pr-2">
              <div className="font-black text-base">WhatsApp</div>
              <div className="text-sm opacity-90">Chat with us</div>
            </div>
          </a>

          {/* Call Button */}
          <a
            href={formatPhoneLink(BUSINESS_INFO.phone)}
            className="group flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-5 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="relative">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-red-500 animate-pulse" />
            </div>
            <div className="pr-2">
              <div className="font-black text-base">Call Now</div>
              <div className="text-sm opacity-90">{BUSINESS_INFO.phone}</div>
            </div>
          </a>

          {/* 60% OFF Badge */}
          <div className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-center shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
            <div className="relative font-black text-sm">🔥 60% OFF 🔥</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }
        .animate-shine { animation: shine 3s linear infinite; }
        .animate-wiggle { animation: wiggle 1s ease-in-out infinite; }
      `}</style>
    </>
  );
}
