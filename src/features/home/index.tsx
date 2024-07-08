import React, { useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { RangeSlider } from "@/ui";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, initialState } from "@/store/slices/products";
import { CustomerReviewsFilter, ProductsList, SelectSort } from "./ui";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const HomePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.products.filteredProducts,
  );

  // const loading = useSelector((state: RootState) => state.products.loading);
  // const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Stack direction="row" width="100%" spacing={4} sx={{ my: "64px" }}>
      <Stack sx={{ flex: "2" }} spacing={4}>
        <Box>
          <Typography variant="body1" sx={{ margin: "80px 0 16px" }}>
            Price Range Selected
          </Typography>

          <Card sx={{ padding: "40px 20px 10px" }}>
            <RangeSlider
              min={initialState.priceRange[0]}
              max={initialState.priceRange[1]}
              step={1}
            />
          </Card>
        </Box>

        <Box>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>CUSTOMERS REVIEWS</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Stack flexDirection="row" flexWrap="wrap" spacing={1} useFlexGap>
                <CustomerReviewsFilter />
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>

      <Stack sx={{ flex: "6" }}>
        <Card sx={{ padding: "16px" }}>
          <Box sx={{ mb: "40px" }}>
            <SelectSort />
          </Box>

          <Box>
            <Grid container spacing={2}>
              <ProductsList data={products} />
            </Grid>
          </Box>
        </Card>
      </Stack>
    </Stack>
  );
};
