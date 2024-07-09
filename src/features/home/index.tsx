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
import { fetchProducts } from "@/store/slices/products";
import { initialState } from "@/store/slices/products/initial-state";
import { CustomerReviewsFilter, ProductsList, SelectSort } from "./ui";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Loader } from "@/components/loader";

export const HomePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.products.filteredProducts,
  );
  const loading = useSelector((state: RootState) => state.products.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      width="100%"
      spacing={4}
      sx={{ my: "44px" }}
    >
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
          <Accordion defaultExpanded sx={{ minWidth: "180px" }}>
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
          <SelectSort sx={{ mb: "40px" }} />

          <Grid container spacing={2}>
            {loading ? (
              <Loader size="large" />
            ) : (
              <ProductsList data={products} />
            )}
          </Grid>
        </Card>
      </Stack>
    </Stack>
  );
};
