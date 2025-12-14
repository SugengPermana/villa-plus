"use client";

import { Navbar } from "../(site)/components/navbar";
import { Footer } from "../(site)/sections/footer";
import { Highlights } from "../(site)/sections/highlights";
import { Experiences } from "../(site)/sections/experiences";
import { Deals } from "../(site)/sections/deals";

const navigation = [
  { href: "/home", label: "Home" },
  { href: "/tentang", label: "Tentang" },
  { href: "/list-villa", label: "List villa" },
  { href: "/kontak", label: "Kontak" },
];

export default function Tentang() {
  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.1),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(249,115,22,0.08),transparent_25%)]">
      <Navbar navigation={navigation} ctaHref="/kontak" />

      <main className="flex-1 pt-20">
        <Highlights />
        <Experiences />
        <Deals />
      </main>

      <Footer />
    </div>
  );
}

