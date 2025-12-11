"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";


type NavItem = { href: string; label: string };

type NavbarProps = {
  navigation: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
};

export function Navbar({ navigation, ctaLabel = "Hubungi kami iya", ctaHref = "#hubungi" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-white/95 shadow-lg shadow-black/5 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white shadow-lg shadow-black/15">
            VP
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">VillaPlus</p>
            <p className="text-xs text-slate-500">Curated villa escapes</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 sm:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2 py-1 transition hover:bg-sky-50 hover:text-sky-600"
              >
                {item.label}
              </Link>
            ))}
            <Button href={ctaHref} variant="ghost">
              {ctaLabel}
            </Button>
          </nav>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg shadow-black/10 ring-1 ring-slate-200 sm:hidden"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 h-0.5 w-full rounded bg-slate-900 transition-all duration-200 ${
                  isMenuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full rounded bg-slate-900 transition-all duration-200 ${
                  isMenuOpen ? "opacity-0" : "top-1.5 opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full rounded bg-slate-900 transition-all duration-200 ${
                  isMenuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="mx-auto max-w-6xl px-6 pb-4 sm:px-10 sm:hidden">
          <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-semibold text-slate-800 shadow-lg shadow-black/10">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-2 py-2 transition hover:bg-sky-50 hover:text-sky-600"
              >
                {item.label}
              </Link>
            ))}
            <Button href={ctaHref} variant="ghost">
              {ctaLabel}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}


