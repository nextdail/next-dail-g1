'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { caseStudies } from '../../data/case-studies';
import { ArrowRight, TrendingUp, Award, Target } from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Fixed Navbar Overlap */}
      <section className="pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-teal-500 rounded-full blur-[120px] sm:blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-cyan-400 rounded-full blur-[120px] sm:blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm sm:text-base font-black mb-4 sm:mb-6 border border-teal-500/30">
              Success Stories
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 leading-tight">
              Real Results, Real Impact
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-semibold leading-relaxed">
              Explore how we've helped businesses achieve remarkable growth through 
              innovative digital solutions and strategic execution
            </p>
          </motion.div>

          {/* Quick Stats - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16"
          >
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400 mx-auto mb-2" strokeWidth={2.5} />
              <div className="text-3xl sm:text-4xl font-black text-teal-400 mb-1 sm:mb-2">300%</div>
              <div className="text-xs sm:text-sm text-gray-300 font-bold">Avg Growth</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400 mx-auto mb-2" strokeWidth={2.5} />
              <div className="text-3xl sm:text-4xl font-black text-teal-400 mb-1 sm:mb-2">500+</div>
              <div className="text-xs sm:text-sm text-gray-300 font-bold">Projects Done</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400 mx-auto mb-2" strokeWidth={2.5} />
              <div className="text-3xl sm:text-4xl font-black text-teal-400 mb-1 sm:mb-2">98%</div>
              <div className="text-xs sm:text-sm text-gray-300 font-bold">Success Rate</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-3xl sm:text-4xl font-black text-teal-400 mb-1 sm:mb-2">50M+</div>
              <div className="text-xs sm:text-sm text-gray-300 font-bold">Revenue</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-100"
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  
                  {/* Industry Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-bold rounded-full border border-white/20">
                      {study.industry}
                    </span>
                  </div>

                  {/* Client */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <p className="text-teal-300 font-bold text-xs sm:text-sm mb-1">CLIENT</p>
                    <p className="text-white text-lg sm:text-xl font-black truncate">{study.client}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-6 line-clamp-2 font-semibold">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                    {study.results.slice(0, 3).map((result, i) => (
                      <div key={i} className="text-center bg-teal-50 rounded-xl p-3">
                        <div className="text-xl sm:text-2xl font-black text-teal-600 mb-1">
                          {result.value}
                        </div>
                        <div className="text-xs text-slate-600 font-bold line-clamp-1">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center text-teal-600 font-black group-hover:gap-3 gap-2 transition-all text-sm sm:text-base"
                  >
                    Read Case Study
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 font-semibold max-w-2xl mx-auto">
              Let's create measurable results for your business
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 bg-white text-teal-600 rounded-xl hover:bg-cream-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-100 font-black text-sm sm:text-base"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
