import React from 'react';

const ExpertiseSection = () => {
  return (
    <div className="py-16 pt-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Learn More About Our Expertise</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choosing the right partner for your web design and development needs is crucial to the success of your project. At HopeTech, we understand that you have many options, and we strive to stand out from the competition by offering unparalleled service, expertise, and results.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900">Expert Team</h3>
            <p className="mt-4 text-lg text-gray-600">
              Our team consists of skilled professionals with a passion for web development. Each member of our team brings a wealth of experience and expertise to the table, ensuring that your project is in good hands. From our creative designers and meticulous developers to our strategic marketers and dedicated support staff, everyone at HopeTech is committed to delivering the best possible results for our clients.
            </p>
            {/* Add more expertise sections as needed */}
            <div className="mt-8">
              {/* Call to action */}
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100">
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
