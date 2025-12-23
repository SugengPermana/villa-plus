"use client";
import Image from "next/image";

export const VillaCarousel = ({ images }: { images: string[] }) => {
  return (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory">
      {images.map((img, i) => (
        <div
          key={i}
          className="relative min-w-[80%] h-80 snap-center rounded-xl overflow-hidden"
        >
          <Image
            src={img}
            alt="villa"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default VillaCarousel;
