import React from 'react';
import { Phone, Building, Sun, Newspaper, AlertTriangle, Clock } from 'lucide-react';

const Utilities: React.FC = () => {
  const emergencyContacts = [
    { service: 'Police', number: '100', type: 'emergency' },
    { service: 'Fire Brigade', number: '101', type: 'emergency' },
    { service: 'Ambulance', number: '108', type: 'emergency' },
    { service: 'Tourist Helpline', number: '1363', type: 'info' },
    { service: 'Traffic Police', number: '0731-2533333', type: 'info' },
  ];

  const govtOffices = [
    {
      name: 'Collector Office',
      address: 'Manorama Ganj, Indore',
      phone: '0731-2423000',
      timing: '10 AM - 5 PM',
    },
    {
      name: 'Municipal Corporation',
      address: 'Nehru Park, Race Course Road',
      phone: '0731-2533000',
      timing: '10 AM - 5 PM',
    },
    {
      name: 'Passport Office',
      address: 'Scheme No. 78, Vijay Nagar',
      phone: '0731-4922000',
      timing: '9 AM - 5 PM',
    },
    {
      name: 'Regional Transport Office',
      address: 'Transport Nagar, Indore',
      phone: '0731-2488000',
      timing: '10 AM - 5 PM',
    },
  ];

  const newspapers = [
    { name: 'Dainik Bhaskar', url: '#', language: 'Hindi' },
    { name: 'The Times of India', url: '#', language: 'English' },
    { name: 'Nai Dunia', url: '#', language: 'Hindi' },
    { name: 'Free Press Journal', url: '#', language: 'English' },
    { name: 'Patrika', url: '#', language: 'Hindi' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Utility Services
          </h1>
          <p className="text-xl text-teal-100 leading-relaxed">
            Essential information and services for residents and visitors
          </p>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <AlertTriangle className="h-8 w-8 text-red-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Emergency Contacts
                </h2>
              </div>
              
              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={contact.service} className={`rounded-lg p-4 border-l-4 ${
                    contact.type === 'emergency' 
                      ? 'bg-red-50 border-red-500' 
                      : 'bg-blue-50 border-blue-500'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{contact.service}</h4>
                        <p className={`text-2xl font-bold ${
                          contact.type === 'emergency' ? 'text-red-600' : 'text-blue-600'
                        }`}>
                          {contact.number}
                        </p>
                      </div>
                      <Phone className={`h-6 w-6 ${
                        contact.type === 'emergency' ? 'text-red-600' : 'text-blue-600'
                      }`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weather Widget */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Sun className="h-8 w-8 text-orange-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Weather Today
                </h2>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold">Indore</h3>
                    <p className="text-orange-100">Wednesday, January 29</p>
                  </div>
                  <Sun className="h-12 w-12 text-yellow-200" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-5xl font-bold">28°</p>
                    <p className="text-orange-100">Sunny</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg">High: 32°</p>
                    <p className="text-lg">Low: 18°</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-orange-100">Humidity</p>
                    <p className="font-semibold">45%</p>
                  </div>
                  <div>
                    <p className="text-sm text-orange-100">Wind</p>
                    <p className="font-semibold">12 km/h</p>
                  </div>
                  <div>
                    <p className="text-sm text-orange-100">UV Index</p>
                    <p className="font-semibold">Moderate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Offices */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Government Offices
            </h2>
            <p className="text-lg text-gray-600">
              Important government services and contact information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {govtOffices.map((office, index) => (
              <div key={office.name} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {office.name}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-start space-x-2">
                    <Building className="h-4 w-4 text-orange-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">{office.timing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Newspaper Links */}
      <section className="py-16 bg-orange-tinted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              E-Newspaper Links
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with local and national news
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {newspapers.map((paper) => (
                <a
                  key={paper.name}
                  href={paper.url}
                  className="group flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <Newspaper className="h-5 w-5 text-orange-600" />
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                        {paper.name}
                      </h4>
                      <p className="text-xs text-gray-500">{paper.language}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-orange-600 transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Utilities;