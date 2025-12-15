"use client";

import { Villa } from "@/types/villa"
import { formatPrice } from "@/utils/formatPrice"
import Image from "next/image"

type Props = {
  villa: Villa | null;
  onClose: () => void;
}

export const VillaDetailModal = ({villa, onClose}: Props) => {
  if (!villa) return null;
  return (
    <div>
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="w-full max-w-3xl rounded-xl bg-white p-6">

                  {/* HEADER */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{villa.name}</h2>
          <button onClick={onClose} className="text-xl">✕</button>
        </div>
      
                  {/* CAROUSEL */}
        <div className="mt-4 flex gap-4 overflow-x-auto snap-x snap-mandatory">
          {villa.images.map((img, i) => (
            <div
              key={i}
              className="relative h-64 min-w-full snap-center overflow-hidden rounded-lg"
            >
              <Image
                src={img}
                alt={`${villa.name} ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      
                  {/* AMENITIES */}
        <div className="mt-6 space-y-2">
          {villa.amenities.map((a) => (
            <div key={a} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500" />
              <span>{a}</span>
            </div>
          ))}
        </div>
      
                  {/* FOOTER */}
        <div className="mt-6 border-t pt-4">
          <p className="text-sm text-slate-600">{villa.location}</p>
          <p className="text-xl font-bold">
            {formatPrice(villa.price)} / malam
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default VillaDetailModal;

