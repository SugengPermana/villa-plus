"use client";
import { useState } from "react";
import { formatPrice } from "@/utils/formatPrice";

export const BookingForm = ({ villa }: any) => {
  const [date, setDate] = useState("");
  const [guest, setGuest] = useState(1);

  const waText = encodeURIComponent(
    `Halo, saya ingin booking ${villa.name}
Tanggal: ${date}
Jumlah tamu: ${guest} orang`
  );

  return (
    <div className="rounded-xl border p-6 space-y-4 shadow-sm">
      <h3 className="text-xl font-bold">{villa.name}</h3>

      <div className="text-sm space-y-1">
        <p>{formatPrice(villa.prices.weekday)} | Minggu sd Kamis</p>
        <p>{formatPrice(villa.prices.friday)} | Jumat</p>
        <p>{formatPrice(villa.prices.weekend)} | Sabtu & Libur</p>
      </div>

      <div>
        <label className="text-sm">Tanggal check-in:</label>
        <input
          placeholder="date"
          type="date"
          className="w-full border rounded-lg px-3 py-2"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm">Jumlah tamu:</label>
        <input
          placeholder="number"
          type="number"
          max={villa.maxGuests}
          min={1}
          className="w-full border rounded-lg px-3 py-2"
          onChange={(e) => setGuest(+e.target.value)}
        />
        <p className="text-xs text-slate-500">Max {villa.maxGuests} orang</p>
      </div>

      <a
        href={`https://wa.me/628XXXXXXXXXX?text=${waText}`}
        target="_blank"
        className="block text-center bg-green-600 text-white rounded-lg py-3 font-bold"
      >
        BOOK NOW
      </a>
    </div>
  );
};

export default BookingForm;
