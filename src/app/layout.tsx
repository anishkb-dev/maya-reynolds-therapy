import type { Metadata } from "next";
import { Newsreader, Mulish } from "next/font/google";
import "./globals.css";

// Original uses Beaufort Pro (Adobe Fonts, paid) + Muli.
// Newsreader is the closest free transitional serif with a real 300 weight;
// Mulish is Muli, renamed on Google Fonts.
// Both are variable fonts, so no `weight` — every weight comes with them.
// Passing a weight array makes Turbopack emit multiple font entries it
// can't resolve ("queries have exactly one entry"), which builds fine on
// webpack locally and fails on Vercel.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://maya-reynolds-therapy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
    template: "%s | Dr. Maya Reynolds, PsyD",
  },
  description:
    "Therapy for anxiety, panic, trauma and burnout in Santa Monica, CA. In-person sessions and telehealth across California with Dr. Maya Reynolds, PsyD.",
  alternates: { canonical: "./" },
  openGraph: {
    title: "Anxiety & Trauma Therapist in Santa Monica, CA",
    description:
      "Therapy for anxiety, panic, trauma and burnout. In person in Santa Monica, or online across California.",
    url: "./",
    siteName: "Dr. Maya Reynolds, PsyD",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${mulish.variable}`}>
      <body>{children}</body>
    </html>
  );
}
