import { SectionHeader } from "../components/section-header";

const deals = [
  {
    title: "Catering",
    description:
      "Paket catering lengkap dengan variasi menu untuk group stay atau event privat.",
  },
  {
    title: "Grill",
    description: "Sesi BBQ siap pakai dengan peralatan dan bahan yang sudah disiapkan.",
  },
  {
    title: "Floaties",
    description: "Lengkapi waktu di kolam dengan floaties lucu untuk semua umur.",
  },
];

export function Deals() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
      <div className="surface-card flex flex-col gap-8 p-8 sm:p-10">
        <SectionHeader
          eyebrow="Deals & Package"
          title="Lengkapi stay dengan paket siap pakai"
          description="Pilih add-on favorit untuk liburan yang lebih praktis dan menyenangkan."
          align="left"
        />
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          {deals.map((deal) => (
            <div
              key={deal.title}
              className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900">{deal.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{deal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


