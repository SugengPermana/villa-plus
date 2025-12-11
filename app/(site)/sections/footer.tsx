export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white shadow-lg">
            VP
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">VillaPlus</p>
            <p className="text-xs text-slate-500">Curated villa stays across Indonesia</p>
          </div>
        </div>
        <div className="flex gap-4 text-xs text-slate-500 sm:text-sm">
          <a href="#koleksi" className="hover:text-slate-800">
            Koleksi
          </a>
          <a href="#hubungi" className="hover:text-slate-800">
            Concierge
          </a>
          <a href="mailto:concierge@villaplus.id" className="hover:text-slate-800">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}



