import Image from "next/image";

type Villa = {
  name: string;
  location: string;
  price: number;
  image: string;
  amenities: string[];
  bestSeller?: boolean;
};

const formatPrice = (price: number) => {
  if (price >= 1000000) {
    const juta = price / 1000000;
    return `Rp ${juta.toFixed(1).replace('.', ',')} juta`;
  }
  return `Rp ${price.toLocaleString('id-ID')}`;
};

const villas: Villa[] = [
  {
    name: "Villa Tirtha",
    location: "Canggu, Bali",
    price: 8500000,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Kapasitas 8 tamu", "4 kamar tidur", "4 kamar mandi"],
    bestSeller: true,
  },
  {
    name: "Awan Heights",
    location: "Ubud, Bali",
    price: 6200000,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Kapasitas 6 tamu", "3 kamar tidur", "3 kamar mandi"],
  },
  {
    name: "Lembah Azure",
    location: "Bandung, Jawa Barat",
    price: 5100000,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80&sat=-20",
    amenities: ["Kapasitas 6 tamu", "3 kamar tidur", "Smart home"],
  },
];

export function Villas() {
  return (
    <section id="koleksi" className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
      <div className="flex flex-col items-center gap-5 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-base font-semibold uppercase tracking-[0.18em] text-slate-600 sm:text-lg">
          Koleksi unggulan
        </span>
        <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Pilihan villa modern siap disambut
        </h2>
        <p className="max-w-3xl text-balance text-base text-slate-600 sm:text-lg">
          Tiap properti memiliki style unik, namun dengan standar kenyamanan yang sama: privat, bersih, dan siap pakai.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {villas.map((villa) => (
          <article
            key={villa.name}
            className="group surface-card flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={villa.image}
                alt={villa.name}
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-transparent" />
              {villa.bestSeller ? (
                <div className="absolute right-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-amber-900 shadow-lg">
                  Best Seller
                </div>
              ) : null}
              <div className="absolute left-0 top-0 right-0 p-4">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">{villa.name}</h3>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div>
                <p className="text-base font-semibold text-slate-900">{villa.location}</p>
                <hr className="mt-2 border-slate-200" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                {villa.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                    <span className="text-sm text-slate-700">{amenity}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto flex items-center justify-between pt-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-medium text-slate-500">Mulai dari</span>
                  <span className="text-xl font-bold text-slate-900">{formatPrice(villa.price)}</span>
                  <span className="text-sm font-medium text-slate-500">/ malam</span>
                </div>
                <a
                  href="/list-villa"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-sky-700 px-4 py-2 text-sm font-semibold text-sky-700 transition-all hover:bg-sky-700 hover:text-white"
                >
                  Selengkapnya →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

