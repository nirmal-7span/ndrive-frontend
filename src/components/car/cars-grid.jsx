import CarCard from "@/components/car/car-card";
import CarCardSkeleton from "@/components/car/car-card-skeleton";
import { cn } from "@/lib/utils";

function CarsGrid({ cars, isLoading, skeletonCount = 6, className }) {
  if (isLoading) {
    return (
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
          className,
        )}
      >
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <CarCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        className,
      )}
    >
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarsGrid;
