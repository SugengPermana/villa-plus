// buat list villa
import { Villa } from "@/types/villa";

export const villas: Villa[] = [
  {
    name: "Villa Tirtha",
    location: "Canggu, Bali",
    price: 8500000,
    images: [
      "/villas/gambar-3.avif"
    ],
    amenities: [
      "Kapasitas 8 tamu",
      "4 kamar tidur",
      "4 kamar mandi",
      "Private pool",
      "WiFi cepat",
      "Dapur lengkap",
      "Parkir gratis",
    ],
    bestSeller: true,
  },
  {
    name: "Awan Heights",
    location: "Ubud, Bali",
    price: 6200000,
    images: [
      "/villas/gambar-4.avif"
    ],
    amenities: [
      "Kapasitas 6 tamu", 
      "3 kamar tidur", 
      "3 kamar mandi",
      "Private pool",
      "WiFi cepat",
      "Dapur lengkap",
      "Parkir gratis",
    ],
      
  },
  {
    name: "Lembah Azure",
    location: "Bandung, Jawa Barat",
    price: 5100000,
    images: [
      "/villas/gambar-5.avif"
    ],
    amenities: [
      "Kapasitas 6 tamu", 
      "3 kamar tidur",
      "Smart home",
      "Private pool",
      "WiFi cepat",
      "Dapur lengkap",
      "Parkir gratis",
    ],
  },
  {
    name: "Villa Serenity",
    location: "Lombok, Nusa Tenggara Barat",
    price: 7800000,
    images: [
      "/villas/serenity-1.webp"
    ],
    amenities: ["Kapasitas 10 tamu", "5 kamar tidur", "Private beach"],
  },
  {
    name: "Mountain View Villa",
    location: "Labuan Bajo, NTT",
    price: 9200000,
    images: [
    "/villas/gambar-2.avif" 
    ],
    amenities: ["Kapasitas 12 tamu", "6 kamar tidur", "Infinity pool"],
    bestSeller: true,
  },
  {
    name: "Villa Sunset",
    location: "Seminyak, Bali",
    price: 6500000,
    images: [
      "/villas/gambar-6.avif"
    ],
    amenities: ["Kapasitas 8 tamu", "4 kamar tidur", "Rooftop terrace"],
  },
];
