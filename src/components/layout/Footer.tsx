'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS_INFO, SOCIAL_LINKS, NAV_LINKS } from '../../lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative z-10 overflow-hidden">
      {/* Red gradient background accents */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-red-500/30 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tl from-orange-500/25 to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Top Area */}
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
            <Link href="/" className="flex items-center group">
              {/* Mobile logo */}
              <div className="relative w-14 h-14 md:hidden ring-2 ring-red-500/30 rounded-xl group-hover:ring-red-400/50 transition-all">
                <Image
                  src="/images/Logo_Mobile.svg"
                  alt="Logo"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              {/* Desktop logo */}
              <div className="hidden md:block relative w-44 h-9">
                <Image
                  src="/images/Logo_Desktop.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="ml-2 text-lg font-black text-white hidden md:inline group-hover:text-red-400 transition-colors">
                {BUSINESS_INFO?.name || 'BrandName'}
              </span>
            </Link>
            <p className="text-slate-300 text-center md:text-left text-sm md:text-base max-w-xs font-medium">
              Crafting <span className="font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">digital success</span> for ambitious brands since 2014.
            </p>
            {/* Special offer badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-400/30 backdrop-blur-sm">
              <span className="text-xs font-black text-red-300">🔥 60% OFF Limited Time</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 md:gap-2 md:flex-row md:items-center mb-6 md:mb-0">
            {(Array.isArray(NAV_LINKS) ? NAV_LINKS : []).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm md:text-base font-bold text-white hover:text-red-400 text-center transition-all relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Social Links - RED THEME */}
          <div className="flex gap-4 justify-center md:justify-end">
            {(Array.isArray(SOCIAL_LINKS) ? SOCIAL_LINKS : []).map((social) => (
              <a
                key={social.title}
                href={social.url}
                aria-label={social.title}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-500 transition-all w-10 h-10 flex items-center justify-center border border-red-500/20 hover:border-red-400/50 hover:scale-110 active:scale-95"
              >
                <span className="sr-only">{social.title}</span>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider - RED GRADIENT */}
        <div className="border-t border-slate-700/60 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
        </div>

        {/* Bottom Legal */}
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {BUSINESS_INFO?.name || 'BrandName'}. All rights reserved.</span>
          </div>
          <div className="flex gap-4 flex-wrap justify-center items-center">
            <Link href="/privacy-policy" className="hover:text-red-400 transition-colors font-semibold">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-red-500/50">·</span>
            <Link href="/terms" className="hover:text-red-400 transition-colors font-semibold">
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500" />
      </div>
    </footer>
  );
}
