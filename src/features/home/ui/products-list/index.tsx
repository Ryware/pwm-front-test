import React, { FC } from "react";
import { Grid } from "@mui/material";
import { ProductCard } from "@/components/product-card";
import { Product } from "@/types";
import { addToWatchList } from "@/store/slices/watch";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";

export const ProductsList: FC<{ data: Product[] }> = ({ data }) => {
  const dispatch: AppDispatch = useDispatch();

  const onWatchClick = (product: Product) => {
    dispatch(addToWatchList(product));
  };

  return (
    <>
      {data.map((product) => {
        return (
          <Grid item xs={12} md={6} lg={4} key={product.id}>
            <ProductCard product={product} onWatchClick={onWatchClick} />
          </Grid>
        );
      })}
    </>
  );
};
