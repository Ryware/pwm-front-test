import { Box, Grid } from "@mui/material";
import React, { FC } from "react";
import { ProductCard } from "@/components/product-card";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { addToWatchList } from "@/store/slices/watch";
import { Product } from "@/types";

export const WatchPage: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const watchList = useSelector(
    (state: RootState) => state.watchList.watchList,
  );

  const onWatchClick = (product: Product) => {
    dispatch(addToWatchList(product));
  };

  return (
    <Box sx={{ marginTop: "64px" }} width="100%">
      <Grid container spacing={2}>
        {watchList.map((product) => (
          <Grid item xs={12} sm={12} md={6} lg={3} key={product.id}>
            <ProductCard product={product} onWatchClick={onWatchClick} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
