import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const FeaturedSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Sarafa Bazaar Night Food Tour',
      description: 'Experience the magical transformation of this jewelry market into a food paradise after sunset.',
      image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Food',
    },
    {
      title: 'Rajwada Palace Heritage Walk',
      description: 'Discover the rich history of the Holkar dynasty at this magnificent seven-story palace.',
      image: 'https://images.pexels.com/photos/2414440/pexels-photo-2414440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Heritage',
    },
    {
      title: 'Patalpani Waterfall Adventure',
      description: 'Escape to this stunning waterfall just 35km from the city center during monsoon season.',
      image: 'https://images.pexels.com/photos/373435/pexels-photo-373435.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Nature',
    },
    {
      title: 'Chhappan Dukan Food Street',
      description: 'Taste authentic Indori delicacies at this famous food street with 56 food stalls.',
      image: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Food',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-16 bg-orange-tinted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated highlights from our Instagram and latest site updates
          </p>
        </div>

        <div className="relative">
          {/* Main Slider */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10 h-full flex items-end">
                    <div className="p-8 md:p-12 max-w-2xl">
                      <span className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {slide.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                        {slide.title}
                      </h3>
                      <p className="text-gray-200 text-lg leading-relaxed mb-6">
                        {slide.description}
                      </p>
                      <button className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        <span>Learn More</span>
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-orange-600 scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-6 flex justify-center space-x-4 overflow-x-auto pb-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                index === currentSlide ? 'ring-4 ring-orange-600 scale-110' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSlider;