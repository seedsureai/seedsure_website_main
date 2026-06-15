import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seedsure.ai"),
  title: "SeedSure AI | Farmer-Centered Decision Support",
  description:
    "SeedSure AI is building farmer-centered tools for seed quality, soil understanding, crop guidance, and agricultural decision support. Starting in Nepal, shaped with partners.",
  keywords: [
    "SeedSure AI",
    "agricultural decision support",
    "food security",
    "smallholder farmers",
    "seed intelligence",
    "soil health",
    "crop guidance",
    "UN SDG 2 zero hunger",
    "UN SDG 1 no poverty",
    "climate action farming",
    "agritech",
    "Nepal farming",
    "global food crisis",
    "farmer decision support",
    "sustainable agriculture"
  ],
  openGraph: {
    title: "SeedSure AI | Farmer-Centered Decision Support",
    description:
      "Farmer-centered tools for seed quality, soil understanding, crop guidance, and agricultural decision support. Starting in Nepal, shaped with partners.",
    url: "https://seedsure.ai",
    siteName: "SeedSure AI",
    images: [
      {
        url: "/images/real/nepal-terraces.jpg",
        width: 2200,
        height: 1467,
        alt: "Terraced agricultural fields in Nepal"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SeedSure AI | Farmer-Centered Decision Support",
    description:
      "Farmer-centered tools for seed quality, soil understanding, crop guidance, and agricultural decision support.",
    images: ["/images/real/nepal-terraces.jpg"]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/images/seedsure-logo-cropped.png",
    apple: "/images/seedsure-logo-cropped.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerifDisplay.variable} font-sans antialiased`}>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}
      </body>
    </html>
  );
}
