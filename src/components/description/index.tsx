import React, { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { Button } from "@/ui";
import { useNavigate } from "react-router-dom";

export const Description: FC<{ title: string }> = ({ title }) => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <Stack alignItems="center" sx={{ marginTop: "64px" }}>
      <Typography variant="h2" color="textPrimary" gutterBottom>
        {title}
      </Typography>
      <Button variant="outlined" size="large" onClick={navigateToHome}>
        Go to Home
      </Button>
    </Stack>
  );
};
