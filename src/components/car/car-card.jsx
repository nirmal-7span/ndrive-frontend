import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import formatPrice from "@/utils/format-price";

function CarCard({ car }) {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden pt-0 flex flex-col h-full">
      <div className="relative">
        <img
          src={car.images[0]}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-52 object-cover"
        />

        <Badge variant="secondary" className="absolute top-3 right-3">
          {car.badge}
        </Badge>
      </div>

      <CardHeader>
        <CardTitle className="text-xl">
          {car.brand} {car.model}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{car.variant}</p>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">{car.fuelType}</Badge>
          <Badge variant="secondary">{car.transmission}</Badge>
          <Badge variant="secondary">{car.year}</Badge>
          <Badge variant="secondary">{car.ownership}</Badge>
          <Badge variant="secondary">
            {car.kmDriven.toLocaleString("en-IN")} km
          </Badge>
        </div>

        <div className="mt-auto">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">{formatPrice(car.price)}</p>
            {car.originalPrice && car.originalPrice > car.price && (
              <p className="text-sm text-muted-foreground line-through">
                {formatPrice(car.originalPrice)}
              </p>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            EMI from {formatPrice(car.emiPerMonth)}/m
          </p>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          size="lg"
          className="w-full cursor-pointer"
          onClick={() => navigate(`/cars/${car.id}`)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CarCard;
