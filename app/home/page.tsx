 "use client";

import Image from "next/image";
import Link from "next/link";
import { Footer } from "../(site)/sections/footer";
import { Navbar } from "../(site)/components/navbar";
import { useState } from "react";

const heroVideo =
  "https://cdn.coverr.co/videos/coverr-modern-house-1519/1080p.mp4";
const heroFallback =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80";

const villas = [
  {
    name: "Villa Tirtha",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    href: "/#koleksi",
  },
  {
    name: "Awan Heights",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    href: "/#koleksi",
  },
  {
    name: "Lembah Azure",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80&sat=-20",
    href: "/#koleksi",
  },
];

const navigation = [
  { href: "/home", label: "Home" },
  { href: "/tentang", label: "Tentang" },
  { href: "/list-villa", label: "List villa" },
  { href: "/kontak", label: "Kontak" },
];

export default function HomeModern() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar navigation={navigation} ctaHref="/kontak" />

      <main className="pt-20">
        <section
          id="home"
          className="relative isolate min-h-[70vh] overflow-hidden bg-slate-900"
          style={{ backgroundImage: `url(${heroFallback})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroFallback}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(56,189,248,0.28),transparent_28%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center sm:py-28 lg:py-32">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-100/80 sm:text-base">
            Stay Modern, Stay Private
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            VillaPlus
          </h1>
          <p className="mt-3 max-w-3xl text-base text-slate-100/80 sm:text-lg">
            Modern villas curated for unforgettable stays — effortless, privat, dan siap menyambut.
          </p>
          <div className="mt-6 flex w-full max-w-2xl flex-col gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur sm:flex-row sm:items-center sm:gap-4">
            <label className="flex flex-1 flex-col gap-1 text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-100/80">
              Check-in
              <input
                type="date"
                className="h-11 rounded-xl border border-white/20 bg-white/15 px-3 text-base font-medium text-white placeholder:text-white/60 outline-none ring-0 focus:border-white focus:bg-white/20"
              />
            </label>
            <label className="flex flex-1 flex-col gap-1 text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-100/80">
              Check-out
              <input
                type="date"
                className="h-11 rounded-xl border border-white/20 bg-white/15 px-3 text-base font-medium text-white placeholder:text-white/60 outline-none ring-0 focus:border-white focus:bg-white/20"
              />
            </label>
            <Link
              href="/list-villa"
              className="flex h-11 items-center justify-center rounded-xl bg-sky-400 px-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 shadow-lg shadow-sky-500/30 transition hover:bg-sky-300"
            >
              Cari Villa
            </Link>
          </div>
        </div>
      </section>

      <div
        id="best-villa"
        className="mx-auto flex max-w-6xl items-center justify-center gap-4 px-6 py-8 text-center"
      >
        <div className="h-px w-24 bg-white/20 sm:w-40" />
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">
          Best Villa
        </span>
        <div className="h-px w-24 bg-white/20 sm:w-40" />
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-16 sm:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {villas.map((villa) => (
            <article
              key={villa.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={villa.image}
                  alt={villa.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/25 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-semibold">{villa.name}</h3>
                  <Link
                    href="/list-villa"
                    className="mt-1 inline-flex items-center text-sm font-medium text-sky-200 transition-colors hover:text-white"
                  >
                    Detail selengkapnya →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
        <Footer />
      </main>
    </div>
  );
}


