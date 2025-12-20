// file ini nyambung dengan list-villa
import { villas } from "@/data/villas";
import BookingForm from "@/app/(site)/components/villaList/bookingForm";
import VillaCarousel from "@/app/(site)/components/villaList/villaCarousel";

export async function generateStaticParams() {
  return villas.map(villa => ({
    slug: villa.slug,
  }));
}

type Props = {
  params: {
    slug: string;
  };
};

export default function VillaDetailPage({ params }: Props) {
  const { slug } = params;

  const villa = villas.find(
    v => v.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!villa) {
    return <div className="p-10">Villa tidak ditemukan</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          <VillaCarousel images={villa.images} />

          <div>
            <h1 className="text-3xl font-bold">{villa.name}</h1>
            <p className="text-slate-600">{villa.location}</p>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Fasilitas</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {villa.amenities.map(a => (
                <li key={a} className="text-sm text-slate-700">
                  • {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:sticky lg:top-24">
          <BookingForm villa={villa} />
        </div>
      </div>
    </div>
  );
}
