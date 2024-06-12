import React from 'react';

function AboutPage() {
  return (
    <div className="about-page pt-20 text-blue-900 p-6 flex justify-center items-center ">
      <div className="container m-4">
        <h2 className='text-4xl text-blue-700 font-semibold mb-8'>About HopeTech</h2>
        <p className='w-3/4 text-xl'>HopeTech is a leading web design and development agency committed to bringing your digital vision to life. With 10+ years of experience, our team of experts specializes in creating responsive, user-friendly, and visually captivating websites that drive results.</p>
        
        <div className="story-section m-8">
          <h3 className='text-xl font-semibold'>Discover Our Story</h3>
          <p className='text-lg'>
            Founded in 2012, HopeTech started as a small team of passionate developers and designers who wanted to make a difference in the digital world. Over the years, we have grown into a full-service digital agency with a diverse team of experts. Our journey has been fueled by our commitment to quality, innovation, and customer satisfaction.
          </p>
        </div> 

        <div className="grid grid-cols-3 gap-8 p-6 mb-6 text-center">
          {/* Mission Section */}
          <div className="mission-section bg-gray-200 p-6 rounded-xl border-b-2 border-r-2 border-blue-500 hover:bg-gray-300 transition duration-300 shadow-2xl">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p>
              Our mission is to empower businesses through innovative web solutions. We believe in the power of technology to transform businesses and improve lives. By leveraging the latest technologies and industry best practices, we aim to deliver solutions that not only meet but exceed our clients’ expectations.
            </p>
          </div>

          {/* Vision Section */}
          <div className="vision-section bg-gray-200 p-6 rounded-xl border-b-2 border-r-2 border-blue-500 hover:bg-gray-300 transition duration-300 shadow-2xl">
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p>
              Our vision is to be the go-to partner for all your digital needs. We aspire to be recognized as a leader in web design and development, known for our creativity, technical expertise, and commitment to excellence.
            </p>
          </div>

          {/* Values Section */}
          <div className="values-section bg-gray-200 p-6 rounded-xl border-b-2 border-r-2 border-blue-500 hover:bg-gray-300 transition duration-300 shadow-2xl">
            <h3 className="text-xl font-semibold">Our Values</h3>
            <ol className='text-start'>
              <li className=""><p className='font-semibold text-blue-700'>Quality</p> We are committed to delivering the highest quality in everything we do.</li>
              <li className=""><p className='font-semibold text-blue-700'>Innovation</p> We constantly seek new and better ways to serve our clients.</li>
              <li className=""><p className='font-semibold text-blue-700'>Customer Satisfaction</p> Our clients’ success is our success.</li>
            </ol>
          </div>
        </div>

        <div className="team-section mb-8">
          <h3 className="text-xl font-semibold">Meet the Team</h3>
          <p>Our team is our greatest asset. We are a group of talented and dedicated professionals with a shared passion for technology and design. From our project managers and developers to our designers and support staff, everyone at HopeTech is committed to providing the best possible service to our clients.</p>
          {/* Add team photos and office environment visuals here */}
        </div>

        <div className="cta-section text-center">
          <button className="explore-services-btn bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Explore Our Services</button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;