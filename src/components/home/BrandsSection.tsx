'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { BRAND_LOGOS } from '../../lib/constants';

export default function BrandsSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-white via-cream-50 to-white overflow-hidden relative">
      {/* Frosted shadow bar - moved down */}
      <div className="absolute inset-x-0 top-32 h-32 mx-auto rounded-3xl max-w-screen-xl bg-white/50 shadow-2xl backdrop-blur-sm pointer-events-none" style={{ zIndex: 0 }} />
      
      {/* Gradient fade left/right - adjusted position */}
      <div className="pointer-events-none absolute top-40 left-0 w-32 h-32 hidden sm:block" style={{ background: 'linear-gradient(to right, #fff, transparent)', zIndex: 10 }} />
      <div className="pointer-events-none absolute top-40 right-0 w-32 h-32 hidden sm:block" style={{ background: 'linear-gradient(to left, #fff, transparent)', zIndex: 10 }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 20 }}>
        {/* Header - with extra spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 relative z-30"
        >
          <span className="inline-block px-5 py-2.5 bg-teal-500/10 text-teal-700 rounded-full text-base font-bold mb-4 shadow-sm">
            Trusted by the Best
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 drop-shadow-md">
            Leading Brands Partner With Us
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-semibold leading-relaxed">
            Our digital solutions power growth for India's top brands and global enterprises. Join a network of innovators and industry leaders.
          </p>
        </motion.div>

        {/* Infinite marquee brand carousel */}
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
                <div className="relative w-full h-full flex items-center justify-center bg-white/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-all grayscale hover:grayscale-0 opacity-90 hover:opacity-100">
                  <Image
                    src={brand.url}
                    alt={brand.name}
                    width={120}
                    height={64}
                    className="object-contain max-h-[60px]"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
