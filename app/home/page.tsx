"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../(site)/components/navbar";
import { Footer } from "../(site)/sections/footer";
import navigation from "@/config/navigation";

/* 
  HERO VIDEO
*/
const HERO_VIDEO =
  "/videos/villa-hero.mp4";

const HERO_FALLBACK =
  "/villas/villa-fall.avif";

/* 
  VILLA LIST
 */
const VILLAS = [
  {
    name: "Villa Tirtha",
    image: "/villas/gambar-3.avif",
    href: "/list-villa",
  },
  {
    name: "Awan Heights",
    image: "/villas/gambar-4.avif",
    href: "/list-villa",
  },
  {
    name: "Villa Serenity",
    image: "/villas/serenity-1.webp",
    href: "/list-villa",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar navigation={navigation} ctaHref="/kontak" />

      <main className="pt-20">
        {/* ======================
            HERO VIDEO HEADER
        ====================== */}
        <section
          className="relative isolate w-full h-screen bg-slate-900"
          style={{
            backgroundImage: `url(${HERO_FALLBACK})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* VIDEO */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>

          {/* Fallback image for mobile */}
          <div
            className="absolute inset-0 block lg:hidden bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/villa-fallback.jpg')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Hero content */}
          <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
              VillaPlus
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-white/80 sm:text-xl">
              Modern villas curated for unforgettable stays.
            </p>
            <a
              href="/list-villa"
              className="mt-6 inline-block rounded-xl bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-sky-300"
            >
              Lihat Villa
            </a>
          </div>
        </section>

        {/* ======================
            BEST VILLA
        ====================== */}
        <div className="mx-auto mt-12 flex max-w-6xl items-center justify-center gap-4 px-6">
          <div className="h-px w-24 bg-white/20 sm:w-40" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Best Villa In Indonesia
          </span>
          <div className="h-px w-24 bg-white/20 sm:w-40" />
        </div>

        {/* ======================
            VILLA LIST
        ====================== */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VILLAS.map((villa) => (
              <article
                key={villa.name}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={villa.image}
                    alt={villa.name}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 from-black/70 via-black/30 to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-semibold">{villa.name}</h3>
                    <Link
                      href={villa.href}
                      className="text-sm text-sky-300 hover:text-white"
                    >
                      Detail selengkapnya →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
