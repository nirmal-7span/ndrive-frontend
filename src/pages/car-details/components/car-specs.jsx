import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CarSpecs({ car }) {
  if (!car) return null;

  const specs = [
    { label: "Fuel Type", value: car.fuelType },
    { label: "Transmission", value: car.transmission },
    { label: "Ownership", value: car.ownership },
    { label: "KM Driven", value: `${car.kmDriven.toLocaleString("en-IN")} km` },
    { label: "Engine", value: car.engine },
    { label: "Mileage", value: car.mileage },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Car Specifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <div key={index} className="space-y-1">
              <p className="text-sm text-muted-foreground">{spec.label}</p>
              <p className="font-medium">{spec.value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
