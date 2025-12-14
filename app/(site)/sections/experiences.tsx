import { SectionHeader } from "../components/section-header";

const experiences = [
  {
    title: "Signature services",
    items: ["Private chef & butler", "Wellness & spa on demand", "Airport transfer & chauffeur"],
  },
  {
    title: "Productivity friendly",
    items: ["Dedicated work desk", "High-speed Wi-Fi mesh", "Smart lock & security"],
  },
  {
    title: "Moments & events",
    items: ["Sunset dining setup", "Family-friendly amenities", "Photo-ready styling"],
  },
];

export function Experiences() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
      <div className="surface-card grid gap-10 p-8 sm:grid-cols-[1.1fr_1fr] sm:p-10">
        <SectionHeader
          eyebrow="Experience"
          title="Layanan yang membuat stay terasa effortless"
          description="Semua kebutuhanmu diatur oleh concierge kami, dari request harian hingga momen spesial."
          align="left"
        />
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          {experiences.map((exp) => (
            <div key={exp.title} className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
              <h3 className="text-base font-semibold text-slate-900">{exp.title}</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {exp.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



