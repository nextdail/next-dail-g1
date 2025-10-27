'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '../../lib/constants';
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

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'py-2 sm:py-3 backdrop-blur-xl bg-white/80 shadow-[0_4px_20px_rgba(33,128,141,0.08),0_8px_40px_rgba(33,128,141,0.04)]'
            : 'py-3 sm:py-5 backdrop-blur-md bg-white/60'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - More Side Padding on Mobile */}
            <Link href="/" className="flex items-center space-x-3 group pl-4 sm:pl-0 -ml-4 sm:ml-0">
              <div className="relative w-14 h-14 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(33,128,141,0.3)] group-hover:shadow-[0_6px_20px_rgba(33,128,141,0.4)] transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-black text-3xl sm:text-2xl">N</span>
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tight hidden sm:inline">
                Next Dail
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2.5 text-base font-bold transition-all duration-300 rounded-lg ${
                    pathname === link.href
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-slate-800 hover:text-teal-600 hover:bg-teal-50/50'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal-600 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="relative px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-[0_4px_12px_rgba(33,128,141,0.25)] hover:shadow-[0_6px_20px_rgba(33,128,141,0.35)] hover:scale-105 font-bold text-base overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button - More Side Padding */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 sm:p-2.5 rounded-xl hover:bg-teal-50 transition-all duration-300 group active:scale-95 pr-4 sm:pr-0 -mr-4 sm:mr-0"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              {/* Improved Hamburger Icon */}
              <div className="w-8 h-7 sm:w-7 sm:h-6 flex flex-col justify-between relative">
                <span
                  className={`w-full h-1.5 sm:h-0.5 bg-slate-900 rounded-full transition-all duration-300 origin-center transform ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-3.5 sm:translate-y-2.5' : ''
                  }`}
                />
                <span
                  className={`w-full h-1.5 sm:h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                  }`}
                />
                <span
                  className={`w-full h-1.5 sm:h-0.5 bg-slate-900 rounded-full transition-all duration-300 origin-center transform ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-3.5 sm:-translate-y-2.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
