import React, { FC } from "react";
import { Container } from "@mui/material";
import { Description } from "@/components/description";

export const NotFoundPage: FC = () => {
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
      <Description title="404 Not Found" />
    </Container>
  );
};
