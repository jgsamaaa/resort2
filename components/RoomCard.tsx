import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BedDouble, Eye, Maximize, Users } from "lucide-react";
import type { Room } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function RoomCard({ room, index = 0 }: { room: Room; index?: number }) {
  const accent = index % 3 === 0 ? "bg-[#dfff55]" : index % 3 === 1 ? "bg-gold-500" : "bg-ocean-500 text-white";
  return (
    <Reveal direction={index % 2 ? "right" : "left"}>
      <article className="grid overflow-hidden border-2 border-ocean-950 bg-sand-50 sticker-shadow lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative min-h-[330px] border-b-2 border-ocean-950 lg:min-h-[520px] lg:border-b-0 lg:border-r-2">
          <Image src={room.image} alt={room.name} fill sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover" />
          <span className={`absolute left-4 top-4 border-2 border-ocean-950 px-4 py-2 text-[10px] font-black uppercase tracking-[.16em] sticker-shadow-sm ${accent}`}>0{index + 1} / {room.kind}</span>
        </div>
        <div className="flex flex-col p-6 sm:p-9 lg:p-11">
          <p className="text-[9px] font-black uppercase tracking-[.2em] text-ocean-500">{room.view}</p>
          <h3 className="mt-3 font-display text-6xl leading-[.82] tracking-wide text-ocean-950 sm:text-7xl">{room.name}</h3>
          <p className="mt-6 text-sm font-medium leading-7 text-ocean-950/65">{room.description}</p>
          <dl className="mt-7 grid grid-cols-2 border-l-2 border-t-2 border-ocean-950 text-xs font-bold">
            {[[Users, `UP TO ${room.guests}`], [Maximize, room.size.toUpperCase()], [BedDouble, room.bed.toUpperCase()], [Eye, room.view.toUpperCase()]].map(([Icon, label]) => {
              const DetailIcon = Icon as typeof Users;
              return <div key={String(label)} className="flex min-h-16 items-center gap-3 border-b-2 border-r-2 border-ocean-950 p-3"><DetailIcon className="h-4 w-4 shrink-0 text-ocean-500" strokeWidth={2.5} /><span>{String(label)}</span></div>;
            })}
          </dl>
          <div className="mt-auto flex flex-col justify-between gap-5 pt-8 sm:flex-row sm:items-end">
            <div><p className="text-[9px] font-black uppercase tracking-[.18em] text-ocean-950/45">Direct from</p><p className="font-display text-5xl text-ocean-500">₱{room.pricePHP.toLocaleString()}<span className="font-sans text-xs font-bold text-ocean-950"> / NIGHT</span></p></div>
            <Link href={`/booking?room=${room.slug}`} className="flex items-center justify-center gap-2 border-2 border-ocean-950 bg-gold-500 px-5 py-4 text-[10px] font-black uppercase tracking-[.14em] transition-colors hover:bg-[#dfff55] sticker-shadow-sm">BOOK THIS ONE <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
