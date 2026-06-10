import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="space-y-6 py-2 md:py-5">
      <div>
        <h1 className="text-6xl font-bold leading-tight tracking-tighter">
          Find Your Perfect Used Car
        </h1>
        <p className="text-xl text-gray-500">
          Browse verified used cars at great prices.
        </p>
        <Button
          className="mt-4 cursor-pointer"
          onClick={() => navigate("/cars")}
          size="lg"
        >
          Explore Cars
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
