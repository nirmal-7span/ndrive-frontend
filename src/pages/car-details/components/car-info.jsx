import { Badge } from "@/components/ui/badge";

export default function CarInfo({ car }) {
  if (!car) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            {car.brand} {car.model}
          </h1>
          <p className="text-lg text-muted-foreground mt-1">{car.variant}</p>
        </div>
        
        {car.badge && (
          <Badge variant="outline" className="text-sm px-3 py-1">
            {car.badge}
          </Badge>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="text-sm px-3 py-1">
          {car.year}
        </Badge>
      </div>
    </div>
  );
}
