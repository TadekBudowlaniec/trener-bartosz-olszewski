"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#o-mnie", label: "O mnie" },
  { href: "#jak-dzialamy", label: "Jak działamy" },
  { href: "#metamorfozy", label: "Metamorfozy" },
  { href: "#oferta", label: "Oferta" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border border-white/5 px-4 sm:px-6 py-2.5 backdrop-blur-xl transition-all",
            scrolled ? "bg-black/60 shadow-2xl shadow-black/40" : "bg-black/30",
          )}
        >
          <Link href="#top" className="flex items-center gap-2 group">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-white font-black text-sm">
              BO
            </span>
            <span className="font-semibold tracking-tight text-white hidden sm:block">
              Bartosz Olszewski
              <span className="block text-[10px] font-medium text-white/50 -mt-0.5 tracking-widest uppercase">
                Trener personalny · Wejherowo
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="px-3 py-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#kontakt"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Umów konsultację
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid place-items-center w-10 h-10 rounded-full bg-white/5 text-white border border-white/10"
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-3 rounded-3xl border border-white/10 bg-black/85 backdrop-blur-xl p-4 flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-base text-white/80 hover:text-white rounded-2xl hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-2xl bg-white text-black px-4 py-3 text-base font-semibold"
            >
              Umów konsultację
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
