// buat list villa
import { Villa } from "@/types/villa";

export const villas: Villa[] = [
  {
    name: "Villa Tirtha",
    location: "Canggu, Bali",
    price: 8500000,
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Kapasitas 8 tamu", "4 kamar tidur", "4 kamar mandi"],
    bestSeller: true,
  },
  {
    name: "Awan Heights",
    location: "Ubud, Bali",
    price: 6200000,
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Kapasitas 6 tamu", "3 kamar tidur", "3 kamar mandi"],
  },
  {
    name: "Lembah Azure",
    location: "Bandung, Jawa Barat",
    price: 5100000,
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80&sat=-20"
    ],
    amenities: ["Kapasitas 6 tamu", "3 kamar tidur", "Smart home"],
  },
  {
    name: "Villa Serenity",
    location: "Lombok, Nusa Tenggara Barat",
    price: 7800000,
    images: [
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210af?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Kapasitas 10 tamu", "5 kamar tidur", "Private beach"],
  },
  {
    name: "Mountain View Villa",
    location: "Labuan Bajo, NTT",
    price: 9200000,
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: ["Kapasitas 12 tamu", "6 kamar tidur", "Infinity pool"],
    bestSeller: true,
  },
  {
    name: "Villa Sunset",
    location: "Seminyak, Bali",
    price: 6500000,
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80&sat=10"
    ],
    amenities: ["Kapasitas 8 tamu", "4 kamar tidur", "Rooftop terrace"],
  },
];
