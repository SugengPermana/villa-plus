"use client";

import { Navbar } from "../(site)/components/navbar";
import { Footer } from "../(site)/sections/footer";
import { CallToAction } from "../(site)/sections/cta";
import navigation from "@/config/navigation";
import Beranda from "../(site)/components/beranda";

export default function Kontak() {
  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.1),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(249,115,22,0.08),transparent_25%)]">
      <Navbar navigation={navigation} ctaHref="/kontak" />

      <main className="flex-1 pt-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Beranda />
        </div>
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}

