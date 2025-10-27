'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '../../lib/constants';
import { motion } from 'framer-motion';
import { X, ArrowRight, Rocket } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] lg:hidden"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel - FIXED: Now appears above navbar */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col pt-24"
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-teal-50 to-white">
          <span className="text-2xl font-black text-slate-900">Menu</span>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-200 rounded-xl transition-all active:scale-95 group"
            aria-label="Close menu"
          >
            <X className="w-9 h-9 text-slate-900 group-hover:rotate-90 transition-transform" strokeWidth={3} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-3">
          {NAV_LINKS.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className={`group flex items-center justify-between w-full px-6 py-5 rounded-xl text-lg font-black transition-all duration-300 ${
                  pathname === link.href
                    ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg'
                    : 'text-slate-900 bg-gray-100 hover:bg-teal-50 active:bg-teal-100'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${pathname === link.href ? 'text-white' : 'text-teal-600'}`} strokeWidth={3} />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: NAV_LINKS.length * 0.05 }}
          className="p-6 border-t border-gray-100 bg-gradient-to-t from-teal-50 to-white space-y-4"
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="group flex items-center justify-center gap-2 w-full px-6 py-5 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all font-black text-lg shadow-lg active:scale-95"
          >
            <span>Get Started Free</span>
            <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
          </Link>
          <button
            onClick={onClose}
            className="w-full px-6 py-4 bg-gray-100 text-slate-900 text-center rounded-xl hover:bg-gray-200 transition-all font-bold text-base active:scale-95"
          >
            Close Menu
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
