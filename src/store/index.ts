import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";
import watchListReducer from "./slices/watch";

const store = configureStore({
  reducer: {
    products: productsReducer,
    watchList: watchListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
