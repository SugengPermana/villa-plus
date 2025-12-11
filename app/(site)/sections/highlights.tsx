import { SectionHeader } from "../components/section-header";

const highlights = [
  {
    title: "Lokasi ikonik",
    description:
      "Pilihan villa di Bali, Lombok, Ubud, Bandung, dan Labuan Bajo dengan view unggulan.",
    icon: "📍",
  },
  {
    title: "Kurasi profesional",
    description:
      "Tim arsitek dan hospitality menilai kenyamanan, privasi, dan estetika setiap properti.",
    icon: "✨",
  },
  {
    title: "Layanan concierge",
    description:
      "Chef pribadi, transport, itinerary, dan request khusus diatur dari satu touchpoint.",
    icon: "🤝",
  },
];

export function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
      <div className="surface-card flex flex-col gap-10 p-8 sm:p-10">
        <SectionHeader
          eyebrow="Kenapa VillaPlus"
          title="Stay modern yang dikurasi dengan detail"
          description="Setiap villa divalidasi untuk memberikan rasa privat, nyaman, dan eksklusif tanpa kehilangan sentuhan lokal."
          align="left"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-6">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

