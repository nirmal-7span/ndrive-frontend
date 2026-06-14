import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/layout/page-layout";
import Container from "@/components/layout/container";
import HeroSection from "@/pages/home/components/hero-section";
import CarsGrid from "@/components/car/cars-grid";
import { useCars } from "@/hooks/use-cars";
import ErrorState from "@/components/shared/error-state";
import EmptyState from "@/components/shared/empty-state";

function HomePage() {
  const { carsList, loading, error } = useCars();
  const recentCars = useMemo(() => {
    try {
      const stored = localStorage.getItem("recentlyViewedIds");
      if (stored && carsList.length > 0) {
        const ids = JSON.parse(stored);
        return ids
          .map((id) => carsList.find((c) => c.id === id))
          .filter(Boolean);
      }
    } catch {
      console.log("Error loading recently viewed cars");
    }
    return [];
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
      <Helmet>
        <title>NDrive | Buy Used Cars</title>
        <meta
          name="description"
          content="Browse verified used cars on NDrive"
        />
        <meta property="og:title" content="NDrive | Buy Used Cars" />
        <meta
          property="og:description"
          content="Browse verified used cars on NDrive"
        />
        <meta
          property="og:image"
          content={`${window.location.origin}/og-image.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={`${window.location.origin}/og-image.png`}
        />
      </Helmet>
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
