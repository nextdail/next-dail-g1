'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/animation';

export default function HeroSection() {
  return (
    <>
      {/* MOBILE DESIGN - Premium New Layout */}
      <section className="relative lg:hidden min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-8 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Mobile Background Orbs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 right-10 w-48 h-48 bg-teal-500 rounded-full blur-[60px]" />
          <div className="absolute -bottom-20 left-10 w-48 h-48 bg-teal-300 rounded-full blur-[60px]" />
        </div>

        <div className="relative z-10 w-full flex flex-col items-center space-y-0">
          {/* Top: Image Card - Prominent */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full mb-8"
          >
            <div className="relative h-72 rounded-3xl overflow-hidden ring-2 ring-teal-500/50 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400"
                alt="Digital Solutions"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
              
              {/* Floating Badge on Image */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500 text-white rounded-full text-xs font-black shadow-lg">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  #1 Digital Agency
                </span>
              </div>

              {/* Stats on Image */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-lg p-2 text-center">
                  <div className="text-xl font-black text-teal-300">500+</div>
                  <div className="text-xs text-white font-bold">Projects</div>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-lg p-2 text-center">
                  <div className="text-xl font-black text-teal-300">98%</div>
                  <div className="text-xs text-white font-bold">Success</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="w-full space-y-5 text-center"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-teal-300 rounded-full text-xs font-bold backdrop-blur-sm border border-teal-500/30">
                ⭐ Premium Digital Services
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-black text-white leading-tight"
            >
              Your Digital
              <span className="block mt-1 bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Growth Partner
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-base text-gray-300 leading-relaxed max-w-md mx-auto font-medium"
            >
              We build powerful digital solutions that turn your vision into reality and drive real business results
            </motion.p>

            {/* Quick Stats - Horizontal */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center gap-3 pt-2"
            >
              <div className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-teal-500/20 to-teal-600/20 rounded-lg border border-teal-500/30 backdrop-blur-sm">
                <span className="text-sm font-black text-teal-300">10+ Years</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-teal-500/20 to-teal-600/20 rounded-lg border border-teal-500/30 backdrop-blur-sm">
                <span className="text-sm font-black text-teal-300">50+ Team</span>
              </div>
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="space-y-2.5 pt-2"
            >
              <Link
                href="/contact"
                className="block w-full px-6 py-3.5 bg-gradient-to-r from-teal-500 via-teal-500 to-cyan-500 text-white rounded-xl font-black text-base shadow-2xl shadow-teal-500/40 active:scale-95 transition-transform hover:shadow-3xl hover:shadow-teal-500/50"
              >
                Let's Work Together 🚀
              </Link>
              <Link
                href="/case-studies"
                className="block w-full px-6 py-3.5 bg-white/10 backdrop-blur-md text-white rounded-xl font-bold text-base border-2 border-teal-500/40 hover:border-teal-500 hover:bg-white/20 transition-all active:scale-95"
              >
                See Our Success Stories
              </Link>
            </motion.div>

            {/* Trust Section */}
            <motion.div
              variants={fadeInUp}
              className="pt-4 border-t border-white/10"
            >
              <p className="text-xs text-gray-400 font-bold mb-3">TRUSTED BY</p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/50 flex items-center justify-center text-xs font-black text-teal-300">👤</div>
                <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/50 flex items-center justify-center text-xs font-black text-teal-300">👤</div>
                <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/50 flex items-center justify-center text-xs font-black text-teal-300">👤</div>
                <span className="text-xs text-gray-400 font-bold ml-2">+500 Clients</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DESKTOP DESIGN - Original Premium Layout */}
      <section className="relative hidden lg:flex min-h-screen items-center overflow-hidden pt-32 pb-28">
        {/* Desktop Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-white to-teal-50/30" />
        
        {/* Desktop Animated Mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brown-600/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-300/10 rounded-full blur-[150px] animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Desktop Left Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-8 text-left"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 backdrop-blur-sm text-teal-700 rounded-full text-sm font-semibold shadow-sm">
                  <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                  Building Digital Success Since 2014
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-6xl xl:text-7xl font-black text-slate-900 leading-tight tracking-tight"
              >
                Transform Your Business with{' '}
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                    Digital Excellence
                  </span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-teal-500/20 -z-10" />
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-slate-600 leading-relaxed font-medium"
              >
                We partner with forward-thinking companies to create digital experiences 
                that drive <span className="font-bold text-slate-900">measurable growth</span>, engagement, and success
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex gap-4"
              >
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-bold overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started Free
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                
                <Link
                  href="/case-studies"
                  className="group px-8 py-4 border-2 border-teal-500/20 bg-white/60 backdrop-blur-sm text-teal-700 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all duration-300 shadow-md font-bold"
                >
                  <span className="flex items-center gap-2">
                    View Our Work
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex gap-4"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
                  <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-bold text-slate-900">500+ Projects</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
                  <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-bold text-slate-900">98% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
                  <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-bold text-slate-900">10+ Years</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Desktop Right Images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full h-[650px]">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-0 right-0 w-[420px] h-[300px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(33,128,141,0.15)] ring-1 ring-black/5"
                >
                  <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400" alt="Team collaboration" fill className="object-cover" priority />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-56 left-0 w-[370px] h-[240px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(33,128,141,0.15)] ring-1 ring-black/5"
                >
                  <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350" alt="Analytics dashboard" fill className="object-cover" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -25, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  className="absolute bottom-0 right-20 w-[220px] h-[350px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(33,128,141,0.2)] ring-1 ring-black/5"
                >
                  <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=500" alt="Mobile app" fill className="object-cover" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">Scroll to explore</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-6 h-10 border-2 border-slate-300 rounded-full flex items-start justify-center p-2">
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
