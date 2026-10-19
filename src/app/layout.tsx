import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_URL, absoluteUrl, site } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "mobile accessories Pandharpur",
    "mobile chargers and cables",
    "wireless earbuds",
    "phone covers and power banks",
    "smartwatches",
    site.name,
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: absoluteUrl("/"),
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "ecommerce",
  formatDetection: { telephone: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#c2343a",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Only emit fields the business has actually filled in.
  const organisationLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: site.name,
    ...(site.legalName ? { legalName: site.legalName } : {}),
    url: absoluteUrl("/"),
    description: site.description,
    areaServed: site.country,
    ...(site.contact.email ? { email: site.contact.email } : {}),
    ...(site.contact.phone ? { telephone: site.contact.phone } : {}),
    ...(site.contact.address.line1
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: [site.contact.address.line1, site.contact.address.line2].filter(Boolean).join(", "),
            addressLocality: site.contact.address.city,
            addressRegion: site.contact.address.state,
            postalCode: site.contact.address.pincode,
            addressCountry: "IN",
          },
        }
      : {}),
  };

  return (
    <html lang="en-IN" className={GeistSans.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationLd) }}
        />
      </body>
    </html>
  );
}
