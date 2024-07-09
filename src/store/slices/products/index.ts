import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Options, Product } from "@/types";
import { initialState } from "./initial-state";
import { ProductsState } from "./types";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://itemapi-bkmhaqlsla-zf.a.run.app/api/items/",
    );
    return response.data;
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setRatingValue: (state, action: PayloadAction<number | null>) => {
      state.ratingValue = action.payload;
      applyFiltersAndSort(state);
    },
    setSortBy: (state, action: PayloadAction<Options>) => {
      state.sortBy = action.payload;
      applyFiltersAndSort(state);
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      applyFiltersAndSort(state);
    },
    filterByPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
      applyFiltersAndSort(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        applyFiltersAndSort(state);
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export const { setSearchValue, filterByPriceRange, setRatingValue, setSortBy } =
  productsSlice.actions;

export default productsSlice.reducer;

const sortProducts = (products: Product[], sortBy: Options): Product[] => {
  switch (sortBy) {
    case "cheapest":
      return [...products].sort((a, b) => a.price - b.price);
    case "mostExpensive":
      return [...products].sort((a, b) => b.price - a.price);
    case "topRated":
      return [...products].sort((a, b) => b.review - a.review);
    default:
      return products;
  }
};

const filterProducts = (
  products: Product[],
  ratingValue: number | null,
  priceRange: [number, number],
  searchValue: string,
): Product[] => {
  return products.filter((product) => {
    const matchesRating = ratingValue === null || product.review >= ratingValue;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch =
      product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.description.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.price.toString().includes(searchValue) ||
      product.review.toString().includes(searchValue);

    return matchesRating && matchesPrice && matchesSearch;
  });
};

const applyFiltersAndSort = (state: ProductsState) => {
  state.filteredProducts = filterProducts(
    state.products,
    state.ratingValue,
    state.priceRange,
    state.searchValue,
  );
  state.filteredProducts = sortProducts(state.filteredProducts, state.sortBy);
};
