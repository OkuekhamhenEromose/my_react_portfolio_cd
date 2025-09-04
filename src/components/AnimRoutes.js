import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Services from '../pages/Services';
import Testimonials from '../pages/Testimonials';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

import { Routes, Route, useLocation } from 'react-router-dom';
const AnimRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
};

export default AnimRoutes;
