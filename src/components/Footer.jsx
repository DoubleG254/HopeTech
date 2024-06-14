import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/services" className="hover:text-blue-400">Website Design & Development</Link></li>
              <li><Link to="/services/services" className="hover:text-blue-400">Responsive Design</Link></li>
              <li><Link to="/services/services" className="hover:text-blue-400">E-commerce Solutions</Link></li>
              <li><Link to="/services/services" className="hover:text-blue-400">Custom Web Applications</Link></li>
              <li><Link to="/services/services" className="hover:text-blue-400">SEO Services</Link></li>
              <li><Link to="/services/services" className="hover:text-blue-400">Content Creation</Link></li>
              <li><Link to="/services/services" className="hover:text-blue-400">UI/UX Design</Link></li>
              <li><Link to="/services/services" className="hover:text-blue-400">Web Maintenance</Link></li>
              <li><Link to="/services/services" className="hover:text-blue-400">PPC Advertising</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about/why-choose-us" className="hover:text-blue-400">Why Choose Us?</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">Who Are We?</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-400">Portfolio: Sample Projects</Link></li>
              <li><Link to="/portfolio/testimonials" className="hover:text-blue-400">Customer Testimonials</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/process" className="hover:text-blue-400">How It Works: Our Process</Link></li>
              <li><Link to="/faqs" className="hover:text-blue-400">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-blue-400">Live Chat</Link></li>
              <li>Email: mgt@hopetech.com</li>
              <li>Phone Number: 0712345678</li>
              <li>Address: Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
