import { villas } from "@/data/villas";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function VillaDetailPage({ params }: Props) {
  const { slug } = await params;

  const villa = villas.find(v => v.slug === slug);

  if (!villa) {
    return <div className="p-10">Villa tidak ditemukan</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{villa.name}</h1>
    </div>
  );
}
