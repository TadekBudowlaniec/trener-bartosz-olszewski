import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  name: z.string().min(2).max(120),
  phone: z.string().min(7).max(40),
  email: z.string().email().max(160).optional().or(z.literal("")),
  goal: z.string().max(2000).optional(),
  package: z.string().max(80).optional(),
  consent: z.literal(true),
});

const ZAPIER_HOOK = process.env.ZAPIER_HOOK_URL;

export async function POST(req: NextRequest) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Nieprawidłowe dane" }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Sprawdź wprowadzone dane", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const meta = {
    ip:
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      null,
    user_agent: req.headers.get("user-agent") ?? null,
    referer: req.headers.get("referer") ?? null,
  };

  const lead = {
    name: data.name.trim(),
    phone: data.phone.trim(),
    email: data.email?.trim() || null,
    goal: data.goal?.trim() || null,
    package: data.package?.trim() || null,
    source: "trener-olszewski.pl",
    created_at: new Date().toISOString(),
    ...meta,
  };

  const supabase = getSupabaseAdmin();
  let supabaseOk = false;
  if (supabase) {
    const { error } = await supabase.from("leads").insert(lead);
    if (error) {
      console.error("[lead] supabase error:", error.message);
    } else {
      supabaseOk = true;
    }
  } else {
    console.warn("[lead] Supabase not configured — pomijam zapis do bazy");
  }

  if (ZAPIER_HOOK) {
    fetch(ZAPIER_HOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    }).catch((e) => console.error("[lead] zapier error:", e));
  } else {
    console.warn("[lead] ZAPIER_HOOK_URL not configured — pomijam webhook");
  }

  return NextResponse.json({ ok: true, stored: supabaseOk });
}
