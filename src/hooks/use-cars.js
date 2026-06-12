import { useState, useEffect } from "react";
import { carsApi } from "@/api/cars-api.js";

export function useCars() {
  const [loading, setLoading] = useState(true);
  const [carsList, setCarsList] = useState([]);
  const [error, setError] = useState(null);
  const [uniqueBrandsCount, setUniqueBrandsCount] = useState(0);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const cars = await carsApi.getCars();
        setCarsList(cars);
        setUniqueBrandsCount(new Set(cars.map((car) => car.brand)).size);
      } catch (err) {
        setError("Failed to load cars");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return { carsList, loading, error, uniqueBrandsCount };
}