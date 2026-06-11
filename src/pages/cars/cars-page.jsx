import { useState, useMemo } from "react";
import PageLayout from "@/components/layout/page-layout";
import CarsGrid from "@/components/car/cars-grid";
import { useCars } from "@/hooks/use-cars";
import Container from "@/components/layout/container";
import ErrorState from "@/components/shared/error-state";
import EmptyState from "@/components/shared/empty-state";
import SearchBar from "./components/search-bar";
import SortDropdown from "./components/sort-dropdown";
import FiltersSidebar from "./components/filters-sidebar";

function CarsPage() {
  const { carsList, loading, error, uniqueBrandsCount } = useCars();

  const [searchQuery, setSearchQuery] = useState("");

  const [filters, setFilters] = useState({
    brands: [],
    fuelTypes: [],
    transmissions: [],
    ownerships: [],
    priceRange: { min: "", max: "" },
    yearRange: { min: "", max: "" },
    kmRange: { min: "", max: "" },
  });

  const [sortBy, setSortBy] = useState("Relevance");

  const filteredAndSortedCars = useMemo(() => {
    let result = [...carsList];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (car) =>
          car.brand.toLowerCase().includes(query) ||
          car.model.toLowerCase().includes(query) ||
          car.variant.toLowerCase().includes(query),
      );
    }

    if (filters.brands.length > 0) {
      result = result.filter((car) => filters.brands.includes(car.brand));
    }
    if (filters.fuelTypes.length > 0) {
      result = result.filter((car) => filters.fuelTypes.includes(car.fuelType));
    }
    if (filters.transmissions.length > 0) {
      result = result.filter((car) =>
        filters.transmissions.includes(car.transmission),
      );
    }
    if (filters.ownerships.length > 0) {
      result = result.filter((car) =>
        filters.ownerships.includes(car.ownership),
      );
    }
    if (filters.priceRange.min) {
      result = result.filter(
        (car) => car.price >= Number(filters.priceRange.min),
      );
    }
    if (filters.priceRange.max) {
      result = result.filter(
        (car) => car.price <= Number(filters.priceRange.max),
      );
    }
    if (filters.yearRange.min) {
      result = result.filter(
        (car) => car.year >= Number(filters.yearRange.min),
      );
    }
    if (filters.yearRange.max) {
      result = result.filter(
        (car) => car.year <= Number(filters.yearRange.max),
      );
    }
    if (filters.kmRange.min) {
      result = result.filter(
        (car) => car.kmDriven >= Number(filters.kmRange.min),
      );
    }
    if (filters.kmRange.max) {
      result = result.filter(
        (car) => car.kmDriven <= Number(filters.kmRange.max),
      );
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case "Price Low to High":
          return a.price - b.price;
        case "Price High to Low":
          return b.price - a.price;
        case "Newest First":
          return b.year - a.year;
        case "Oldest First":
          return a.year - b.year;
        case "KM Low to High":
          return a.kmDriven - b.kmDriven;
        case "Relevance":
        default:
          return 0;
      }
    });

    return result;
  }, [carsList, searchQuery, sortBy, filters]);

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
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Browse Cars</h1>
          <p className="text-muted-foreground mt-2">
            {carsList.length} Cars Available and {uniqueBrandsCount} Brands
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="flex-1 max-w-md">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <div>
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-64 shrink-0">
            <div className="bg-muted/10 p-4 rounded-lg border sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin">
              <FiltersSidebar
                cars={carsList}
                filters={filters}
                setFilters={setFilters}
              />
            </div>
          </div>

          <div className="flex-1">
            {!loading && filteredAndSortedCars.length === 0 ? (
              <div className="py-12 text-center text-muted-foreground bg-muted/20 rounded-lg border border-dashed">
                No cars found.
              </div>
            ) : (
              <CarsGrid cars={filteredAndSortedCars} isLoading={loading} />
            )}
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}

export default CarsPage;
