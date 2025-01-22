export type Product = {
  _id: string; // Make sure this matches Sanity's ID
  name: string;
  price: number;
  image: string; // This will hold the image URL
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
};
