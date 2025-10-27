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
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-300 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-base font-bold mb-6">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Building Digital Success Since 2014
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-semibold">
              We're a passionate team of digital innovators dedicated to transforming 
              businesses through cutting-edge technology and creative excellence
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            <div className="text-center">
              <div className="text-4xl font-black text-teal-400 mb-2">10+</div>
              <div className="text-gray-300 font-bold">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-teal-400 mb-2">500+</div>
              <div className="text-gray-300 font-bold">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-teal-400 mb-2">50+</div>
              <div className="text-gray-300 font-bold">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-teal-400 mb-2">98%</div>
              <div className="text-gray-300 font-bold">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-xl"
            >
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed font-semibold text-lg">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance customer experiences, and create lasting impact in the digital landscape. 
                We believe every business deserves world-class digital presence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-xl"
            >
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed font-semibold text-lg">
                To be the leading digital transformation partner, recognized globally for 
                excellence, innovation, and results. We envision a future where every business 
                leverages technology to its fullest potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600 font-semibold">
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
                className="relative pl-8 pb-12 border-l-4 border-teal-500 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-teal-500 rounded-full border-4 border-white shadow-lg" />
                <div className="bg-cream-50 p-6 rounded-2xl hover:shadow-lg transition-all">
                  <div className="text-2xl font-black text-teal-600 mb-2">{item.year}</div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 font-semibold">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 font-semibold">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 font-semibold leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 font-semibold">
              The talented people behind our success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-black text-white mb-1">{member.name}</h3>
                    <p className="text-teal-300 font-bold mb-3">{member.role}</p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white hover:text-teal-300 transition-colors"
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
                <div className="p-6">
                  <p className="text-slate-600 mb-4 font-semibold">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-bold">
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-teal-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 font-semibold max-w-2xl mx-auto">
              Let's work together to transform your business with innovative digital solutions
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-teal-600 rounded-xl hover:bg-cream-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-black text-base"
            >
              Get in Touch
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
