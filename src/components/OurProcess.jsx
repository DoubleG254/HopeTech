import React from 'react';
import { useNavigate} from 'react-router-dom';
import Step1Image from '../assets/STEP1.jpg';
import Step2Image from '../assets/STEP2.jpg';
import Step3Image from '../assets/STEP3.jpg';
import Step4Image from '../assets/STEP4.jpg';
import Step5Image from '../assets/STEP5.jpg';
import Step6Image from '../assets/STEP6.jpg';
import Step7Image from '../assets/STEP7.jpg';

const OurProcess = () => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('/detailedprocess');
  // };



  return (
    <div className="container mx-auto p-6 pt-20 rounded-2xl">
      <h2 className="text-3xl font-bold mb-6">Our Process: A Seamless Journey from Concept to Launch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Step 1: Discovery</h3>
          <p>Understanding Your Goals and Requirements</p>
          <p>We kickstart by understanding your business objectives, audience, and needs through consultations and research.</p>
          <img src={Step1Image} alt="Step 1" className="mt-4 mx-auto" />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Step 2: Planning</h3>
          <p>Crafting a Detailed Project Roadmap</p>
          <p>We develop a comprehensive plan outlining the scope, timeline, and milestones, ensuring every aspect is meticulously organized.</p>
          <img src={Step2Image} alt="Step 2" className="mt-4 mx-auto" />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Step 3: Design</h3>
          <p>Creating a User-Friendly and Appealing Design</p>
          <p>Your vision comes to life as we work closely to design interfaces that are both visually appealing and user-centric.</p>
          <img src={Step3Image} alt="Step 3" className="mt-4 mx-auto" />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Step 4: Development</h3>
          <p>Building a Robust and Scalable Website</p>
          <p>Our expert developers utilize cutting-edge technologies to build a reliable and scalable solution tailored to your requirements.</p>
          <img src={Step4Image} alt="Step 4" className="mt-4 mx-auto" />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Step 5: Testing</h3>
          <p>Ensuring Functionality and Performance</p>
          <p>Rigorous testing ensures your website or application functions flawlessly, meeting high standards in functionality, security, and performance.</p>
          <img src={Step5Image} alt="Step 5" className="mt-4 mx-auto" />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Step 6: Launch</h3>
          <p>Deploying Your Site Live</p>
          <p>We seamlessly deploy your website or application, providing training and support to ensure a smooth transition.</p>
          <img src={Step6Image} alt="Step 6" className="mt-4 mx-auto" />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Step 7: Maintenance</h3>
          <p>Ongoing Support and Updates</p>
          <p>Beyond launch, we offer continuous maintenance and support, ensuring your digital asset remains optimized and secure.</p>
          <img src={Step7Image} alt="Step 7" className="mt-4 mx-auto" />
        </div>
      </div>
     
      {/* <div className="text-center mt-6">
        <button  onClick={handleClick}   className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Learn More About Our Process</button>
        <button className="bg-gray-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Get A Free Quote</button>
      </div> */}
    </div>
  );
};

export default OurProcess;
