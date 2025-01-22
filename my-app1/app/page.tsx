// app/page.tsx

import React from "react";
import Header from "./components/header/page"; // Import Header instead of Hero
import Products from "./components/product/page"; // Import Products section
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";

const Page = () => {
  return (
    <div>
        <Navbar/>

      {/* Header Section */}
      <Header />

      {/* Products Section Below the Header */}
      <Products />

      <Footer/>
    </div>
  );
};

export default Page;
