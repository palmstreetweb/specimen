import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/business";
import { content } from "@/lib/content";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const jbMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  metadataBase: new URL(business.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: content.metadata.title,
    description: content.metadata.description,
    url: business.url,
    siteName: business.name,
    images: [
      { url: content.metadata.ogImage, width: 1200, height: 630, alt: business.name },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.metadata.title,
    description: content.metadata.description,
    images: [content.metadata.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${business.url}/#organization`,
        name: business.name,
        url: business.url,
        logo: { "@type": "ImageObject", url: `${business.url}/icon.png`, caption: business.name },
        sameAs: business.socials.map((s) => s.href),
      },
      {
        "@type": "LocalBusiness",
        "@id": `${business.url}/#localbusiness`,
        name: business.name,
        description: content.metadata.description,
        url: business.url,
        telephone: business.phone,
        address: { "@type": "PostalAddress", streetAddress: business.address },
        image: `${business.url}/opengraph-image`,
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrument.variable} ${jbMono.variable} h-full antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">{children}</body>
    </html>
  );
}
