import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallBar } from "@/components/layout/StickyCallBar";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { businessInfo } from "@/lib/content/business";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${businessInfo.tradeName} — Plombier chauffagiste à ${businessInfo.city}`,
    template: `%s — ${businessInfo.tradeName}`,
  },
  description: `${businessInfo.ownerName}, plombier chauffagiste à ${businessInfo.city} depuis ${businessInfo.foundingYear} : dépannage, recherche de fuite, chauffe-eau et sanitaires à Lattes, Montpellier, Carnon, Palavas-les-Flots et La Grande-Motte.`,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: businessInfo.tradeName,
  },
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
