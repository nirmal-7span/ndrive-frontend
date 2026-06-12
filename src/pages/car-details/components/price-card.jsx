import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import formatPrice from "@/utils/format-price";
import { Share2, Check } from "lucide-react";

export default function PriceCard({ car }) {
  const [copied, setCopied] = useState(false);

  if (!car) return null;

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Card className="sticky top-24">
      <CardContent className="p-6 space-y-6">
        <div>
          <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-1">
            <h2 className="text-2xl sm:text-3xl font-bold">
              {formatPrice(car.price)}
            </h2>
            {car.originalPrice && car.originalPrice > car.price && (
              <span className="text-base sm:text-lg text-muted-foreground line-through">
                {formatPrice(car.originalPrice)}
              </span>
            )}
          </div>
          {car.emiPerMonth && (
            <p className="text-sm text-muted-foreground font-medium">
              EMI from {formatPrice(car.emiPerMonth)}/month
            </p>
          )}
        </div>

        <div className="space-y-3">
          <Button className="w-full text-lg h-12 cursor-pointer">
            Contact Seller
          </Button>

          <Button
            variant="outline"
            className="w-full h-12 cursor-pointer"
            onClick={handleShare}
          >
            {copied ? (
              <>
                <Check className="mr-2 h-5 w-5 text-green-600" />
                Link Copied!
              </>
            ) : (
              <>
                <Share2 className="mr-2 h-5 w-5" />
                Share
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
