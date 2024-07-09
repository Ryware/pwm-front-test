import React from "react";
import { Card, CardMedia, Chip, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Product } from "@/types";
import { Button, Rating } from "@/ui";
import { RootState } from "@/store";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import placeholder from "../../assets/images/placeholder.png";

interface ProductCardProps {
  product: Product;
  onWatchClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onWatchClick,
}) => {
  const watchList = useSelector(
    (state: RootState) => state.watchList.watchList,
  );

  const isInWatchList = watchList.some((item) => item.id === product.id);

  return (
    <Card
      sx={{
        boxShadow: "none",
        padding: "16px 16px 12px",
        borderRadius: 2,
        minWidth: 258,
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="224"
        image={product.image ?? placeholder}
        alt={product.name}
      />
      <Typography height="74px" variant="body1" color="#19191D" my="8px">
        {product.description}
      </Typography>

      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mb="8px"
      >
        <Typography variant="h5" fontWeight="bold" color="#19191D">
          {product.currency} {product?.price?.toFixed(2)}
        </Typography>

        {product.discount > 0 && (
          <Chip
            label={`${product.discount}% OFF`}
            color="success"
            size="small"
            sx={{
              ml: 1,
              height: 24,
              backgroundColor: "#ECF7ED",
              color: "#37833B",
              borderRadius: 1,
            }}
          />
        )}
      </Stack>

      <Stack flexDirection="row" height="40px" mb={1}>
        <Typography variant="body2" color="text.secondary" mr={0.5}>
          {product.shipping.method}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
          mr={0.5}
        >
          {product.shipping.cost}
        </Typography>
        <Typography variant="body2" color="text.secondary" mr={0.5}>
          {product.shipping.estimatedDelivery}
        </Typography>
      </Stack>

      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Rating
          value={product.review}
          readOnly
          size="small"
          text={product.review?.toString()}
        />
        <Button
          size="small"
          color="primary"
          onClick={() => onWatchClick(product)}
          startIcon={<FavoriteBorderIcon />}
          variant={isInWatchList ? "contained" : "outlined"}
        >
          Watch
        </Button>
      </Stack>
    </Card>
  );
};
