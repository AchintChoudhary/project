import React from 'react';
import HeroSection from '../components/HeroSection';
import QuickHighlights from '../components/QuickHighlights';
import FeaturedSlider from '../components/FeaturedSlider';
import PopularCategories from '../components/PopularCategories';
import PhotoOfDay from '../components/PhotoOfDay';
import Newsletter from '../components/Newsletter';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <QuickHighlights />
      <FeaturedSlider />
      <PopularCategories />
      <PhotoOfDay />
      <Newsletter />
    </div>
  );
};

export default Home;