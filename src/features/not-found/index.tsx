import React, { FC } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "@/ui";

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <Container
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack alignItems="center" sx={{ marginTop: "64px" }}>
        <Typography variant="h2" color="textPrimary" gutterBottom>
          404 Not Found
        </Typography>
        <Button variant="outlined" size="large" onClick={navigateToHome}>
          Go to Home
        </Button>
      </Stack>
    </Container>
  );
};
