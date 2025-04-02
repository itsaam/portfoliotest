import type { Metadata } from "next";
import type React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samy Abdelmalek | Développeur Junior",
  description:
    "Portfolio de Samy Abdelmalek, développeur junior passionné par la création d'applications web performantes et innovantes.",
  metadataBase: new URL("https://samyabdelmalek.fr"),
  openGraph: {
    title: "Samy Abdelmalek | Développeur Junior",
    description:
      "Portfolio de Samy Abdelmalek, développeur junior passionné par la création d'applications web performantes et innovantes.",
    url: "https://samyabdelmalek.fr",
    siteName: "Portfolio de Samy Abdelmalek",
    images: [
      {
        url: "/icons/main.png",
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Samy Abdelmalek",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samy Abdelmalek | Développeur Junior",
    description:
      "Portfolio de Samy Abdelmalek, développeur junior passionné par la création d'applications web performantes et innovantes.",
    images: ["/icons/main.png"],
    creator: "@votre_twitter",
  },
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className="scroll-smooth"
      style={{ fontFamily: '"Satoshi", system-ui, sans-serif' }}
      suppressHydrationWarning
    >
      <head />
      <body
        className="min-h-screen bg-background antialiased"
        style={{ fontFamily: '"Satoshi", system-ui, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
