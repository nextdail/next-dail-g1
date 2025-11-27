'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'CEO',
    company: 'TechStart India',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150',
    content: 'Next Dail transformed our digital presence completely. Their SEO strategies increased our organic traffic by 300% in just 6 months. The team is professional, responsive, and truly understands business needs.',
    rating: 5,
    result: '300% Traffic Growth',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Marketing Director',
    company: 'Fashion Hub',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150',
    content: 'The e-commerce platform they built for us is incredible. Sales have doubled, customer engagement is through the roof, and the user experience is seamless. Best investment we made this year!',
    rating: 5,
    result: '200% Sales Increase',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Founder',
    company: 'HealthTech Solutions',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150',
    content: 'Outstanding service! They developed our mobile app from scratch with excellent support throughout. The app has over 50,000 downloads now and users love it. Highly recommend their development team.',
    rating: 5,
    result: '50K+ Downloads',
  },
  {
    id: 4,
    name: 'Sneha Gupta',
    role: 'Operations Manager',
    company: 'Retail Plus',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150',
    content: 'Their social media marketing campaigns generated amazing ROI. We saw a 250% increase in engagement and significant boost in sales. The strategic approach and creativity are unmatched!',
    rating: 5,
    result: '250% Engagement',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Premium Animated Background - RED GRADIENTS */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-red-500/25 to-transparent rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-orange-500/20 to-transparent rounded-full blur-[150px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - RED ACCENTS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
        >
          <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-black mb-4 shadow-lg border border-red-400/30">
            🔥 Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 px-4">
            What Our <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-semibold px-4">
            Real success stories from businesses we've transformed
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Testimonial Card - RED THEME */}
          <div className="relative min-h-[350px] sm:min-h-[400px] lg:min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl lg:rounded-4xl p-6 sm:p-8 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.4)] border-2 border-red-500/30 hover:border-red-400/60 transition-all duration-300 hover:shadow-[0_20px_80px_rgba(239,68,68,0.3)]"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {/* Red accent bar - TOP */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-4xl" />
                
                {/* Stars - Keep Yellow */}
                <div className="flex items-center gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote - RED ACCENT */}
                <div className="relative mb-6 sm:mb-8">
                  <svg className="absolute -top-2 sm:-top-4 -left-1 sm:-left-2 w-10 h-10 sm:w-12 sm:h-12 text-red-400/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-base sm:text-lg lg:text-2xl leading-relaxed sm:leading-relaxed lg:leading-relaxed text-white pl-6 sm:pl-8 font-semibold">
                    "{testimonials[activeIndex].content}"
                  </p>
                </div>

                {/* Author Info - RED THEME */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-white/10">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ring-4 ring-red-500/40 flex-shrink-0 group-hover:ring-red-400/60 transition-all">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-black text-white mb-1">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 mb-2 font-bold">
                      {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-full border border-red-400/40 shadow-lg">
                      <svg className="w-4 h-4 text-red-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-red-200 text-xs sm:text-sm font-black">
                        {testimonials[activeIndex].result}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots - RED THEME */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`transition-all duration-300 rounded-full active:scale-95 ${
                  index === activeIndex
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 w-10 sm:w-12 h-2.5 shadow-lg shadow-red-500/40'
                    : 'bg-white/30 hover:bg-red-400/50 w-2.5 h-2.5'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Grid - RED ACCENTS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-10 sm:mt-12 lg:mt-14">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`group p-3 sm:p-4 lg:p-6 rounded-2xl transition-all duration-300 active:scale-95 ${
                  index === activeIndex
                    ? 'bg-gradient-to-br from-red-500/30 to-orange-500/30 ring-2 ring-red-500 scale-105 shadow-lg shadow-red-500/30'
                    : 'bg-white/5 hover:bg-red-500/10 border border-red-500/20 hover:border-red-400/40'
                }`}
              >
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 rounded-xl overflow-hidden ring-2 ring-red-400/30 group-hover:ring-red-400/60 transition-all">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs sm:text-sm font-bold text-center truncate text-white group-hover:text-red-300 transition-colors">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-400 text-center truncate mt-0.5">
                  {testimonial.company}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
