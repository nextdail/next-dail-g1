'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '../../lib/constants';
import { X, ArrowRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'auto';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel - RED THEME */}
      <div className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col overflow-y-auto border-l-4 border-red-500">
        {/* Header with Logo - MEGA ATTRACTIVE */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-red-100 bg-gradient-to-r from-red-50 to-white sticky top-0 z-10">
          <Link href="/" onClick={onClose} className="relative w-12 h-12 ring-2 ring-red-500/30 rounded-xl hover:ring-red-500/50 transition-all">
            <Image
              src="/images/Logo_Mobile.svg"
              alt="Logo"
              fill
              className="object-contain p-1"
              priority
            />
          </Link>
          
          {/* MEGA ATTRACTIVE 60% OFF BADGE */}
          <div className="flex items-center gap-2">
            <div className="relative">
              {/* Pulsing glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-sm opacity-75 animate-pulse" />
              
              <div className="relative px-3 py-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-full shadow-lg border-2 border-yellow-300 animate-bounce-slow">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full animate-shine" />
                
                <div className="relative flex items-center gap-1.5">
                  <span className="text-yellow-300 text-sm animate-wiggle">🔥</span>
                  <div className="flex flex-col leading-none">
                    <span className="text-white font-black text-xs tracking-tight">60% OFF</span>
                    <span className="text-yellow-200 font-bold text-[8px] tracking-wide">LIMITED</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative pulsing dot */}
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
            </div>

            <button
              onClick={onClose}
              className="p-3 hover:bg-red-100 rounded-xl transition-all active:scale-95 border border-red-100"
              aria-label="Close menu"
            >
              <X className="w-8 h-8 text-red-600" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Navigation Links - RED THEME */}
        <nav className="flex-1 px-6 py-8 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`group flex items-center justify-between w-full px-6 py-5 rounded-xl text-lg font-black transition-all duration-300 ${
                pathname === link.href
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 border border-red-400/30'
                  : 'text-slate-900 bg-red-50 hover:bg-red-100 active:bg-red-200 border border-red-100 hover:border-red-300'
              }`}
            >
              <span>{link.label}</span>
              <ArrowRight 
                className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                  pathname === link.href ? 'text-white' : 'text-red-600'
                }`} 
                strokeWidth={3} 
              />
            </Link>
          ))}
        </nav>

        {/* CTA Section - ENHANCED RED THEME */}
        <div className="p-6 border-t border-red-100 bg-gradient-to-t from-red-50 to-white space-y-4 sticky bottom-0">
          {/* Eye-catching offer banner */}
          <div className="text-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-2 border-yellow-300 relative overflow-hidden">
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine" />
            
            <p className="relative text-sm font-black text-red-600 flex items-center justify-center gap-2">
              <span className="animate-wiggle">🔥</span>
              Save up to 60% on All Services
              <span className="animate-wiggle">🔥</span>
            </p>
          </div>

          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full px-6 py-5 bg-gradient-to-r from-red-500 to-red-600 text-white text-center rounded-xl hover:from-red-600 hover:to-red-700 transition-all font-black text-lg shadow-lg shadow-red-500/30 active:scale-95 border border-red-400/30 relative overflow-hidden group"
          >
            <span className="relative z-10">Get Started Free 🚀</span>
            {/* Shine effect on button */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </Link>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-8deg);
          }
          50% {
            transform: rotate(8deg);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-shine {
          animation: shine 3s linear infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
