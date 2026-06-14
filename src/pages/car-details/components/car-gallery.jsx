import { useState } from "react";
import { cn } from "@/lib/utils";

export default function CarGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-video flex items-center justify-center bg-muted text-muted-foreground rounded-xl border">
        No Image Available
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-4/3 sm:aspect-video lg:aspect-4/3 xl:aspect-video rounded-xl overflow-hidden border bg-muted">
        <img
          loading="lazy"
          src={selectedImage}
          alt="Car View"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {images.map((image, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setSelectedImage(image)}
              className={cn(
                "relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 transition-all cursor-pointer",
                selectedImage === image
                  ? "border-primary opacity-100 shadow-sm"
                  : "border-transparent opacity-60 hover:opacity-100",
              )}
            >
              <img
                loading="lazy"
                src={image}
                alt={`Car Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
