"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/page";
import Header from "./components/menu/page";
import Bar from "./components/bar/page"; // Adjust path based on your folder structure
import Footer from "./components/footer/page";
import { sanityClient } from "../sanity/lib/client"; // Import your Sanity client

type Product = {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
};

const Page: React.FC = () => {
  // State for products
  const [products, setProducts] = useState<Product[]>([]);

  // State for filter and view
  const [view, setView] = useState<"grid" | "list">("grid");
  const [itemsVisible, setItemsVisible] = useState<boolean>(true);
  const [totalItems, setTotalItems] = useState<number>(0);

  // Fetch product data from Sanity
  const fetchProducts = async () => {
    const query = `*[_type == "product"]{
      _id, 
      name, 
      price, 
      description, 
      discountPercentage, 
      isFeaturedProduct, 
      stockLevel, 
      category, 
      "image": image.asset->url
    }`;
    const fetchedProducts: Product[] = await sanityClient.fetch(query);
    setProducts(fetchedProducts);
    setTotalItems(fetchedProducts.length);
  };

  // Call fetchProducts on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Mock functions for Bar actions
  const handleViewChange = (view: "grid" | "list") => {
    setView(view);
    console.log("View changed to:", view);
  };

  const handleToggleItems = () => {
    setItemsVisible(!itemsVisible);
    console.log("Items visibility toggled.");
  };

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Header Component */}
      <Header />

      {/* Filter Bar Component */}
      <Bar
        onViewChange={handleViewChange}
        onToggleItems={handleToggleItems}
        itemsVisible={itemsVisible}
        totalItems={totalItems}
      />

      {/* Direct Product List Rendering */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 columns in grid
          gap: "20px", // space between products
          margin: "20px 0",
        }}
      >
        {itemsVisible ? (
          products.map((product) => (
            <div
              key={product._id}
              style={{
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              {product.discountPercentage && (
                <p>Discount: {product.discountPercentage}%</p>
              )}
              <p>Category: {product.category}</p>
              <p>Stock Level: {product.stockLevel}</p>
              {product.isFeaturedProduct && <p>Featured Product!</p>}
              {product.image && <img src={product.image} alt={product.name} width={200} />}
            </div>
          ))
        ) : (
          <p>No items to display.</p>
        )}
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Page;
