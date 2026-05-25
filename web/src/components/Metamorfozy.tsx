"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingDown } from "lucide-react";

const ITEMS = [
  {
    src: "/images/meta-sebastian.jpg",
    name: "Sebastian",
    drop: "-86 kg",
    start: "170 kg",
    end: "84 kg",
  },
  {
    src: "/images/meta-paulina.jpg",
    name: "Paulina",
    drop: "-14 kg",
    start: "78 kg",
    end: "64 kg",
  },
  {
    src: "/images/meta-mateusz.jpg",
    name: "Mateusz",
    drop: "-12 kg",
    start: "98 kg",
    end: "86 kg",
  },
];

export function Metamorfozy() {
  return (
    <section id="metamorfozy" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 max-w-5xl">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
              Metamorfozy
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Efekty, których<br />
              <span className="text-gradient-fire">nie da się podrasować w Photoshopie.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-lg leading-relaxed">
            Wybrane historie podopiecznych. Każda z nich zaczęła się od jednego
            telefonu — i decyzji, że tym razem dowieziemy do końca.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.src}
                  alt={`Metamorfoza ${item.name}`}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur px-3 py-1.5 border border-white/10">
                  <TrendingDown size={14} className="text-red-400" />
                  <span className="text-white font-bold text-sm">{item.drop}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <div className="text-xs font-medium uppercase tracking-widest text-white/40">
                    przed → po
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <span className="rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-sm font-semibold text-white/70">
                    {item.start}
                  </span>
                  <span className="text-white/30">→</span>
                  <span className="rounded-lg bg-gradient-to-br from-red-500 to-orange-500 px-3 py-1.5 text-sm font-bold text-white">
                    {item.end}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
