import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBookingBar from "@/components/MobileBookingBar";
import { site } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: {
    default: `${site.fullName} — El Nido, Palawan`,
    template: `%s · ${site.name}`,
  },
  description:
    "A small luxury beachfront resort in El Nido, Palawan. White sand, turquoise water, a signature pool villa, and Filipino hospitality at its warmest. Book your island escape.",
  keywords: [
    "El Nido resort",
    "Palawan beach resort",
    "Philippines luxury villa",
    "Dalisay Cove",
    "beachfront suite El Nido",
  ],
  openGraph: {
    title: `${site.fullName} — El Nido, Palawan`,
    description:
      "White sand, turquoise water, and Filipino hospitality at its warmest.",
    type: "website",
    images: ["/images/dalisay-hero.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: site.fullName,
    description: "A private cove, five singular stays, and the warmest welcome in Palawan.",
    images: ["/images/dalisay-hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBookingBar />
      </body>
    </html>
  );
}
