// src/types/villa.ts
export type Villa = {
  slug: string;
  name: string;
  location: string;
  price: number;
  images: string[]; // ⬅️ HARUS array
  amenities: string[];
  bestSeller?: boolean;
  prices: {
    weekday: number;
    friday: number;
    weekend: number;
  };
  maxGuests: number;
}
