import Image from "next/image";
import { SectionHeader } from "../components/section-header";
import { Button } from "../components/button";

type Villa = {
  name: string;
  location: string;
  price: string;
  image: string;
  tags: string[];
};

const villas: Villa[] = [
  {
    name: "Villa Tirtha",
    location: "Canggu, Bali",
    price: "Mulai 8,5jt / malam",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    tags: ["Beachfront", "4 kamar", "Private pool"],
  },
  {
    name: "Awan Heights",
    location: "Ubud, Bali",
    price: "Mulai 6,2jt / malam",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    tags: ["Jungle view", "3 kamar", "Spa pavilion"],
  },
  {
    name: "Lembah Azure",
    location: "Bandung, Jawa Barat",
    price: "Mulai 5,1jt / malam",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80&sat=-20",
    tags: ["Hilltop", "Smart home", "Fire pit"],
  },
];

export function Villas() {
  return (
    <section id="koleksi" className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
      <SectionHeader
        eyebrow="Koleksi unggulan"
        title="Pilihan villa modern siap disambut"
        description="Tiap properti memiliki style unik, namun dengan standar kenyamanan yang sama: privat, bersih, dan siap pakai."
        align="left"
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {villas.map((villa) => (
          <article key={villa.name} className="surface-card overflow-hidden">
            <div className="relative h-52 w-full">
              <Image
                src={villa.image}
                alt={villa.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute left-4 bottom-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
                {villa.location}
              </div>
            </div>
            <div className="flex flex-col gap-3 p-5">
              <h3 className="text-lg font-semibold text-slate-900">{villa.name}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{villa.price}</p>
              <div className="flex flex-wrap gap-2">
                {villa.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button href="#hubungi" variant="ghost">
                Cek ketersediaan
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

