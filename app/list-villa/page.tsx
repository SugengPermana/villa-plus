"use client";

import { villas } from "@/data/villas";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import { Navbar } from "../(site)/components/navbar";
import { Footer } from "../(site)/sections/footer";
import { SectionHeader } from "../(site)/components/section-header";

const navigation = [
  { href: "/home", label: "Home" },
  { href: "/tentang", label: "Tentang" },
  { href: "/list-villa", label: "List villa" },
  { href: "/kontak", label: "Kontak" },
];

export default function ListVilla() {
  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.1),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(249,115,22,0.08),transparent_25%)] bg-slate-50">
      <Navbar navigation={navigation} ctaHref="/kontak" />

      <main className="flex-1 pt-20">
        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
          <SectionHeader
            eyebrow="Koleksi lengkap"
            title="Semua villa modern siap disambut"
            description="Tiap properti memiliki style unik, namun dengan standar kenyamanan yang sama: privat, bersih, dan siap pakai."
            align="left"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {villas.map((villa) => (
              <article
                key={villa.name}
                className="group surface-card flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={villa.images[0]}
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
                      href="#"
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
      </main>

      <Footer />
    </div>
  );
}

