'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'Deep dive into your business goals, target audience, and competitive landscape to create a tailored strategy.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300',
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Create wireframes, mockups, and prototypes that align with your brand and user experience goals.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300',
  },
  {
    number: '03',
    title: 'Development & Build',
    description: 'Transform designs into functional, scalable solutions using cutting-edge technologies and best practices.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300',
  },
  {
    number: '04',
    title: 'Testing & Quality',
    description: 'Rigorous testing across devices, browsers, and scenarios to ensure flawless performance.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300',
  },
  {
    number: '05',
    title: 'Launch & Support',
    description: 'Strategic deployment and ongoing optimization to maximize results and ensure long-term success.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-red-50/20 to-orange-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - RED ACCENTS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-black mb-4 shadow-lg">
            🔥 Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Our <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">Proven Process</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-semibold leading-relaxed">
            A systematic approach that delivers consistent results and exceeds expectations
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Timeline Line - RED GRADIENT */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-orange-500 to-red-600 -translate-x-1/2 rounded-full shadow-lg shadow-red-500/30" />

          {/* Mobile Timeline Line - RED GRADIENT */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-orange-600" />

          {/* Process Steps */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Mobile Layout - RED ACCENTS */}
                <div className="lg:hidden flex gap-6">
                  {/* Mobile Timeline Dot - RED */}
                  <div className="flex-shrink-0 w-12 flex justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full border-4 border-white shadow-lg shadow-red-500/30 flex items-center justify-center">
                      <span className="text-white font-black text-sm">{step.number}</span>
                    </div>
                  </div>

                  {/* Mobile Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-100/50 hover:shadow-xl hover:shadow-red-500/10 transition-all">
                      <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-black/30 to-transparent" />
                        {/* Number badge on mobile */}
                        <div className="absolute bottom-3 left-3">
                          <div className="w-10 h-10 bg-red-500/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <span className="text-white font-black text-sm">{step.number}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 font-semibold leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - RED ACCENTS */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content Side */}
                  <div className={`${index % 2 === 0 ? 'text-right pr-16' : 'pl-16 order-2'}`}>
                    <div className="inline-block mb-4">
                      <span className="text-7xl font-black text-red-500/15">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-lg font-semibold leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Image Side - RED ACCENTS */}
                  <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                    <div className="relative h-72 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(239,68,68,0.2)] group border-2 border-red-100/50 hover:border-red-300/60 transition-all">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 via-black/20 to-transparent" />
                      {/* Number Badge on Image - RED */}
                      <div className="absolute bottom-6 left-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-white/30 shadow-xl shadow-red-500/40">
                          <span className="text-white font-black text-2xl">{step.number}</span>
                        </div>
                      </div>
                      {/* RED glow overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/10 group-hover:to-orange-500/10 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Desktop Timeline Dot - RED */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full border-4 border-white shadow-xl shadow-red-500/40" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA - RED BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <p className="text-slate-600 font-semibold mb-6 text-lg">
            Ready to start your project?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:scale-105 font-black text-base"
          >
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
