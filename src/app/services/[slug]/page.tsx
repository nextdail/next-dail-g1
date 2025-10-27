'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { services } from '../../../data/services';
import { formatWhatsAppLink } from '../../../lib/utils';
import { BUSINESS_INFO } from '../../../lib/constants';

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/services" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-6 font-bold">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Services
              </Link>
              
              <span className="inline-block px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm font-bold mb-4">
                {service.category}
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
                {service.name}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 font-semibold leading-relaxed">
                {service.description}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg">
                  <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold">Proven Results</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg">
                  <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span className="font-bold">Expert Team</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg">
                  <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold">Fast Delivery</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={formatWhatsAppLink(BUSINESS_INFO.whatsapp, `Hi, I'm interested in ${service.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-xl hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-black text-base"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl font-black text-base"
                >
                  Get a Quote
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-slate-600 font-semibold">
              Comprehensive features designed for maximum impact
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-slate-900 font-bold flex-1">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {service.pricing && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-slate-600 font-semibold">
                Choose a plan that fits your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Starter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-teal-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-black text-slate-900 mb-2">Starter</h3>
                <p className="text-slate-600 mb-6 font-semibold">Perfect for small businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-slate-900">₹{(service.pricing.starter / 1000).toFixed(0)}K</span>
                  <span className="text-slate-600 ml-2 font-semibold">/ project</span>
                </div>
                <a
                  href={formatWhatsAppLink(BUSINESS_INFO.whatsapp, `I'm interested in the Starter plan for ${service.name}`)}
                  className="block w-full px-6 py-3 bg-gray-100 text-slate-900 rounded-xl hover:bg-gray-200 transition-all text-center font-black"
                >
                  Get Started
                </a>
              </motion.div>

              {/* Professional - Featured */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-teal-500 rounded-3xl p-8 shadow-2xl scale-105 relative"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-slate-900 rounded-full text-sm font-black">
                  POPULAR
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Professional</h3>
                <p className="text-teal-100 mb-6 font-semibold">Most chosen by businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-white">₹{(service.pricing.professional / 1000).toFixed(0)}K</span>
                  <span className="text-teal-100 ml-2 font-semibold">/ project</span>
                </div>
                <a
                  href={formatWhatsAppLink(BUSINESS_INFO.whatsapp, `I'm interested in the Professional plan for ${service.name}`)}
                  className="block w-full px-6 py-3 bg-white text-teal-600 rounded-xl hover:bg-gray-100 transition-all text-center font-black"
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
                className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-teal-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-black text-slate-900 mb-2">Enterprise</h3>
                <p className="text-slate-600 mb-6 font-semibold">For large-scale projects</p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-slate-900">₹{(service.pricing.enterprise / 1000).toFixed(0)}K</span>
                  <span className="text-slate-600 ml-2 font-semibold">/ project</span>
                </div>
                <a
                  href={formatWhatsAppLink(BUSINESS_INFO.whatsapp, `I'm interested in the Enterprise plan for ${service.name}`)}
                  className="block w-full px-6 py-3 bg-gray-100 text-slate-900 rounded-xl hover:bg-gray-200 transition-all text-center font-black"
                >
                  Get Started
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-cream-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                Related Services
              </h2>
              <p className="text-xl text-slate-600 font-semibold">
                Other services you might be interested in
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((related) => (
                <Link key={related.id} href={`/services/${related.slug}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative h-48">
                      <Image
                        src={related.image}
                        alt={related.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-black text-slate-900 mb-2">{related.name}</h3>
                      <p className="text-slate-600 font-semibold">{related.description}</p>
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
