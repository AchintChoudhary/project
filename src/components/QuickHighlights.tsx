import React from 'react';
import { Newspaper, UtensilsCrossed, Calendar, MapPin } from 'lucide-react';

const QuickHighlights: React.FC = () => {
  const highlights = [
    {
      title: 'Latest News',
      description: 'Stay updated with the latest happenings in Indore',
      icon: Newspaper,
      color: 'orange',
      href: '/blog',
    },
    {
      title: 'Food Scene',
      description: 'Discover the best street food and restaurants',
      icon: UtensilsCrossed,
      color: 'blue',
      href: '/food',
    },
    {
      title: 'Events',
      description: 'Find exciting events happening around the city',
      icon: Calendar,
      color: 'green',
      href: '/events',
    },
    {
      title: 'Places',
      description: 'Explore iconic landmarks and hidden gems',
      icon: MapPin,
      color: 'purple',
      href: '/places',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Access
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jump straight to what you're looking for in Indore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <a
              key={item.title}
              href={item.href}
              className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(item.color)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${getColorClasses(item.color)} text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700">
                  {item.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-4 text-orange-600 transform group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-medium">Explore →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickHighlights;