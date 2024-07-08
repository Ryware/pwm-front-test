import React from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { filterByPriceRange, initialState } from "@/store/slices/products";

interface RangeSliderProps {
  min: number;
  max: number;
  step: number;
}

const CustomSlider = styled(Slider)(() => ({
  "& .MuiSlider-valueLabel": {
    backgroundColor: "transparent",
    borderRadius: "unset",
    color: "black",
    "&:before": {
      display: "none",
    },
  },
  color: "#707070",
  "& .MuiSlider-thumb": {
    backgroundColor: "#000",
  },
  "& .MuiSlider-track": {
    backgroundColor: "#707070",
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#333",
  },
}));

export const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, step }) => {
  const dispatch: AppDispatch = useDispatch();
  const [value, setValue] = React.useState<[number, number] | null>(
    initialState.priceRange,
  );
  const valueSelector = useSelector(
    (state: RootState) => state.products.priceRange,
  );

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as [number, number]);
  };

  const handleSliderChangeCommitted = (
    event: React.SyntheticEvent | Event,
    newValue: number | number[],
  ) => {
    dispatch(filterByPriceRange(newValue as [number, number]));
    setValue(null);
  };

  return (
    <Box>
      <CustomSlider
        value={value || valueSelector}
        min={min}
        max={max}
        step={step}
        onChange={handleSliderChange}
        onChangeCommitted={handleSliderChangeCommitted}
        valueLabelDisplay="on"
        valueLabelFormat={(value) => `${value}$`}
      />
    </Box>
  );
};
