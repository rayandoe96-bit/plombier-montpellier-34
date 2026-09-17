import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallBar } from "@/components/layout/StickyCallBar";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { businessInfo } from "@/lib/content/business";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${businessInfo.tradeName} — Dépannage plomberie`,
    template: `%s — ${businessInfo.tradeName}`,
  },
  description:
    "Dépannage plomberie à Montpellier, Lattes, Carnon, Palavas-les-Flots et La Grande-Motte : débouchage, hydrocurage, recherche de fuite.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1 pb-16 sm:pb-0">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
