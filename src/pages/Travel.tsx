import React from 'react';
import { Bus, Plane, Car, Navigation, Clock, AlertTriangle } from 'lucide-react';

const Travel: React.FC = () => {
  const transportOptions = [
    {
      title: 'City Bus & iBus',
      description: 'Affordable public transport covering all major routes',
      icon: Bus,
      info: 'Routes: 40+ | Fare: ₹5-25 | Timing: 6 AM - 10 PM',
      color: 'blue',
    },
    {
      title: 'Railways',
      description: 'Major railway junction connecting to all parts of India',
      icon: Navigation,
      info: 'Station: Indore Junction | Trains: 50+ daily | Booking: IRCTC',
      color: 'green',
    },
    {
      title: 'Air Travel',
      description: 'Devi Ahilya Bai Holkar Airport with domestic connections',
      icon: Plane,
      info: 'Distance: 8km from city | Airlines: 6+ | Flights: 25+ daily',
      color: 'purple',
    },
    {
      title: 'Taxi & Cab Services',
      description: 'Convenient door-to-door transportation options',
      icon: Car,
      info: 'Uber, Ola, Local taxis | 24/7 available | Auto-rickshaws',
      color: 'orange',
    },
  ];

  const busRoutes = [
    { route: '1A', destination: 'Rajwada → Airport', timing: 'Every 15 min' },
    { route: '2B', destination: 'Railway Station → Treasure Island', timing: 'Every 10 min' },
    { route: '3C', destination: 'Sarafa → Vijay Nagar', timing: 'Every 20 min' },
    { route: '4D', destination: 'Palasia → Phoenix Mall', timing: 'Every 12 min' },
  ];

  const parkingInfo = [
    { location: 'Rajwada Area', spots: '200+', rate: '₹20/hour' },
    { location: 'Sarafa Bazaar', spots: '150+', rate: '₹15/hour' },
    { location: 'Phoenix Mall', spots: '500+', rate: 'Free 3 hours' },
    { location: 'Railway Station', spots: '300+', rate: '₹25/day' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Navigation className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Travel & Transport Guide
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Navigate Indore with ease using our comprehensive transport information
          </p>
        </div>
      </section>

      {/* Transport Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transportation Options
            </h2>
            <p className="text-lg text-gray-600">
              Choose the best way to get around the city
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transportOptions.map((transport, index) => (
              <div key={transport.title} className="group bg-gray-50 hover:bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className={`p-4 rounded-xl transform group-hover:scale-110 transition-transform duration-300 ${
                    transport.color === 'blue' ? 'bg-blue-600' :
                    transport.color === 'green' ? 'bg-green-600' :
                    transport.color === 'purple' ? 'bg-purple-600' :
                    'bg-orange-600'
                  }`}>
                    <transport.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                      {transport.title}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {transport.description}
                    </p>
                    <div className="bg-white rounded-lg p-3 border-l-4 border-orange-600">
                      <p className="text-sm font-medium text-gray-700">
                        {transport.info}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bus Routes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Popular Bus Routes
              </h2>
              <div className="space-y-4">
                {busRoutes.map((route, index) => (
                  <div key={route.route} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-orange-600 text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold">
                          {route.route}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{route.destination}</h4>
                          <div className="flex items-center space-x-1 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>{route.timing}</span>
                          </div>
                        </div>
                      </div>
                      <button className="text-orange-600 hover:text-orange-700 font-medium">
                        Track Live
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Parking Information
              </h2>
              <div className="space-y-4">
                {parkingInfo.map((parking, index) => (
                  <div key={parking.location} className="bg-white rounded-lg p-4 shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{parking.location}</h4>
                        <p className="text-sm text-gray-600">{parking.spots} parking spots</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-orange-600">{parking.rate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traffic Alerts */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Traffic Alerts & Updates
            </h2>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Current Traffic Situation
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• MG Road: Moderate traffic due to ongoing metro construction</li>
                  <li>• Vijay Nagar Square: Heavy traffic during peak hours (8-10 AM, 6-8 PM)</li>
                  <li>• Ring Road: Clear traffic, recommended for inter-city travel</li>
                  <li>• Airport Road: Light traffic, 20-minute drive from city center</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Travel;