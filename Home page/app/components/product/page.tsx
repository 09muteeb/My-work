// components/product/page.tsx

import React from "react";
import { ProductCard } from "./productcard"; // Import ProductCard component
import { Product } from "../type/product"; // Import Product type
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Import social media icons

// Example product data (with only 3 items for now)
const products: Product[] = [
  { id: 1, name: "Asgaard Sofa", price: 50000, image: "/Asgaard sofa 2.png" },
  { id: 2, name: "Bella Chair & Table", price: 20000, image: "/Bella chair and table 1.png" },
  { id: 3, name: "Grainite dining table", price: 15000, image: "/13.png" },
];

const Products = () => {
  return (
    <div className="px-8 md:px-16 lg:px-32 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Social Media Links Container */}
      <div className="mt-16 flex justify-center space-x-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-110"
        >
          <FaFacebook />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-pink-500 hover:text-pink-600 transition duration-300 ease-in-out transform hover:scale-110"
        >
          <FaInstagram />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Products;
