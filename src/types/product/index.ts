export type Product = {
  id: number;
  name: string;
  price: number;
  currency: string;
  category: string;
  inStock: boolean;
  image: string;
  review: number;
  discount: number;
  description: string;
  shipping: {
    cost: number;
    method: string;
    estimatedDelivery: string;
  };
};
