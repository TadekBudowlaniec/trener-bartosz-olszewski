export function Marquee() {
  const items = [
    "TRENING PERSONALNY",
    "REDUKCJA",
    "BUDOWA MASY",
    "DIETA",
    "MOTYWACJA",
    "WEJHEROWO",
    "PLAN INDYWIDUALNY",
    "EFEKTY",
  ];
  const doubled = [...items, ...items];
  return (
    <section className="relative py-8 border-y border-white/5 bg-black/40 overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {doubled.map((t, i) => (
          <div key={i} className="flex items-center gap-8 px-6">
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-white/80">
              {t}
            </span>
            <span className="w-2 h-2 rounded-full bg-gradient-to-br from-red-500 to-orange-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
