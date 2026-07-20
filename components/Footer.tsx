import Link from "next/link";
import { ArrowUpRight, Camera, Mail, MapPin, Mountain, Phone } from "lucide-react";
import { navItems, site } from "@/lib/amara-data";

export default function Footer() {
  return (
    <footer className="bg-pine-black text-soft-white">
      <div className="border-b border-white/10 px-5 py-14 text-center lg:px-10 lg:py-20">
        <p className="eyebrow justify-center text-ember">The ridge is waiting</p>
        <p className="mx-auto mt-6 max-w-4xl font-display text-4xl leading-[.95] sm:text-6xl lg:text-7xl">Come up for air. Leave with more of it.</p>
        <Link href="/booking" className="mt-8 inline-flex items-center gap-3 bg-ember px-7 py-4 text-[10px] font-bold uppercase tracking-[.18em] text-pine-black transition-colors hover:bg-soft-white">Plan your stay <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
      <div className="mx-auto max-w-[100rem] px-5 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_.8fr_.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3"><Mountain className="h-8 w-8 stroke-[1.25] text-ember" /><span className="font-display text-3xl tracking-[.12em]">AMARA RIDGE</span></Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/55">A private mountain sanctuary shaped by Filipino warmth, Cordillera weather and the restorative luxury of quiet.</p>
            <p className="mt-6 text-[9px] uppercase tracking-[.2em] text-white/35">A fictional hospitality concept · Philippines</p>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[.23em] text-ember">Discover</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/65">
              {navItems.map(([label, href]) => <li key={href}><Link href={href} className="hover:text-white">{label}</Link></li>)}
              <li><Link href="/about" className="hover:text-white">About</Link></li><li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[.23em] text-ember">Concierge</p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/60">
              <li className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-ember" />{site.address}</li>
              <li><a className="flex gap-3 hover:text-white" href={`tel:${site.phone.replace(/\s/g, "")}`}><Phone className="h-4 w-4 text-ember" />{site.phone}</a></li>
              <li><a className="flex gap-3 hover:text-white" href={`mailto:${site.email}`}><Mail className="h-4 w-4 text-ember" />{site.email}</a></li>
              <li><a className="flex gap-3 hover:text-white" href="https://instagram.com" target="_blank" rel="noreferrer"><Camera className="h-4 w-4 text-ember" />Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[8px] uppercase tracking-[.18em] text-white/35 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Amara Ridge</p><p>Privacy · Terms · Guest policies</p><p>Made with care in the Philippines</p>
        </div>
      </div>
    </footer>
  );
}
