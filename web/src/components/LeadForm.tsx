"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CircleCheck, MapPin } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Podaj imię (min. 2 znaki)"),
  phone: z
    .string()
    .min(7, "Podaj numer telefonu")
    .regex(/^[+0-9 \-()]+$/, "Numer może zawierać tylko cyfry i znaki +, -, spację, ()"),
  email: z.string().email("Podaj poprawny adres e-mail").optional().or(z.literal("")),
  goal: z.string().optional(),
  package: z.string().optional(),
  consent: z.literal(true, { message: "Zaznacz zgodę, żeby wysłać formularz" }),
});

type FormValues = z.infer<typeof schema>;

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [errMsg, setErrMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", goal: "", package: "Progres", consent: undefined },
  });

  async function onSubmit(values: FormValues) {
    setStatus("sending");
    setErrMsg(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Coś poszło nie tak. Spróbuj ponownie.");
      }
      setStatus("ok");
      reset();
    } catch (e) {
      setStatus("err");
      setErrMsg(e instanceof Error ? e.message : "Nie udało się wysłać formularza.");
    }
  }

  return (
    <section id="kontakt" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400 mb-4">
              Kontakt
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Zostaw kontakt.<br />
              <span className="text-gradient-fire">Reszta jest moją sprawą.</span>
            </h2>
            <p className="mt-5 text-white/65 text-lg leading-relaxed">
              Oddzwonię w ciągu 24 godzin, umówimy się na bezpłatną konsultację
              i razem ustalimy, czy moja praca pasuje do tego, czego potrzebujesz.
            </p>

            <div className="mt-10">
              <Contact icon={MapPin} label="Lokalizacja" value="Wejherowo, woj. pomorskie" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur p-7 sm:p-10">
              {status === "ok" ? (
                <div className="text-center py-10">
                  <div className="grid place-items-center w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
                    <CircleCheck size={28} />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-white">Dziękuję, mam Twoje dane.</h3>
                  <p className="mt-2 text-white/65 max-w-md mx-auto">
                    Oddzwonię tak szybko, jak tylko skończę aktualny trening — najpóźniej w ciągu 24 godzin.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-7 inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 hover:bg-white/5"
                  >
                    Wyślij kolejne zgłoszenie
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Imię" error={errors.name?.message}>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="np. Tomek"
                        className="input"
                      />
                    </Field>
                    <Field label="Telefon" error={errors.phone?.message}>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+48 ___ ___ ___"
                        className="input"
                      />
                    </Field>
                  </div>

                  <Field label="E-mail (opcjonalnie)" error={errors.email?.message}>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="ty@example.com"
                      className="input"
                    />
                  </Field>

                  <Field label="Interesujący pakiet">
                    <select {...register("package")} className="input">
                      <option value="Start">Start · 1 trening / tydzień</option>
                      <option value="Progres">Progres · 2 treningi / tydzień</option>
                      <option value="Transformacja">Transformacja · 3 treningi / tydzień</option>
                      <option value="Konsultacja">Najpierw bezpłatna konsultacja</option>
                    </select>
                  </Field>

                  <Field label="Twój cel (opcjonalnie)">
                    <textarea
                      {...register("goal")}
                      rows={3}
                      placeholder="Np. chcę zrzucić 10 kg, zbudować masę, wrócić do formy po przerwie..."
                      className="input resize-none"
                    />
                  </Field>

                  <label className="flex items-start gap-3 text-sm text-white/60">
                    <input
                      {...register("consent")}
                      type="checkbox"
                      className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/5 text-red-500 focus:ring-red-500"
                    />
                    <span>
                      Wyrażam zgodę na przetwarzanie moich danych w celu kontaktu w sprawie
                      usług trenera personalnego.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-xs text-red-400 -mt-3">{errors.consent.message}</p>
                  )}

                  {status === "err" && errMsg && (
                    <div className="rounded-xl border border-red-500/40 bg-red-500/10 text-red-200 text-sm px-4 py-3">
                      {errMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || status === "sending"}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-red-500 to-orange-500 px-7 py-4 text-base font-semibold text-white shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Wysyłam..." : "Wyślij zgłoszenie"}
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-xs text-white/40 text-center">
                    Twoje dane trafiają wyłącznie do mnie. Nie odsprzedaję ich nikomu.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          padding: 14px 16px;
          color: white;
          font-size: 15px;
          outline: none;
          transition: border-color 150ms, background 150ms, box-shadow 150ms;
        }
        .input::placeholder { color: rgba(255, 255, 255, 0.35); }
        .input:focus {
          border-color: rgba(239, 68, 68, 0.5);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.12);
        }
        .input:hover { border-color: rgba(255, 255, 255, 0.15); }
        select.input { appearance: none; background-image: linear-gradient(45deg, transparent 50%, rgba(255,255,255,0.6) 50%), linear-gradient(135deg, rgba(255,255,255,0.6) 50%, transparent 50%); background-position: calc(100% - 22px) 22px, calc(100% - 16px) 22px; background-size: 6px 6px, 6px 6px; background-repeat: no-repeat; padding-right: 40px; }
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block mb-2 text-sm font-medium text-white/80">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

function Contact({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrapper = (href ? "a" : "div") as "a" | "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur p-4 hover:bg-white/[0.04] transition-colors"
    >
      <div className="grid place-items-center w-11 h-11 rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-white">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-white/40">{label}</div>
        <div className="text-white font-semibold">{value}</div>
      </div>
    </Wrapper>
  );
}
