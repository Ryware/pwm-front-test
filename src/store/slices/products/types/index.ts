import { Options, Product } from "@/types";

export interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  searchValue: string;
  ratingValue: number | null;
  priceRange: [number, number];
  error: string | null;
  sortBy: Options;
}
