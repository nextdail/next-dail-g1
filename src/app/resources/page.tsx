'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { resources, externalTools } from '../../data/resources';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - ONLY FIXED NAVBAR SPACING */}
      <section className="pt-28 sm:pt-32 lg:pt-40 pb-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-base font-bold mb-6">
              Free Resources
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Tools & Resources for Success
            </h1>
            <p className="text-xl text-gray-300 font-semibold leading-relaxed">
              Download free guides, templates, and access powerful tools to grow your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Free Downloads
            </h2>
            <p className="text-xl text-slate-600 font-semibold">
              Exclusive resources to boost your digital presence
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
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative h-48">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-teal-700 text-xs font-bold rounded-full uppercase">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600 mb-4 font-semibold">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-slate-600 font-bold">{resource.fileSize}</span>
                  </div>
                  <button className="w-full px-6 py-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-all font-black">
                    Download Free
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Tools */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Recommended Tools
            </h2>
            <p className="text-xl text-slate-600 font-semibold">
              Powerful tools we use and recommend
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
                className="flex items-start gap-4 p-6 bg-cream-50 rounded-2xl hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
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
                    <h3 className="text-lg font-black text-slate-900">{tool.name}</h3>
                    {tool.isPaid && (
                      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs font-bold rounded">
                        PAID
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 font-semibold mb-2">
                    {tool.description}
                  </p>
                  <span className="text-xs text-teal-600 font-bold uppercase">
                    {tool.category}
                  </span>
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
