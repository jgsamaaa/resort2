import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, Shell } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/BrandIcons";
import { site } from "@/lib/data";

const footerLinks = [
  ["Rooms & rates", "/rooms"],
  ["Our story", "/about"],
  ["Find us", "/location"],
  ["Book a stay", "/booking"],
  ["Inquiries", "/contact"],
];

export default function Footer() {
  return (
    <footer className="bg-ocean-950 pb-24 text-sand-100 md:pb-0">
      <div className="mx-auto max-w-[90rem] px-5 pb-14 pt-20 lg:px-10 lg:pt-24">
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-14 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-300/40">
                <Shell className="h-5 w-5 text-gold-300" strokeWidth={1.35} />
              </span>
              <div>
                <p className="font-display text-3xl">{site.name}</p>
                <p className="mt-1 text-[8px] font-semibold uppercase tracking-[.32em] text-sand-100/45">Beach resort & villas</p>
              </div>
            </div>
            <p className="mt-7 max-w-lg font-display text-3xl leading-tight text-sand-50/90 sm:text-4xl">
              Where the island <span className="italic text-gold-300">breathes.</span>
            </p>
          </div>
          <div className="flex gap-3">
            <a href={`https://${site.facebook}`} target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sand-100 transition-colors hover:border-gold-300 hover:text-gold-300"><FacebookIcon className="h-4 w-4" /></a>
            <a href={`https://instagram.com/${site.instagram.replace("@", "")}`} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sand-100 transition-colors hover:border-gold-300 hover:text-gold-300"><InstagramIcon className="h-4 w-4" /></a>
          </div>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_1fr]">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[.24em] text-gold-300">Come find us</p>
            <ul className="mt-6 max-w-md space-y-4 text-sm leading-6 text-sand-100/65">
              <li className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-400" />{site.address}</li>
              <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex gap-3 transition-colors hover:text-gold-300"><Phone className="mt-1 h-4 w-4 shrink-0 text-gold-400" />{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="flex gap-3 transition-colors hover:text-gold-300"><Mail className="mt-1 h-4 w-4 shrink-0 text-gold-400" />{site.email}</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[.24em] text-gold-300">Explore</p>
            <ul className="mt-5 space-y-3">
              {footerLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="group inline-flex items-center gap-2 text-sm text-sand-100/65 transition-colors hover:text-gold-300">
                    {label}<ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[.24em] text-gold-300">Island letters</p>
            <p className="mt-5 max-w-sm text-sm leading-6 text-sand-100/60">Occasional offers, local secrets, and sunsets worth opening.</p>
            <form action="/contact" className="mt-6 flex border-b border-white/20 pb-2">
              <input type="email" name="email" required placeholder="Your email address" aria-label="Email address" className="min-w-0 flex-1 bg-transparent py-2 text-sm text-sand-50 outline-none placeholder:text-sand-100/35" />
              <button type="submit" aria-label="Join newsletter" className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-ocean-950 transition-colors hover:bg-gold-300"><ArrowUpRight className="h-4 w-4" /></button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[.16em] text-sand-100/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.fullName}</p>
          <p>El Nido · Palawan · Philippines</p>
          <p>Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
}
