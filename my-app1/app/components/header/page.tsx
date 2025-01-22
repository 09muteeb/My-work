// components/header.tsx

import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 lg:px-32 py-20 md:py-32 bg-gradient-to-r from-yellow-400 to-yellow-100">
      {/* Left: Text Content */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
          Rocket Single Seater
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Discover the perfect blend of style and comfort with our premium Rocket Single Seater. Perfect for any modern living space.
        </p>
        <a
          href="#shop"
          className="inline-block bg-black text-white py-3 px-10 text-lg font-semibold rounded-md shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Shop Now
        </a>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src="/Rocket single seater 1 (1).png" // Ensure this file is placed in the /public folder
          alt="Rocket Single Seater"
          className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-xl object-cover transition duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Header;
