import { Button } from "./(site)/components/button";
import { CallToAction } from "./(site)/sections/cta";
import { Experiences } from "./(site)/sections/experiences";
import { Footer } from "./(site)/sections/footer";
import { Hero } from "./(site)/sections/hero";
import { Highlights } from "./(site)/sections/highlights";
import { Villas } from "./(site)/sections/villas";

const navigation = [
  { href: "#koleksi", label: "Koleksi" },
  { href: "#hubungi", label: "Concierge" },
  { href: "#", label: "Tentang" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.1),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(249,115,22,0.08),transparent_25%)]">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-sm font-semibold text-slate-900 shadow-lg shadow-black/15 backdrop-blur">
              VPaksdasdjiqw
            </div>
            <div>
              <p className="text-sm font-semibold text-white drop-shadow">VillaPlus</p>
              <p className="text-xs text-white/70">Curated villa escapes</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-white/90 sm:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
            <Button href="#hubungi" variant="ghost">
              Hubungi kami
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Hero />
        <Highlights />
        <Villas />
        <Experiences />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}
