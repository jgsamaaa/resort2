import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BedDouble, Users } from "lucide-react";
import type { Stay } from "@/lib/amara-data";

export default function StayCard({ stay }: { stay: Stay }) {
  return (
    <article className="group bg-soft-white">
      <Link href={`/stays/${stay.slug}`} className="relative block aspect-[4/3] overflow-hidden"><Image src={stay.image} alt={stay.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" /><span className="absolute inset-0 bg-gradient-to-t from-pine-black/35 to-transparent" /></Link>
      <div className="p-6 sm:p-8">
        <p className="text-[9px] font-bold uppercase tracking-[.2em] text-clay">{stay.eyebrow}</p>
        <h3 className="mt-3 font-display text-4xl leading-none">{stay.name}</h3>
        <p className="mt-4 text-sm leading-6 text-pine-black/60">{stay.short}</p>
        <div className="mt-5 flex flex-wrap gap-4 text-[10px] font-semibold uppercase tracking-[.1em] text-pine-black/55"><span className="flex items-center gap-2"><Users className="h-3.5 w-3.5" />Sleeps {stay.sleeps}</span><span className="flex items-center gap-2"><BedDouble className="h-3.5 w-3.5" />{stay.bestFor}</span></div>
        <Link href={`/stays/${stay.slug}`} className="mt-7 inline-flex items-center gap-2 border-b border-pine-black pb-1 text-[10px] font-bold uppercase tracking-[.18em]">Explore the villa <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
    </article>
  );
}
