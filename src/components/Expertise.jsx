import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExpertiseSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div className="py-16 pt-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">Why Choose HopeTech?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choosing the right partner for your web design and development needs is crucial. At HopeTech, we stand out from the competition by offering unparalleled service, expertise, and results.
          </p>
     
          <div className="mt-8 text-left">
            <h3 className="text-xl font-bold text-gray-900">Expert Team</h3>
            <p className="mt-4 text-lg text-gray-600">
              Our team consists of skilled professionals with a passion for web development. Each member of our team brings a wealth of experience and expertise to the table, ensuring that your project is in good hands. From our creative designers and meticulous developers to our strategic marketers and dedicated support staff, everyone at HopeTech is committed to delivering the best possible results for our clients.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Custom Solutions</h3>
            <p className="mt-4 text-lg text-gray-600">
              We understand that every business is unique, and we believe that your website should be too. We don’t believe in one-size-fits-all solutions. Instead, we take the time to understand your specific needs and goals, and we develop custom solutions tailored to your business. Whether you need a simple informational site or a complex web application, we have the skills and experience to deliver a solution that meets your needs.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Proven Track Record</h3>
            <p className="mt-4 text-lg text-gray-600">
              With thousands of successful projects delivered, we have a proven track record of delivering results that exceed our clients’ expectations. Our portfolio includes a diverse range of projects, from small business websites to large-scale enterprise applications. Our clients trust us to deliver high-quality solutions on time and within budget, and we take that trust very seriously.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Client-Centric Approach</h3>
            <p className="mt-4 text-lg text-gray-600">
              Our clients are at the heart of everything we do. We believe that communication and collaboration are key to the success of any project. We work closely with our clients throughout the entire process, from initial consultation to final delivery, ensuring that their needs and expectations are met at every stage. We are committed to providing exceptional customer service and support, and we are always available to answer any questions or address any concerns.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">Innovative Techniques</h3>
            <p className="mt-4 text-lg text-gray-600">
            The digital landscape is constantly evolving, and we stay ahead of the curve by continuously learning and adopting the latest technologies and techniques. We are committed to innovation and excellence, and we use cutting-edge tools and best practices to deliver solutions that are not only visually stunning but also technically advanced. Whether it’s implementing the latest web design trends, optimizing for performance, or ensuring security, we go the extra mile to deliver the best possible results.

            </p>

            <div className="mt-8">
              <button onClick={handleClick} className="bg-blue-500 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
