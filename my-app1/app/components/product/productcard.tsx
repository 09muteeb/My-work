// components/product/productcard.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../type/product"; // Import Product type

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/shop/${product.id}`} className="group relative block rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300">
      {/* Product Image */}
      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-t-lg bg-gray-100">
        <Image
          src={product.image || "/placeholder.svg"} // Fallback to placeholder
          alt={product.name}
          width={300}
          height={300}
          className="object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-700">{product.name}</h3>
        <p className="mt-2 text-lg font-medium text-gray-900">
          Rs. {product.price.toLocaleString()}
        </p>
      </div>

      {/* Hover Effect: Show a subtle overlay on hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-all duration-300"></div>
    </Link>
  );
};
