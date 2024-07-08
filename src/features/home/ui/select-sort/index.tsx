import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SORT_BY_OPTIONS } from "@/constants";
import { Select } from "@/ui";
import { Options } from "@/types";
import { setSortBy } from "@/store/slices/products";
import { SelectChangeEvent, SxProps } from "@mui/material";
import { AppDispatch, RootState } from "@/store";

export const SelectSort: FC<{ sx?: SxProps }> = ({ sx }) => {
  const dispatch: AppDispatch = useDispatch();
  const sortByValue = useSelector((state: RootState) => state.products.sortBy);

  const onSortByChange = (event: SelectChangeEvent<Options>) => {
    const option = event.target.value as Options;
    dispatch(setSortBy(option));
  };

  return (
    <Select
      label="Sort by"
      value={sortByValue}
      onChange={onSortByChange}
      options={SORT_BY_OPTIONS}
      sx={{ width: "200px", ...sx }}
    />
  );
};
