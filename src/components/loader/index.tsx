import { FC } from "react";
import { Box, CircularProgress } from "@mui/material";
import { LoaderSize } from "./types";
import { LoaderSizesMap } from "./constants";

interface LoaderProps {
  size?: LoaderSize;
}

export const Loader: FC<LoaderProps> = ({ size }) => {
  let loaderSize = LoaderSizesMap[size || "medium"];

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
    >
      <CircularProgress size={loaderSize} />
    </Box>
  );
};
