import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Skeleton } from "@/components/ui/skeleton";
import formatPrice from "@/utils/format-price";

export default function FiltersSidebar({ cars, filters, setFilters, loading }) {
  const brands = [...new Set(cars.map((car) => car.brand))].sort();
  const bodyTypes = [...new Set(cars.map((car) => car.bodyType))].sort();
  const fuelTypes = [...new Set(cars.map((car) => car.fuelType))].sort();
  const transmissions = [
    ...new Set(cars.map((car) => car.transmission)),
  ].sort();
  const ownerships = [...new Set(cars.map((car) => car.ownership))].sort();

  const minPrice = 0;
  const maxPrice = 5000000;

  const minYear = 2000;
  const maxYear = new Date().getFullYear();

  const minKm = 0;
  const maxKm = 200000;

  const handleCheckboxChange = (category, value, checked) => {
    setFilters((prev) => {
      const list = prev[category];

      return {
        ...prev,
        [category]: checked
          ? [...list, value]
          : list.filter((item) => item !== value),
      };
    });
  };

  const handleSliderChange = (category, values) => {
    setFilters((prev) => ({
      ...prev,
      [category]: { min: values[0], max: values[1] },
    }));
  };

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="space-y-3">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex flex-col gap-1 mb-3">
          <h3 className="font-semibold">Price Range</h3>
          <span className="text-xs text-muted-foreground">
            {formatPrice(
              filters.priceRange.min !== "" ? filters.priceRange.min : minPrice,
            )}{" "}
            -{" "}
            {formatPrice(
              filters.priceRange.max !== "" ? filters.priceRange.max : maxPrice,
            )}
          </span>
        </div>
        <Slider
          min={minPrice}
          max={maxPrice}
          step={10000}
          value={[
            filters.priceRange.min !== "" ? filters.priceRange.min : minPrice,
            filters.priceRange.max !== "" ? filters.priceRange.max : maxPrice,
          ]}
          onValueChange={(val) => handleSliderChange("priceRange", val)}
          className="my-4"
        />
      </div>

      <div>
        <h3 className="font-semibold mb-3">Brand</h3>
        <div className="space-y-3 max-h-48 overflow-y-auto pr-2 scrollbar-thin">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center gap-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={filters.brands.includes(brand)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("brands", brand, checked)
                }
              />
              <label
                htmlFor={`brand-${brand}`}
                className="text-sm cursor-pointer leading-none"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Body Type</h3>
        <div className="space-y-3">
          {bodyTypes.map((body) => (
            <div key={body} className="flex items-center gap-2">
              <Checkbox
                id={`body-${body}`}
                checked={filters.bodyTypes.includes(body)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("bodyTypes", body, checked)
                }
              />
              <label
                htmlFor={`body-${body}`}
                className="text-sm cursor-pointer leading-none"
              >
                {body}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Fuel Type</h3>
        <div className="space-y-3">
          {fuelTypes.map((fuel) => (
            <div key={fuel} className="flex items-center gap-2">
              <Checkbox
                id={`fuel-${fuel}`}
                checked={filters.fuelTypes.includes(fuel)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("fuelTypes", fuel, checked)
                }
              />
              <label
                htmlFor={`fuel-${fuel}`}
                className="text-sm cursor-pointer leading-none"
              >
                {fuel}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Transmission</h3>
        <div className="space-y-3">
          {transmissions.map((trans) => (
            <div key={trans} className="flex items-center gap-2">
              <Checkbox
                id={`trans-${trans}`}
                checked={filters.transmissions.includes(trans)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("transmissions", trans, checked)
                }
              />
              <label
                htmlFor={`trans-${trans}`}
                className="text-sm cursor-pointer leading-none"
              >
                {trans}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Ownership</h3>
        <div className="space-y-3">
          {ownerships.map((owner) => (
            <div key={owner} className="flex items-center gap-2">
              <Checkbox
                id={`owner-${owner}`}
                checked={filters.ownerships.includes(owner)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange("ownerships", owner, checked)
                }
              />
              <label
                htmlFor={`owner-${owner}`}
                className="text-sm cursor-pointer leading-none"
              >
                {owner}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-1 mb-3">
          <h3 className="font-semibold">Year</h3>
          <span className="text-xs text-muted-foreground">
            {filters.yearRange.min !== "" ? filters.yearRange.min : minYear} -{" "}
            {filters.yearRange.max !== "" ? filters.yearRange.max : maxYear}
          </span>
        </div>
        <Slider
          min={minYear}
          max={maxYear}
          step={1}
          value={[
            filters.yearRange.min !== "" ? filters.yearRange.min : minYear,
            filters.yearRange.max !== "" ? filters.yearRange.max : maxYear,
          ]}
          onValueChange={(val) => handleSliderChange("yearRange", val)}
          className="my-4"
        />
      </div>

      <div>
        <div className="flex flex-col gap-1 mb-3">
          <h3 className="font-semibold">KM Driven</h3>
          <span className="text-xs text-muted-foreground">
            {Number(
              filters.kmRange.min !== "" ? filters.kmRange.min : minKm,
            ).toLocaleString("en-IN")}{" "}
            km -{" "}
            {Number(
              filters.kmRange.max !== "" ? filters.kmRange.max : maxKm,
            ).toLocaleString("en-IN")}{" "}
            km
          </span>
        </div>
        <Slider
          min={minKm}
          max={maxKm}
          step={1000}
          value={[
            filters.kmRange.min !== "" ? filters.kmRange.min : minKm,
            filters.kmRange.max !== "" ? filters.kmRange.max : maxKm,
          ]}
          onValueChange={(val) => handleSliderChange("kmRange", val)}
          className="my-4"
        />
      </div>
    </div>
  );
}
