import React from 'react';
import { Instagram, Heart, MessageCircle, Share,Camera } from 'lucide-react';

const PhotoOfDay: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Photo of the Day
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Every day we feature the most stunning photography from Indore, 
              showcasing the beauty, culture, and vibrant life of our city through 
              the lens of talented local photographers and visitors.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-orange-600">
                <h4 className="font-semibold text-gray-900 mb-1">Today's Feature</h4>
                <p className="text-gray-600 text-sm">
                  "Golden Hour at Rajwada" - Captured by @indore_diaries
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-sm">2,847 likes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-sm">89 comments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Share className="h-5 w-5 text-green-500" />
                  <span className="text-sm">156 shares</span>
                </div>
              </div>
            </div>

            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              <Instagram className="h-5 w-5" />
              <span>Follow on Instagram</span>
            </button>
          </div>

          {/* Photo Display */}
          <div className="relative">
            <div className="relative bg-white p-4 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/2414440/pexels-photo-2414440.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Photo of the Day"
                className="w-full h-80 md:h-96 object-cover rounded-xl"
              />
              
              {/* Instagram-style overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/20 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">WI</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">waahindore</p>
                    <p className="text-gray-200 text-xs">2 hours ago</p>
                  </div>
                </div>
                <p className="text-white text-sm">
                  The golden hour magic at Rajwada Palace never gets old 🌅 
                  #IndoreHeritage #GoldenHour
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-orange-600 text-white p-3 rounded-full animate-bounce">
              <Camera className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoOfDay;