'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { services } from '../../data/services';

export default function ServicesPreview() {
  const previewServices = services.slice(0, 6);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brown-600/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
            Our Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="servicesGrid">
          {previewServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => window.location.href = `/services/${service.slug}`}
              className="service-card-enhanced cursor-pointer"
            >
              {/* Gradient Top Bar */}
              <div className={`h-1.5 w-full ${
                service.category === 'marketing' ? 'bg-gradient-to-r from-blue-500 to-purple-600' :
                service.category === 'web' ? 'bg-gradient-to-r from-green-500 to-teal-600' :
                service.category === 'development' ? 'bg-gradient-to-r from-purple-500 to-pink-600' :
                'bg-gradient-to-r from-orange-500 to-red-600'
              }`} />

              {/* Service Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/30 shadow-lg uppercase tracking-wide">
                    {service.category}
                  </span>
                </div>

                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl border border-white/30 shadow-xl">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 bg-white">
                <h3 className="text-2xl font-black text-slate-900 mb-3 hover:text-teal-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed font-semibold">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600 font-semibold">
                      <span className="check-icon mr-2 mt-0.5 flex-shrink-0">✓</span>
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats & Pricing */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-100">
                  <div className="stats-badge flex items-center gap-2">
                    <span className="stats-icon">📈</span>
                    <span className="stats-text text-xs font-black text-teal-600">
                      {service.category === 'marketing' ? '150% Avg Growth' : 
                       service.category === 'web' ? '2.5s Load Time' :
                       service.category === 'development' ? '4.8★ Rating' : '400% Boost'}
                    </span>
                  </div>
                  {service.pricing && (
                    <div className="pricing-display">
                      <span className="price-label text-xs text-slate-500 font-bold">From</span>
                      <span className="price-amount text-lg font-black text-slate-900">
                        ₹{(service.pricing.starter / 1000).toFixed(0)}K
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="card-actions-new flex gap-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="btn-learn-more flex-1 px-4 py-3 bg-slate-900 text-white rounded-xl hover:bg-teal-600 transition-all font-bold text-sm text-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn More
                  </Link>
                  <a
                    href={`https://wa.me/919679654256?text=Hi, interested in ${service.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-new px-4 py-3 bg-[#25D366] text-white rounded-xl hover:bg-[#20BA5A] transition-all flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-2xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-100 font-black text-lg"
          >
            View All 16 Services
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .service-card-enhanced {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: all 0.5s ease;
        }
        .service-card-enhanced:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(33,128,141,0.15);
        }
        .check-icon {
          color: #14b8a6;
          font-weight: bold;
          font-size: 16px;
        }
      `}</style>
    </section>
  );
}
