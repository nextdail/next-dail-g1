'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blog-posts';
import { ArrowRight, BookOpen, Clock, User, Mail, TrendingUp, Search, Star } from 'lucide-react';

const categories = ['All', 'SEO', 'Web Development', 'Social Media', 'Marketing', 'E-commerce', 'AI & Tech'];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - RED THEME + ENHANCED */}
      <section className="pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-300 rounded-full text-sm sm:text-base font-black mb-4 sm:mb-6 border border-red-500/30"
            >
              <BookOpen className="w-4 h-4" strokeWidth={3} />
              Expert Insights & Tips
            </motion.div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 leading-tight">
              Learn from <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Industry Experts</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-semibold leading-relaxed mb-8">
              Stay ahead with the latest digital marketing trends, strategies, 
              and actionable insights from our team
            </p>

            {/* Search Bar - NEW */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" strokeWidth={2.5} />
                <input
                  type="text"
                  placeholder="Search articles, topics, tips..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-red-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 font-semibold"
                />
              </div>
            </div>
          </motion.div>

          {/* Stats - NEW */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 max-w-3xl mx-auto"
          >
            <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-red-500/30">
              <div className="text-2xl sm:text-3xl font-black text-red-400 mb-1">150+</div>
              <div className="text-xs sm:text-sm text-gray-300 font-bold">Articles</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-red-500/30">
              <div className="text-2xl sm:text-3xl font-black text-red-400 mb-1">10K+</div>
              <div className="text-xs sm:text-sm text-gray-300 font-bold">Readers</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-xl p-4 border border-red-500/30">
              <div className="text-2xl sm:text-3xl font-black text-red-400 mb-1">50+</div>
              <div className="text-xs sm:text-sm text-gray-300 font-bold">Authors</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-red-50/30 to-orange-50/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories - RED THEME */}
          <div className="mb-12 sm:mb-16">
            <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar">
              <div className="flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 min-w-max sm:min-w-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30'
                        : 'bg-white text-slate-700 hover:bg-red-50 shadow-md hover:shadow-lg border border-red-100/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post - RED THEME */}
          {blogPosts[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 sm:mb-16"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2 border-2 border-red-100/50 hover:shadow-red-500/20 transition-all">
                <div className="relative h-64 sm:h-80 lg:h-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden" />
                  {/* Featured Badge - RED */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-black shadow-xl border border-yellow-300">
                      <Star className="w-4 h-4" strokeWidth={3} fill="currentColor" />
                      FEATURED
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 lg:p-12">
                  <div className="inline-block px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-bold mb-4 border border-red-200">
                    {blogPosts[0].category}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 sm:mb-4 hover:text-red-600 transition-colors">
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
                      className="rounded-full ring-2 ring-red-200"
                    />
                    <div className="flex-1">
                      <p className="font-black text-slate-900">{blogPosts[0].author.name}</p>
                      <div className="flex items-center gap-2 text-sm text-slate-600 font-semibold">
                        <Clock className="w-4 h-4 text-red-500" strokeWidth={2.5} />
                        {blogPosts[0].readTime} min read
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/insights/${blogPosts[0].slug}`}
                    className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 hover:shadow-xl transition-all font-black text-sm sm:text-base shadow-lg active:scale-95"
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5" strokeWidth={3} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Trending Topics Section - NEW */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 sm:p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6" strokeWidth={2.5} />
              <h3 className="text-xl sm:text-2xl font-black">Trending Topics This Week</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {['AI in Marketing', 'SEO 2025', 'Social Commerce', 'Voice Search'].map((topic, i) => (
                <div key={i} className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all cursor-pointer">
                  <div className="text-2xl font-black mb-1">#{i + 1}</div>
                  <div className="text-sm font-bold">{topic}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Blog Grid - RED THEME */}
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
                  <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group border-2 border-red-100/50 hover:-translate-y-2">
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      {/* Red overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/95 backdrop-blur-md text-red-700 text-xs sm:text-sm font-bold rounded-full shadow-lg border border-red-200">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 mb-4 line-clamp-2 font-semibold">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-red-100">
                        <div className="flex items-center gap-2">
                          <Image
                            src={post.author.image}
                            alt={post.author.name}
                            width={32}
                            height={32}
                            className="rounded-full ring-2 ring-red-100"
                          />
                          <span className="text-xs sm:text-sm font-bold text-slate-900">{post.author.name}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-red-600 font-semibold">
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

          {/* Load More Button - NEW */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all font-black shadow-lg hover:shadow-xl active:scale-95">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter - RED GRADIENT + ENHANCED */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-orange-500 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white text-center"
          >
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-400 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="relative z-10">
              <Mail className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6" strokeWidth={2} />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4">
                🔥 Get Weekly Insights & Exclusive Tips
              </h2>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-95 font-semibold max-w-2xl mx-auto">
                Join 10,000+ marketers receiving expert strategies, industry trends, and actionable tips delivered to your inbox every week
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto mb-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-5 sm:px-6 py-3 sm:py-4 rounded-xl text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
                />
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-red-600 rounded-xl hover:bg-gray-100 transition-all font-black whitespace-nowrap shadow-lg active:scale-95 text-sm sm:text-base">
                  Subscribe Free
                </button>
              </div>
              <p className="text-xs sm:text-sm opacity-90 font-semibold mb-4">
                ✓ No spam, ever  •  ✓ Unsubscribe anytime  •  ✓ 100% Free
              </p>
              {/* Social Proof - NEW */}
              <div className="flex items-center justify-center gap-2 text-sm font-bold">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-white" />
                  ))}
                </div>
                <span>Trusted by 10,000+ professionals</span>
              </div>
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
