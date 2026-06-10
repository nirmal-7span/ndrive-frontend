import PageLayout from "@/components/layout/page-layout";
import CarsGrid from "@/components/car/cars-grid";
import { useCars } from "@/hooks/use-cars";
import Container from "@/components/layout/container";
import ErrorState from "@/components/shared/error-state";
import EmptyState from "@/components/shared/empty-state";

function CarsPage() {
  const { carsList, loading, error, uniqueBrandsCount } = useCars();

  if (error) {
    return <ErrorState message={error} />;
  }

  if (!loading && carsList.length === 0) {
    return <EmptyState message="No cars available." />;
  }

  return (
    <PageLayout>
      <Container>
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Browse Cars</h1>

          <p className="text-muted-foreground mt-2">
            {carsList.length} Cars Available and {uniqueBrandsCount} Brands
          </p>
        </div>

        <CarsGrid className="mt-6" cars={carsList} isLoading={loading} />
      </Container>
    </PageLayout>
  );
}

export default CarsPage;
