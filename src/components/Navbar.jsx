// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.jpg';
// const Navbar =() => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className=" fixed top-0 w-full   bg-white md:md:p-5 p-2p-2 text-blue-900 rounded-b-2xl text-lg border-b-2 border-orange-400 z-10 shadow-xl">
//       <div className="container mx-auto flex justify-between items-center    ">
//         <span className="font-semibold text-lg">
//         <img src={logo} alt="Logo" className="h-11" /></span>
//         <button className="text-xl md:hidden" onClick={toggleNavbar}>
//           {isOpen ? 'Close' : 'Menu'}
//         </button>
//         <ul className={`md:flex md:items-center space-x-7 md:flex-row w-1/2 md:w-auto justify-between   md:h-auto md:static ${isOpen ? 'block fixed bg-white top-4 left-0 h-screen' : 'hidden'}`}>
//           <li>
//             <Link to="/" className="hover:text-blue-400 focus:text-blue-400 rounded pl-8 mb-2">
//               Home
//             </Link>
//           </li>
//           <li className="relative group "  tabIndex="0">
//             <span className="hover:text-blue-400  rounded pb-8 mt-6 pb-2 cursor-pointer">
//               About Us
//             </span>
//             <ul className="md:md:absolute left-0 md:md:mt-1 hidden md:md:w-48 bg-white md:md:mt-6 rounded-b-2xl group-hover:block">
//               <li>
//                 <Link to="/about" className="block hover:text-blue-400 focus:text-blue-400 focus:text-blue-400 rounded p-2">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about/why-choose-us" className="block hover:text-blue-400 rounded p-2">
//                   Why Choose Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/process" className="block hover:text-blue-400 rounded p-2">
//                   Our Process
//                 </Link>
//               </li>
//             </ul>
//           </li>
//           <li>
//                 <Link to="/services/services" className="block hover:text-blue-400 rounded p-2">
//                   Our Services
//                 </Link>
//               </li>
//           <li className="relative group" tabIndex="0">
//             <span className="hover:text-blue-400 rounded pb-8 cursor-pointer">
//               Portfolio
//             </span>
//             <ul className="md:absolute left-0 md:mt-6 bg-white rounded-b-2xl hidden md:w-48 group-hover:block">
//               <li>
//                 <Link to="/portfolio/testimonials" className="block hover:text-blue-400 rounded p-2">
//                   Testimonials
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/portfolio/our-work" className="block hover:text-blue-400 rounded p-2">
//                   Our Work
//                 </Link>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <Link to="/faqs" className="hover:text-blue-400 rounded ">
//               FAQs
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-blue-400 rounded ">
//               Contact Us
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.navbar') && isOpen) {
      closeNavbar();
    }
  };

  const handleItemClick = () => {
    closeNavbar();
  };

  return (
    <nav className="navbar fixed top-0 w-full bg-white p-2 md:p-5 text-blue-900 rounded-b-2xl text-lg border-b-2 border-orange-400 z-10 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-11" />
        <div className="text-xl md:hidden cursor-pointer" onClick={toggleNavbar}>
          <svg className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          <svg className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
        <ul className={`md:flex md:items-center space-x-7 md:flex-row w-full md:w-auto justify-between md:h-auto md:static ${isOpen ? 'block fixed bg-white top-4 left-0 h-screen' : 'hidden md:block'}`}>
          <li>
            <Link to="/" className="hover:text-blue-400 focus:text-blue-400 rounded pl-8 mb-2" onClick={handleItemClick}>
              Home
            </Link>
          </li>
          <li className="relative group" tabIndex="0">
            <span className="hover:text-blue-400 rounded pb-8 mt-6 cursor-pointer">
              About Us
            </span>
            <ul className="md:absolute left-0 md:mt-6 hidden md:w-48 bg-white rounded-b-2xl group-hover:block">
              <li>
                <Link to="/about" className="block hover:text-blue-400 focus:text-blue-400 rounded p-2" onClick={handleItemClick}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about/why-choose-us" className="block hover:text-blue-400 rounded p-2" onClick={handleItemClick}>
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/process" className="block hover:text-blue-400 rounded p-2" onClick={handleItemClick}>
                  Our Process
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/services/services" className="block hover:text-blue-400 rounded p-2" onClick={handleItemClick}>
              Our Services
            </Link>
          </li>
          <li className="relative group" tabIndex="0">
            <span className="hover:text-blue-400 rounded pb-8 cursor-pointer">
              Portfolio
            </span>
            <ul className="md:absolute left-0 md:mt-6 bg-white rounded-b-2xl hidden md:w-48 group-hover:block">
              <li>
                <Link to="/portfolio/testimonials" className="block hover:text-blue-400 rounded p-2" onClick={handleItemClick}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/portfolio/our-work" className="block hover:text-blue-400 rounded p-2" onClick={handleItemClick}>
                  Our Work
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/faqs" className="hover:text-blue-400 rounded" onClick={handleItemClick}>
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 rounded" onClick={handleItemClick}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
