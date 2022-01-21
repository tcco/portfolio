import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header.jsx';
import NotFound from '../components/NotFound.jsx';
import HomePage from '../components/HomePage.jsx';
import Portfolio from '../components/Portfolio.jsx';
import PortfolioItem from '../components/PortfolioItem.jsx';
import Contact from '../components/Contact.jsx';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioItem />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRouter;
