'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS_INFO, SOCIAL_LINKS, NAV_LINKS } from '../../lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative z-10">
      {/* Top Area */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
          <Link href="/" className="flex items-center group">
            {/* Mobile logo */}
            <div className="relative w-14 h-14 md:hidden">
              <Image
                src="/images/Logo_Mobile.svg"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Desktop logo */}
            <div className="hidden md:block relative w-44 h-9">
              <Image
                src="/images/Logo_Mobile.svg"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="ml-2 text-lg font-black text-white hidden md:inline">
              {BUSINESS_INFO?.name || 'BrandName'}
            </span>
          </Link>
          <p className="text-slate-300 text-center md:text-left text-sm md:text-base max-w-xs font-medium">
            Crafting <span className="font-bold text-teal-300">digital success</span> for ambitious brands since 2014.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4 md:gap-2 md:flex-row md:items-center mb-6 md:mb-0">
          {(Array.isArray(NAV_LINKS) ? NAV_LINKS : []).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm md:text-base font-bold text-white hover:text-teal-300 text-center transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Links (Safe .map) */}
        <div className="flex gap-4 justify-center md:justify-end">
          {(Array.isArray(SOCIAL_LINKS) ? SOCIAL_LINKS : []).map((social) => (
            <a
              key={social.title}
              href={social.url}
              aria-label={social.title}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-white/10 hover:bg-teal-500 transition-all w-10 h-10 flex items-center justify-center"
            >
              <span className="sr-only">{social.title}</span>
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-700/60" />

      {/* Bottom Legal */}
      <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-xs sm:text-sm">
        <div>
          © {currentYear} {BUSINESS_INFO?.name || 'BrandName'}. All rights reserved.
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="/privacy-policy" className="hover:text-teal-300">
            Privacy Policy
          </Link>
          <span className="hidden sm:inline">·</span>
          <Link href="/terms" className="hover:text-teal-300">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
