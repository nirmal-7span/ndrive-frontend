import CarCard from "@/components/car/car-card";

function CarsGrid({ cars }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarsGrid;
