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

export const MOCK = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    currency: "USD",
    category: "Electronics",
    inStock: true,
    image: "laptop.jpg",
    review: 4.5,
    discount: 100,
    description:
      "A powerful laptop with high-resolution display and fast performance.",
    shipping: {
      cost: 29.99,
      method: "Standard",
      estimatedDelivery: "5-7 business days",
    },
  },
  {
    id: 2,
    name: "T-shirt",
    price: 19.99,
    currency: "USD",
    category: "Clothing",
    inStock: true,
    image: "tshirt.jpg",
    review: 4.0,
    discount: 5,
    description: "Comfortable and stylish cotton t-shirt for everyday wear.",
    shipping: {
      cost: 5.99,
      method: "Standard",
      estimatedDelivery: "3-5 business days",
    },
  },
  {
    id: 3,
    name: "Smartphone",
    price: 599.99,
    currency: "USD",
    category: "Electronics",
    inStock: false,
    image: "smartphone.jpg",
    review: 3.8,
    discount: 50,
    description:
      "The latest smartphone with a high-resolution camera and advanced features.",
    shipping: {
      cost: 19.99,
      method: "Express",
      estimatedDelivery: "2-3 business days",
    },
  },
  {
    id: 4,
    name: "Shoes",
    price: 49.99,
    currency: "USD",
    category: "Footwear",
    inStock: true,
    image: "shoes.jpg",
    review: 4.2,
    discount: 15,
    description:
      "Comfortable and durable shoes for various outdoor activities.",
    shipping: {
      cost: 9.99,
      method: "Standard",
      estimatedDelivery: "4-6 business days",
    },
  },
  {
    id: 5,
    name: "Headphones",
    price: 79.99,
    currency: "USD",
    category: "Electronics",
    inStock: true,
    image: "headphones.jpg",
    review: 4.7,
    discount: 10,
    description: "High-quality headphones with noise-cancellation technology.",
    shipping: {
      cost: 7.99,
      method: "Standard",
      estimatedDelivery: "3-5 business days",
    },
  },
  {
    id: 6,
    name: "Desk Chair",
    price: 149.99,
    currency: "USD",
    category: "Furniture",
    inStock: true,
    image: "desk-chair.jpg",
    review: 4.2,
    discount: 20,
    description:
      "Ergonomic desk chair with adjustable features for a comfortable work environment.",
    shipping: {
      cost: 19.99,
      method: "Standard",
      estimatedDelivery: "5-7 business days",
    },
  },
  {
    id: 7,
    name: "Backpack",
    price: 39.99,
    currency: "USD",
    category: "Accessories",
    inStock: true,
    image: "backpack.jpg",
    review: 4.8,
    discount: 0,
    description: "Spacious and stylish backpack for everyday use or travel.",
    shipping: {
      cost: 6.99,
      method: "Standard",
      estimatedDelivery: "3-5 business days",
    },
  },
  {
    id: 8,
    name: "Coffee Maker",
    price: 79.99,
    currency: "USD",
    category: "Kitchen Appliances",
    inStock: true,
    image: "coffee-maker.jpg",
    review: 4.6,
    discount: 10,
    description:
      "Drip coffee maker with a programmable timer for brewing your favorite coffee.",
    shipping: {
      cost: 9.99,
      method: "Standard",
      estimatedDelivery: "4-6 business days",
    },
  },
  {
    id: 9,
    name: "Digital Camera",
    price: 399.99,
    currency: "USD",
    category: "Electronics",
    inStock: true,
    image: "digital-camera.jpg",
    review: 4.4,
    discount: 30,
    description:
      "High-quality digital camera for capturing stunning photos and videos.",
    shipping: {
      cost: 14.99,
      method: "Standard",
      estimatedDelivery: "3-5 business days",
    },
  },
  {
    id: 10,
    name: "Yoga Mat",
    price: 29.99,
    currency: "USD",
    category: "Fitness",
    inStock: true,
    image: "yoga-mat.jpg",
    review: 4.9,
    discount: 0,
    description: "Non-slip yoga mat for comfortable and safe workouts.",
    shipping: {
      cost: 4.99,
      method: "Standard",
      estimatedDelivery: "3-5 business days",
    },
  },
  {
    id: 11,
    name: "Blender",
    price: 59.99,
    currency: "USD",
    category: "Kitchen Appliances",
    inStock: true,
    image: "blender.jpg",
    review: 4.3,
    discount: 15,
    description:
      "Powerful blender for making smoothies and a variety of delicious beverages.",
    shipping: {
      cost: 8.99,
      method: "Standard",
      estimatedDelivery: "4-6 business days",
    },
  },
  {
    id: 12,
    name: "Watch",
    price: 129.99,
    currency: "USD",
    category: "Accessories",
    inStock: true,
    image: "watch.jpg",
    review: 4.7,
    discount: 0,
    description:
      "Stylish and elegant wristwatch for both casual and formal occasions.",
    shipping: {
      cost: 7.99,
      method: "Standard",
      estimatedDelivery: "3-5 business days",
    },
  },
  {
    id: 13,
    name: "Gaming Console",
    price: 299.99,
    currency: "USD",
    category: "Electronics",
    inStock: true,
    image: "gaming-console.jpg",
    review: 4.6,
    discount: 25,
    description:
      "Gaming console for an immersive gaming experience with high-quality graphics.",
    shipping: {
      cost: 14.99,
      method: "Standard",
      estimatedDelivery: "5-7 business days",
    },
  },
  {
    id: 14,
    name: "Cookware Set",
    price: 89.99,
    currency: "USD",
    category: "Kitchen",
    inStock: true,
    image: "cookware-set.jpg",
    review: 4.2,
    discount: 10,
    description:
      "Complete cookware set for preparing a wide range of delicious dishes.",
    shipping: {
      cost: 12.99,
      method: "Standard",
      estimatedDelivery: "4-6 business days",
    },
  },
  {
    id: 15,
    name: "Sunglasses",
    price: 49.99,
    currency: "USD",
    category: "Accessories",
    inStock: true,
    image: "sunglasses.jpg",
    review: 4.8,
    discount: 0,
    description:
      "Fashionable sunglasses with UV protection for eye safety and style.",
    shipping: {
      cost: 6.99,
      method: "Standard",
      estimatedDelivery: "3-5 business days",
    },
  },
  {
    id: 16,
    name: "Desk",
    price: 199.99,
    currency: "USD",
    category: "Furniture",
    inStock: true,
    image: "desk.jpg",
    review: 4.4,
    discount: 15,
    description: "Sturdy and spacious desk for working or studying at home.",
    shipping: {
      cost: 19.99,
      method: "Standard",
      estimatedDelivery: "5-7 business days",
    },
  },
  {
    id: 17,
    name: "Handbag",
    price: 69.99,
    currency: "USD",
    category: "Accessories",
    inStock: true,
    image: "handbag.jpg",
    review: 4.6,
    discount: 0,
    description:
      "Elegant handbag with multiple compartments for organizing your essentials.",
    shipping: {
      cost: 7.99,
      method: "Standard",
      estimatedDelivery: "3-5 business days",
    },
  },
  {
    id: 18,
    name: "Vacuum Cleaner",
    price: 129.99,
    currency: "USD",
    category: "Home Appliances",
    inStock: true,
    image: "vacuum-cleaner.jpg",
    review: 4.5,
    discount: 20,
    description:
      "High-performance vacuum cleaner for efficient cleaning of your home.",
    shipping: {
      cost: 9.99,
      method: "Standard",
      estimatedDelivery: "4-6 business days",
    },
  },
  {
    id: 19,
    name: "Guitar",
    price: 299.99,
    currency: "USD",
    category: "Musical Instruments",
    inStock: true,
    image: "guitar.jpg",
    review: 4.7,
    discount: 10,
    description: "Acoustic guitar for musicians and music enthusiasts.",
    shipping: {
      cost: 14.99,
      method: "Standard",
      estimatedDelivery: "3-5 business days",
    },
  },
  {
    id: 20,
    name: "Fitness Tracker",
    price: 79.99,
    currency: "USD",
    category: "Fitness",
    inStock: true,
    image: "fitness-tracker.jpg",
    review: 4.4,
    discount: 0,
    description:
      "Smart fitness tracker with heart rate monitoring and activity tracking.",
    shipping: {
      cost: 6.99,
      method: "Standard",
      estimatedDelivery: "3-5 business days",
    },
  },
];
