'use client';

import { motion } from 'framer-motion';
import { STATS } from '../../lib/constants';
import { useEffect, useState } from 'react';

function Counter({ end, duration = 2 }: { end: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const numericEnd = parseInt(end.replace(/\D/g, ''));

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(numericEnd * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(numericEnd);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [numericEnd, duration]);

  return <span>{count}{end.includes('+') && '+'}{end.includes('%') && '%'}</span>;
}

export default function StatsSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Premium Background Pattern - RED GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-50/30 via-white to-orange-50/20" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - RED ACCENTS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-black mb-4 shadow-lg">
            🔥 Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 px-4">
            Trusted by <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">Businesses Worldwide</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 font-semibold max-w-2xl mx-auto px-4">
            Numbers that showcase our commitment to excellence
          </p>
        </motion.div>

        {/* Stats Grid - IMPROVED CARD DESIGN */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
            >
              {/* Card Container - PREMIUM DESIGN */}
              <div className="relative bg-white backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-red-100/50 hover:border-red-300 hover:-translate-y-3 overflow-hidden">
                
                {/* Gradient Background on Hover - RED */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/5 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Top Accent Bar - RED */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                {/* Icon - IMPROVED DESIGN */}
                <div className="relative mb-4 sm:mb-6 inline-block">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl flex items-center justify-center group-hover:from-red-500 group-hover:to-orange-500 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-red-500/30 border-2 border-red-100/50 group-hover:border-red-400">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-red-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {/* Floating badge effect */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity" />
                </div>

                {/* Counter Number - ENHANCED */}
                <div className="relative text-4xl sm:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-red-600 group-hover:to-orange-600 transition-all duration-300">
                  <Counter end={stat.value} />
                </div>

                {/* Label - IMPROVED */}
                <p className="relative text-sm sm:text-base lg:text-lg text-slate-600 font-bold leading-tight group-hover:text-slate-900 transition-colors">
                  {stat.label}
                </p>

                {/* Bottom Decorative Element - RED */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl sm:rounded-b-3xl" />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none" />
              </div>

              {/* External shadow/glow effect */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/10 group-hover:to-orange-500/10 blur-xl transition-all duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Badge - RED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white backdrop-blur-xl rounded-2xl shadow-lg border-2 border-red-100/50 hover:border-red-300 transition-all hover:shadow-xl hover:shadow-red-500/20 group">
            <svg className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-base sm:text-lg font-black text-slate-900">
              Rated <span className="text-red-600">4.9/5</span> by 500+ Clients
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
