"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const PLANS = [
  {
    name: "Start",
    freq: "1 trening / tydzień",
    units: "12 jednostek",
    unit: "160 zł",
    total: "1 920 zł",
    rata: "640 zł × 3",
    desc: "Dla osób, które chcą wejść w temat i sprawdzić jak to działa.",
    features: [
      "12 treningów personalnych",
      "Plan treningowy 1:1",
      "Wytyczne żywieniowe",
      "Pomiary i kontrola postępów",
    ],
    highlight: false,
  },
  {
    name: "Progres",
    freq: "2 treningi / tydzień",
    units: "24 jednostki",
    unit: "150 zł",
    total: "3 600 zł",
    rata: "1 200 zł × 3",
    desc: "Najczęściej wybierany pakiet. Idealne tempo na realną zmianę sylwetki.",
    features: [
      "24 treningi personalne",
      "Indywidualny plan treningowy",
      "Dieta szyta na miarę",
      "Kontakt z trenerem 7 dni w tygodniu",
      "Bieżące korekty planu",
    ],
    highlight: true,
  },
  {
    name: "Transformacja",
    freq: "3 treningi / tydzień",
    units: "36 jednostek",
    unit: "140 zł",
    total: "5 040 zł",
    rata: "1 680 zł × 3",
    desc: "Najszybsza droga do efektów. Dla zdeterminowanych — bez kompromisów.",
    features: [
      "36 treningów personalnych",
      "Pełna opieka treningowo-dietetyczna",
      "Tygodniowe podsumowania i analizy",
      "Plan suplementacji",
      "Stała korekta techniki",
      "Priorytet w grafiku",
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="oferta" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
            Oferta
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Wybierz tempo,<br />
            <span className="text-gradient-fire">a resztę biorę na siebie.</span>
          </h2>
          <p className="mt-5 text-white/65 text-lg leading-relaxed">
            Każdy pakiet możesz rozłożyć na trzy wygodne raty. Cena jednej
            jednostki spada wraz z częstotliwością — im więcej trenujesz,
            tym mniej płacisz za sesję.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ isolation: "isolate" }}
              className={`relative rounded-3xl p-8 border backdrop-blur-none ${
                p.highlight
                  ? "bg-[#141417] border-red-500/40 shadow-2xl shadow-red-500/10"
                  : "bg-[#111114] border-white/10"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-red-500 to-orange-500 px-3 py-1 text-xs font-bold text-white">
                  <Sparkles size={12} />
                  Najczęściej wybierany
                </div>
              )}

              <div className="flex items-baseline justify-between">
                <h3 className="text-2xl font-bold text-white">{p.name}</h3>
                <span className="text-xs uppercase tracking-widest text-white/40">
                  {p.units}
                </span>
              </div>
              <div className="mt-1 text-sm text-white/60">{p.freq}</div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-black text-white tracking-tight">{p.unit}</span>
                <span className="text-white/50 text-sm">/ trening</span>
              </div>
              <div className="mt-2 text-sm text-white/55">
                Całość: <span className="text-white font-semibold">{p.total}</span> · lub {p.rata}
              </div>

              <p className="mt-5 text-white/65 text-sm leading-relaxed">{p.desc}</p>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                    <span
                      className={`mt-0.5 grid place-items-center w-5 h-5 rounded-full shrink-0 ${
                        p.highlight
                          ? "bg-gradient-to-br from-red-500 to-orange-500"
                          : "bg-white/10"
                      }`}
                    >
                      <Check size={12} className="text-white" strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition-all ${
                  p.highlight
                    ? "bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-[1.02]"
                    : "border border-white/15 text-white hover:bg-white/5"
                }`}
              >
                Wybieram {p.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
