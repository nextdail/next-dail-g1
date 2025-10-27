'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  {
    icon: '📊',
    title: 'Data-Driven Results',
    description: 'Every decision backed by analytics and measurable outcomes that drive real business growth',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400',
    stat: '150% Avg ROI',
  },
  {
    icon: '👥',
    title: 'Expert Team',
    description: '50+ certified professionals with deep expertise across all digital disciplines',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400',
    stat: '10+ Years Exp',
  },
  {
    icon: '🎯',
    title: 'Proven Process',
    description: 'Time-tested 5-step methodology delivering consistent success across industries',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400',
    stat: '98% Success Rate',
  },
  {
    icon: '⚡',
    title: 'Fast Delivery',
    description: 'Efficient project execution without compromising quality or attention to detail',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400',
    stat: '2-4 Week Launch',
  },
  {
    icon: '💎',
    title: 'Premium Quality',
    description: 'Award-winning design and development that captivates users and drives conversions',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400',
    stat: '4.9/5 Rating',
  },
  {
    icon: '🔒',
    title: '24/7 Support',
    description: 'Always available for your business needs, emergencies, and ongoing optimization',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400',
    stat: 'Round the Clock',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-white to-teal-50/40" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-teal-400/15 to-transparent rounded-full blur-[160px] animate-float" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tl from-brown-500/10 to-transparent rounded-full blur-[160px] animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
        >
          <span className="inline-block px-5 py-2.5 bg-teal-500/10 text-teal-700 rounded-full text-sm font-black mb-4 sm:mb-6 shadow-sm border border-teal-500/20">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 mb-4 sm:mb-6 px-4">
            Why Choose Next Dail?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-semibold px-4">
            Experience the difference that expertise, dedication, and innovation make 
            in transforming your digital presence
          </p>
        </motion.div>

        {/* Benefits Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 hover:border-teal-500/30">
                {/* Image with Overlay - Mobile Height */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                  
                  {/* Icon Badge - Responsive Size */}
                  <div className="absolute top-4 left-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl flex items-center justify-center text-3xl sm:text-4xl border border-white/30 shadow-xl">
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Stat Badge - Responsive */}
                  <div className="absolute bottom-4 right-4">
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-teal-500 backdrop-blur-md text-white text-xs font-black rounded-full shadow-lg">
                      {benefit.stat}
                    </div>
                  </div>
                </div>

                {/* Content - Mobile Padding */}
                <div className="p-5 sm:p-6 lg:p-8">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <p className="text-base sm:text-lg text-slate-600 mb-6 font-semibold px-4">
            Ready to experience the Next Dail difference?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-500 text-white rounded-xl sm:rounded-2xl hover:from-teal-600 hover:via-teal-700 hover:to-teal-600 transition-all duration-300 shadow-[0_10px_30px_rgba(33,128,141,0.3)] hover:shadow-[0_15px_40px_rgba(33,128,141,0.4)] hover:scale-105 active:scale-100 font-black text-base sm:text-lg relative overflow-hidden group"
          >
            <span className="relative z-10">Start Your Project</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
