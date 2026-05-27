"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

const POINTS = [
  "Trening dopasowany do Twojego ciała i celu — nie kopiuję planów",
  "Współpraca prowadzona na zaufaniu i regularnym kontakcie",
  "Diety, które da się utrzymać dłużej niż dwa tygodnie",
  "Mentalność na pierwszym miejscu — bez niej nie ma efektów",
];

export function About() {
  return (
    <section id="o-mnie" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10">
            <Image
              src="/images/trener-session.jpg"
              alt="Trening personalny z Bartoszem"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:-right-10 max-w-[260px] rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 shadow-2xl shadow-black/60">
            <div className="text-3xl font-black text-gradient-fire">100%</div>
            <div className="mt-1 text-sm text-white/70 leading-snug">
              uwagi na Twoim treningu — żadnych telefonów, żadnych wymówek
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
            O mnie
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Nie sprzedaję planów.<br />
            <span className="text-gradient-fire">Sprzedaję efekty.</span>
          </h2>
          <p className="mt-6 text-lg text-white/65 leading-relaxed">
            Nazywam się Bartosz Olszewski. Od ponad sześciu lat pomagam ludziom
            z Wejherowa i okolic wyjść z błędnego koła diet-cud, kar wodnych i
            programów przepisanych z internetu. Mam jeden cel — żebyś przyszedł
            do mnie raz i już nie musiał wracać do punktu wyjścia.
          </p>
          <p className="mt-4 text-lg text-white/65 leading-relaxed">
            Pracuję z osobami początkującymi i tymi, którzy ćwiczą od lat,
            ale efekty stanęły w miejscu. Bez ściemy, bez magicznych suplementów —
            tylko dobrze ułożony trening, prosta dieta i konsekwencja.
          </p>
          <p className="mt-4 text-lg text-white/65 leading-relaxed">
            Dwukrotnie startowałem w zawodach{" "}
            <span className="font-semibold text-white">NPC</span> — najbardziej
            prestiżowej federacji kulturystyki na świecie —{" "}
            <span className="font-semibold text-white">za każdym razem zdobywając 2.&nbsp;miejsce</span>.
            To doświadczenie nauczyło mnie, jak przygotować ciało na najwyższym
            poziomie i przenieść tę wiedzę na treningi moich podopiecznych.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-white/80">
                <span className="mt-0.5 grid place-items-center w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-orange-500 shrink-0">
                  <CircleCheck size={14} className="text-white" />
                </span>
                <span className="leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
