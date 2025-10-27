'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { services } from '../../data/services';

const categories = [
  { id: 'all', name: 'All Services', count: 16 },
  { id: 'marketing', name: 'Marketing', count: 8 },
  { id: 'web', name: 'Web & E-commerce', count: 3 },
  { id: 'development', name: 'Development', count: 3 },
  { id: 'business', name: 'Business Tools', count: 2 },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brown-600/10 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-teal-500/10 text-teal-700 rounded-full text-base font-bold mb-6">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
              Complete Digital Solutions for Your Business Growth
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              From SEO to app development, we offer comprehensive digital services 
              that drive measurable results and accelerate your business success
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-black text-teal-600 mb-2">16+</div>
                <div className="text-sm font-bold text-slate-600">Services</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-black text-teal-600 mb-2">500+</div>
                <div className="text-sm font-bold text-slate-600">Projects</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-black text-teal-600 mb-2">98%</div>
                <div className="text-sm font-bold text-slate-600">Satisfaction</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-black text-teal-600 mb-2">10+</div>
                <div className="text-sm font-bold text-slate-600">Years</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-teal-500 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 hover:bg-teal-50 shadow-md hover:shadow-lg'
                }`}
              >
                {category.name}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
                  activeCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-teal-100 text-teal-700'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2">
                    {/* Service Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-sm font-bold rounded-full border border-white/20">
                          {service.category}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-4xl border border-white/20">
                          {service.icon}
                        </div>
                      </div>

                      {/* Pricing Badge */}
                      {service.pricing && (
                        <div className="absolute bottom-4 right-4">
                          <div className="px-4 py-2 bg-teal-500 backdrop-blur-md text-white text-sm font-bold rounded-full">
                            From ₹{(service.pricing.starter / 1000).toFixed(0)}K
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Service Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed font-semibold">
                        {service.description}
                      </p>
                      
                      {/* Features Preview */}
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-center text-sm font-semibold text-slate-600">
                            <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="flex items-center text-teal-600 font-black group-hover:gap-3 gap-2 transition-all text-base">
                        Learn More
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center bg-gradient-to-br from-teal-500 to-teal-700 rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 opacity-90 font-semibold">
              We offer custom solutions tailored to your unique needs
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-teal-600 rounded-xl hover:bg-cream-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-black text-base"
            >
              Contact Us for Custom Solutions
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
