"use client";

import Link from "next/link";
import Image from "next/image";

import { Navbar } from "./(site)/components/navbar";
import { Footer } from "./(site)/sections/footer";
import { Hero } from "./(site)/sections/hero";
import { SectionHeader } from "./(site)/components/section-header";

import { villas } from "@/data/villas";
import { formatPrice } from "@/utils/formatPrice";
import navigation from "@/config/navigation";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.1),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(249,115,22,0.08),transparent_25%)]">
      <Navbar navigation={navigation} ctaHref="/kontak" />

      <main className="flex-1 pt-20">
        <Hero />

        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
          <SectionHeader
            eyebrow="Best Villas"
            title="Semua villa modern siap disambut"
            description="Kami Menyediakan berbagai pilihan villa modern yang siap untuk Anda tinggali dan nikmati kenyamanannya."
            align="center"
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {villas.map((villa, index) => (
              <Link
                key={villa.slug}
                href="/list-villa"
                className="group"
              >
                <article className="surface-card flex h-full flex-col overflow-hidden transition hover:shadow-lg">
                  <div className="relative h-64">
                    {villa.images?.[0] && (
                      <Image
                        src={villa.images[0]}
                        alt={villa.name}
                        fill
                        priority={index === 0} // hero pertama = LCP
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div>
                      <h3 className="text-xl font-bold">{villa.name}</h3>
                      <p className="text-sm text-slate-600">
                        {villa.location}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {villa.amenities.slice(0, 4).map((a) => (
                        <div key={a} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500" />
                          <span className="text-sm">{a}</span>
                        </div>
                      ))}
                    </div>

                    <hr />

                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-bold">
                        {formatPrice(villa.price)} / Malam
                      </span>

                      <span className="inline-flex items-center justify-center rounded-lg border-2 border-sky-700 px-4 py-2 text-sm font-semibold text-sky-700 transition-all group-hover:bg-sky-700 group-hover:text-white">
                        Selengkapnya →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
