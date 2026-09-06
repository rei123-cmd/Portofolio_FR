import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Filbert Rei — AI Prompt Engineer & Full Stack Developer",
    template: "%s — Filbert Rei",
  },
  description:
    "I build AI-powered applications and interactive interfaces that combine thoughtful design with scalable engineering.",
  keywords: [
    "AI Prompt Engineer",
    "Full Stack Developer",
    "Creative Technologist",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Filbert Rei" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Filbert Rei — Portfolio",
    title: "Filbert Rei — AI Prompt Engineer & Full Stack Developer",
    description:
      "I build AI-powered applications and interactive interfaces that combine thoughtful design with scalable engineering.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Filbert Rei — AI Prompt Engineer & Full Stack Developer",
    description:
      "I build AI-powered applications and interactive interfaces that combine thoughtful design with scalable engineering.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#090D18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
