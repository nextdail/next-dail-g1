'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '../../lib/constants';
import { formatWhatsAppLink, formatPhoneLink, formatEmailLink } from '../../lib/utils';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-base font-bold mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl text-gray-300 font-semibold leading-relaxed">
              Have a project in mind? We'd love to hear from you. 
              Reach out and let's discuss how we can help grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-cream-50 p-8 sm:p-10 rounded-3xl shadow-xl">
                <h2 className="text-3xl font-black text-slate-900 mb-2">Send us a Message</h2>
                <p className="text-slate-600 mb-8 font-semibold">Fill out the form below and we'll get back to you within 24 hours</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors font-semibold text-slate-900"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors font-semibold text-slate-900"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors font-semibold text-slate-900"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-slate-900 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors font-semibold text-slate-900"
                    >
                      <option value="">Select a service</option>
                      <option value="SEO">SEO Optimization</option>
                      <option value="Website">Website Development</option>
                      <option value="Ecommerce">E-commerce</option>
                      <option value="App">App Development</option>
                      <option value="SMM">Social Media Marketing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors font-semibold text-slate-900 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-black text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border-2 border-green-500 rounded-xl">
                      <p className="text-green-700 font-bold text-center">
                        ✓ Message sent successfully! We'll get back to you soon.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 rounded-3xl text-white shadow-xl">
                <h3 className="text-2xl font-black mb-6">Quick Contact</h3>
                
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <a
                    href={formatWhatsAppLink(BUSINESS_INFO.whatsapp, 'Hi, I want to discuss a project')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all"
                  >
                    <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-sm opacity-90">WhatsApp</p>
                      <p className="text-lg font-black">{BUSINESS_INFO.whatsapp}</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={formatPhoneLink(BUSINESS_INFO.phone)}
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-sm opacity-90">Phone</p>
                      <p className="text-lg font-black">{BUSINESS_INFO.phone}</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={formatEmailLink(BUSINESS_INFO.email)}
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-sm opacity-90">Email</p>
                      <p className="text-lg font-black">{BUSINESS_INFO.email}</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="bg-cream-50 p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-black text-slate-900 mb-4">Visit Our Office</h3>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-black text-slate-900 mb-2">{BUSINESS_INFO.address}</p>
                    <p className="text-slate-600 font-semibold">
                      Office hours: Mon-Sat, 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-3xl overflow-hidden h-64 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-500/20 to-teal-700/20">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-teal-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-slate-700 font-black">Map Location</p>
                    <p className="text-slate-600 text-sm font-semibold">Kolkata, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
