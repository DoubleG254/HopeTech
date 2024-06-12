import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutPage from './components/AboutPage';
import Solutions from './components/Solutions';
import ServicesPage from "./components/ServicesPage";
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
// import OurWork from '.components/OurWork';
import OurProcess from './components/OurProcess';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Header from './components/Header';

const App = () => {
  return (
    
    <Router>
      <Header/>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faqs" element={<FAQ />} />
<Route path="/process" element={<OurProcess/>}/>
        <Route path="/about/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/services/solutions" element={<Solutions />} />
        <Route path="/services/services" element={<ServicesPage />} />
        <Route path="/portfolio/testimonials" element={<Testimonials />} />
        {/* <Route path="/portfolio/our-work" element={<OurWork />} />  */}
         <Route path="/contact" element={<Contact />} />
         
      </Routes>
      <Footer/>
    </Router>
    
  );
};

export default App;
