import { Button } from "../components/button";
import { SectionHeader } from "../components/section-header";

export function CallToAction() {
  return (
    <section id="hubungi" className="mx-auto max-w-5xl px-6 pb-20 pt-12 sm:px-10 sm:pt-16">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-sky-700 via-sky-600 to-sky-500 p-px shadow-2xl shadow-sky-500/25">
        <div className="relative grid gap-8 rounded-3xl bg-white p-8 sm:grid-cols-[1.1fr_0.9fr] sm:p-12">
          <SectionHeader
            eyebrow="Mulai dengan VillaPlus"
            title="Rencanakan stay ideal bersama curator kami"
            description="Bagikan tanggal, jumlah tamu, dan preferensi; tim kami akan menyiapkan 2-3 opsi terbaik dalam 24 jam."
            align="left"
          />
          <div className="flex flex-col gap-4 rounded-2xl bg-slate-50 p-6">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-slate-900">Hubungi kami</span>
              <p className="text-sm text-slate-600">
                concierge@villaplus.id · +62 813-0000-0000
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 shadow-sm focus:border-sky-500 focus:outline-none"
                placeholder="Nama lengkap"
              />
              <input
                className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 shadow-sm focus:border-sky-500 focus:outline-none"
                placeholder="Email atau WhatsApp"
              />
              <input
                className="sm:col-span-2 rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-800 shadow-sm focus:border-sky-500 focus:outline-none"
                placeholder="Lokasi / tanggal / jumlah tamu"
              />
            </div>
            <Button>Request rekomendasi</Button>
            <p className="text-xs text-slate-500">
              Kami akan membalas dalam 24 jam dengan rekomendasi yang sesuai preferensimu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

