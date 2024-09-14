import React from 'react';

const Portfolio = () => {
  return (
    <div className="p-4">
      <h2 className="text-7xl md:text-4xl font-thickm    mb-12 text-left ml-16">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 md:gap-y-8 md:gap-x-8 lg:gap-y-6 lg:gap-x-4 justify-items-center">
        <BoxLink href="#" text="WEB DESIGN" color="bg-gray-300" />
        <BoxLink href="#" text="MOBILE DESIGN" color="bg-black" />
        <BoxLink href="#" text="LOGO DESIGN" color="bg-gray-300" />
        <BoxLink href="#" text="WEB APPLICATION DEVELOPMENT" color="bg-gray-700" />
        <BoxLink href="#" text="MOBILE APPLICATION DEVELOPMENT" color="bg-gray-300" />
        <BoxLink href="#" text="PWA DEVELOPMENT" color="bg-gray-700" />
      </div>
    </div>
  );
};

// Link component with hover effect inside a box and color
const BoxLink = ({ href, text, color }) => {
  return (
    <a 
      href={href}
      className={`flex items-center justify-center border border-gray-500 text-white text-base text-center w-64 h-48 shadow-md ${color} hover:underline`}
    >
      {text}
    </a>
  );
};

export default Portfolio;
