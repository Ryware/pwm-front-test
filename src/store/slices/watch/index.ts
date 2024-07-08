import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types";
import { initialState } from "./initial-state";

const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addToWatchList: (state, action: PayloadAction<Product>) => {
      const index = state.watchList.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index >= 0) {
        state.watchList.splice(index, 1);
      } else {
        state.watchList.push(action.payload);
      }
    },
  },
});

export const { addToWatchList } = watchListSlice.actions;

export default watchListSlice.reducer;
