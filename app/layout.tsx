import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { site, meta } from "@/content/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Chrome } from "@/components/Chrome";
import { Backdrop } from "@/components/Backdrop";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: meta.homeTitle,
    template: "%s — Abhijit Kumar",
  },
  description: meta.homeDescription,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: `${site.name} — ${site.role}`,
    title: meta.homeTitle,
    description: meta.homeDescription,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.role}. Onboarded a 7th country into a live multi-country Salesforce org.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.homeTitle,
    description: meta.homeDescription,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="min-h-screen antialiased">
        <a href="#main" className="skip">
          Skip to content
        </a>

        {/* Ambient background: slow warm/cool pools, masked hairline grid,
            film grain. Decorative only. */}
        <div className="scene" aria-hidden="true">
          <span className="scene__pool scene__pool--a" />
          <span className="scene__pool scene__pool--b" />
          <span className="scene__pool scene__pool--c" />
          <span className="scene__grid" />
          <Backdrop />
          <span className="scene__grain" />
        </div>

        <div className="progress" aria-hidden="true" />

        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Chrome />
      </body>
    </html>
  );
}
