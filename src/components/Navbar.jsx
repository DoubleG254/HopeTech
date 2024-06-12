import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" fixed top-0 w-full bg-white p-5  text-blue-900 rounded-b-2xl text-lg border-b-2 border-blue-100 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="font-semibold text-lg">Logo</span>
        <button className="text-xl md:hidden" onClick={toggleNavbar}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`md:flex md:items-center space-x-7 ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link to="/" className="hover:text-blue-400 rounded p-2">
              Home
            </Link>
          </li>
          <li className="relative group">
            <span className="hover:text-blue-400 rounded pb-8 cursor-pointer">
              About Us
            </span>
            <ul className="absolute left-0 mt-1 hidden w-48 bg-white mt-6 rounded-b-2xl group-hover:block">
              <li>
                <Link to="/about" className="block hover:text-blue-400 rounded p-2">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about/why-choose-us" className="block hover:text-blue-400 rounded p-2">
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <span className="hover:text-blue-400 rounded pb-8 cursor-pointer">
              Our Services
            </span>
            <ul className="absolute left-0 hidden w-48 mt-6 bg-white rounded-b-2xl group-hover:block">
              <li>
                <Link to="/services/solutions" className="block hover:text-blue-400 rounded p-2">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/services" className="block hover:text-blue-400 rounded p-2">
                  Services
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <span className="hover:text-blue-400 rounded pb-8 cursor-pointer">
              Portfolio
            </span>
            <ul className="absolute left-0 mt-6 bg-white rounded-b-2xl hidden w-48 group-hover:block">
              <li>
                <Link to="/portfolio/testimonials" className="block hover:text-blue-400 rounded p-2">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/portfolio/our-work" className="block hover:text-blue-400 rounded p-2">
                  Our Work
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/faqs" className="hover:text-blue-400 rounded p-2">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 rounded p-2">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
