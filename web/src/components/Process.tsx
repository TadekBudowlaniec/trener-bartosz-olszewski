"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Rozmawiamy",
    desc: "Spotykamy się na bezpłatnej konsultacji. Pytam o cel, historię ćwiczeń, kontuzje, tryb dnia. Wiem z kim pracuję — Ty wiesz na co się piszesz.",
  },
  {
    n: "02",
    title: "Planuję",
    desc: "Układam plan treningowy i wytyczne żywieniowe pod Twój punkt startu. Nie kopiuję — projektuję od zera, pod Twoje ciało i tempo.",
  },
  {
    n: "03",
    title: "Działamy",
    desc: "Trenujemy razem, korygujemy technikę, monitorujemy postępy co tydzień. Pilnuję jakości ruchu, regeneracji i tego, żebyś nie odpuścił.",
  },
];

export function Process() {
  return (
    <section id="jak-dzialamy" className="relative py-24 sm:py-32 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
            Jak działamy
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Trzy kroki<br />
            <span className="text-gradient-fire">do efektu, który zostaje.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative"
            >
              <div className="grid place-items-center w-24 h-24 mx-auto rounded-full border border-white/10 bg-black/60 backdrop-blur-xl relative z-10">
                <span className="text-2xl font-black text-gradient-fire">{s.n}</span>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white tracking-tight">{s.title}</h3>
                <p className="mt-3 text-white/65 leading-relaxed max-w-sm mx-auto">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
