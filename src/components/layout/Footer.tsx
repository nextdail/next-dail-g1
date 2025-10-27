'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BUSINESS_INFO, SOCIAL_LINKS, NAV_LINKS } from '../../lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* MOBILE LAYOUT */}
      <div className="lg:hidden">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-2xl">N</span>
              </div>
              <span className="text-2xl font-black text-white">Next Dail</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xs mx-auto font-medium">
              Transforming businesses through innovative digital solutions since 2014.
            </p>
          </motion.div>

          {/* Social Links - Mobile Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center gap-3 mb-12"
          >
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </motion.div>

          {/* Mobile Sections - CENTERED & BOLD LINKS */}
          <div className="space-y-8 mb-12">
            {/* Quick Links - CENTERED */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-white font-black text-lg mb-4">Navigation</h3>
              <ul className="space-y-3">
                {NAV_LINKS.slice(0, 3).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base sm:text-lg font-black text-teal-300 hover:text-teal-400 transition-colors duration-200 block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services - CENTERED */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-white font-black text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services/seo" className="text-base sm:text-lg font-black text-teal-300 hover:text-teal-400 transition-colors block">
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link href="/services/website" className="text-base sm:text-lg font-black text-teal-300 hover:text-teal-400 transition-colors block">
                    Website Building
                  </Link>
                </li>
                <li>
                  <Link href="/services/app" className="text-base sm:text-lg font-black text-teal-300 hover:text-teal-400 transition-colors block">
                    App Development
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-base sm:text-lg font-black text-teal-400 hover:text-teal-300 transition-colors block">
                    View All →
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info - CENTERED */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-white font-black text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex justify-center">
                  <div className="flex items-start gap-2 max-w-xs">
                    <svg className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-300 font-bold">{BUSINESS_INFO.address}</span>
                  </div>
                </li>
                <li>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-base sm:text-lg font-black text-teal-300 hover:text-teal-400 transition-colors block">
                    {BUSINESS_INFO.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-sm sm:text-base font-black text-teal-300 hover:text-teal-400 transition-colors block break-all">
                    {BUSINESS_INFO.email}
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Mobile Bottom Bar - CENTERED */}
          <div className="border-t border-gray-800 pt-6 space-y-4 text-center">
            <p className="text-xs sm:text-sm font-bold text-gray-400">
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row sm:justify-center text-sm font-black">
              <Link href="/privacy" className="text-teal-300 hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="hidden sm:inline text-gray-600">•</span>
              <Link href="/terms" className="text-teal-300 hover:text-teal-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-2xl">N</span>
                </div>
                <span className="text-2xl font-black text-white">Next Dail</span>
              </div>
              <p className="text-base mb-6 leading-relaxed font-medium">
                Transforming businesses through innovative digital solutions since 2014.
              </p>
              <div className="flex space-x-4">
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-black text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base font-semibold hover:text-teal-400 transition-colors duration-200 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-black text-lg mb-6">Services</h3>
              <ul className="space-y-3 text-base font-semibold">
                <li>
                  <Link href="/services/seo" className="hover:text-teal-400 transition-colors duration-200 inline-block">
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link href="/services/website" className="hover:text-teal-400 transition-colors duration-200 inline-block">
                    Website Building
                  </Link>
                </li>
                <li>
                  <Link href="/services/app" className="hover:text-teal-400 transition-colors duration-200 inline-block">
                    App Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/smm" className="hover:text-teal-400 transition-colors duration-200 inline-block">
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-teal-400 transition-colors duration-200 inline-block font-bold">
                    View All Services →
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-black text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4 text-base font-semibold">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{BUSINESS_INFO.address}</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-teal-400 transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-teal-400 transition-colors">
                    {BUSINESS_INFO.email}
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-base font-semibold mb-4 md:mb-0">
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-8 text-base font-semibold">
              <Link href="/privacy" className="hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-teal-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
