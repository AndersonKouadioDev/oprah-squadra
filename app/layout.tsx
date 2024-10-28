import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const fontTitle = localFont({
  src: "./fonts/Blackpast.ttf",
  variable: "--font-title",
  weight: "100 900",
});

const fontSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
});

const fontMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "OPRAH SQUADRA",
    template: `%s | OPRAH SQUADRA`,
    absolute: "OPRAH SQUADRA",
  },
  // description:
  //   "AGENCE MIRNA, leader de l'immobilier à Abidjan. Spécialistes en vente, location et gestion de biens premium en Côte d'Ivoire. Expertise locale, service personnalisé.",
  // icons: {
  //   icon: "/favicon.ico",
  //   apple: "/apple-icon.png",
  // },
  // referrer: "origin-when-cross-origin",
  // keywords: [
  //   "Immobilier Abidjan",
  //   "Agence immobilière Côte d'Ivoire",
  //   "Vente appartement Abidjan",
  //   "Location maison Cocody",
  //   "Investissement immobilier Côte d'Ivoire",
  //   "Biens de luxe Abidjan",
  //   "Estimation immobilière Abidjan",
  //   "Gestion locative Côte d'Ivoire",
  //   "Programmes neufs Abidjan",
  //   "Terrain à vendre Abidjan",
  //   "Location bureaux Plateau",
  //   "Immobilier commercial Abidjan",
  //   "Résidences haut standing Cocody",
  //   "Appartements meublés Marcory",
  //   "Villas avec piscine Abidjan",
  //   "Immobilier Riviera",
  //   "Loft Plateau",
  //   "Studio étudiant Abidjan",
  //   "Achat maison Bingerville",
  //   "Location longue durée Abidjan",
  //   "Immobilier professionnel Côte d'Ivoire",
  //   "AGENCE MIRNA",
  //   "Expert immobilier Abidjan",
  //   "Agence immobilière de confiance",
  // ],
  // authors: [{ name: "AGENCE MIRNA", url: "https://www.agencemirna.com" }],
  // creator: "AGENCE MIRNA",
  // publisher: "LUNION-LAB",
  // alternates: {
  //   canonical: "https://www.agencemirna.com",
  //   languages: {
  //     "fr-CI": "https://www.agencemirna.com",
  //     "en-US": "https://www.agencemirna.com/en",
  //   },
  // },
  // openGraph: {
  //   type: "website",
  //   locale: "fr_CI",
  //   url: "https://www.agencemirna.com",
  //   siteName: "AGENCE MIRNA",
  //   title: "AGENCE MIRNA - Expert Immobilier à Abidjan, Côte d'Ivoire",
  //   description:
  //     "Découvrez les meilleures offres immobilières à Abidjan avec AGENCE MIRNA. Vente, location et gestion de biens d'exception en Côte d'Ivoire.",
  //   images: [
  //     {
  //       url: "https://www.agencemirna.com/og-image.png",
  //       width: 630,
  //       height: 630,
  //       alt: "AGENCE MIRNA - Votre partenaire immobilier en Côte d'Ivoire",
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@AgenceMirna",
  //   creator: "@AgenceMirna",
  //   title: "AGENCE MIRNA - Expert Immobilier à Abidjan",
  //   description:
  //     "Votre partenaire de confiance pour l'immobilier à Abidjan. Découvrez nos offres exclusives !",
  //   images: ["https://www.agencemirna.com/twitter-image.png"],
  // },
  // viewport: {
  //   width: "device-width",
  //   initialScale: 1,
  //   maximumScale: 1,
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     "max-video-preview": -1,
  //     "max-image-preview": "large",
  //     "max-snippet": -1,
  //   },
  // },
  // category: "Immobilier",
  // verification: {
  //   google:
  //     "google-site-verification=fFyjcvBvLd5IQC3thbjB7iTjZ9vdurwAWMCIyH_O-UE",
  //   yandex: "42c2b5a41dd6bade",
  //   other: {
  //     bing: "0C95FF49E95D55275C93B0A21CA0A039",
  //   },
  // },
  // other: {
  //   "fb:app_id": "1075289994232342",
  //   "og:phone_number": "+225 01 43 483 131",
  //   "og:email": "info@agencemirna.com",
  //   "og:latitude": "5.284599",
  //   "og:longitude": "-3.974556",
  //   "og:street-address":
  //     "Marcory Zone 4, Rue du 7 décembre | Abidjan Côte d'Ivoire",
  //   "og:locality": "Abidjan",
  //   "og:region": "Côte d'Ivoire",
  //   "og:postal-code": "22 BP 1022 Abidjan 22",
  //   "og:country-name": "Côte d'Ivoire",
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${fontTitle.variable}  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
