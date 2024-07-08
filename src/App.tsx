import React from "react";
import AppRoutes from "./routes";
import { Container } from "@mui/material";
import { Header } from "./components/header";
import { AppProvider } from "./providers/app";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Container maxWidth="xl">
        <Header />
        <AppRoutes />
      </Container>
    </AppProvider>
  );
};

export default App;
