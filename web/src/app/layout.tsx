import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bartosz Olszewski — Trener personalny Wejherowo",
  description:
    "Trener personalny w Wejherowie. Spalisz tłuszcz, zbudujesz siłę i nawyki, których wcześniej nie miałeś. Plan szyty na miarę, bez ściemy.",
  keywords: [
    "trener personalny Wejherowo",
    "trening personalny Wejherowo",
    "trener Bartosz Olszewski",
    "metamorfoza Wejherowo",
    "redukcja Wejherowo",
    "siłownia Wejherowo",
  ],
  openGraph: {
    title: "Bartosz Olszewski — Trener personalny Wejherowo",
    description:
      "Indywidualny plan treningowy i żywieniowy w Wejherowie. Sprawdzone metamorfozy, jasne zasady, realne efekty.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${display.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
