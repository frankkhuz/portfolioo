import React, { useState } from 'react';
import linkedin from "./images/icons8-linkedin-50.png";
import instagram from "./images/icons8-instagram-50.png";
import twitter from "./images/icons8-twitterx-50.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white h-20 flex justify-between items-center px-8">
      <h1 className="text-5xl m-0 ">F E</h1>
      
      {/* Hamburger Icon */}
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <button className="text-black focus:outline-none">
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`md:flex items-center md:gap-16 list-none p-0 transition-all duration-300 ease-in-out ${isOpen ? 'block mt-8 text-lg' : 'hidden'} md:block`}>
        <li><a href="#home" className="block text-black no-underline py-2">HOME</a></li>
        <li><a href="#about" className="block text-black no-underline py-2">ABOUT</a></li>
        <li><a href="#project" className="block text-black no-underline py-2">PROJECT</a></li>
        <li><a href="#contact" className="block text-black no-underline py-2">CONTACT</a></li>
      </ul>
      
      {/* Social Media Icons */}
      <div className="lg:flex gap-4 sm:hidden">
        <a href="https://www.linkedin.com/in/franklin-eke/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" className="w-8 h-8" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" className="w-8 h-8" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
