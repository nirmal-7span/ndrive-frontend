import PageLayout from "../../components/layout/page-layout";
import Container from "../../components/layout/container";
import HeroSection from "./components/hero-section";
import { carsApi } from "../../api/cars-api.js";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import formatPrice from "@/utils/format-price";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [carsList, setCarsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    carsApi.getCars().then((cars) => {
      setCarsList(cars);
      setLoading(false);
    });
  }, []);

  return (
    <PageLayout>
      <Container>
        <HeroSection />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[1, 2].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <Skeleton className="h-5 w-32" />
                </CardHeader>

                <CardContent>
                  <Skeleton className="h-10 w-20" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Cars Available</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-4xl font-bold">{carsList.length}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Brands</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-4xl font-bold">
                  {new Set(carsList.map((car) => car.brand)).size}
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Featured Cars */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Featured Cars</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {carsList
              .filter((car) => car.featured)
              .slice(0, 6)
              .map((car) => (
                <Card key={car.id} className="overflow-hidden">
                  <img
                    src={car.images[0]}
                    alt={car.model}
                    className="w-full h-48 object-cover"
                  />

                  <CardHeader>
                    <CardTitle>
                      {car.brand} {car.model}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground">
                      {formatPrice(car.price)}
                    </p>
                  </CardContent>

                  <CardFooter>
                    <Button
                      className="w-full cursor-pointer"
                      onClick={() => navigate(`/cars/${car.id}`)}
                    >
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}

export default HomePage;

// Section 3 — Featured Cars

// This is important.

// Show:

// Top Picks

// Take:

// cars.filter(car => car.featured)

// Show first:

// 6 cars

// Grid:

// 3 columns desktop

// For now, don't build the full CarCard.

// Just create a simple version.

// Display:

// Image
// Brand
// Model
// Price
// View Details

// We'll improve it later when building the Cars page.
