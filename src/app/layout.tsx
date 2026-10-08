import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Public_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallBar } from "@/components/layout/StickyCallBar";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { businessInfo } from "@/lib/content/business";
import { siteUrl } from "@/lib/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Plombier chauffagiste Montpellier, Lattes | Devarenne",
    template: "%s | Devarenne",
  },
  description: `Fuite, WC bouché, chauffe-eau en panne, salle de bains ? ${businessInfo.ownerName}, plombier chauffagiste à Montpellier et alentours depuis ${businessInfo.foundingYear}. Appelez le ${businessInfo.phone}.`,
  alternates: { canonical: "/" },
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
      className={`${archivo.variable} ${publicSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <LocalBusinessJsonLd />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-3 focus:font-semibold focus:text-foreground focus:shadow-lg"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu" tabIndex={-1} className="flex-1 pb-16 outline-none sm:pb-0">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
