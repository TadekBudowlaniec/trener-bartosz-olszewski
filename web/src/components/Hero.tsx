"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-red-500/20 via-orange-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur px-3 py-1.5 text-xs font-medium text-white/80 mb-7">
            <span className="grid place-items-center w-5 h-5 rounded-full bg-gradient-to-br from-red-500 to-orange-500">
              <Star size={10} className="fill-white text-white" />
            </span>
            <span>Trener personalny · Wejherowo i okolice</span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] font-black tracking-tight">
            <span className="block">Zbuduj ciało,</span>
            <span className="block">które chciałeś</span>
            <span className="block text-gradient-fire">mieć od lat.</span>
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-white/65 max-w-xl leading-relaxed">
            Trening personalny w Wejherowie. Indywidualny plan, dieta, którą da się
            wytrzymać, i trener, który nie odpuści. Bez ściemy — tylko efekty,
            które widać w lustrze i w lustrze cyfr.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-red-500 to-orange-500 px-7 py-4 text-base font-semibold text-white shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Bezpłatna konsultacja
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#oferta"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur px-7 py-4 text-base font-semibold text-white hover:bg-white/[0.07] transition-colors"
            >
              Zobacz ofertę
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            <Stat value="6+" label="lat doświadczenia" />
            <Stat value="150+" label="metamorfoz" />
            <Stat value="4.9" label="ocena podopiecznych" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-red-500/40 to-orange-500/20 blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
              <Image
                src="/images/trener-hero.jpg"
                alt="Bartosz Olszewski — trener personalny Wejherowo"
                width={900}
                height={1125}
                priority
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-white font-bold text-lg leading-tight">Bartosz Olszewski</div>
                <div className="text-white/70 text-xs uppercase tracking-widest">Certyfikowany trener personalny</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">{value}</div>
      <div className="mt-1 text-xs sm:text-sm text-white/50 leading-tight">{label}</div>
    </div>
  );
}
