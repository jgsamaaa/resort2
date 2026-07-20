import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/BrandIcons";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ocean-950 bg-ocean-500 pb-24 text-white md:pb-0">
      <div className="overflow-hidden border-b-2 border-ocean-950 bg-gold-500 py-3 text-ocean-950">
        <div className="animate-ticker flex w-max whitespace-nowrap font-display text-3xl tracking-wide">
          {[...Array(2)].map((_,group)=><span key={group}>{["BOOK THE FLIGHT","PACK LESS","SWIM MORE","STAY LONGER"].map(item=><span key={`${group}-${item}`} className="mx-8">✦ {item}</span>)}</span>)}
        </div>
      </div>
      <div className="mx-auto max-w-[90rem] px-5 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr_.8fr]">
          <div>
            <p className="font-display text-[clamp(5rem,11vw,10rem)] leading-[.72] tracking-wide">DALISAY!</p>
            <p className="mt-7 max-w-lg text-sm font-medium leading-7 text-white/65">Thirteen stays. One ridiculous cove. Filipino hospitality with the volume turned all the way up.</p>
            <Link href="/booking" className="mt-7 inline-flex items-center gap-3 border-2 border-ocean-950 bg-[#dfff55] px-6 py-4 text-[10px] font-black uppercase tracking-[.15em] text-ocean-950 sticker-shadow-sm">BOOK THE BEACH <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <div>
            <p className="text-[9px] font-black uppercase tracking-[.2em] text-[#dfff55]">EXPLORE</p>
            <ul className="mt-5 space-y-3 font-display text-3xl tracking-wide">
              {[["STAYS","/rooms"],["OUR STORY","/about"],["GET HERE","/location"],["BOOKING","/booking"],["CONTACT","/contact"]].map(([label,href])=><li key={href}><Link href={href} className="transition-colors hover:text-gold-300">{label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="text-[9px] font-black uppercase tracking-[.2em] text-[#dfff55]">FIND US</p>
            <ul className="mt-5 space-y-5 text-xs font-medium leading-6 text-white/70">
              <li className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-300" />{site.address}</li>
              <li><a href={`tel:${site.phone.replace(/\s/g,"")}`} className="flex gap-3 hover:text-white"><Phone className="h-4 w-4 text-gold-300" />{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="flex gap-3 hover:text-white"><Mail className="h-4 w-4 text-gold-300" />{site.email}</a></li>
              <li><a href={`https://instagram.com/${site.instagram.replace("@","")}`} className="flex gap-3 hover:text-white"><InstagramIcon className="h-4 w-4 text-gold-300" />{site.instagram}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t-2 border-white/20 pt-5 text-[8px] font-black uppercase tracking-[.16em] text-white/45 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} DALISAY COVE</p><p>EL NIDO · PALAWAN · PHILIPPINES</p><p>FICTIONAL DEMO RESORT</p></div>
      </div>
    </footer>
  );
}
