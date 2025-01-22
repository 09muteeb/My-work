"use client";

import React from "react";
import Navbar from "./components/navbar/page";
import Header from "./components/menu/page";
import Bar from "./components/bar/page"; // Adjust path based on your folder structure
import Products from "./components/product/page"; // Adjust path to the Products component
import Footer from "./components/footer/page";

const Page: React.FC = () => {
  // Mock static values for the Bar component
  const view: "grid" | "list" = "grid";
  const itemsVisible = true;
  const totalItems = 32; // Example item count, adjust as needed

  // Mock functions for Bar actions
  const handleViewChange = (view: "grid" | "list") => {
    console.log("View changed to:", view);
  };

  const handleToggleItems = () => {
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

      {/* Product List Component */}
      <Products />

      <Footer/>
    </div>
  );
};

export default Page;
