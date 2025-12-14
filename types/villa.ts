// src/types/villa.ts
export type Villa = {
  name: string;
  location: string;
  price: number;
  images: string[]; // ⬅️ HARUS array
  amenities: string[];
  bestSeller?: boolean;
};
