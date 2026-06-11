import PageLayout from "@/components/layout/page-layout";
import Container from "@/components/layout/container";
import HeroSection from "@/pages/home/components/hero-section";
import CarsGrid from "@/components/car/cars-grid";
import { useCars } from "@/hooks/use-cars";
import ErrorState from "@/components/shared/error-state";
import EmptyState from "@/components/shared/empty-state";

function HomePage() {
  const { carsList, loading, error } = useCars();

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
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Featured Cars</h2>

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
