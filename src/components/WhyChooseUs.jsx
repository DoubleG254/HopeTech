import React from 'react';

function WhyChooseUs() {
  return (
    <div className=" text-blue-900 rounded-2xl pt-20">
      <div className="container flex flex-col  mx-auto py-12">
        <div className='m-10 flex  items-center'>
          <section>
            <h2 className="text-4xl text-blue-700 font-semibold mb-8">Why Choose HopeTech?</h2>
            <p className=" w-3/4 text-gray-900 text-xl">Choosing the right partner for your web design and development needs is crucial to the success of your project. At HopeTech, we understand that you have many options, and we strive to stand out from the competition by offering unparalleled service, expertise, and results.</p>
          </section>
          <img src='https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2020_09_5-Best-Programming-Languages-to-Learn-for-Cybersecurity-Professionals-scaled.jpg' alt='' className='rounded-full w-72 h-72' />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Expert Team */}
          <div className="feature bg-gray-200 p-6 rounded-xl border-b-2 border-r-2 border-blue-500">
            <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
            <p className='text-gray-900'>Our team consists of skilled professionals with a passion for web development. Each member of our team brings a wealth of experience and expertise to the table, ensuring that your project is in good hands. From our creative designers and meticulous developers to our strategic marketers and dedicated support staff, everyone at HopeTech is committed to delivering the best possible results for our clients.</p>
          </div>

          {/* Custom Solutions */}
          <div className="feature bg-gray-200 p-6 rounded-xl border-b-2 border-r-2 border-blue-500">
            <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
            <p className='text-gray-900 '>We understand that every business is unique, and we believe that your website should be too. We don’t believe in one-size-fits-all solutions. Instead, we take the time to understand your specific needs and goals, and we develop custom solutions tailored to your business. Whether you need a simple informational site or a complex web application, we have the skills and experience to deliver a solution that meets your needs.</p>
          </div>

          {/* Proven Track Record */}
          <div className="feature bg-gray-200 p-6 rounded-xl border-b-2 border-r-2 border-blue-500">
            <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
            <p   className='text-gray-900 '>With thousands of successful projects delivered, we have a proven track record of delivering results that exceed our clients’ expectations. Our portfolio includes a diverse range of projects, from small business websites to large-scale enterprise applications. Our clients trust us to deliver high-quality solutions on time and within budget, and we take that trust very seriously.</p>
          </div>

          {/* Client-Centric Approach */}
          <div className="feature bg-gray-200 p-6 rounded-xl border-b-2 border-r-2 border-blue-500">
            <h3 className="text-xl font-semibold mb-4">Client-Centric Approach</h3>
            <p  className='text-gray-900 '  >Our clients are at the heart of everything we do. We believe that communication and collaboration are key to the success of any project. We work closely with our clients throughout the entire process, from initial consultation to final delivery, ensuring that their needs and expectations are met at every stage. We are committed to providing exceptional customer service and support, and we are always available to answer any questions or address any concerns.</p>
          </div>

          {/* Innovative Techniques */}
          <div className="feature bg-gray-200 p-6 rounded-xl border-b-2 border-r-2 border-blue-500">
            <h3 className="text-xl font-semibold mb-4">Innovative Techniques</h3>
            <p className='text-gray-900 '    >The digital landscape is constantly evolving, and we stay ahead of the curve by continuously learning and adopting the latest technologies and techniques. We are committed to innovation and excellence, and we use cutting-edge tools and best practices to deliver solutions that are not only visually stunning but also technically advanced. Whether it’s implementing the latest web design trends, optimizing for performance, or ensuring security, we go the extra mile to deliver the best possible results.</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-500 text-white  hover:bg-gray-800 text-black font-semibold py-2 px-4 rounded">Get a Free Quote</button>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
