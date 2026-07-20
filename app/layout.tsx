import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { images, site } from "@/lib/amara-data";

const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dalisay-cove-resort.vercel.app"),
  title: { default: `${site.name} — Philippine Mountain Resort`, template: `%s · ${site.name}` },
  description: site.tagline,
  openGraph: { title: site.name, description: site.tagline, images: [images.hero] },
  twitter: { card: "summary_large_image", title: site.name, description: site.tagline, images: [images.hero] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${cormorant.variable} ${manrope.variable}`}><body><Navbar /><main>{children}</main><Footer /></body></html>;
}
