"use client";
import Image from "next/image";

export function ImageCarousel({ images }: { images: string[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory">
      {images.map((img, i) => (
        <div key={i} className="relative h-72 min-w-full snap-center">
          <Image src={img} alt="" fill className="object-cover rounded-xl" />
        </div>
      ))}
    </div>
  );
}
