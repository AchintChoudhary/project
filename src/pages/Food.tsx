import React from 'react';
import { Star, Clock, MapPin, UtensilsCrossed } from 'lucide-react';

const Food: React.FC = () => {
  const foodGuides = [
    {
      title: 'Sarafa Bazaar Night Food Tour',
      description: 'Experience the transformation of this jewelry market into a food paradise after sunset.',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.8,
      time: '6 PM - 12 AM',
      featured: true,
    },
    {
      title: 'Chhappan Dukan Food Street',
      description: 'Iconic food street with 56 different food stalls offering authentic Indori delicacies.',
      image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.9,
      time: '10 AM - 11 PM',
      featured: true,
    },
    {
      title: 'Top Restaurants & Cafés',
      description: 'Fine dining experiences and cozy cafés for every taste and budget.',
      image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.7,
      time: 'All Day',
      featured: false,
    },
  ];

  const lifestyle = [
    {
      title: 'Treasure Island Mall',
      category: 'Shopping',
      image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Local Boutiques',
      category: 'Fashion',
      image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Phoenix Citadel',
      category: 'Entertainment',
      image: 'https://images.pexels.com/photos/2956376/pexels-photo-2956376.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <UtensilsCrossed className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Food & Lifestyle in Indore
          </h1>
          <p className="text-xl text-orange-100 leading-relaxed">
            From legendary street food to modern dining, discover why Indore is India's food capital
          </p>
        </div>
      </section>

      {/* Food Guides */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Food Guides
            </h2>
            <p className="text-lg text-gray-600">
              Curated guides to Indore's most iconic food destinations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {foodGuides.filter(guide => guide.featured).map((guide, index) => (
              <div key={guide.title} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{guide.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{guide.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {guide.description}
                  </p>
                  <button className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200">
                    <span>Read Full Guide</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Guides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {foodGuides.filter(guide => !guide.featured).map((guide) => (
              <div key={guide.title} className="group bg-orange-tinted rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-32 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"
                />
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                  {guide.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{guide.rating}</span>
                  </div>
                  <span className="text-gray-500">{guide.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lifestyle & Shopping
            </h2>
            <p className="text-lg text-gray-600">
              Explore modern shopping destinations and lifestyle experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lifestyle.map((item, index) => (
              <div key={item.title} className="group">
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Food;