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
    <Card className="overflow-hidden pt-0 flex flex-col">
      <div className="relative">
        <img
          src={car.images[0]}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-52 object-cover"
        />

        <Badge variant="outline" className="absolute top-3 right-3">
          {car.badge}
        </Badge>
      </div>

      <CardHeader>
        <CardTitle className="text-xl">
          {car.brand} {car.model}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{car.variant}</p>
      </CardHeader>

      <CardContent className="space-y-4 flex-1">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{car.fuelType}</Badge>
          <Badge variant="secondary">{car.transmission}</Badge>
          <Badge variant="secondary">{car.year}</Badge>
        </div>

        <div>
          <p className="text-2xl font-bold">{formatPrice(car.price)}</p>
        </div>
      </CardContent>

      <CardFooter>
        <Button
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
