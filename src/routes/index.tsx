import { Route, Routes } from "react-router-dom";
import { HomePage, NotFoundPage, WatchPage } from "@/features";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/watch" element={<WatchPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
