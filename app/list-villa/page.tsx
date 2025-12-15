"use client";

import { useState } from "react";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import { Navbar } from "../(site)/components/navbar";
import { Footer } from "../(site)/sections/footer";
import { SectionHeader } from "../(site)/components/section-header";
import { villas } from "@/data/villas";
import type { Villa } from "@/types/villa";
import VillaDetailModal from "../(site)/components/villa-detail";

const navigation = [
  { href: "/home", label: "Home" },
  { href: "/tentang", label: "Tentang" },
  { href: "/list-villa", label: "List villa" },
  { href: "/kontak", label: "Kontak" },
];

export default function ListVilla() {
  const [selectedVilla, setSelectedVilla] = useState<Villa | null>(null);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar navigation={navigation} ctaHref="/kontak" />

      <main className="flex-1 pt-20">
        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
          <SectionHeader
            eyebrow="Koleksi lengkap"
            title="Semua villa modern siap disambut"
            description="Tiap properti memiliki style unik, namun dengan standar kenyamanan yang sama."
            align="left"
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {villas.map((villa) => (
              <article
                key={villa.name}
                className="surface-card flex flex-col overflow-hidden"
              >
                {/* IMAGE */}
                <div className="relative h-64">
                  {villa.images?.[0] && (
                    <Image
                      src={villa.images[0]}
                      alt={villa.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="text-xl font-bold">{villa.name}</h3>
                    <p className="text-sm text-slate-600">{villa.location}</p>
                  </div>

                  {/* AMENITIES (MAX 4) */}
                  <div className="grid grid-cols-2 gap-2">
                    {villa.amenities.slice(0, 4).map((a) => (
                      <div key={a} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500" />
                        <span className="text-sm">{a}</span>
                      </div>
                    ))}
                  </div>

                  {/* FOOTER */}
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-bold">
                      {formatPrice(villa.price)} / malam
                    </span>

                    <button
                      onClick={() => setSelectedVilla(villa)}
                      className="text-sm font-semibold text-sky-700 hover:underline"
                    >
                      Selengkapnya →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />

      <VillaDetailModal
  villa={selectedVilla}
  onClose={() => setSelectedVilla(null)}
/>

    </div>
  );
}
