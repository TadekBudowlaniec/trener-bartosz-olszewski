"use client";

import { motion } from "framer-motion";
import { Target, Flame, Sprout, Repeat } from "lucide-react";

const ITEMS = [
  {
    icon: Target,
    title: "Chcesz schudnąć",
    desc: "Skończyły Ci się pomysły na cudowne diety. Dostaniesz prosty plan, który da się utrzymać — bez liczenia każdego grama.",
  },
  {
    icon: Flame,
    title: "Ćwiczysz, ale bez efektów",
    desc: "Trenujesz od miesięcy, a lustro pokazuje to samo. Sprawdzę co blokuje progres i ustawię to od nowa.",
  },
  {
    icon: Sprout,
    title: "Zaczynasz od zera",
    desc: "Nigdy nie byłeś na siłowni i nie wiesz od czego zacząć. Przeprowadzę Cię przez pierwsze tygodnie tak, żebyś polubił trening.",
  },
  {
    icon: Repeat,
    title: "Brakuje Ci systematyczności",
    desc: "Motywacja przychodzi i odchodzi. Ja zostaję — i pilnuję, żebyś nie rezygnował dwa tygodnie przed efektem.",
  },
];

export function ForWho() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
            Dla kogo
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Pomogę Ci, jeśli<br />
            <span className="text-gradient-fire">któreś z tych zdań brzmi znajomo.</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur p-7 sm:p-9 overflow-hidden hover:bg-white/[0.04] transition-colors"
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/0 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white">
                  <item.icon size={22} strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                <p className="mt-3 text-white/65 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
