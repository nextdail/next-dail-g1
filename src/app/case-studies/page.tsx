'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { caseStudies } from '../../data/case-studies';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-base font-bold mb-6">
              Success Stories
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Real Results, Real Impact
            </h1>
            <p className="text-xl text-gray-300 font-semibold leading-relaxed">
              Explore how we've helped businesses achieve remarkable growth through 
              innovative digital solutions and strategic execution
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            <div className="text-center">
              <div className="text-4xl font-black text-teal-400 mb-2">300%</div>
              <div className="text-gray-300 font-bold">Avg Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-teal-400 mb-2">500+</div>
              <div className="text-gray-300 font-bold">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-teal-400 mb-2">98%</div>
              <div className="text-gray-300 font-bold">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-teal-400 mb-2">50M+</div>
              <div className="text-gray-300 font-bold">Revenue Generated</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Industry Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-sm font-bold rounded-full border border-white/20">
                      {study.industry}
                    </span>
                  </div>

                  {/* Client */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-teal-300 font-bold text-sm mb-1">CLIENT</p>
                    <p className="text-white text-xl font-black">{study.client}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-slate-600 mb-6 line-clamp-2 font-semibold">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.slice(0, 3).map((result, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-black text-teal-600 mb-1">
                          {result.value}
                        </div>
                        <div className="text-xs text-slate-600 font-bold">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center text-teal-600 font-black group-hover:gap-3 gap-2 transition-all text-base"
                  >
                    Read Case Study
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-teal-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90 font-semibold max-w-2xl mx-auto">
              Let's create measurable results for your business
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-teal-600 rounded-xl hover:bg-cream-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-black text-base"
            >
              Start Your Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
