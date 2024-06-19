import React from 'react';
import { useNavigate } from 'react-router-dom';

const Solutions = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/services/services');
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">At HopeTech, we offer a comprehensive suite of services to propel your business forward:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8">
        {/* Services Sections */}
        <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">Website Design & Development</h2>
            <p className="text-lg text-gray-700 mt-2">
              Craft visually stunning and highly functional websites tailored to your brand and objectives, utilizing the latest technologies for responsiveness, speed, and security.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">Responsive Design</h2>
            <p className="text-lg text-gray-700 mt-2">
              Ensure your website delivers an optimal user experience across all devices, enhancing engagement and retention.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">E-commerce Solutions</h2>
            <p className="text-lg text-gray-700 mt-2">
              Drive sales and growth with custom-built online stores that are secure, scalable, and easy to manage.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">Custom Web Applications</h2>
            <p className="text-lg text-gray-700 mt-2">
              Tailor-made solutions to meet your unique requirements, from business applications to content management systems.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">UI/UX Design</h2>
            <p className="text-lg text-gray-700 mt-2">
              Delight users and boost engagement with intuitive and captivating interfaces designed through user-centric methodologies.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">Website Maintenance</h2>
            <p className="text-lg text-gray-700 mt-2">
              Keep your site updated, secure, and performing at its best with our flexible maintenance plans.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">SEO Services</h2>
            <p className="text-lg text-gray-700 mt-2">
              Improve your online visibility and attract more leads with comprehensive SEO strategies, including keyword research and on-page optimization.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">Content Creation</h2>
            <p className="text-lg text-gray-700 mt-2">
              Elevate your brand with high-quality, engaging content across various channels, from website copy to social media.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 p-4 md:p-6 rounded-xl border-b-2 border-r-2 border-blue-500 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800">PPC Advertising</h2>
            <p className="text-lg text-gray-700 mt-2">
              Drive targeted traffic and maximize ROI with expertly managed pay-per-click campaigns.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <button onClick={handleClick} className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-blue-800 hover:text-white transition duration-300">
          Explore Our Services
        </button>
      </div>
    </div>
  );
};

export default Solutions;
