import React from 'react';
import { Calendar, Clock, MapPin, Ticket, Users } from 'lucide-react';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      title: 'Indore Food Festival 2025',
      date: '2025-02-15',
      time: '6:00 PM - 11:00 PM',
      location: 'Nehru Park',
      description: 'A celebration of Indore\'s rich culinary heritage with over 100 food stalls.',
      image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 'Free Entry',
      featured: true,
    },
    {
      title: 'Heritage Walk at Rajwada',
      date: '2025-02-08',
      time: '8:00 AM - 10:00 AM',
      location: 'Rajwada Palace',
      description: 'Guided tour exploring the history and architecture of Holkar dynasty.',
      image: 'https://images.pexels.com/photos/2414440/pexels-photo-2414440.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '₹200',
      featured: false,
    },
    {
      title: 'Monsoon Photography Workshop',
      date: '2025-07-20',
      time: '6:00 AM - 12:00 PM',
      location: 'Patalpani Waterfall',
      description: 'Learn photography techniques while capturing the beauty of monsoon.',
      image: 'https://images.pexels.com/photos/373435/pexels-photo-373435.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '₹1,500',
      featured: false,
    },
  ];

  const weekendGuide = [
    'Visit the bustling Sarafa night market',
    'Explore the historic Lal Bagh Palace',
    'Take a morning walk at Ralamandal Wildlife Sanctuary',
    'Shop at Phoenix Citadel Mall',
    'Enjoy sunset at Pipliyahana Lake',
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-orange-600 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Events & Happenings
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            Stay connected with the vibrant cultural life of Indore
          </p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {upcomingEvents.filter(event => event.featured).map((event) => (
            <div key={event.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured Event
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    This Weekend
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {event.title}
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">February 15, 2025</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Ticket className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">{event.price}</span>
                  </div>
                </div>

                <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Tickets
                </button>
              </div>
              
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-4 rounded-2xl">
                  <Users className="h-8 w-8" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* This Weekend Section */}
      <section className="py-16 bg-orange-tinted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              This Weekend in Indore
            </h2>
            <p className="text-lg text-gray-600">
              Your guide to making the most of your weekend
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Weekend Recommendations
            </h3>
            <div className="space-y-4">
              {weekendGuide.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-orange-50 transition-colors duration-200">
                  <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">
              Mark your calendars for these exciting upcoming events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.filter(event => !event.featured).map((event, index) => (
              <div key={event.title} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 text-orange-600" />
                      <span>February 8, 2025</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-orange-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-orange-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;