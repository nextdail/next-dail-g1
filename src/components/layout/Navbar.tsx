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
            ? 'py-3 sm:py-3 backdrop-blur-xl bg-white/90 shadow-lg'
            : 'py-4 sm:py-5 backdrop-blur-md bg-white/80'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-10 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Mobile & Desktop */}
            <Link href="/" className="flex items-center group">
              {/* Mobile Logo - Square */}
              <div className="relative w-[50px] h-[50px] lg:hidden">
                <Image
                  src="/images/Logo_Mobile.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
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

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="relative px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-bold text-base"
              >
                Get Starte
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-teal-50 transition-all duration-300 group active:scale-95"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              {isMobileMenuOpen ? (
                <X className="w-9 h-9 sm:w-8 sm:h-8 text-slate-900" strokeWidth={2.5} />
              ) : (
                <Menu className="w-9 h-9 sm:w-8 sm:h-8 text-slate-900" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
