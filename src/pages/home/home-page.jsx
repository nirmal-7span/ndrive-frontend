import { useState, useEffect } from "react";
import PageLayout from "@/components/layout/page-layout";
import Container from "@/components/layout/container";
import HeroSection from "@/pages/home/components/hero-section";
import CarsGrid from "@/components/car/cars-grid";
import { useCars } from "@/hooks/use-cars";
import ErrorState from "@/components/shared/error-state";
import EmptyState from "@/components/shared/empty-state";

function HomePage() {
  const { carsList, loading, error } = useCars();
  const [recentCars, setRecentCars] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("recentlyViewedIds");
      if (stored && carsList.length > 0) {
        const ids = JSON.parse(stored);
        const carsForRecentlyViewed = ids.map((id) =>
          carsList.find((c) => c.id === id),
        );
        setRecentCars(carsForRecentlyViewed);
      }
    } catch (e) {
      setRecentCars([]);
    }
  }, [carsList]);

  if (error) {
    return (
      <PageLayout>
        <Container>
          <ErrorState message={error} />
        </Container>
      </PageLayout>
    );
  }

  if (!loading && carsList.length === 0) {
    return (
      <PageLayout>
        <Container>
          <EmptyState message="No cars available." />
        </Container>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Container>
        <HeroSection />

        {recentCars.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Recently Viewed</h2>
            <CarsGrid cars={recentCars} isLoading={false} />
          </div>
        )}

        <div className="mt-12 mb-20">
          <h2 className="text-2xl font-bold mb-6">Featured Cars</h2>

          <CarsGrid
            cars={carsList.filter((car) => car.featured).slice(0, 6)}
            isLoading={loading}
          />
        </div>
      </Container>
    </PageLayout>
  );
}

export default HomePage;
