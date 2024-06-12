import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-8 mx-3 text-blue-600 rounded-2xl  border-b-2 border-b-2 border-blue-100">
      <div className="container mx-aut0 flex justify-between items-center">
        <span className=" font-semibold text-lg">Logo</span>
        <button className=" text-xl md:hidden" onClick={toggleNavbar}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`md:flex md:items-center space-7 ${isOpen ? 'block' : 'hidden'}`}>
          <li className=" ">
            <Link to="/" className=" hover:bg-gray-700 px-3 py-2 rounded ">
              Home
            </Link>
          </li>
          <li className="relative group">
            <span className=" hover:bg-gray-700 px-3 py-2 rounded cursor-pointer">
              About Us
            </span>
            <ul className="absolute left-0 mt-1 hidden w-48 bg-gray-800 group-hover:block">
              <li>
                <Link to="/about" className="block  hover:bg-gray-700 px-3 py-2 rounded">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about/why-choose-us" className="block  hover:bg-gray-700 px-3 py-2 rounded">
                  Why Choose Us
                </Link>
              </li>
                          </ul>
          </li>
          <li className="relative group">
            <span className=" hover:bg-gray-700 px-3 py-2 rounded cursor-pointer">
              Our Services
            </span>
            <ul className="absolute left-0 mt-1 hidden w-48 bg-gray-800 group-hover:block">
              <li>
                <Link to="/services/solutions" className="block  hover:bg-gray-700 px-3 py-2 rounded">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/services/services" className="block  hover:bg-gray-700 px-3 py-2 rounded">
                  Services
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <span className=" hover:bg-gray-700 px-3 py-2 rounded cursor-pointer">
              Portfolio
            </span>
            <ul className="absolute left-0 mt-1 hidden w-48 bg-gray-800 group-hover:block">
            <li>
                <Link to="/portfolio/testimonials" className="block  hover:bg-gray-700 px-3 py-2 rounded">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/portfolio/our-work" className="block  hover:bg-gray-700 px-3 py-2 rounded">
                  Our Work
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/faqs" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
              FAQs
            </Link>
            </li>
          <li>
            <Link to="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
