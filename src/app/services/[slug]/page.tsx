'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { services } from '../../../data/services';
import { formatWhatsAppLink } from '../../../lib/utils';
import { BUSINESS_INFO } from '../../../lib/constants';
import { ArrowLeft, Check, MessageCircle, ArrowRight, Rocket } from 'lucide-react';

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  // VERY COMPETITIVE Kolkata Market Pricing (60% lower)
  const getCompetitivePrice = (originalPrice: number) => {
    return Math.floor(originalPrice * 0.4); // 60% discount
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - RED THEME */}
      <section className="pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern - RED */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-red-500 rounded-full blur-[120px] sm:blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-orange-500 rounded-full blur-[120px] sm:blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/services" className="inline-flex items-center text-red-400 hover:text-red-300 mb-4 sm:mb-6 font-bold text-sm sm:text-base transition-colors">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" strokeWidth={2.5} />
                Back to Services
              </Link>
              
              <div className="flex items-center gap-3 mb-3 sm:mb-4 flex-wrap">
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-red-500/20 text-red-300 rounded-full text-xs sm:text-sm font-black border border-red-500/30">
                  {service.category}
                </span>
                {/* Special Offer Badge - ENHANCED */}
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-xs sm:text-sm font-black animate-pulse shadow-lg border border-yellow-300">
                  🔥 60% OFF - Limited Time
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 leading-tight">
                {service.name}
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 font-semibold leading-relaxed">
                {service.description}
              </p>

              {/* Quick Stats - RED THEME */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-red-500/30">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" strokeWidth={3} />
                  <span className="font-bold text-xs sm:text-sm">Proven Results</span>
                </div>
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-red-500/30">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span className="font-bold text-xs sm:text-sm">Expert Team</span>
                </div>
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-red-500/30">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" strokeWidth={3} />
                  <span className="font-bold text-xs sm:text-sm">Fast Delivery</span>
                </div>
              </div>

              {/* CTA Buttons - Mobile Stack */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={formatWhatsAppLink(BUSINESS_INFO.whatsapp, `Hi, I'm interested in ${service.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 bg-[#25D366] text-white rounded-xl hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 font-black text-sm sm:text-base"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                  Chat on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-black text-sm sm:text-base border border-red-400/30"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 sm:h-80 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-red-500/30"
            >
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
              />
              {/* Discount Badge Overlay - ENHANCED */}
              <div className="absolute top-4 right-4">
                <div className="px-5 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-lg font-black rounded-full shadow-2xl animate-pulse border-2 border-yellow-300">
                  🔥 60% OFF
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - RED THEME */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-red-50/30 to-orange-50/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-3 sm:mb-4">
              What's <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">Included</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-semibold">
              Comprehensive features designed for maximum impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 border-2 border-red-100/50 group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-sm sm:text-base text-slate-900 font-bold flex-1 group-hover:text-red-600 transition-colors">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - RED THEME */}
      {service.pricing && (
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12 lg:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white rounded-full text-sm font-black shadow-xl mb-4 border-2 border-yellow-300">
                <span className="text-lg">🔥</span>
                Special Limited Time Offer - 60% OFF
                <span className="text-lg">🔥</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-3 sm:mb-4">
                Transparent <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-semibold">
                Choose a plan that fits your needs - Now at unbeatable prices
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {/* Starter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-red-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-red-300 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">Starter</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-6 font-semibold">Perfect for small businesses</p>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl sm:text-4xl font-black text-red-600">
                      ₹{(getCompetitivePrice(service.pricing.starter) / 1000).toFixed(1)}K
                    </span>
                    <span className="text-lg text-slate-400 line-through font-semibold">
                      ₹{(service.pricing.starter / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-green-600 font-black bg-green-50 px-2 py-1 rounded-full">Save ₹{((service.pricing.starter - getCompetitivePrice(service.pricing.starter)) / 1000).toFixed(1)}K</span>
                </div>
                <a
                  href={formatWhatsAppLink(BUSINESS_INFO.whatsapp, `I'm interested in the Starter plan for ${service.name}`)}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-red-50 to-orange-50 text-red-700 border-2 border-red-200 rounded-xl hover:bg-red-100 transition-all text-center font-black text-sm sm:text-base active:scale-95"
                >
                  Get Started
                </a>
              </motion.div>

              {/* Professional - Featured - RED GRADIENT */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-red-500 via-red-600 to-orange-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl md:scale-105 relative border-2 border-yellow-300"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1.5 bg-yellow-400 text-slate-900 rounded-full text-xs sm:text-sm font-black shadow-lg">
                  ⭐ MOST POPULAR ⭐
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">Professional</h3>
                <p className="text-sm sm:text-base text-white/90 mb-6 font-semibold">Most chosen by businesses</p>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl sm:text-4xl font-black text-white">
                      ₹{(getCompetitivePrice(service.pricing.professional) / 1000).toFixed(1)}K
                    </span>
                    <span className="text-lg text-white/75 line-through font-semibold">
                      ₹{(service.pricing.professional / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-yellow-300 font-black bg-white/20 px-2 py-1 rounded-full">Save ₹{((service.pricing.professional - getCompetitivePrice(service.pricing.professional)) / 1000).toFixed(1)}K</span>
                </div>
                <a
                  href={formatWhatsAppLink(BUSINESS_INFO.whatsapp, `I'm interested in the Professional plan for ${service.name}`)}
                  className="block w-full px-6 py-3 bg-white text-red-600 rounded-xl hover:bg-gray-100 transition-all text-center font-black text-sm sm:text-base active:scale-95 shadow-lg"
                >
                  Get Started
                </a>
              </motion.div>

              {/* Enterprise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white border-2 border-red-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-red-300 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">Enterprise</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-6 font-semibold">For large-scale projects</p>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl sm:text-4xl font-black text-red-600">
                      ₹{(getCompetitivePrice(service.pricing.enterprise) / 1000).toFixed(1)}K
                    </span>
                    <span className="text-lg text-slate-400 line-through font-semibold">
                      ₹{(service.pricing.enterprise / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-green-600 font-black bg-green-50 px-2 py-1 rounded-full">Save ₹{((service.pricing.enterprise - getCompetitivePrice(service.pricing.enterprise)) / 1000).toFixed(1)}K</span>
                </div>
                <a
                  href={formatWhatsAppLink(BUSINESS_INFO.whatsapp, `I'm interested in the Enterprise plan for ${service.name}`)}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-red-50 to-orange-50 text-red-700 border-2 border-red-200 rounded-xl hover:bg-red-100 transition-all text-center font-black text-sm sm:text-base active:scale-95"
                >
                  Get Started
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Related Services - RED THEME */}
      {relatedServices.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-red-50/30 to-orange-50/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12 lg:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-3 sm:mb-4">
                Related <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-semibold">
                Other services you might be interested in
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedServices.map((related) => (
                <Link key={related.id} href={`/services/${related.slug}`}>
                  <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-2 border-2 border-red-100/50">
                    <div className="relative h-44 sm:h-48">
                      <Image
                        src={related.image}
                        alt={related.name}
                        fill
                        className="object-cover"
                      />
                      {/* Discount Badge */}
                      <div className="absolute top-3 right-3">
                        <div className="px-3 py-1.5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-black rounded-full shadow-lg border border-yellow-300">
                          60% OFF
                        </div>
                      </div>
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 hover:text-red-600 transition-colors">{related.name}</h3>
                      <p className="text-sm sm:text-base text-slate-600 font-semibold line-clamp-2">{related.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
