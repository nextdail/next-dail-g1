'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '../../lib/constants';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-12 ${
          isScrolled
            ? 'py-3 sm:py-3 backdrop-blur-xl bg-white/90 shadow-lg border-b border-red-100/50'
            : 'py-4 sm:py-5 backdrop-blur-md bg-white/80'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-10 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Mobile & Desktop */}
            <Link href="/" className="flex items-center group">
              {/* Mobile Logo - Square with RED ring */}
              <div className="relative w-[50px] h-[50px] lg:hidden ring-2 ring-red-500/20 rounded-xl group-hover:ring-red-500/40 transition-all">
                <Image
                  src="/images/Logo_Mobile.svg"
                  alt="Logo"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>

              {/* Desktop Logo - Wide */}
              <div className="hidden lg:block relative w-[150px] h-[30px]">
                <Image
                  src="/images/Logo_Desktop.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation - RED THEME */}
            <div className="hidden lg:flex items-center space-x-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2.5 text-base font-bold transition-all duration-300 rounded-lg ${
                    pathname === link.href
                      ? 'text-red-600 bg-red-50'
                      : 'text-slate-800 hover:text-red-600 hover:bg-red-50/50'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA - SUPER ATTRACTIVE 60% OFF - FIXED SHINE */}
            <div className="hidden lg:flex items-center gap-4">
              {/* MEGA ATTRACTIVE 60% OFF BADGE - FIXED */}
              <div className="relative">
                {/* Pulsing glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-md opacity-75 animate-pulse" />
                
                {/* FIXED: Added overflow-hidden and pointer-events-none */}
                <div className="relative px-4 py-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-full shadow-lg shadow-red-500/50 animate-bounce-slow border-2 border-yellow-300 overflow-hidden">
                  {/* Shine effect - FIXED with pointer-events-none */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine pointer-events-none" />
                  
                  <div className="relative flex items-center gap-2 z-10">
                    {/* Fire icon animated */}
                    <span className="text-yellow-300 text-lg animate-wiggle">🔥</span>
                    <div className="flex flex-col leading-none">
                      <span className="text-white font-black text-sm tracking-tight">60% OFF</span>
                      <span className="text-yellow-200 font-bold text-[10px] tracking-wider">LIMITED</span>
                    </div>
                    {/* Sparkle */}
                    <span className="text-yellow-300 text-sm animate-ping-slow">✨</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping pointer-events-none" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse pointer-events-none" />
              </div>

              <Link
                href="/contact"
                className="relative px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:scale-105 font-bold text-base border border-red-400/30 overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                {/* Shine effect on button - FIXED */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 pointer-events-none" />
              </Link>
            </div>

            {/* Mobile Menu Button - RED THEME */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-red-50 transition-all duration-300 group active:scale-95 border border-red-100/50 hover:border-red-300"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              {isMobileMenuOpen ? (
                <X className="w-9 h-9 sm:w-8 sm:h-8 text-red-600" strokeWidth={2.5} />
              ) : (
                <Menu className="w-9 h-9 sm:w-8 sm:h-8 text-red-600" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
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
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
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
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
