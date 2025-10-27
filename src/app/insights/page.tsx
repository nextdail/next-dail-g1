'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blog-posts';

const categories = ['All', 'SEO', 'Web Development', 'Social Media', 'Marketing'];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-base font-bold mb-6">
              Insights & Tips
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Learn from Industry Experts
            </h1>
            <p className="text-xl text-gray-300 font-semibold leading-relaxed">
              Stay ahead with the latest digital marketing trends, strategies, 
              and actionable insights from our team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 bg-white text-slate-700 hover:bg-teal-50 shadow-md hover:shadow-lg"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {blogPosts[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-12">
                  <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-bold mb-4">
                    FEATURED
                  </span>
                  <h2 className="text-3xl font-black text-slate-900 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-slate-600 mb-6 font-semibold text-lg">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={blogPosts[0].author.image}
                      alt={blogPosts[0].author.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-black text-slate-900">{blogPosts[0].author.name}</p>
                      <p className="text-sm text-slate-600 font-semibold">
                        {blogPosts[0].readTime} min read
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/insights/${blogPosts[0].slug}`}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-all font-black"
                  >
                    Read Article
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/insights/${post.slug}`}>
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-teal-700 text-sm font-bold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-black text-slate-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 mb-4 line-clamp-2 font-semibold">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Image
                            src={post.author.image}
                            alt={post.author.name}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <span className="text-sm font-bold text-slate-900">{post.author.name}</span>
                        </div>
                        <span className="text-sm text-slate-600 font-semibold">{post.readTime} min</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Get Weekly Insights
            </h2>
            <p className="text-xl mb-8 opacity-90 font-semibold max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest tips and strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-slate-900 font-semibold focus:outline-none"
              />
              <button className="px-8 py-4 bg-white text-teal-600 rounded-xl hover:bg-gray-100 transition-all font-black whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
