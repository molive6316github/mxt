import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import { studio } from "@/content/mxt";

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--f-display",
  adjustFontFallback: false,
  fallback: ["Arial Narrow", "sans-serif"],
  display: "swap",
});
const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--f-sans",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--f-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(studio.url),
  title: {
    default: `${studio.name} — we build cool shit`,
    template: `%s — ${studio.name}`,
  },
  description: studio.description,
  applicationName: studio.name,
  keywords: [
    "MXT Productions",
    "web agency",
    "small business websites",
    "GateKey",
    "Grraphic",
    "Rootweave",
    "animation studio",
    "music label",
    "molive6316",
    "Arq",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: studio.url,
    siteName: studio.name,
    title: `${studio.name} — we build cool shit`,
    description: studio.oneLiner,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${studio.name} — we build cool shit`,
    description: studio.oneLiner,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c0b09" },
    { media: "(prefers-color-scheme: light)", color: "#efe9dc" },
  ],
};

// Runs before paint so a saved light-mode choice never flashes dark first.
const themeScript = `try{if(localStorage.getItem("mxt-theme")==="light")document.documentElement.classList.add("light")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh overflow-x-clip">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <div className="grain" aria-hidden="true" />
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
