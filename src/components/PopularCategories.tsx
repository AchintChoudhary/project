import React from 'react';
import { UtensilsCrossed, Calendar, MapPin, Building, Camera, Newspaper } from 'lucide-react';

const PopularCategories: React.FC = () => {
  const categories = [
    {
      title: 'Food & Lifestyle',
      description: 'From street food to fine dining, discover Indore\'s culinary delights',
      icon: UtensilsCrossed,
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: '/food',
      featured: true,
    },
    {
      title: 'Events & Happenings',
      description: 'Stay updated with the latest events and cultural activities',
      icon: Calendar,
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: '/events',
      featured: true,
    },
    {
      title: 'Places to Visit',
      description: 'Explore heritage sites, museums, and natural attractions',
      icon: MapPin,
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: '/places',
      featured: true,
    },
    {
      title: 'Business Directory',
      description: 'Find local businesses, services, and contact information',
      icon: Building,
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: '/utilities',
      featured: false,
    },
    {
      title: 'Media Gallery',
      description: 'Browse photos, videos, and reels from around Indore',
      icon: Camera,
      image: 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: '/media',
      featured: false,
    },
    {
      title: 'Blog & Articles',
      description: 'Read in-depth guides and stories about life in Indore',
      icon: Newspaper,
      image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: '/blog',
      featured: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore different aspects of life in Indore through our carefully curated sections
          </p>
        </div>

        {/* Featured Categories - Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {categories.filter(cat => cat.featured).map((category, index) => (
            <a
              key={category.title}
              href={category.href}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
                
                {/* Hover Arrow */}
                <div className="mt-4 text-orange-600 transform group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-medium">Explore →</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Other Categories - Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.filter(cat => !cat.featured).map((category, index) => (
            <a
              key={category.title}
              href={category.href}
              className="group bg-gray-50 hover:bg-orange-50 rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                    {category.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;