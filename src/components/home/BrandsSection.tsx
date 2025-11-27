'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { BRAND_LOGOS } from '../../lib/constants';

export default function BrandsSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-white via-red-50/30 to-orange-50/20 overflow-hidden relative">
      {/* Frosted shadow bar with RED tint */}
      <div className="absolute inset-x-0 top-32 h-32 mx-auto rounded-3xl max-w-screen-xl bg-gradient-to-r from-white/50 via-red-50/40 to-white/50 shadow-2xl shadow-red-500/10 backdrop-blur-sm pointer-events-none" style={{ zIndex: 0 }} />
      
      {/* Gradient fade left/right - adjusted position */}
      <div className="pointer-events-none absolute top-40 left-0 w-32 h-32 hidden sm:block" style={{ background: 'linear-gradient(to right, rgba(255,255,255,1), transparent)', zIndex: 10 }} />
      <div className="pointer-events-none absolute top-40 right-0 w-32 h-32 hidden sm:block" style={{ background: 'linear-gradient(to left, rgba(255,255,255,1), transparent)', zIndex: 10 }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 20 }}>
        {/* Header - with RED accents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 relative z-30"
        >
          <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-base font-black mb-4 shadow-lg">
            🔥 Trusted by the Best
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 drop-shadow-md">
            Leading Brands <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">Partner With Us</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-semibold leading-relaxed">
            Our digital solutions power growth for India's top brands and global enterprises. Join a network of innovators and industry leaders.
          </p>
        </motion.div>

        {/* Infinite marquee brand carousel with RED glow */}
        <div
          ref={marqueeRef}
          className="relative mx-auto flex items-center overflow-x-hidden"
          style={{ height: '112px', userSelect: 'none', zIndex: 20 }}
          tabIndex={0}
          role="list"
        >
          {/* Marquee row (seamless, paused on group-hover) */}
          <div 
            className="flex animate-infinite-scroll hover:[animation-play-state:paused] gap-10 px-2 group w-full"
            style={{ animationDuration: '45s', animationTimingFunction: 'linear' }}
          >
            {BRAND_LOGOS.concat(BRAND_LOGOS).map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="flex-shrink-0 w-[200px] h-[90px] flex items-center justify-center transition-transform duration-300 rounded-xl group-hover:scale-110"
                role="listitem"
                aria-label={brand.name}
              >
                <div className="relative w-full h-full flex items-center justify-center bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl hover:shadow-red-500/20 transition-all grayscale hover:grayscale-0 opacity-90 hover:opacity-100 border border-red-100/50 hover:border-red-300/60">
                  <Image
                    src={brand.url}
                    alt={brand.name}
                    width={120}
                    height={64}
                    className="object-contain max-h-[60px]"
                    draggable={false}
                  />
                  {/* RED accent on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/5 transition-all duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
