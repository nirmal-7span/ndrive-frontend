import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Container from "@/components/layout/container";
import PageLayout from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { carsApi } from "@/api/cars-api";

import CarGallery from "./components/car-gallery";
import CarInfo from "./components/car-info";
import PriceCard from "./components/price-card";
import CarSpecs from "./components/car-specs";
import ErrorState from "@/components/shared/error-state";
import { Skeleton } from "@/components/ui/skeleton";

export default function CarDetailsPage() {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await carsApi.getCarById(carId);
        if (!data) {
          setError("Car not found");
        } else {
          setCar(data);
          try {
            const stored = localStorage.getItem("recentlyViewedIds");
            let recentIds = stored ? JSON.parse(stored) : [];
            recentIds = recentIds.filter((id) => id !== data.id);
            recentIds.unshift(data.id);
            recentIds = recentIds.slice(0, 3);
            localStorage.setItem(
              "recentlyViewedIds",
              JSON.stringify(recentIds),
            );
          } catch {
            localStorage.setItem("recentlyViewedIds", JSON.stringify([]));
          }
        }
      } catch (err) {
        setError(err.message || "Failed to fetch car details");
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [carId]);

  if (loading) {
    return (
      <PageLayout>
        <Container>
          <div className="py-8 space-y-8">
            <Skeleton className="h-10 w-24" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Skeleton className="h-[400px] md:h-[500px] w-full rounded-xl" />
              </div>
              <div className="space-y-8">
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-48 w-full" />
              </div>
            </div>
          </div>
        </Container>
      </PageLayout>
    );
  }

  if (error || !car) {
    return (
      <PageLayout>
        <Container>
          <ErrorState
            title="Unable to load car"
            message={error}
            actionLabel="Back to Cars"
            onAction={() => navigate("/cars")}
          />
        </Container>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Helmet>
        <title>{`NDrive | ${car.brand} ${car.model}`}</title>
        <meta
          name="description"
          content={`Check out this ${car.year} ${car.brand} ${car.model} available now on NDrive.`}
        />
        <meta
          property="og:title"
          content={`NDrive | ${car.brand} ${car.model}`}
        />
        <meta
          property="og:description"
          content={`Check out this ${car.year} ${car.brand} ${car.model} available now on NDrive.`}
        />
        <meta property="og:image" content={car.images[0]} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={car.images[0]} />
      </Helmet>
      <Container>
        <div className="py-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/cars")}
            className="mb-6 text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cars
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <CarGallery images={car.images} />
            </div>

            <div className="space-y-6">
              <CarInfo car={car} />
              <PriceCard car={car} />
            </div>
          </div>

          <div className="mt-8 lg:mt-12">
            <CarSpecs car={car} />
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}
