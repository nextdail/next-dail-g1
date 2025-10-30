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

      {/* Menu Panel */}
      <div className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col overflow-y-auto">
        {/* Header with Logo */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100 bg-gradient-to-r from-teal-50 to-white sticky top-0 z-10">
          <Link href="/" onClick={onClose} className="relative w-12 h-12">
            <Image
              src="/images/Logo_Mobile.svg"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-200 rounded-xl transition-all active:scale-95"
            aria-label="Close menu"
          >
            <X className="w-8 h-8 text-slate-900" strokeWidth={2.5} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-6 py-8 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`group flex items-center justify-between w-full px-6 py-5 rounded-xl text-lg font-black transition-all duration-300 ${
                pathname === link.href
                  ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg'
                  : 'text-slate-900 bg-gray-100 hover:bg-teal-50 active:bg-teal-100'
              }`}
            >
              <span>{link.label}</span>
              <ArrowRight 
                className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                  pathname === link.href ? 'text-white' : 'text-teal-600'
                }`} 
                strokeWidth={3} 
              />
            </Link>
          ))}
        </nav>

        {/* CTA Section */}
        <div className="p-6 border-t border-gray-100 bg-gradient-to-t from-teal-50 to-white space-y-4 sticky bottom-0">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full px-6 py-5 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all font-black text-lg shadow-lg active:scale-95"
          >
            Get Started Free 🚀
          </Link>
        </div>
      </div>
    </div>
  );
}
