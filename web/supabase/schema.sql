-- Tabela leads dla strony trener-olszewski.pl
-- Uruchom w Supabase SQL Editor.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  goal text,
  package text,
  source text,
  ip text,
  user_agent text,
  referer text,
  created_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- RLS — zapis wyłącznie przez service role (nasz backend).
alter table public.leads enable row level security;
revoke all on table public.leads from anon;
revoke all on table public.leads from authenticated;
