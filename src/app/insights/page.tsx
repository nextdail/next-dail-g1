'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blog-posts';
import { ArrowRight, BookOpen, Clock, User, Mail } from 'lucide-react';

const categories = ['All', 'SEO', 'Web Development', 'Social Media', 'Marketing'];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Fixed Navbar Overlap */}
      <section className="pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-teal-500 rounded-full blur-[120px] sm:blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-purple-500 rounded-full blur-[120px] sm:blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm sm:text-base font-black mb-4 sm:mb-6 border border-teal-500/30"
            >
              <BookOpen className="w-4 h-4" strokeWidth={3} />
              Insights & Tips
            </motion.div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 leading-tight">
              Learn from Industry Experts
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-semibold leading-relaxed">
              Stay ahead with the latest digital marketing trends, strategies, 
              and actionable insights from our team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories - Mobile Scroll */}
          <div className="mb-12 sm:mb-16">
            <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar">
              <div className="flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 min-w-max sm:min-w-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 bg-white text-slate-700 hover:bg-teal-50 shadow-md hover:shadow-lg whitespace-nowrap border border-slate-200"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post - Mobile Optimized */}
          {blogPosts[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 sm:mb-16"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2 border border-slate-100">
                <div className="relative h-64 sm:h-80 lg:h-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />
                </div>
                <div className="p-6 sm:p-8 lg:p-12">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full text-sm font-black mb-4 shadow-lg">
                    <BookOpen className="w-4 h-4" strokeWidth={3} />
                    FEATURED
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 sm:mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 font-semibold">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 pb-6 border-b border-slate-100">
                    <Image
                      src={blogPosts[0].author.image}
                      alt={blogPosts[0].author.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <p className="font-black text-slate-900">{blogPosts[0].author.name}</p>
                      <div className="flex items-center gap-2 text-sm text-slate-600 font-semibold">
                        <Clock className="w-4 h-4" strokeWidth={2.5} />
                        {blogPosts[0].readTime} min read
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/insights/${blogPosts[0].slug}`}
                    className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl hover:shadow-xl transition-all font-black text-sm sm:text-base shadow-lg active:scale-95"
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5" strokeWidth={3} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Blog Grid - Mobile Optimized */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/insights/${post.slug}`}>
                  <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-100">
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/95 backdrop-blur-md text-teal-700 text-xs sm:text-sm font-bold rounded-full shadow-lg">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 mb-4 line-clamp-2 font-semibold">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2">
                          <Image
                            src={post.author.image}
                            alt={post.author.name}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <span className="text-xs sm:text-sm font-bold text-slate-900">{post.author.name}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-slate-600 font-semibold">
                          <Clock className="w-4 h-4" strokeWidth={2.5} />
                          {post.readTime}m
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white text-center"
          >
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ 
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
              backgroundSize: '24px 24px' 
            }} />
            
            <div className="relative z-10">
              <Mail className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6" strokeWidth={2} />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4">
                Get Weekly Insights
              </h2>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-95 font-semibold max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest tips and strategies delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-5 sm:px-6 py-3 sm:py-4 rounded-xl text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
                />
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-600 rounded-xl hover:bg-gray-100 transition-all font-black whitespace-nowrap shadow-lg active:scale-95 text-sm sm:text-base">
                  Subscribe Now
                </button>
              </div>
              <p className="text-xs sm:text-sm mt-4 opacity-80 font-semibold">
                Join 10,000+ subscribers. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
