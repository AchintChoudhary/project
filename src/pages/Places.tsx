import React from 'react';
import { MapPin, Star, Clock, Camera } from 'lucide-react';

const Places: React.FC = () => {
  const attractions = [
    {
      title: 'Rajwada Palace',
      description: 'Magnificent seven-story palace showcasing Holkar dynasty architecture',
      image: 'https://www.madhyapradeshdmc.com/images/me_rajwada-palace_mp.webp',
      rating: 4.6,
      visitTime: '1-2 hours',
      category: 'Heritage',
      featured: true,
    },
    {
      title: 'Lal Bagh Palace',
      description: 'Opulent palace with European architecture and beautiful gardens',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.7,
      visitTime: '2-3 hours',
      category: 'Heritage',
      featured: true,
    },
    {
      title: 'Kamla Nehru Prani Sangrahalaya',
      description: 'One of the largest zoos in Central India with diverse wildlife',
      image: 'https://images.pexels.com/photos/1598377/pexels-photo-1598377.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.4,
      visitTime: '3-4 hours',
      category: 'Nature',
      featured: false,
    },
    {
      title: 'Patalpani Waterfall',
      description: 'Stunning waterfall perfect for monsoon visits and nature photography',
      image: 'https://images.pexels.com/photos/373435/pexels-photo-373435.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.8,
      visitTime: 'Half day',
      category: 'Nature',
      featured: false,
    },
  ];

  const hiddenGems = [
    {
      title: 'Chokhi Dhani',
      description: 'Experience Rajasthani culture and cuisine',
      image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Ralamandal Wildlife Sanctuary',
      description: 'Perfect for nature walks and bird watching',
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Annapurna Temple',
      description: 'Beautiful temple architecture and peaceful atmosphere',
      image: 'https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const travelTips = [
    'Best time to visit: October to March for pleasant weather',
    'Monsoon season (June-September) is perfect for waterfalls',
    'Early morning visits to heritage sites are less crowded',
    'Carry water and wear comfortable walking shoes',
    'Photography is allowed at most locations with nominal fees',
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Places to Visit in Indore
          </h1>
          <p className="text-xl text-green-100 leading-relaxed">
            From ancient palaces to natural wonders, discover Indore's most captivating destinations
          </p>
        </div>
      </section>

      {/* Featured Attractions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Must-Visit Attractions
            </h2>
            <p className="text-lg text-gray-600">
              Top-rated destinations that define Indore's charm
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {attractions.filter(place => place.featured).map((place, index) => (
              <div key={place.title} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {place.category}
                  </div>

                  {/* Rating & Time */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{place.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{place.visitTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                    {place.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {place.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <button className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200">
                      <span>View Details</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </button>
                    
                    <button className="inline-flex items-center space-x-1 bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-700 px-4 py-2 rounded-lg transition-all duration-200">
                      <Camera className="h-4 w-4" />
                      <span className="text-sm">Gallery</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden Gems */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hidden Gems
            </h2>
            <p className="text-lg text-gray-600">
              Lesser-known places that locals love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hiddenGems.map((gem, index) => (
              <div key={gem.title} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={gem.image}
                    alt={gem.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                    {gem.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {gem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-orange-tinted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Travel Tips
            </h2>
            <p className="text-lg text-gray-600">
              Local insights to make your visit memorable
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-4">
              {travelTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                  <div className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 leading-relaxed">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Places;