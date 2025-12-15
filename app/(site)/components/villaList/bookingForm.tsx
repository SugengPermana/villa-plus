"use client";
import { Villa } from "@/types/villa";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";

export function BookingForm({ villa }: { villa: Villa }) {
  return (
    <div className="space-y-4 rounded-xl border p-4">
      <div>
        <p className="font-semibold">List harga:</p>
        <ul className="text-sm">
          <li>{formatPrice(villa.prices.weekday)} (Minggu–Kamis)</li>
          <li>{formatPrice(villa.prices.friday)} (Jumat)</li>
          <li>{formatPrice(villa.prices.weekend)} (Sabtu & Libur)</li>
        </ul>
      </div>

      <input placeholder="Tanggal CheckIn" type="date" className="w-full rounded-md border px-3 py-2" />

      <select className="w-full rounded-md border px-3 py-2">
        {[...Array(villa.maxGuests)].map((_, i) => (
          <option key={i}>{i + 1} orang</option>
        ))}
      </select>

      <Link
        href={`https://wa.me/6281234567890?text=Booking ${villa.name}`}
        target="_blank"
        className="block rounded-lg bg-green-500 py-3 text-center font-bold text-white"
      >
        BOOK NOW
      </Link>
    </div>
  );
}
