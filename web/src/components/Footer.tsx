export function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 grid sm:grid-cols-2 gap-6 items-center">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-white font-black text-sm">
            BO
          </span>
          <div>
            <div className="text-white font-semibold">Bartosz Olszewski</div>
            <div className="text-xs text-white/45 uppercase tracking-widest">
              Trener personalny · Wejherowo
            </div>
          </div>
        </div>
        <div className="sm:text-right text-sm text-white/50">
          © {new Date().getFullYear()} Bartosz Olszewski. Wszystkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
