"use client"
// components/product/page.tsx
import React, { useEffect, useState } from 'react';
import { Product } from '../types/product';
import { client } from '@/sanity/lib/client';
import { allproducts } from '@/sanity/lib/queries';
import { Key } from 'lucide-react';
import { keyframes } from 'styled-components';


// Example product data (replace with actual data from an API or database)


const Products = () => {

  const {product, setproduct} = useState<Product[]>([])

  useEffect(() => {
    async function fetchproduct() {
      const fetchproduct : Product[] = await client.fetch(allproducts)
      setproduct(fetchproduct)
    }
  },[])


  return (
    <div className="container mx-auto px-4 py-8">
      
      {product.map((product) =(
        <div key={product._id}>
          {product.name}
          {product.image && (
            <image
            src={urlfor(product.image).url()}
            alt="image"
            width={200}
            height={200}
          )}
      
    
  
  </div>
  )
};

export default Products;
