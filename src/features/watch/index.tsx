import React, { FC } from "react";
import { Box, Grid } from "@mui/material";
import { ProductCard } from "@/components/product-card";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { addToWatchList } from "@/store/slices/watch";
import { Product } from "@/types";
import { Description } from "@/components/description";

export const WatchPage: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const watchList = useSelector(
    (state: RootState) => state.watchList.watchList,
  );

  const onWatchClick = (product: Product) => {
    dispatch(addToWatchList(product));
  };

  return !!watchList?.length ? (
    <Box sx={{ my: "64px" }} width="100%">
      <Grid container spacing={2}>
        {watchList.map((product) => (
          <Grid item xs={12} sm={12} md={6} lg={3} key={product.id}>
            <ProductCard product={product} onWatchClick={onWatchClick} />
          </Grid>
        ))}
      </Grid>
    </Box>
  ) : (
    <Description title="Empty" />
  );
};
