// components/product/productCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../types/product"; // Import Product type

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/shop/${product.id}`} className="group">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.image || "/placeholder.svg"}  // Use a placeholder image if no image is available
          alt={product.name}
          width={300}
          height={300}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="mt-1 text-sm font-medium">Rs. {product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
};
