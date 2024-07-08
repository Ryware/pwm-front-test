import { ProductsState } from "@/store/slices/products/types";

export const initialState: ProductsState = {
  products: [],
  searchValue: "",
  sortBy: "",
  ratingValue: null,
  filteredProducts: [],
  priceRange: [0, 1000],
  loading: false,
  error: null,
};
