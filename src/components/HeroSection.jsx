import React from 'react';
import { useState, useEffect } from 'react';
import WelcomeSection from './WelcomeSection';
import WhyChooseUs from './WhyChooseUs';

const HeroSection = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzlCOVXdzk1grY1xCdnXRXkBbLqHZxHSpAWQ&s",
    "https://p7.hiclipart.com/preview/994/313/176/web-development-responsive-web-design-professional-web-design-web-design.jpg",
    "https://lh3.googleusercontent.com/proxy/7qA4EzhD9BzXMf1Oa2JgcvO5NbY0TnhgrFTlRI1aMYZ3aIVVoP5u7OBX-8JJkmpzfKoUGrhrMM0RlTdo6sBgFasMEPmSAqoTi16tm9RGwzpFSrccIlEuS9OZhdbSa8VaeRgbHY1b-Zo3hkUUPBQ",
    "https://wallpapers.com/images/hd/website-background-63kpzzc5jafl7f7k.jpg"
    // Add more image URLs as needed
  ];

  // State to manage the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to update the current image index
  const updateImageIndex = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // Set interval to change image every 5 seconds (adjust as needed)
    const intervalId = setInterval(updateImageIndex, 5000);
    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('${images[currentImageIndex]}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",

  };
  return (
    <div className="pt-6 ">
      {/* <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="flex items-center justify-center  min-h-screen " style={divStyle}>
        <div className="container w-full flex flex-col items-center ">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">Transform Your Digital Presence with HopeTech</h1>
          <h2 className="mt-6 text-lg leading-8 text-gray-300 text-center font-semibold">Cutting-Edge Web Design & Development Solutions Tailored to Your Needs</h2>
          <div className="mt-10 flex justify-center space-x-4">
            <button className="cta-button bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Get a Free Quote</button>
            <button className="cta-button bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-800">Explore Our Services</button>
          </div>
        </div>
      </div>
      <WelcomeSection />
      <WhyChooseUs />
    </div>
  );
};

export default HeroSection;