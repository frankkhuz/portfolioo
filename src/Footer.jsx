import React from "react";
import email from "./images/icons8-email-50.png";
import contact from "./images/icons8-phone-contact-50.png";
import linkedin from "./images/icons8-linkedin-50.png";
import insta from "./images/icons8-instagram-50.png";
import twitter from "./images/icons8-twitterx-50.png";
import './index.css'

const Footer = () => {
  return (
    <footer className="text-white p-6 bg-[#6B7280] mt-8 w-full">
      <div className="flex flex-col lg:flex-row justify-around items-center h-auto lg:h-32 lg:space-x-8">
        
        {/* Contact Section */}
        <div className="flex flex-col items-start mb-6 lg:mb-0 lg:w-1/3">
          <p className="text-lg lg:text-xl mb-4">GET IN TOUCH</p>
          <div className="flex sm:flex-row lg:flex-col sm:space-x-6 lg:space-x-0 space-y-4 lg:space-y-4 sm:space-y-0">
            {/* Email */}
            <a
              href="mailto:frankkhuzy@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs sm:text-sm lg:text-base"
            >
              <img src={email} alt="email" className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 mr-2" />
              <p>frankkhuzy@gmail.com</p>
            </a>

            {/* Contact */}
            <div className="flex items-center text-xs sm:text-sm lg:text-base">
              <img
                src={contact}
                alt="contact"
                className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 mr-2"
              />
              <p>(234) 901-663-2497</p>
            </div>
          </div>
        </div>

        {/* Contact Me Button */}
        <button className="bg-black text-white border-2 border-white px-6 py-2 mb-6 lg:mb-0 lg:w-auto w-full lg:h-auto h-12 text-sm lg:text-base">
          Contact Me
        </button>

        {/* Social Icons */}
        <div className="flex flex-col items-center lg:w-1/3 space-y-4">
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="w-8 h-8" />
            </a>
          </div>
          <p className="text-xs lg:text-sm">© 2019 FE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
