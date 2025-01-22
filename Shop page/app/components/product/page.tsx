// components/product/page.tsx
import React from 'react';
import { ProductCard } from './productcard'; // Import ProductCard component
import { Product } from '../types/product'; // Import Product type

// Example product data (replace with actual data from an API or database)
const products: Product[] = [
  { id: 1, name: "Product 1", price: 100, image: "/Asgaard sofa 2.png" },
  { id: 2, name: "Product 2", price: 200, image: "/Bella chair and table 1.png" },
  { id: 3, name: "Product 3", price: 300, image: "/Grain coffee table 1.png" },
  { id: 4, name: "Product 4", price: 400, image: "/Granite dining table with dining chair 1.png" },
  { id: 5, name: "Product 5", price: 500, image: "/Granite square side table 2.png" },
  { id: 6, name: "Product 6", price: 600, image: "/Kent coffee table 1.png" },
  { id: 7, name: "Product 7", price: 700, image: "/Mask group.png" },
  { id: 8, name: "Product 8", price: 800, image: "/Maya sofa three seater 1.png" },
  { id: 9, name: "Product 9", price: 900, image: "/Outdoor bar table and stool 1.png" },
  { id: 10, name: "Product 10", price: 1000, image: "/Outdoor sofa set 1.png" },
  { id: 11, name: "Product 11", price: 1100, image: "/Plain console with teak mirror 1.png" },
  { id: 12, name: "Product 12", price: 1200, image: "/Plain console_ 1.png" },
  { id: 13, name: "Product 13", price: 1300, image: "/14.png" },
  { id: 14, name: "Product 14", price: 1400, image: "/Rocket single seater 1 (1).png" },
  { id: 15, name: "Product 15", price: 1500, image: "/Round coffee table_color 2 1.png" },
  { id: 16, name: "Product 16", price: 1600, image: "/12.png" },
];

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Shop Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
