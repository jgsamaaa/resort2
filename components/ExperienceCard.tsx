import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ExperienceCard({ item }: { item: { name: string; category: string; description: string; image: string } }) {
  return <article className="group"><div className="relative aspect-[4/5] overflow-hidden bg-deep-forest"><Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" /><span className="absolute inset-0 bg-gradient-to-t from-pine-black/80 via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 text-white"><p className="text-[9px] font-bold uppercase tracking-[.2em] text-ember">{item.category}</p><h3 className="mt-2 font-display text-3xl">{item.name}</h3></div></div><div className="flex items-start gap-5 border-b border-pine-black/15 py-5"><div><p className="text-sm leading-6 text-pine-black/60">{item.description}</p><Link href="/booking" className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.16em]">Add to your stay <ArrowUpRight className="h-3.5 w-3.5"/></Link></div></div></article>;
}
