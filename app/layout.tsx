import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBookingBar from "@/components/MobileBookingBar";
import { site } from "@/lib/data";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dalisay-cove-resort.vercel.app"),
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
    images: ["/images/dalisay-aerial-v2.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: site.fullName,
    description: "A private cove, five singular stays, and the warmest welcome in Palawan.",
    images: ["/images/dalisay-aerial-v2.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bebas.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBookingBar />
      </body>
    </html>
  );
}
