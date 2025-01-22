import React from 'react';
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section (Logo Removed) */}
        <div className="flex items-center space-x-4">
          {/* No logo code here */}
        </div>

        {/* Middle Section (Navigation Links) */}
        <div className="hidden md:flex space-x-8 text-black font-medium">
          <a href="#" className="hover:text-gray-700">Home</a>
          <a href="#" className="hover:text-gray-700">Shop</a>
          <a href="#" className="hover:text-gray-700">About</a>
          <a href="#" className="hover:text-gray-700">Contact</a>
        </div>

        {/* Right Section (Icons) */}
        <div className="flex items-center space-x-6 text-black">
          <FaUser className="h-5 w-5 hover:text-gray-700" />
          <FaSearch className="h-5 w-5 hover:text-gray-700" />
          <FaHeart className="h-5 w-5 hover:text-gray-700" />
          <FaShoppingCart className="h-5 w-5 hover:text-gray-700" />
        </div>
      </div>

      {/* Responsive Menu for Small Screens */}
      <div className="md:hidden mt-4 flex justify-center space-x-4 text-black font-medium">
        <a href="#" className="hover:text-gray-700">Home</a>
        <a href="#" className="hover:text-gray-700">Shop</a>
        <a href="#" className="hover:text-gray-700">About</a>
        <a href="#" className="hover:text-gray-700">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
