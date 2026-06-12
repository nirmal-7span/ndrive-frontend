import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PageLayout from "@/components/layout/page-layout";
import CarsGrid from "@/components/car/cars-grid";
import { useCars } from "@/hooks/use-cars";
import Container from "@/components/layout/container";
import ErrorState from "@/components/shared/error-state";
import EmptyState from "@/components/shared/empty-state";
import SearchBar from "./components/search-bar";
import SortDropdown from "./components/sort-dropdown";
import FiltersSidebar from "./components/filters-sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function CarsPage() {
  const { carsList, loading, error, uniqueBrandsCount } = useCars();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");

  const [filters, setFilters] = useState(() => ({
    brands: searchParams.getAll("brand"),
    bodyTypes: [],
    fuelTypes: searchParams.getAll("fuel"),
    transmissions: searchParams.getAll("transmission"),
    ownerships: [],
    priceRange: { min: "", max: "" },
    yearRange: { min: "", max: "" },
    kmRange: { min: "", max: "" },
  }));

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    params.delete("brand");
    params.delete("fuel");
    params.delete("transmission");

    filters.brands.forEach((brand) => params.append("brand", brand));
    filters.fuelTypes.forEach((fuel) => params.append("fuel", fuel));
    filters.transmissions.forEach((trans) =>
      params.append("transmission", trans),
    );

    setSearchParams(params, { replace: true });
  }, [
    filters.brands,
    filters.fuelTypes,
    filters.transmissions,
    setSearchParams,
  ]);

  const [sortBy, setSortBy] = useState("Relevance");

  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  // Reset to page 1 when filters, search, or sort change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filters, sortBy]);

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
    if (filters.bodyTypes.length > 0) {
      result = result.filter((car) => filters.bodyTypes.includes(car.bodyType));
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

  const totalPages = Math.ceil(filteredAndSortedCars.length / carsPerPage);
  const startIndex = (currentPage - 1) * carsPerPage;
  const paginatedCars = filteredAndSortedCars.slice(
    startIndex,
    startIndex + carsPerPage,
  );

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
        <div className="mb-8 pb-6 border-b flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              NDrive Cars
            </h1>
            <p className="text-muted-foreground mt-1 max-w-2xl">
              Explore our collection of premium vehicles.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              {loading ? (
                <Skeleton className="h-4 w-6" />
              ) : (
                <span className="font-medium text-foreground">
                  {carsList.length}
                </span>
              )}
              <span>Cars Available</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
            <div className="flex items-center gap-1.5">
              {loading ? (
                <Skeleton className="h-4 w-6" />
              ) : (
                <span className="font-medium text-foreground">
                  {uniqueBrandsCount}
                </span>
              )}
              <span>Brands</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="hidden lg:block w-64 shrink-0">
            <div className="bg-muted/10 p-4 rounded-lg border sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin">
              <FiltersSidebar
                cars={carsList}
                filters={filters}
                setFilters={setFilters}
                loading={loading}
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
              <div className="flex-1">
                <SearchBar value={searchQuery} onChange={setSearchQuery} />
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <Sheet>
                  <SheetTrigger
                    render={
                      <Button variant="outline" className="flex-1 lg:hidden" />
                    }
                  >
                    Filters
                  </SheetTrigger>
                  <SheetContent
                    side="left"
                    className="w-[85vw] sm:w-80 overflow-y-auto scrollbar-thin"
                  >
                    <SheetHeader className="text-left">
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="px-6 pb-6">
                      <FiltersSidebar
                        cars={carsList}
                        filters={filters}
                        setFilters={setFilters}
                        loading={loading}
                      />
                    </div>
                  </SheetContent>
                </Sheet>

                <div className="flex-1 sm:flex-none">
                  <SortDropdown value={sortBy} onChange={setSortBy} />
                </div>
              </div>
            </div>

            {!loading && filteredAndSortedCars.length === 0 ? (
              <div className="py-12 text-center text-muted-foreground bg-muted/20 rounded-lg border border-dashed">
                No cars found.
              </div>
            ) : (
              <>
                <CarsGrid cars={paginatedCars} isLoading={loading} />

                {totalPages > 1 && !loading && (
                  <div className="mt-8">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            onClick={() =>
                              setCurrentPage((p) => Math.max(1, p - 1))
                            }
                            className={
                              currentPage === 1
                                ? "pointer-events-none opacity-50"
                                : "cursor-pointer"
                            }
                          />
                        </PaginationItem>

                        {[...Array(totalPages)].map((_, i) => (
                          <PaginationItem key={i}>
                            <PaginationLink
                              onClick={() => setCurrentPage(i + 1)}
                              isActive={currentPage === i + 1}
                              className="cursor-pointer"
                            >
                              {i + 1}
                            </PaginationLink>
                          </PaginationItem>
                        ))}

                        <PaginationItem>
                          <PaginationNext
                            onClick={() =>
                              setCurrentPage((p) => Math.min(totalPages, p + 1))
                            }
                            className={
                              currentPage === totalPages
                                ? "pointer-events-none opacity-50"
                                : "cursor-pointer"
                            }
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}

export default CarsPage;
