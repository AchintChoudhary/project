import React from 'react';
import { BookOpen, Calendar, User, ArrowRight, Search } from 'lucide-react';

const Blog: React.FC = () => {
  const featuredPost = {
    title: 'The Complete Guide to Indore Street Food: A Culinary Journey',
    excerpt: 'Dive deep into the flavors that make Indore the street food capital of India. From poha-jalebi to daal-baafla, discover the stories behind iconic dishes.',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Priya Sharma',
    date: 'January 28, 2025',
    readTime: '8 min read',
    category: 'Food',
  };

  const blogPosts = [
    {
      title: '10 Hidden Gems in Indore You Must Visit',
      excerpt: 'Discover secret spots that even locals don\'t know about...',
      image: 'https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Rahul Verma',
      date: 'January 25, 2025',
      category: 'Travel',
      readTime: '6 min read',
    },
    {
      title: 'Monsoon Photography: Capturing Patalpani',
      excerpt: 'Tips and techniques for photographing waterfalls during monsoon...',
      image: 'https://images.pexels.com/photos/373435/pexels-photo-373435.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Anita Gupta',
      date: 'January 22, 2025',
      category: 'Photography',
      readTime: '5 min read',
    },
    {
      title: 'Heritage Architecture of Holkar Dynasty',
      excerpt: 'Exploring the rich architectural legacy left by the Holkars...',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Dr. Vikash Jain',
      date: 'January 20, 2025',
      category: 'Culture',
      readTime: '7 min read',
    },
    {
      title: 'Shopping Guide: From Street Markets to Malls',
      excerpt: 'Complete guide to shopping destinations in Indore...',
      image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Sneha Patel',
      date: 'January 18, 2025',
      category: 'Lifestyle',
      readTime: '4 min read',
    },
  ];

  const categories = ['All', 'Food', 'Travel', 'Culture', 'Lifestyle', 'Photography', 'Tips'];
  const popularTags = ['Street Food', 'Heritage', 'Monsoon', 'Shopping', 'Photography', 'Culture', 'Weekend Guide'];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Waah Indore Blog
          </h1>
          <p className="text-xl text-indigo-100 leading-relaxed">
            Stories, guides, and insights about life in Indore
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Featured Post */}
            <article className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <button className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>

            {/* Recent Posts */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={post.title} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200 leading-tight">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>By {post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{post.date}</span>
                        <button className="text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors duration-200">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Search Articles</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    className="bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-600 px-3 py-1 rounded-full text-sm transition-colors duration-200"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
              <p className="text-orange-100 text-sm mb-4 leading-relaxed">
                Get the latest articles delivered to your inbox weekly.
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 mb-3"
              />
              <button className="w-full bg-white text-orange-600 hover:bg-gray-100 py-2 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;