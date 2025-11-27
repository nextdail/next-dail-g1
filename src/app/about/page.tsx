'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { teamMembers } from '../../data/team';

const timeline = [
  { year: '2014', title: 'Company Founded', description: 'Started with a vision to transform digital experiences' },
  { year: '2016', title: 'Expanded Services', description: 'Added mobile app development and cloud solutions' },
  { year: '2018', title: '100+ Projects', description: 'Reached milestone of 100 successful projects delivered' },
  { year: '2020', title: 'National Recognition', description: 'Won Best Digital Agency award in India' },
  { year: '2023', title: '500+ Clients', description: 'Serving businesses across multiple countries' },
  { year: '2024', title: 'Innovation Hub', description: 'Launched AI-powered digital solutions division' },
];

const values = [
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'We strive for perfection in every project, delivering exceptional quality that exceeds expectations',
  },
  {
    icon: '🤝',
    title: 'Trust',
    description: 'Building long-term relationships through transparency, honesty, and reliable service',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Constantly evolving with cutting-edge technologies to stay ahead of industry trends',
  },
  {
    icon: '⚡',
    title: 'Speed',
    description: 'Fast turnaround times without compromising on quality or attention to detail',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - RED THEME */}
      <section className="pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-red-500 rounded-full blur-[120px] sm:blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-orange-500 rounded-full blur-[120px] sm:blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-300 rounded-full text-sm sm:text-base font-black mb-4 sm:mb-6 border border-red-500/30">
              About Us
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 leading-tight">
              Building Digital Success Since 2014
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-semibold">
              We're a passionate team of digital innovators dedicated to transforming 
              businesses through cutting-edge technology and creative excellence
            </p>
          </motion.div>

          {/* Stats - RED ACCENTS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16"
          >
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-red-500/30">
              <div className="text-3xl sm:text-4xl font-black text-red-400 mb-2">10+</div>
              <div className="text-xs sm:text-sm text-gray-300 font-bold">Years Experience</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-red-500/30">
              <div className="text-3xl sm:text-4xl font-black text-red-400 mb-2">500+</div>
              <div className="text-xs sm:text-sm text-gray-300 font-bold">Happy Clients</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-red-500/30">
              <div className="text-3xl sm:text-4xl font-black text-red-400 mb-2">50+</div>
              <div className="text-xs sm:text-sm text-gray-300 font-bold">Team Members</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-red-500/30">
              <div className="text-3xl sm:text-4xl font-black text-red-400 mb-2">98%</div>
              <div className="text-xs sm:text-sm text-gray-300 font-bold">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - RED THEME */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-red-50/30 to-orange-50/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl border-2 border-red-100/50 hover:shadow-2xl hover:shadow-red-500/10 transition-all"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 sm:mb-4">Our Mission</h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-semibold">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance customer experiences, and create lasting impact in the digital landscape. 
                We believe every business deserves world-class digital presence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl border-2 border-red-100/50 hover:shadow-2xl hover:shadow-red-500/10 transition-all"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 sm:mb-4">Our Vision</h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-semibold">
                To be the leading digital transformation partner, recognized globally for 
                excellence, innovation, and results. We envision a future where every business 
                leverages technology to its fullest potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline - RED THEME */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-3 sm:mb-4">
              Our <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-semibold">
              A decade of growth, innovation, and success
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-6 sm:pl-8 pb-8 sm:pb-12 border-l-2 sm:border-l-4 border-gradient-to-b from-red-500 to-orange-500 last:pb-0"
                style={{ borderImage: 'linear-gradient(to bottom, #ef4444, #f97316) 1' }}
              >
                <div className="absolute -left-2 sm:-left-3 top-0 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-full border-2 sm:border-4 border-white shadow-lg shadow-red-500/30" />
                <div className="bg-gradient-to-br from-red-50 to-orange-50/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-lg hover:shadow-red-500/20 transition-all border border-red-100/50">
                  <div className="text-xl sm:text-2xl font-black text-red-600 mb-2">{item.year}</div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 font-semibold">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values - RED ACCENTS */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-red-50/30 to-orange-50/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-3 sm:mb-4">
              Our Core <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-semibold">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 text-center border-2 border-red-100/50 group"
              >
                <div className="text-5xl sm:text-6xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 group-hover:text-red-600 transition-colors">{value.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - RED THEME */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-3 sm:mb-4">
              Meet Our <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-semibold">
              The talented people behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border-2 border-red-100/50"
              >
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                  {/* Red gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-1">{member.name}</h3>
                    <p className="text-red-300 font-bold text-sm sm:text-base mb-3">{member.role}</p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white hover:text-red-300 transition-colors text-sm sm:text-base active:scale-95"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                        <span className="font-bold">Connect</span>
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-sm sm:text-base text-slate-600 mb-4 font-semibold leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-gradient-to-r from-red-50 to-orange-50 text-red-700 rounded-full text-xs sm:text-sm font-bold border border-red-200/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - RED GRADIENT */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-red-500 via-red-600 to-orange-500 text-white relative overflow-hidden">
        {/* Animated background */}
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 font-semibold max-w-2xl mx-auto">
              Let's work together to transform your business with innovative digital solutions
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 bg-white text-red-600 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-100 font-black text-base sm:text-lg"
            >
              Get in Touch
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
