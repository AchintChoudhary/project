import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Food from './pages/Food';
import Events from './pages/Events';
import Places from './pages/Places';
import Travel from './pages/Travel';
import Media from './pages/Media';
import Blog from './pages/Blog';
import Utilities from './pages/Utilities';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/food" element={<Food />} />
            <Route path="/events" element={<Events />} />
            <Route path="/places" element={<Places />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/media" element={<Media />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/utilities" element={<Utilities />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;