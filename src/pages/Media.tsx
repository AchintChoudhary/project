import React from 'react';
import { Play, Camera, Heart, MessageCircle } from 'lucide-react';

const Media: React.FC = () => {
  const reels = [
    {
      title: 'Street Food Adventure at Sarafa',
      thumbnail: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '25K',
      likes: '1.2K',
    },
    {
      title: 'Morning Walk at Lal Bagh Palace',
      thumbnail: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '18K',
      likes: '890',
    },
    {
      title: 'Monsoon Magic at Patalpani',
      thumbnail: 'https://images.pexels.com/photos/373435/pexels-photo-373435.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: '32K',
      likes: '2.1K',
    },
  ];

  const trendingPosts = [
    {
      image: 'https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: 'Golden hour at Rajwada Palace ✨',
      likes: 245,
      comments: 12,
    },
    {
      image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: 'Chhappan Dukan food crawl 🍛',
      likes: 189,
      comments: 8,
    },
    {
      image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: 'Weekend vibes at Phoenix Mall 🛍️',
      likes: 156,
      comments: 15,
    },
    {
      image: 'https://images.pexels.com/photos/1598377/pexels-photo-1598377.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: 'Wildlife safari at Indore Zoo 🦁',
      likes: 203,
      comments: 9,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Media Gallery
          </h1>
          <p className="text-xl text-pink-100 leading-relaxed">
            Explore Indore through stunning visuals, reels, and community content
          </p>
        </div>
      </section>

      {/* Reels & Videos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reels & Street Vlogs
            </h2>
            <p className="text-lg text-gray-600">
              Watch the city come alive through our video content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reels.map((reel, index) => (
              <div key={reel.title} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transform group-hover:scale-110 transition-all duration-300">
                      <Play className="h-8 w-8" />
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span className="text-sm">{reel.likes}</span>
                        </div>
                        <span className="text-sm">{reel.views} views</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                    {reel.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trending Instagram Posts
            </h2>
            <p className="text-lg text-gray-600">
              See what's happening around Indore through the community lens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingPosts.map((post, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt="Instagram post"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    {post.caption}
                  </p>
                  
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4 text-blue-500" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <button className="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Contest */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <Camera className="h-12 w-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Monthly Photo Contest
            </h2>
            <p className="text-xl text-orange-100 mb-6 leading-relaxed">
              Share your best Indore moments and win exciting prizes every month!
            </p>
            <p className="text-orange-200 mb-8">
              Tag us @waahindore and use #IndorePhotoContest
            </p>
            <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Participate Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;