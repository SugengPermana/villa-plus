"use client";

import Link from "next/link";

type BerandaProps = {
  href?: string;
  label?: string;
};

export default function Beranda({
  href = "/",
  label = "Kembali ke Beranda",
}: BerandaProps) {
  return (
    <div className="mb-6">
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
      >
        {label}
      </Link>
    </div>
  );
}

