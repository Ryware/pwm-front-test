import { Box, Stack } from "@mui/material";
import React from "react";
import { CUSTOM_REVIEWS_VALUES } from "@/constants";
import { Rating } from "@/ui";
import { setRatingValue } from "@/store/slices/products";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";

export const CustomerReviewsFilter = () => {
  const dispatch: AppDispatch = useDispatch();

  const ratingValue = useSelector(
    (state: RootState) => state.products.ratingValue,
  );

  const onCustomerReviewsFilterClick = (value: number) => {
    if (ratingValue === value) {
      dispatch(setRatingValue(null));
    } else {
      dispatch(setRatingValue(value));
    }
  };

  return (
    <Stack flexDirection="row" flexWrap="wrap" spacing={1} useFlexGap>
      {CUSTOM_REVIEWS_VALUES.map((value) => (
        <Box onClick={() => onCustomerReviewsFilterClick(value)} key={value}>
          <Rating
            hideEmptyIcon
            value={value}
            readOnly
            text="& Up"
            align="flex-end"
            sx={{
              backgroundColor: ratingValue === value ? "#e3e1e1" : "#f0eded",
              padding: "8px",
              borderRadius: "16px",
              cursor: "pointer",
            }}
          />
        </Box>
      ))}
    </Stack>
  );
};
