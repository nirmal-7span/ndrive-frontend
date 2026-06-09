import { Routes, Route } from "react-router-dom";
import CarDetailsPage from "@/pages/car-details/car-details-page";
import CarsPage from "@/pages/cars/cars-page";
import HomePage from "@/pages/home/home-page";
import NotFoundPage from "@/pages/not-found/not-found-page";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/cars" element={<CarsPage />} />

      <Route path="/cars/:carId" element={<CarDetailsPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
