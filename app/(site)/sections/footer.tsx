import { Instagram, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
        {/* Desktop: 3 kolom | Mobile: custom */}
        <div className="grid gap-10 sm:grid-cols-3 sm:items-start">
          
          {/* KIRI - JUDUL */}
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              VillaPlus
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-slate-500 sm:mx-0">
              Solusi villa & properti nyaman untuk liburan dan investasi.
            </p>
          </div>

          {/* WRAPPER KANAN (HP: 2 kolom | DESKTOP: pisah) */}
          <div className="grid grid-cols-2 gap-8 sm:col-span-2 sm:grid-cols-2">

            {/* SOSIAL MEDIA */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-700">
                Sosial Media
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://instagram.com/villaplus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm text-slate-600 transition hover:text-sky-600"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>@villaplus</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://tiktok.com/@villaplus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm text-slate-600 transition hover:text-sky-600"
                  >
                    <Music2 className="h-5 w-5" />
                    <span>@villaplus</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* ALAMAT */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-700">
                Alamat
              </h3>
              <address className="not-italic text-sm leading-relaxed text-slate-600">
                Jl. Cikopo Selatan No.29, Sukagalih
                <br />
                Kec. Megamendung, Kab. Bogor
                <br />
                Jawa Barat, Indonesia
              </address>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
