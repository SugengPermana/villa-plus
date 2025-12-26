import Image from "next/image";
import { Button } from "../components/button";

const heroImage =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80";

const stats = [
  { label: "Private villas", value: "120+" },
  { label: "Curated locations", value: "24" },
  { label: "Guest rating", value: "4.9/5" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-[calc(100vh-5rem)]">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="VillaPlus beachfront villa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/35 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.28),transparent_28%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-28 pt-28 sm:px-10 sm:pt-32 lg:flex-row lg:items-center lg:gap-16 lg:pt-36">
        <div className="flex flex-1 flex-col gap-6 text-white">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur">
            VillaPlus • Curated villa stays
          </div>
          <h1 className="text-balance text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            VillaPlus
          </h1>
          <p className="max-w-3xl text-pretty text-lg text-slate-100/90 sm:text-xl lg:text-2xl">
            Slogan: modern villas curated for unforgettable stays — effortless, privat, dan siap menyambut.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="#koleksi">Jelajahi Koleksi</Button>
            <Button href="#hubungi" variant="ghost">
              Konsultasi dengan Curator
            </Button>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-4 text-sm text-slate-100/80 sm:mt-4 sm:text-base">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <div className="text-xl font-semibold text-white sm:text-2xl">{item.value}</div>
                <div className="text-slate-200/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card relative w-full max-w-xl overflow-hidden border border-white/15 bg-white/10 p-6 backdrop-blur">
          <div className="flex flex-col gap-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-black">
                  VillaPlus
                </p>
                <p className="text-lg font-semibold">Privat, modern, dan effortless</p>
              </div>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                New season
              </span>
            </div>
            <p className="text-sm leading-relaxed text-black font-semibold">
              Tim concierge kami siap menyiapkan itinerary lokal, private chef, hingga
              airport transfer. Semua terintegrasi dalam satu reservasi mudah lewat VillaPlus.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl text-black p-3">Early check-in & late check-out</div>
              <div className="rounded-xl text-black p-3">Home tech & smart lock</div>
              <div className="rounded-xl text-black p-3">Wellness & spa on demand</div>
              <div className="rounded-xl text-black p-3">Dedicated concierge</div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}

