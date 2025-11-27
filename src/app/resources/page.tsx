'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { resources, externalTools } from '../../data/resources';
import { Download, ExternalLink, Sparkles } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - RED THEME */}
      <section className="pt-28 sm:pt-32 lg:pt-40 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-300 rounded-full text-base font-black mb-6 border border-red-500/30">
              🎁 Free Resources
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Tools & Resources for <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Success</span>
            </h1>
            <p className="text-xl text-gray-300 font-semibold leading-relaxed">
              Download free guides, templates, and access powerful tools to grow your business
            </p>

            {/* Stats - NEW */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-red-500/30">
                <div className="text-3xl font-black text-red-400 mb-1">20+</div>
                <div className="text-sm text-gray-300 font-bold">Free Downloads</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-red-500/30">
                <div className="text-3xl font-black text-red-400 mb-1">50+</div>
                <div className="text-sm text-gray-300 font-bold">Tools Listed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-red-500/30">
                <div className="text-3xl font-black text-red-400 mb-1">100%</div>
                <div className="text-sm text-gray-300 font-bold">Free Access</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Downloads - RED THEME */}
      <section className="py-20 bg-gradient-to-b from-red-50/30 to-orange-50/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-black mb-4 shadow-lg">
              <Download className="w-4 h-4" strokeWidth={3} />
              LIMITED TIME OFFER
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Free <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">Downloads</span>
            </h2>
            <p className="text-xl text-slate-600 font-semibold">
              Exclusive resources to boost your digital presence - Worth $500+
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group border-2 border-red-100/50 hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Red overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-black rounded-full uppercase shadow-lg border border-yellow-300">
                      {resource.type}
                    </span>
                  </div>

                  {/* Free Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-green-500 text-white text-xs font-black rounded-full shadow-lg">
                      100% FREE
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600 mb-4 font-semibold">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-red-100">
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-bold">
                      <Download className="w-4 h-4 text-red-500" strokeWidth={2.5} />
                      {resource.fileSize}
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all font-black shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" strokeWidth={2.5} />
                    Download Free Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Tools - RED THEME */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-black mb-4 border border-red-200">
              <Sparkles className="w-4 h-4" strokeWidth={3} />
              HAND-PICKED
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Recommended <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">Tools</span>
            </h2>
            <p className="text-xl text-slate-600 font-semibold">
              Powerful tools we use and recommend to our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalTools.map((tool, index) => (
              <motion.a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-red-50 to-orange-50/50 rounded-2xl hover:shadow-lg hover:shadow-red-500/20 transition-all group border-2 border-red-100/50 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md ring-2 ring-red-100 group-hover:ring-red-300 transition-all">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-red-600 transition-colors">{tool.name}</h3>
                    {tool.isPaid && (
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-bold rounded border border-yellow-300">
                        PAID
                      </span>
                    )}
                    {!tool.isPaid && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded border border-green-300">
                        FREE
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 font-semibold mb-2">
                    {tool.description}
                  </p>
                  <span className="inline-block px-2 py-1 text-xs text-red-700 font-bold uppercase bg-red-100 rounded border border-red-200">
                    {tool.category}
                  </span>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all flex-shrink-0" strokeWidth={2.5} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - NEW */}
      <section className="py-20 bg-gradient-to-br from-red-500 via-red-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Need Custom Resources?
            </h2>
            <p className="text-xl mb-8 opacity-90 font-semibold max-w-2xl mx-auto">
              We can create custom templates, guides, and tools specifically for your business needs
            </p>
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-red-600 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-100 font-black text-base">
              Request Custom Resource
              <ExternalLink className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
