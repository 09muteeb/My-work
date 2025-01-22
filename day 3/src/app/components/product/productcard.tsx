import React from "react";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="p-4 border rounded shadow hover:shadow-md transition">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">Rs. {product.price.toLocaleString()}</p>
    </div>
  );
};
